import { AppProvider, useApp } from './contexts/AppContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useLanguage } from './contexts/LanguageContext';
import { useEffect } from 'react';
import Header from './components/Header';
import HeroPage from './components/HeroPage';
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';
import ProfilePage from './components/ProfilePage';
import ToolIntro from './components/ToolIntro';
import EnhancedToolChat from './components/EnhancedToolChat';
import Onboarding from './components/Onboarding';

function AppContent() {
  const { currentPage, showToolIntro } = useApp();
  const { user, isLoading, isOnboarded, signInAnonymously } = useAuth();
  const { setLanguage } = useLanguage();

  const handleOnboardingComplete = async (name: string, language: 'hi' | 'en' | 'hinglish') => {
    try {
      await signInAnonymously(name, language);
      setLanguage(language);
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  };

  useEffect(() => {
    if (user) {
      setLanguage(user.language);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (!isOnboarded) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen">
      {currentPage !== 'hero' && <Header />}

      {currentPage === 'hero' && <HeroPage />}
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'history' && <HistoryPage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'tool' && (showToolIntro ? <ToolIntro /> : <EnhancedToolChat />)}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <AppProvider>
            <AppContent />
          </AppProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
