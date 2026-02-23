import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'hi' | 'en' | 'hinglish';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  hi: {
    appName: 'भारत सहायक',
    welcome: 'स्वागत है',
    dashboard: 'डैशबोर्ड',
    aboutMe: 'मेरे बारे में',
    back: 'वापस जाएं',
    send: 'भेजें',
    typeMessage: 'अपना सवाल लिखें...',
    listening: 'सुन रहा हूँ...',
    camera: 'कैमरा',
    upload: 'अपलोड',
    mafi: 'माफी!',
    mafiMessage: 'यह सवाल इस टूल से संबंधित नहीं है। कृपया सही टूल का उपयोग करें।',
    mandiName: 'मंडी भाव',
    mandiDesc: 'ताज़ा फसलों के दाम जानें',
    graminName: 'ग्रामीण सहायता',
    graminDesc: 'गाँव के लिए योजनाएं और मदद',
    nyayName: 'न्याय सहायक',
    nyayDesc: 'कानूनी सलाह और अधिकार',
    dawaiName: 'दवाई मदद',
    dawaiDesc: 'दवाइयों की जानकारी',
    schoolName: 'स्कूल साथी',
    schoolDesc: 'होमवर्क और पढ़ाई में मदद',
    shuddhatName: 'शुद्ध परख',
    shuddhatDesc: 'खाने में मिलावट की जांच',
    sudhaarName: 'भारत सुधार',
    sudhaarDesc: 'समस्याओं की शिकायत',
    superAIName: 'सुपर AI',
    superAIDesc: 'हर सवाल का जवाब',
    history: 'इतिहास',
    profile: 'प्रोफ़ाइल',
  },
  en: {
    appName: 'Bharat Sahayak',
    welcome: 'Welcome',
    dashboard: 'Dashboard',
    aboutMe: 'About Me',
    back: 'Go Back',
    send: 'Send',
    typeMessage: 'Type your question...',
    listening: 'Listening...',
    camera: 'Camera',
    upload: 'Upload',
    mafi: 'Sorry!',
    mafiMessage: 'This question is not related to this tool. Please use the correct tool.',
    mandiName: 'Mandi Bhav',
    mandiDesc: 'Check fresh crop prices',
    graminName: 'Gramin Sahayata',
    graminDesc: 'Rural schemes and help',
    nyayName: 'Nyay Sahayak',
    nyayDesc: 'Legal advice and rights',
    dawaiName: 'Dawai Madad',
    dawaiDesc: 'Medicine information',
    schoolName: 'School Saathi',
    schoolDesc: 'Homework and study help',
    shuddhatName: 'Shuddh Parakh',
    shuddhatDesc: 'Check food adulteration',
    sudhaarName: 'Bharat Sudhaar',
    sudhaarDesc: 'Report problems',
    superAIName: 'Super AI',
    superAIDesc: 'Answer to every question',
    history: 'History',
    profile: 'Profile',
  },
  hinglish: {
    appName: 'Bharat Sahayak',
    welcome: 'Swagat Hai',
    dashboard: 'Dashboard',
    aboutMe: 'Mere Baare Mein',
    back: 'Wapas Jaayein',
    send: 'Bhejein',
    typeMessage: 'Apna sawal likhein...',
    listening: 'Sun raha hoon...',
    camera: 'Camera',
    upload: 'Upload',
    mafi: 'Maafi!',
    mafiMessage: 'Yeh sawal is tool se related nahi hai. Kripya sahi tool ka use karein.',
    mandiName: 'Mandi Bhav',
    mandiDesc: 'Taaza fasalon ke daam jaanein',
    graminName: 'Gramin Sahayata',
    graminDesc: 'Gaon ke liye yojanaayein aur madad',
    nyayName: 'Nyay Sahayak',
    nyayDesc: 'Kanooni salah aur adhikar',
    dawaiName: 'Dawai Madad',
    dawaiDesc: 'Dawaiyon ki jaankari',
    schoolName: 'School Saathi',
    schoolDesc: 'Homework aur padhai mein madad',
    shuddhatName: 'Shuddh Parakh',
    shuddhatDesc: 'Khane mein milawat ki jaanch',
    sudhaarName: 'Bharat Sudhaar',
    sudhaarDesc: 'Samasyaon ki shikayat',
    superAIName: 'Super AI',
    superAIDesc: 'Har sawal ka jawaab',
    history: 'History',
    profile: 'Profile',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('hi');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      if (prev === 'hi') return 'en';
      if (prev === 'en') return 'hinglish';
      return 'hi';
    });
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
