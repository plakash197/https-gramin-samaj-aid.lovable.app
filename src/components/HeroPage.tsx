import { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroPage() {
  const { navigateTo } = useApp();
  const { language } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = {
    hi: `"नमस्ते! भारत सहायक में आपका स्वागत है।

समस्या बड़ी है, इसलिए इसका समाधान जरूरी है:
आज हमारा देश तरक्की तो कर रहा है, लेकिन हमारे गांव और शहरों के बीच एक बहुत बड़ा 'डिजिटल गैप' है। एक आम इंसान आज भी भ्रष्टाचार और कानून पेचीदगियों में फंस गया है।

खान-पान में मिलावत: आज हम जो खा रहे हैं, क्या वो शुद्ध है? मिलावत ने हमारी सेहत को खतरे में डाल दिया है, लेकिन हमें पता नहीं कि इसे कैसे चेक करें या कहां शिकायत करें।

जानकारी की कमी: सरकारी योजनाएं आती हैं, पर उनका लाभ बिचौलिये उठा ले जाते हैं क्योंकि आम नागरिक को अपने सही हक की जानकारी नहीं होती।

किसानों की लड़ाई: मंडी में फसल का सही दाम न मिलना और बीज से लेकर खाद तक में धोखा होना एक कड़वी सच्ची है।

मैंने भारत सहायक क्यों बनाया?
मैं एक 12वीं पास लड़का हूं, और मैंने देखा है कि कैसे जानकारी के बिना लोग परेशान होते हैं। मैंने ठाना कि मैं AI (आर्टिफिशियल इंटेलिजेंस) जैसी आधुनिक तकनीक को हर इंसान तक पहुंचाऊंगा जिसे इसकी सबसे ज्यादा जरूरत है।

भारत सहायक के डिजिटल हथियार:

मंडी भाव: अब किसान को कोई ठग नहीं पाएगा, हर फसल का सही रेट अब आपकी मुट्ठी में।

सरकारी सेवा: बिना किसी के आगे हाथ फैलाएं, हर सरकारी योजना का सीधा लिंक और जानकारी।

शुद्ध परख: मिलावट के खिलाफ आपकी ढाल, ताकि आप और आपका परिवार सुरक्षित रहे।

स्वास्थ्य मित्र: सेहत से जुड़ी हर छोटी-बड़ी सलाह और दवाओं की जानकारी।

भारत सुधार: अपने हक के लिए आवाज उठाएं और देश के सुधार में भागीदारी बनाएं।

यह सिर्फ एक ऐप नहीं है, यह एक सशक्त भारत की शुरुआत है। मैं इसे हमेशा फ्री रखूंगा ताकि हर भारतीय अपने हक को जान सके।"`,
    en: `"Hello! Welcome to Bharat Sahayak.

The Problem is Big, So Its Solution is Necessary:
Today our country is progressing, but there is a huge 'Digital Gap' between our villages and cities. A common person is still stuck in corruption and legal complexities.

Adulteration in Food: What we are eating today, is it pure? Adulteration has put our health at risk, but we don't know how to check it or where to complain.

Lack of Information: Government schemes come, but middlemen take advantage because common citizens don't know their rights.

Farmers' Struggle: Not getting fair prices in the market and being cheated from seeds to fertilizers is a bitter truth.

Why Did I Create Bharat Sahayak?
I am a 12th pass boy, and I have seen how people struggle without information. I decided to bring modern technology like AI to every person who needs it most.

Bharat Sahayak's Digital Weapons:

Mandi Bhav: Now no one can cheat farmers, fair price of every crop is in your hands.

Government Service: Without begging, direct link and information of every government scheme.

Purity Check: Your shield against adulteration, so you and your family stay safe.

Health Companion: Instant information about every health advice and medicine.

Bharat Improvement: Raise your voice for your rights and participate in improving the country.

This is not just an app, this is the beginning of an empowered India. I will always keep it free so that every Indian can know their rights."`,
    hinglish: `"Namaste! Bharat Sahayak mein aapka swagat hai.

Samasya Badi Hai, Isliye Iska Samadhan Zaruri Hai:
Aaj hamara desh tarakki toh kar raha hai, lekin hamare gaon aur shehron ke beech ek bahut bada 'Digital Gap' hai. Ek aam insaan aaj bhi bhrashtachar aur kanooni pechidegiyon mein fasa hua hai.

Khan-paan mein Milawat: Aaj hum jo kha rahe hain, kya wo shuddh hai? Milawat ne hamari sehat ko khatre mein daal diya hai, lekin humein nahi pata ki ise kaise check karein ya kahan shikayat karein.

Jankari ki Kami: Sarkari yojanaayein aati hain, par unka labh bicholiye utha le jaate hain kyunki aam nagrik ko apne sahi hakh ki jankari nahi hoti.

Kisanon ki Ladaai: Mandi mein fasal ka sahi daam na milna aur beejon se lekar khad tak mein dhokha hona ek kadwi sachai hai.

Maine Bharat Sahayak kyu banaya?
Main ek 12th pass ladka hoon, aur maine dekha hai ki kaise jankari ke bina log pareshan hote hain. Maine thaan liya ki main AI (Artificial Intelligence) jaisi modern technology ko har us insaan tak pahunchaunga jise iski sabse zyada zaroorat hai.

Bharat Sahayak ke Digital Hathiyar:

Mandi Bhav: Ab kisan ko koi thag nahi payega, har fasal ka sahi rate ab aapki mutthi mein.

Sarkari Seva: Bina kisi ke aage hath phailaye, har sarkari scheme ki direct link aur jankari.

Shuddh Parakh: Milawat ke khilaf aapki dhaal, taaki aap aur aapka parivaar surakshit rahe.

Health Mitra: Sehat se judi har choti-badi salah aur dawaiyon ki jankari turant.

Bharat Sudhaar: Apne haq ke liye aawaz uthaiye aur desh ke sudhaar mein bhagidari baniye.

Ye sirf ek app nahi hai, ye ek Sashakt Bharat ki shuruat hai. Main ise hamesha free rakhunga taaki har bhartiya apne hakh ko jaan sake."`,
  };

  const fullText = messages[language];

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [language]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 6.9);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-4">
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            {language === 'hi' ? 'भारत सहायक' : 'Bharat Sahayak'}
          </h1>
          <p className="text-orange-600 dark:text-orange-400 font-semibold transition-colors">
            {language === 'hi' ? 'हर भारतीय का डिजिटल साथी' : 'Every Indian\'s Digital Companion'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 mb-8 min-h-[300px] transition-colors">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100 whitespace-pre-wrap transition-colors">
            {displayedText}
            {currentIndex < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>

        <div className="flex justify-center fixed bottom-5 left-[45%]">
          <button
            onClick={() => navigateTo('dashboard')}
            className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {language === 'hi' ? 'शुरू करें' : language === 'en' ? 'Start' : 'Shuru Karein'}
          </button>
        </div>
      </div>
    </div>
  );
}
