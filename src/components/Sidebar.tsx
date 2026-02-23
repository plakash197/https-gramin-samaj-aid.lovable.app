import { X, Home, History, User, LogOut, Info } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { navigateTo } = useApp();
  const { t, language } = useLanguage();
  const { user, signOut } = useAuth();

  const handleNavigation = (page: 'dashboard' | 'history' | 'about' | 'profile') => {
    navigateTo(page as any);
    onClose();
  };

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  if (!isOpen) return null;

  const menuItems = [
    { id: 'dashboard', icon: Home, label: t('dashboard'), action: () => handleNavigation('dashboard') },
    { id: 'history', icon: History, label: t('history'), action: () => handleNavigation('history') },
    { id: 'about', icon: Info, label: t('aboutMe'), action: () => handleNavigation('about') },
    { id: 'profile', icon: User, label: t('profile'), action: () => handleNavigation('profile') },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fadeIn"
        onClick={onClose}
      />

      <div className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 animate-slideInLeft">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('appName')}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {user && (
              <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-xl p-4 text-white">
                <p className="text-sm opacity-90">
                  {language === 'hi' && 'नमस्ते'}
                  {language === 'en' && 'Hello'}
                  {language === 'hinglish' && 'Namaste'}
                </p>
                <p className="text-lg font-bold">{user.name}</p>
              </div>
            )}
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all transform hover:scale-105"
                >
                  <Icon size={20} />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-all transform hover:scale-105"
            >
              <LogOut size={20} />
              <span className="font-semibold">
                {language === 'hi' && 'लॉग आउट'}
                {language === 'en' && 'Logout'}
                {language === 'hinglish' && 'Logout'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
