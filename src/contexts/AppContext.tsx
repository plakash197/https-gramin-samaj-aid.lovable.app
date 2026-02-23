import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'hero' | 'dashboard' | 'about' | 'tool' | 'history' | 'profile';
type ToolId = 'mandi' | 'gramin' | 'nyay' | 'dawai' | 'school' | 'shuddh' | 'sudhaar' | 'superai';

interface AppContextType {
  currentPage: Page;
  currentTool: ToolId | null;
  currentSessionId: string | null;
  showToolIntro: boolean;
  navigateTo: (page: Page, tool?: ToolId) => void;
  startTool: () => void;
  openChatSession: (tool: ToolId, sessionId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('hero');
  const [currentTool, setCurrentTool] = useState<ToolId | null>(null);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [showToolIntro, setShowToolIntro] = useState(true);

  const navigateTo = (page: Page, tool?: ToolId) => {
    window.speechSynthesis.cancel();

    if (page === 'tool' && tool) {
      setCurrentTool(tool);
      setCurrentSessionId(null);
      setShowToolIntro(true);
    } else if (page === 'dashboard') {
      setCurrentTool(null);
      setCurrentSessionId(null);
      setShowToolIntro(true);
    }

    setCurrentPage(page);
  };

  const startTool = () => {
    setShowToolIntro(false);
  };

  const openChatSession = (tool: ToolId, sessionId: string) => {
    setCurrentTool(tool);
    setCurrentSessionId(sessionId);
    setShowToolIntro(false);
    setCurrentPage('tool');
  };

  return (
    <AppContext.Provider value={{ currentPage, currentTool, currentSessionId, showToolIntro, navigateTo, startTool, openChatSession }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
