import { GraduationCap, Gamepad2, Code2, Target, Lightbulb, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

export default function AboutPage() {
  const { language } = useLanguage();

  const timeline = [
    {
      year: language === 'hi' ? '2023-2025' : language === 'en' ? '2023-2025' : '2023-2025',
      title: language === 'hi' ? '12वीं कक्षा' : language === 'en' ? '12th Grade' : '12th Class',
      description: language === 'hi' ? 'गाजियाबाद से 12वीं पास (2025)' : language === 'en' ? 'Passed 12th from Ghaziabad (2025)' : 'Ghaziabad se 12th pass (2025)',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: language === 'hi' ? '2024' : language === 'en' ? '2024' : '2024',
      title: language === 'hi' ? 'टेम्पल रन की कहानी' : language === 'en' ? 'The Temple Run Story' : 'Temple Run Ki Kahani',
      description: language === 'hi' ? 'जब मैं Temple Run खेल रहा था, मुझे सोच आई - क्या मैं भी अपनी game बना सकता हूँ? यहीं से coding का सफर शुरू हुआ।' : language === 'en' ? 'While playing Temple Run, I thought - can I create my own game? This is where my coding journey began.' : 'Jab main Temple Run khel raha tha, mujhe soch aayi - kya main bhi apni game bana sakta hoon? Yahin se coding ka safar shuru hua.',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: language === 'hi' ? '2024-अब तक' : language === 'en' ? '2024-Present' : '2024-Abhi Tak',
      title: 'CodeYogi',
      description: language === 'hi' ? 'CodeYogi से coding सीखी और समझा कि technology से देश को कैसे बदल सकते हैं।' : language === 'en' ? 'Learned coding from CodeYogi and understood how technology can change the country.' : 'CodeYogi se coding seekhi aur samjha ki technology se desh ko kaise badal sakte hain.',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
    },
    {
      year: language === 'hi' ? '2026' : language === 'en' ? '2026' : '2026',
      title: language === 'hi' ? 'भारत AI बिल्डर्स चैलेंज' : language === 'en' ? 'Bharat AI Builders Challenge' : 'Bharat AI Builders Challenge',
      description: language === 'hi' ? 'Bharat Sahayak - मेरा पहला बड़ा project जो हर भारतीय की मदद करेगा।' : language === 'en' ? 'Bharat Sahayak - My first big project to help every Indian.' : 'Bharat Sahayak - Mera pehla bada project jo har Bharatiya ki madad karega.',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const values = [
    {
      title: language === 'hi' ? 'मिशन' : language === 'en' ? 'Mission' : 'Mission',
      description: language === 'hi' ? 'AI को हर भारतीय के mobile तक पहुँचाना, चाहे वो शहर हो या गाँव।' : language === 'en' ? 'Bringing AI to every Indian\'s mobile, whether city or village.' : 'AI ko har Bharatiya ke mobile tak pahunchana, chahe wo shehar ho ya gaon.',
      icon: Target,
    },
    {
      title: language === 'hi' ? 'विज़न' : language === 'en' ? 'Vision' : 'Vision',
      description: language === 'hi' ? 'एक ऐसा भारत जहाँ हर किसान को सही दाम मिले, हर बच्चे को शिक्षा में मदद मिले, हर नागरिक को न्याय मिले।' : language === 'en' ? 'An India where every farmer gets fair price, every child gets educational help, every citizen gets justice.' : 'Ek aisa Bharat jahan har kisan ko sahi daam mile, har bachche ko shiksha mein madad mile, har naagrik ko nyaay mile.',
      icon: Lightbulb,
    },
    {
      title: language === 'hi' ? 'वादा' : language === 'en' ? 'Promise' : 'Waada',
      description: language === 'hi' ? 'ये app हमेशा FREE रहेगी ताकि हर कोई अपना हक़ जान सके।' : language === 'en' ? 'This app will always be FREE so everyone can know their rights.' : 'Ye app hamesha FREE rahegi taaki har koi apna haq jaan sake.',
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-block p-5 bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 rounded-full mb-6">
            <Heart className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'hi' ? 'मेरे बारे में' : language === 'en' ? 'About Me' : 'Mere Baare Mein'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'hi' ? 'अकाश - एक 12th pass लड़का जो technology से भारत बदलना चाहता है' : language === 'en' ? 'Akash - A 12th pass boy who wants to change India through technology' : 'Akash - Ek 12th pass ladka jo technology se Bharat badalna chahta hai'}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slideUp">
            {language === 'hi' ? 'मेरा सफर' : language === 'en' ? 'My Journey' : 'Mera Safar'}
          </h2>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-green-500"></div>

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative mb-12 animate-slideUp`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2" />

                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-500 transform -translate-x-1/2 z-10" />

                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all">
                        <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-xl mb-3`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slideUp">
            {language === 'hi' ? 'मेरी अन्य Projects' : language === 'en' ? 'My Projects' : 'Meri Anya Projects'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://republic-day-2026-live.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all animate-slideUp group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Republic Day 2026
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {language === 'hi' ? 'Republic Day की celebration के लिए बनाया गया एक interactive प्लेटफॉर्म' : language === 'en' ? 'An interactive platform for celebrating Republic Day' : 'Republic Day celebrate karne ke liye bana platform'}
              </p>
            </a>

            <a
              href="https://medicinefinder-webapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all animate-slideUp group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Medicine Finder
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {language === 'hi' ? 'दवाओं को खोजने और उनकी जानकारी पाने के लिए बनाया गया एक web app' : language === 'en' ? 'A web app to find medicines and get their information' : 'Dawaon ko dhundne ke liye bana hua web app'}
              </p>
            </a>
          </div>
        </div>

        <div className="backdrop-blur-lg bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-green-500/20 dark:from-orange-500/10 dark:via-purple-500/10 dark:to-green-500/10 rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/30 text-center animate-slideUp">
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed font-semibold mb-6">
            {language === 'hi' ? '"यह सिर्फ एक app नहीं है, यह एक सशक्त भारत की शुरुआत है।"' : language === 'en' ? '"This is not just an app, it\'s the beginning of an empowered India."' : '"Yeh sirf ek app nahi hai, yeh ek sashakt Bharat ki shuruaat hai."'}
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
            - Akash
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
