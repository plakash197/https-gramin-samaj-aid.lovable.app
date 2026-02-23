import { useState } from 'react';
import { User, Languages, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProfilePage() {
  const { user, updateUserProfile } = useAuth();
  const { language, setLanguage } = useLanguage();
  const [name, setName] = useState(user?.name || '');
  const [selectedLang, setSelectedLang] = useState<'hi' | 'en' | 'hinglish'>(user?.language || 'hi');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = async () => {
    if (!name.trim()) return;

    setIsSaving(true);
    setSaveMessage('');

    try {
      await updateUserProfile(name.trim(), selectedLang);
      setLanguage(selectedLang);
      setSaveMessage(
        language === 'hi'
          ? 'प्रोफ़ाइल अपडेट हो गई'
          : language === 'en'
          ? 'Profile updated'
          : 'Profile update ho gayi'
      );
    } catch (error) {
      setSaveMessage(
        language === 'hi'
          ? 'कुछ गलत हो गया'
          : language === 'en'
          ? 'Something went wrong'
          : 'Kuch galat ho gaya'
      );
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 transition-colors animate-fadeIn">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'hi' && 'आपकी प्रोफ़ाइल'}
              {language === 'en' && 'Your Profile'}
              {language === 'hinglish' && 'Aapki Profile'}
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {language === 'hi' && 'नाम'}
                {language === 'en' && 'Name'}
                {language === 'hinglish' && 'Naam'}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Languages size={16} />
                {language === 'hi' && 'भाषा'}
                {language === 'en' && 'Language'}
                {language === 'hinglish' && 'Bhasha'}
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedLang('hi')}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    selectedLang === 'hi'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  हिंदी (Hindi)
                </button>
                <button
                  onClick={() => setSelectedLang('en')}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    selectedLang === 'en'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLang('hinglish')}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    selectedLang === 'hinglish'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Hinglish (हिंग्लिश)
                </button>
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={isSaving || !name.trim()}
              className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <Save size={20} />
              {isSaving
                ? language === 'hi'
                  ? 'सेव हो रहा है...'
                  : language === 'en'
                  ? 'Saving...'
                  : 'Save ho raha hai...'
                : language === 'hi'
                ? 'सेव करें'
                : language === 'en'
                ? 'Save'
                : 'Save Karein'}
            </button>

            {saveMessage && (
              <div className="text-center p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl">
                {saveMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
