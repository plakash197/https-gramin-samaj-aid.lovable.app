import { useEffect, useState } from 'react';
import { Clock, MessageSquare, Trash2 } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { toolsConfig } from '../data/toolsConfig';

interface ChatSession {
  id: string;
  user_id: string;
  tool_id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function HistoryPage() {
  const { navigateTo, openChatSession } = useApp();
  const { language, t } = useLanguage();
  const { user } = useAuth();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadSessions();
    }
  }, [user]);

  const loadSessions = () => {
    if (!user) return;

    try {
      const sessionsKey = `chat_sessions_${user.id}`;
      const storedSessions = localStorage.getItem(sessionsKey);
      if (storedSessions) {
        const parsedSessions = JSON.parse(storedSessions);
        setSessions(parsedSessions);
      }
    } catch (error) {
      console.error('Error loading sessions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSession = (sessionId: string) => {
    if (!user) return;

    try {
      const sessionsKey = `chat_sessions_${user.id}`;
      const storedSessions = localStorage.getItem(sessionsKey);
      if (storedSessions) {
        const parsedSessions = JSON.parse(storedSessions);
        const updatedSessions = parsedSessions.filter((s: ChatSession) => s.id !== sessionId);
        localStorage.setItem(sessionsKey, JSON.stringify(updatedSessions));
        setSessions(updatedSessions);
      }

      localStorage.removeItem(`chat_session_${sessionId}`);
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  };

  const handleSessionClick = (session: ChatSession) => {
    openChatSession(session.tool_id as any, session.id);
  };

  const getToolName = (toolId: string) => {
    const tool = toolsConfig[toolId as keyof typeof toolsConfig];
    return tool?.[language]?.name || toolId;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return language === 'hi' ? 'अभी' : language === 'en' ? 'Just now' : 'Abhi';
    if (diffMins < 60) return `${diffMins} ${language === 'hi' ? 'मिनट पहले' : language === 'en' ? 'mins ago' : 'min pehle'}`;
    if (diffHours < 24) return `${diffHours} ${language === 'hi' ? 'घंटे पहले' : language === 'en' ? 'hours ago' : 'ghante pehle'}`;
    if (diffDays < 7) return `${diffDays} ${language === 'hi' ? 'दिन पहले' : language === 'en' ? 'days ago' : 'din pehle'}`;

    return date.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {t('history')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {language === 'hi' && 'आपकी पिछली बातचीत'}
            {language === 'en' && 'Your past conversations'}
            {language === 'hinglish' && 'Aapki pichli baatcheet'}
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        ) : sessions.length === 0 ? (
          <div className="text-center py-12 animate-slideUp">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {language === 'hi' && 'कोई बातचीत नहीं मिली'}
              {language === 'en' && 'No conversations found'}
              {language === 'hinglish' && 'Koi baatcheet nahi mili'}
            </p>
            <button
              onClick={() => navigateTo('dashboard')}
              className="mt-4 text-orange-600 dark:text-orange-400 hover:underline font-semibold"
            >
              {language === 'hi' && 'डैशबोर्ड पर जाएं'}
              {language === 'en' && 'Go to Dashboard'}
              {language === 'hinglish' && 'Dashboard par jaayein'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <div
                key={session.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-102 cursor-pointer animate-slideUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex-1"
                    onClick={() => handleSessionClick(session)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-green-500 text-white text-xs font-semibold rounded-full">
                        {getToolName(session.tool_id)}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <Clock size={14} />
                        <span>{formatDate(session.updated_at)}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {session.title}
                    </h3>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSession(session.id);
                    }}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
                  >
                    <Trash2 size={20} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
