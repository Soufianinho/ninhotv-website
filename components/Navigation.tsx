'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
    { code: 'es', name: 'Español', flag: '/flags/es.svg' },
    { code: 'en', name: 'English', flag: '/flags/gb.svg' },
    { code: 'nl', name: 'Nederlands', flag: '/flags/nl.svg' },
    { code: 'ar', name: 'العربية', flag: '/flags/sa.svg' },
    { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
  };

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
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
    // Trigger Meta Pixel Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    
    navigateToPage('/free-trial');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Icon icon="mdi:television-classic" className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-white">Ninho<span className="text-red-500">TV</span></span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: t('nav.home'), href: '#home', action: 'custom', handler: handleHomeClick },
              { name: t('nav.channels'), href: '#channels', action: 'scroll' },
              { name: t('nav.iptv_reseller'), href: '/reseller', action: 'navigate' },
              { name: t('nav.features'), href: '#features', action: 'scroll' },
              { name: t('nav.pricing'), href: '/pricing', action: 'navigate' },
              { name: t('nav.faq'), href: '#faq', action: 'scroll' }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (item.action === 'custom' && item.handler) {
                    item.handler();
                  } else if (item.action === 'navigate') {
                    navigateToPage(item.href);
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-red-500/50 hover:from-red-500/10 hover:to-red-600/10 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                <img 
                  src={languages.find(lang => lang.code === language)?.flag || '/flags/fr.svg'} 
                  alt={`${languages.find(lang => lang.code === language)?.name} flag`}
                  className="w-6 h-4 object-cover rounded-sm filter drop-shadow-sm"
                />
                <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-300 group-hover:text-red-400 transition-all duration-300" />
              </motion.button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-3 w-56 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-600/50 rounded-2xl shadow-2xl shadow-red-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="p-2">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                        language === lang.code 
                          ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 border border-red-500/30 shadow-lg shadow-red-500/20' 
                          : 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-gray-600/50'
                      }`}
                    >
                      <img 
                        src={lang.flag} 
                        alt={`${lang.name} flag`}
                        className="w-8 h-5 object-cover rounded-sm filter drop-shadow-sm"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium block">{lang.name}</span>
                        <span className="text-xs text-gray-400 capitalize">{lang.code}</span>
                      </div>
                      {language === lang.code && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0"
                        >
                          <Icon icon="mdi:check-circle" className="w-5 h-5 text-red-400" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleFreeTrial}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25"
            >
              {t('nav.start_free_trial')}
            </motion.button>
          </div>

          {/* Spacer for mobile layout */}
          <div className="flex-1 lg:hidden"></div>

          {/* Mobile Menu Button - Hidden since we use bottom nav */}
          <div className="hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <Icon 
                icon={isMenuOpen ? "mdi:close" : "mdi:menu"} 
                className="w-6 h-6" 
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
