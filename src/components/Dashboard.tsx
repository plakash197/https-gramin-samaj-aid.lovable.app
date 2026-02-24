import { Sprout, Users, Scale, Pill, BookOpen, FlaskConical, MapPin, Sparkles } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

const tools = [
  {
    id: 'mandi' as const,
    icon: Sprout,
    nameKey: 'mandiName',
    descKey: 'mandiDesc',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'gramin' as const,
    icon: Users,
    nameKey: 'graminName',
    descKey: 'graminDesc',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'nyay' as const,
    icon: Scale,
    nameKey: 'nyayName',
    descKey: 'nyayDesc',
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 'dawai' as const,
    icon: Pill,
    nameKey: 'dawaiName',
    descKey: 'dawaiDesc',
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'school' as const,
    icon: BookOpen,
    nameKey: 'schoolName',
    descKey: 'schoolDesc',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'shuddh' as const,
    icon: FlaskConical,
    nameKey: 'shuddhatName',
    descKey: 'shuddhatDesc',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'sudhaar' as const,
    icon: MapPin,
    nameKey: 'sudhaarName',
    descKey: 'sudhaarDesc',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'superai' as const,
    icon: Sparkles,
    nameKey: 'superAIName',
    descKey: 'superAIDesc',
    color: 'from-pink-500 to-rose-600',
  },
];

export default function Dashboard() {
  const { navigateTo } = useApp();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            {t('dashboard')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">
            {t('language') === 'hi' ? 'अपनी ज़रूरत का टूल चुनें' : t('language') === 'en' ? 'Choose the tool you need' : 'Apni zaroorat ka tool chunein'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => navigateTo('tool', tool.id)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tool.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                  {t(tool.nameKey)}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  {t(tool.descKey)}
                </p>
              </button>
            );
          })}
        </div>

      </div>
      <Footer />
    </div>
  );
}
