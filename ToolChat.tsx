import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Mic, Camera, Upload, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import { toolsConfig, isQuestionRelevant } from '../data/toolsConfig';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

export default function ToolChat() {
  const { currentTool, navigateTo } = useApp();
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showMafi, setShowMafi] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const config = currentTool ? toolsConfig[currentTool] : null;
  const hasCamera = config?.hasCamera || false;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        setTimeout(() => handleSend(transcript), 500);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language]);

  const handleMicClick = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleSend = async (customInput?: string) => {
    const messageText = customInput || input;
    if (!messageText.trim() && !uploadedImage) return;

    if (currentTool && !isQuestionRelevant(currentTool, messageText)) {
      setShowMafi(true);
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: messageText,
      image: uploadedImage || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setUploadedImage(null);
    setIsLoading(true);

    setTimeout(() => {
      const toolName = config?.[language].name || '';
      const aiResponse = `${language === 'hi' ? 'धन्यवाद' : 'Thank you'} ${messageText} ${
        language === 'hi' ? 'के बारे में पूछने के लिए। मैं' : 'for asking about'
      } ${toolName} ${
        language === 'hi'
          ? 'टूल के माध्यम से आपकी मदद कर रहा हूँ। यह एक डेमो उत्तर है। वास्तविक AI में यह सवाल का सटीक जवाब देगा।'
          : 'tool to help you. This is a demo response. In the real AI, this will provide an accurate answer to your question.'
      }`;

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: aiResponse,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  if (showMafi) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 text-center transition-colors">
          <div className="inline-block p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
            <X className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 transition-colors">
            {t('mafi')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">{t('mafiMessage')}</p>
          <button
            onClick={() => {
              setShowMafi(false);
              setInput('');
            }}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            {t('back')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 shadow-md p-4 transition-colors">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button
            onClick={() => navigateTo('dashboard')}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
            {config?.[language].name}
          </h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md'
                }`}
              >
                {message.image && (
                  <img
                    src={message.image}
                    alt="Uploaded"
                    className="rounded-lg mb-2 max-w-full h-auto"
                  />
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md transition-colors">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 transition-colors">
        <div className="max-w-4xl mx-auto">
          {uploadedImage && (
            <div className="mb-3 relative inline-block">
              <img
                src={uploadedImage}
                alt="Preview"
                className="h-20 rounded-lg"
              />
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          )}

          <div className="flex gap-2">
            {hasCamera && (
              <>
                <button
                  onClick={handleCameraClick}
                  className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors"
                >
                  <Camera size={20} />
                </button>
                <button
                  onClick={handleCameraClick}
                  className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors"
                >
                  <Upload size={20} />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </>
            )}

            <button
              onClick={handleMicClick}
              className={`p-3 rounded-xl transition-colors ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Mic size={20} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isListening ? t('listening') : t('typeMessage')}
              className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              disabled={isListening}
            />

            <button
              onClick={() => handleSend()}
              disabled={!input.trim() && !uploadedImage}
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
