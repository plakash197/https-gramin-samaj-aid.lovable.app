export const toolsConfig = {
  mandi: {
    hi: {
      name: 'मंडी भाव',
      purpose: 'मंडी भाव आपको ताज़ा फसलों के दाम बताता है। आप किसी भी फसल का आज का भाव, कल का भाव, या आने वाले दिनों की कीमत जान सकते हैं।',
      examples: ['आलू का भाव क्या है?', 'गेहूं का आज का दाम', 'टमाटर की कीमत'],
      keywords: ['मंडी', 'भाव', 'फसल', 'दाम', 'कीमत', 'सब्जी', 'अनाज', 'market', 'price', 'crop'],
    },
    en: {
      name: 'Mandi Bhav',
      purpose: 'Mandi Bhav tells you the prices of fresh crops. You can check today\'s price, yesterday\'s price, or upcoming prices of any crop.',
      examples: ['What is the price of potatoes?', 'Today\'s wheat price', 'Tomato cost'],
      keywords: ['mandi', 'price', 'crop', 'cost', 'vegetable', 'grain', 'market'],
    },
    hasCamera: false,
  },
  gramin: {
    hi: {
      name: 'ग्रामीण सहायता',
      purpose: 'ग्रामीण सहायता गाँव के लोगों के लिए सरकारी योजनाएं, सब्सिडी, और मदद की जानकारी देता है।',
      examples: ['किसान योजना क्या है?', 'PM किसान सम्मान निधि', 'सब्सिडी कैसे मिलेगी'],
      keywords: ['ग्रामीण', 'योजना', 'सब्सिडी', 'किसान', 'गाँव', 'rural', 'scheme', 'subsidy', 'village'],
    },
    en: {
      name: 'Gramin Sahayata',
      purpose: 'Gramin Sahayata provides information about government schemes, subsidies, and help for rural people.',
      examples: ['What is farmer scheme?', 'PM Kisan Samman Nidhi', 'How to get subsidy'],
      keywords: ['rural', 'scheme', 'subsidy', 'farmer', 'village'],
    },
    hasCamera: false,
  },
  nyay: {
    hi: {
      name: 'न्याय सहायक',
      purpose: 'न्याय सहायक आपको कानूनी सलाह, अधिकार, और न्याय पाने के तरीके बताता है।',
      examples: ['मेरे अधिकार क्या हैं?', 'FIR कैसे करें', 'उपभोक्ता शिकायत'],
      keywords: ['न्याय', 'कानून', 'अधिकार', 'FIR', 'शिकायत', 'justice', 'law', 'rights', 'complaint'],
    },
    en: {
      name: 'Nyay Sahayak',
      purpose: 'Nyay Sahayak provides legal advice, information about rights, and ways to get justice.',
      examples: ['What are my rights?', 'How to file FIR', 'Consumer complaint'],
      keywords: ['justice', 'law', 'rights', 'complaint', 'legal'],
    },
    hasCamera: false,
  },
  dawai: {
    hi: {
      name: 'दवाई मदद',
      purpose: 'दवाई मदद आपको दवाइयों की जानकारी, उपयोग, और सस्ती जेनेरिक दवाओं के बारे में बताता है।',
      examples: ['पेरासिटामोल कब लें?', 'बुखार की दवा', 'जेनेरिक दवा क्या है'],
      keywords: ['दवाई', 'दवा', 'medicine', 'drug', 'tablet', 'जेनेरिक', 'generic', 'बुखार', 'fever'],
    },
    en: {
      name: 'Dawai Madad',
      purpose: 'Dawai Madad provides information about medicines, usage, and affordable generic drugs.',
      examples: ['When to take Paracetamol?', 'Fever medicine', 'What is generic drug'],
      keywords: ['medicine', 'drug', 'tablet', 'generic', 'fever'],
    },
    hasCamera: false,
  },
  school: {
    hi: {
      name: 'स्कूल साथी',
      purpose: 'स्कूल साथी आपके होमवर्क और पढ़ाई में मदद करता है। आप सवाल की फोटो भी भेज सकते हैं।',
      examples: ['गणित का सवाल हल करो', 'विज्ञान में मदद चाहिए', 'निबंध कैसे लिखें'],
      keywords: ['होमवर्क', 'homework', 'पढ़ाई', 'study', 'गणित', 'math', 'विज्ञान', 'science', 'school'],
    },
    en: {
      name: 'School Saathi',
      purpose: 'School Saathi helps with your homework and studies. You can also send photos of questions.',
      examples: ['Solve math problem', 'Need help in science', 'How to write essay'],
      keywords: ['homework', 'study', 'math', 'science', 'school', 'education'],
    },
    hasCamera: true,
  },
  shuddh: {
    hi: {
      name: 'शुद्ध परख',
      purpose: 'शुद्ध परख खाने-पीने की चीज़ों में मिलावट की जांच में मदद करता है। आप फोटो भेजकर जांच करवा सकते हैं।',
      examples: ['दूध में मिलावट कैसे पहचानें', 'तेल की शुद्धता', 'मसाले में मिलावट'],
      keywords: ['मिलावट', 'शुद्धता', 'adulteration', 'purity', 'food', 'खाना', 'दूध', 'milk', 'तेल', 'oil'],
    },
    en: {
      name: 'Shuddh Parakh',
      purpose: 'Shuddh Parakh helps detect adulteration in food items. You can send photos for checking.',
      examples: ['How to detect milk adulteration', 'Oil purity', 'Spice adulteration'],
      keywords: ['adulteration', 'purity', 'food', 'milk', 'oil', 'check'],
    },
    hasCamera: true,
  },
  sudhaar: {
    hi: {
      name: 'भारत सुधार',
      purpose: 'भारत सुधार सड़क, गड्ढे, कचरा, और अन्य समस्याओं की शिकायत दर्ज करने में मदद करता है। फोटो भेजें और आवाज़ उठाएं।',
      examples: ['गड्ढे की शिकायत', 'सड़क खराब है', 'कचरा नहीं उठाया गया'],
      keywords: ['शिकायत', 'complaint', 'गड्ढा', 'pothole', 'सड़क', 'road', 'कचरा', 'garbage'],
    },
    en: {
      name: 'Bharat Sudhaar',
      purpose: 'Bharat Sudhaar helps report problems like roads, potholes, garbage, etc. Send photos and raise your voice.',
      examples: ['Report pothole', 'Road is damaged', 'Garbage not collected'],
      keywords: ['complaint', 'pothole', 'road', 'garbage', 'problem', 'report'],
    },
    hasCamera: true,
  },
  superai: {
    hi: {
      name: 'सुपर AI',
      purpose: 'सुपर AI हर तरह के सवाल का जवाब देता है। कुछ भी पूछें, फोटो भेजें, या बोलकर पूछें।',
      examples: ['मौसम कैसा रहेगा?', 'नया बिज़नेस शुरू करना है', 'खाना बनाने की recipe'],
      keywords: [],
    },
    en: {
      name: 'Super AI',
      purpose: 'Super AI answers all kinds of questions. Ask anything, send photos, or ask by voice.',
      examples: ['How will the weather be?', 'Want to start new business', 'Cooking recipe'],
      keywords: [],
    },
    hasCamera: true,
  },
};

export function isQuestionRelevant(toolId: string, question: string): boolean {
  if (toolId === 'superai') return true;

  const tool = toolsConfig[toolId as keyof typeof toolsConfig];
  if (!tool) return true;

  const allKeywords = [...tool.hi.keywords, ...tool.en.keywords];
  const lowerQuestion = question.toLowerCase();

  return allKeywords.some((keyword) => lowerQuestion.includes(keyword.toLowerCase()));
}
