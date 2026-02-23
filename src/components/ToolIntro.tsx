import { ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import { toolsConfig } from '../data/toolsConfig';

export default function ToolIntro() {
  const { currentTool, navigateTo, startTool } = useApp();
  const { language } = useLanguage();

  if (!currentTool) return null;

  const config = toolsConfig[currentTool];
  const content = config[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 transition-colors animate-fadeIn">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigateTo('dashboard')}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          {language === 'hi' ? 'डैशबोर्ड पर वापस' : language === 'en' ? 'Back to Dashboard' : 'Dashboard par wapas'}
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors animate-slideUp">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              {content.name}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 mb-8 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
              {language === 'hi' ? 'इस टूल का उद्देश्य:' : 'Tool Purpose:'}
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed transition-colors">
              {content.purpose}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              {language === 'hi' ? 'उदाहरण सवाल:' : 'Example Questions:'}
            </h3>
            <div className="space-y-3">
              {content.examples.map((example, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 transition-colors"
                >
                  <p className="text-gray-800 dark:text-gray-200 transition-colors">
                    {index + 1}. {example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startTool}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {language === 'hi' ? 'शुरू करें' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
}
