'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

const countries = [
  {
    name: 'France',
    nativeName: 'France',
    flagIcon: 'twemoji:flag-france',
    language: 'fr' as Language,
    langLabel: 'Français',
    glow: '#002395',
    stripe: ['#002395', '#FFFFFF', '#ED2939'],
  },
  {
    name: 'Belgique',
    nativeName: 'België',
    flagIcon: 'twemoji:flag-belgium',
    language: 'fr' as Language,
    langLabel: 'Français',
    glow: '#F7D117',
    stripe: ['#1E1E1E', '#F7D117', '#EF3340'],
  },
  {
    name: 'Deutschland',
    nativeName: 'Deutschland',
    flagIcon: 'twemoji:flag-germany',
    language: 'de' as Language,
    langLabel: 'Deutsch',
    glow: '#FFCE00',
    stripe: ['#1E1E1E', '#DD0000', '#FFCE00'],
  },
  {
    name: 'Sverige',
    nativeName: 'Sverige',
    flagIcon: 'twemoji:flag-sweden',
    language: 'sv' as Language,
    langLabel: 'Svenska',
    glow: '#006AA7',
    stripe: ['#006AA7', '#FECC02', '#006AA7'],
  },
  {
    name: 'España',
    nativeName: 'España',
    flagIcon: 'twemoji:flag-spain',
    language: 'es' as Language,
    langLabel: 'Español',
    glow: '#AA151B',
    stripe: ['#AA151B', '#F1BF00', '#AA151B'],
  },
  {
    name: 'Norge',
    nativeName: 'Norge',
    flagIcon: 'twemoji:flag-norway',
    language: 'no' as Language,
    langLabel: 'Norsk',
    glow: '#EF2B2D',
    stripe: ['#EF2B2D', '#FFFFFF', '#002868'],
  },
];

const STORAGE_KEY = 'ninhotv-country-selected';

export default function CountrySelector() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const already = localStorage.getItem(STORAGE_KEY);
    if (!already) setVisible(true);
  }, []);

  const handleSelect = (country: (typeof countries)[0]) => {
    setSelected(country.name);
    setTimeout(() => {
      setLanguage(country.language);
      localStorage.setItem(STORAGE_KEY, country.name);
      setVisible(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gray-950">
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-950 to-blue-950/30" />
            {/* Floating balls */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/5"
                style={{ left: `${10 + i * 16}%`, top: `${10 + (i % 3) * 30}%` }}
                animate={{ y: [-15, 15, -15], rotate: [0, 360] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
              >
                <Icon icon="mdi:soccer" className="w-20 h-20" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 flex flex-col items-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3 mb-8"
            >
              <Icon icon="mdi:television-classic" className="w-10 h-10 text-red-500" />
              <span className="text-3xl font-black text-white">
                Ninho<span className="text-red-500">TV</span>
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-10"
            >
              <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                Choisissez votre pays
              </h1>
              <p className="text-gray-400 text-base">
                Choose your country · Wähle dein Land · Välj ditt land · Elige tu país
              </p>
            </motion.div>

            {/* Country cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
              {countries.map((country, i) => {
                const isSelected = selected === country.name;
                return (
                  <motion.button
                    key={country.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.08, type: 'spring', stiffness: 260, damping: 22 }}
                    whileHover={{ y: -6, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleSelect(country)}
                    className="relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer group overflow-hidden"
                    style={{
                      borderColor: isSelected ? country.glow : 'rgba(255,255,255,0.08)',
                      background: isSelected
                        ? `${country.glow}22`
                        : 'rgba(255,255,255,0.04)',
                      boxShadow: isSelected ? `0 0 30px ${country.glow}55` : 'none',
                    }}
                  >
                    {/* Flag stripe accent (top) */}
                    <div className="absolute top-0 left-0 right-0 flex h-1 rounded-t-2xl overflow-hidden">
                      {country.stripe.map((c, si) => (
                        <div key={si} className="flex-1" style={{ background: c }} />
                      ))}
                    </div>

                    {/* Hover glow bg */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                      style={{ background: country.glow }}
                    />

                    {/* Flag */}
                    <motion.div
                      animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.4 }}
                      className="mb-3"
                    >
                      <Icon icon={country.flagIcon} className="w-14 h-14 drop-shadow-lg" />
                    </motion.div>

                    {/* Country name */}
                    <span className="text-white font-bold text-sm leading-tight mb-1">
                      {country.name}
                    </span>

                    {/* Language label */}
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${country.glow}33`,
                        color: country.glow === '#1E1E1E' ? '#F7D117' : country.glow,
                      }}
                    >
                      {country.langLabel}
                    </span>

                    {/* Check mark on select */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute top-2 right-2"
                        >
                          <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-600 text-xs mt-8"
            >
              Ce choix peut être modifié à tout moment via le menu de navigation.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
