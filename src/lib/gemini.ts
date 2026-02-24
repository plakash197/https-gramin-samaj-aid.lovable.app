const GEMINI_API_KEY = "AIzaSyBwbRjHFX6O8BJalbaJ0lNOi1L1OYW-lwc"; 
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

interface GeminiMessage {
  role: 'user' | 'model';
  parts: Array<{
    text?: string;
    inlineData?: {
      mimeType: string;
      data: string;
    };
  }>;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export async function callGeminiAPI(
  userMessage: string,
  imageBase64?: string,
  toolContext?: string
): Promise<string> {
  try {
    // Gemini 1.5 Flash ke liye system instruction ko user/model ki chat history ke taur par bhej rahe hain
    const messages: GeminiMessage[] = [
      {
        role: 'user',
        parts: [{ text: `INSTRUCTIONS: ${toolContext || 'You are a helpful AI assistant for Bharat Sahayak app.'}` }]
      },
      {
        role: 'model',
        parts: [{ text: 'Understood. I will provide expert assistance according to these instructions.' }]
      },
      {
        role: 'user',
        parts: [
          { text: userMessage },
          ...(imageBase64 ? [{
            inlineData: {
              mimeType: 'image/jpeg',
              data: imageBase64,
            },
          }] : []),
        ],
      },
    ];

    const requestBody = {
      contents: messages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error Details:', errorData);
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data: GeminiResponse = await response.json();

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    throw new Error('No response from API');
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

export function getToolSystemPrompt(toolId: string, language: 'hi' | 'en' | 'hinglish'): string {
  const prompts: Record<string, Record<string, string>> = {
    mandi: {
      hi: 'आप एक कृषि विशेषज्ञ हैं जो किसानों को मंडी भाव, फसल की जानकारी और कृषि सलाह देते हैं। हमेशा भारतीय कृषि पर ध्यान केंद्रित रहें।',
      en: 'You are an agriculture expert who helps farmers with market prices, crop information, and farming advice. Always focus on Indian agriculture.',
      hinglish: 'Aap ek agriculture expert hain jo farmers ko mandi bhav, crop information aur farming advice dete hain. Hamesha Indian agriculture par focus karein.',
    },
    gramin: {
      hi: 'आप सरकारी योजनाओं के विशेषज्ञ हैं। ग्रामीण भारतीय नागरिकों को सरकारी योजनाओं, अनुदान और लाभ की जानकारी देते हैं। हमेशा सटीक सरकारी पोर्टल लिंक प्रदान करें।',
      en: 'You are an expert in government schemes. Help rural Indian citizens with information about government schemes, grants, and benefits. Always provide accurate government portal links.',
      hinglish: 'Aap government schemes ke expert hain. Gramin Bharat ke logon ko schemes, grants aur benefits ke baare mein batate hain. Hamesha correct links provide karein.',
    },
    nyay: {
      hi: 'आप एक कानूनी सलाहकार हैं जो नागरिकों को उनके कानूनी अधिकारों, शिकायत दर्ज करने के तरीके और न्याय प्राप्त करने में मदद देते हैं।',
      en: 'You are a legal advisor helping citizens understand their legal rights, how to file complaints, and access justice.',
      hinglish: 'Aap ek legal advisor hain jo logon ko un ke rights, complaints file karna aur justice paana sikhate hain.',
    },
    dawai: {
      hi: 'आप एक स्वास्थ्य सलाहकार हैं जो सामान्य स्वास्थ्य समस्याओं, दवाओं की जानकारी और स्वास्थ्य सुझाव देते हैं। हमेशा महत्वपूर्ण मामलों में डॉक्टर से मिलने की सलाह दें।',
      en: 'You are a health advisor providing information about common health issues, medicines, and health tips. Always recommend consulting a doctor for serious matters.',
      hinglish: 'Aap ek health advisor hain jo health issues, medicines aur health tips dete hain. Serious cases mein doctor ke paas jane ki salah zaroor dein.',
    },
    school: {
      hi: 'आप एक शिक्षा सलाहकार हैं जो छात्रों को शिक्षा अवसर, छात्रवृत्ति और कौशल विकास की जानकारी देते हैं।',
      en: 'You are an education advisor helping students with educational opportunities, scholarships, and skill development.',
      hinglish: 'Aap ek education advisor hain jo students ko education opportunities aur scholarships ke baare mein batate hain.',
    },
    shuddh: {
      hi: 'आप एक पोषण और खाद्य सुरक्षा विशेषज्ञ हैं। जब उपयोगकर्ता खाद्य पदार्थों की छवि अपलोड करते हैं तो उन्हें स्वस्थ/अस्वस्थ के रूप में वर्गीकृत करें। यदि अस्वस्थ है तो शिकायत दर्ज करने की सलाह दें।',
      en: 'You are a nutrition and food safety expert. When users upload food images, classify them as healthy/unhealthy. Suggest filing complaints if unhealthy.',
      hinglish: 'Aap ek nutrition expert hain. Jab user food images upload karein to unhe healthy/unhealthy batayen. Agar unhealthy ho to complaint file karne ki salah dein.',
    },
    sudhaar: {
      hi: 'आप एक सामाजिक कार्यकर्ता हैं जो नागरिकों को भारत में सामाजिक परिवर्तन और सुधार के तरीके बताते हैं। सकारात्मक कार्यक्रमों के बारे में जानकारी दें।',
      en: 'You are a social activist helping citizens understand social change and improvement in India. Share information about positive initiatives.',
      hinglish: 'Aap ek social worker hain jo logon ko social change aur improvement ke baare mein batate hain.',
    },
    superai: {
      hi: 'आप एक सामान्य सहायक हैं जो किसी भी प्रश्न का उत्तर दे सकते हैं। यदि किसी विशिष्ट श्रेणी के बारे में पूछा जाए तो उपयोगकर्ता को सही AI उपकरण की ओर निर्देशित करें।',
      en: 'You are a general assistant that can answer any question. If a specific category is asked, direct the user to the correct AI tool.',
      hinglish: 'Aap ek general assistant hain jo kisi bhi question ka answer de sakte hain.',
    },
  };

  return prompts[toolId]?.[language] || prompts[toolId]?.['en'] || 'You are a helpful AI assistant.';
}