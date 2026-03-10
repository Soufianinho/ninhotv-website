'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setShowLanguageMenu(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
  };

  const handleHomeClick = () => {
    // Check if we're on the home page
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      scrollToSection('#home');
    } else {
      navigateToPage('/');
    }
  };

  const handleFreeTrial = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    setTimeout(() => {
      navigateToPage('/free-trial');
    }, 300);
  };

  const navItems = [
    { 
      id: 'home', 
      name: t('nav.home'), 
      icon: 'mdi:home', 
      action: 'custom',
      handler: handleHomeClick
    },
    { 
      id: 'channels', 
      name: t('nav.channels'), 
      icon: 'mdi:television', 
      action: 'scroll',
      href: '#channels'
    },
    { 
      id: 'free-trial', 
      name: t('nav.start_free_trial'), 
      icon: 'mdi:play-circle', 
      action: 'custom',
      handler: handleFreeTrial
    },
    { 
      id: 'pricing', 
      name: t('nav.pricing'), 
      icon: 'mdi:currency-gbp', 
      action: 'navigate',
      href: '/pricing'
    },
    { 
      id: 'faq', 
      name: t('nav.faq'), 
      icon: 'mdi:help-circle', 
      action: 'scroll',
      href: '#faq'
    }
  ];

  const handleNavClick = (item: any) => {
    setActiveTab(item.id);
    if (item.action === 'custom' && item.handler) {
      item.handler();
    } else if (item.action === 'navigate') {
      navigateToPage(item.href);
    } else {
      scrollToSection(item.href);
    }
  };

  const handleLanguageClick = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 z-50 lg:hidden"
      >
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id 
                  ? 'text-red-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon 
                icon={item.icon} 
                className={`w-5 h-5 mb-1 ${activeTab === item.id ? 'text-red-500' : ''}`}
              />
              <span className="text-xs font-medium">{item.name}</span>
            </motion.button>
          ))}
          
          {/* Language Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLanguageClick}
            className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-xl transition-all duration-300 relative ${
              showLanguageMenu 
                ? 'text-red-400 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent'
            }`}
          >
            <span className="text-xl mb-1 filter drop-shadow-sm">
              {languages.find(lang => lang.code === language)?.flag}
            </span>
            <span className="text-xs font-medium">{t('common.language')}</span>
            {showLanguageMenu && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
              />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Language Menu Overlay */}
      {showLanguageMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setShowLanguageMenu(false)}
        >
          <motion.div
            initial={{ y: 100, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 100, scale: 0.95 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-xl border-t border-gray-600/50 rounded-t-3xl p-6 shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Icon icon="mdi:translate" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">{t('common.select_language')}</h3>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowLanguageMenu(false)}
                className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl flex items-center justify-center transition-colors"
              >
                <Icon icon="mdi:close" className="w-5 h-5 text-gray-400 hover:text-white" />
              </motion.button>
            </div>
            
            {/* Language Options */}
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                    language === lang.code 
                      ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 border border-red-500/40 shadow-lg shadow-red-500/20' 
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/30'
                  }`}
                >
                  <span className="text-3xl filter drop-shadow-sm">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <span className="text-base font-medium block">{lang.name}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{lang.code}</span>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="flex-shrink-0"
                    >
                      <Icon icon="mdi:check-circle" className="w-6 h-6 text-red-400" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <p className="text-center text-gray-400 text-sm">
                {t('common.language')} • {languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.name}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
