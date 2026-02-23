import { useState } from 'react';
import { Menu, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import Sidebar from './Sidebar';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:scale-105 transition-transform"
            >
              <Menu size={24} />
              <h1 className="text-xl font-bold">{t('appName')}</h1>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle language"
            >
              <Languages size={20} />
              <span className="text-xs ml-1 font-semibold">
                {language === 'hi' ? 'HI' : language === 'en' ? 'EN' : 'HG'}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
