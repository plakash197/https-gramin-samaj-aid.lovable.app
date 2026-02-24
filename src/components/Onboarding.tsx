import { useState } from 'react';
import { Languages, User } from 'lucide-react';

interface OnboardingProps {
  onComplete: (name: string, language: 'hi' | 'en') => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<'language' | 'name'>('language');
  const [selectedLanguage, setSelectedLanguage] = useState<'hi' | 'en'>('hi');
  const [name, setName] = useState('');

  const handleLanguageSelect = (lang: 'hi' | 'en') => {
    setSelectedLanguage(lang);
    setStep('name');
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      onComplete(name.trim(), selectedLanguage);
    }
  };

  if (step === 'language') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors animate-fadeIn">
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-4">
              <Languages className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              भाषा चुनें / Choose Language
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              अपनी पसंदीदा भाषा चुनें / Select your preferred language
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleLanguageSelect('hi')}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              हिंदी (Hindi)
            </button>
            <button
              onClick={() => handleLanguageSelect('en')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              English
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors animate-fadeIn">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-4">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedLanguage === 'hi' && 'आपका नाम क्या है?'}
            {selectedLanguage === 'en' && 'What is your name?'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedLanguage === 'hi' && 'हम आपको नाम से संबोधित करेंगे'}
            {selectedLanguage === 'en' && 'We will address you by your name'}
          </p>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
            placeholder={
              selectedLanguage === 'hi'
                ? 'अपना नाम लिखें'
                : 'Enter your name'
            }
            className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
            autoFocus
          />

          <button
            onClick={handleNameSubmit}
            disabled={!name.trim()}
            className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {selectedLanguage === 'hi' && 'शुरू करें'}
            {selectedLanguage === 'en' && 'Get Started'}
          </button>

          <button
            onClick={() => setStep('language')}
            className="w-full text-orange-600 dark:text-orange-400 hover:underline font-semibold"
          >
            {selectedLanguage === 'hi' && 'भाषा बदलें'}
            {selectedLanguage === 'en' && 'Change Language'}
          </button>
        </div>
      </div>
    </div>
  );
}
