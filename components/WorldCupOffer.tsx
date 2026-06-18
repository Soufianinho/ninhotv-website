'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function WorldCupOffer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/212644870099?text=Bonjour!%20Je%20veux%20profiter%20de%20l'offre%20sp%C3%A9ciale%20Coupe%20du%20Monde%202026%20%C3%A0%2020%E2%82%AC%20%F0%9F%87%AB%F0%9F%87%B7%20Allez%20les%20Bleus!",
      '_blank'
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* ── FRENCH FLAG STRIPES background ── */}
            <div className="absolute inset-0 flex">
              <div className="flex-1 bg-[#002395]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#ED2939]" />
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Floating soccer balls */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none text-white/10"
                style={{ left: `${10 + i * 20}%`, top: `${5 + (i % 3) * 25}%` }}
                animate={{ y: [-8, 8, -8], rotate: [0, 360] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              >
                <Icon icon="mdi:soccer" className="w-8 h-8" />
              </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10 p-7 text-center">

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-all"
              >
                <Icon icon="mdi:close" className="w-5 h-5" />
              </button>

              {/* Trophies row */}
              <div className="flex items-center justify-center space-x-3 mb-3">
                <motion.div
                  animate={{ rotate: [-12, 12, -12], y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon icon="mdi:trophy" className="w-11 h-11 text-yellow-400 drop-shadow-lg" />
                </motion.div>

                {/* Spinning ball */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  <Icon icon="mdi:soccer" className="w-9 h-9 text-white drop-shadow-lg" />
                </motion.div>

                <motion.div
                  animate={{ rotate: [12, -12, 12], y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                >
                  <Icon icon="mdi:trophy" className="w-11 h-11 text-yellow-400 drop-shadow-lg" />
                </motion.div>
              </div>

              {/* Badge OFFRE EXCLUSIVE */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-flex items-center space-x-1 bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-xs font-black tracking-widest mb-3"
              >
                <span>⭐</span>
                <span>OFFRE EXCLUSIVE</span>
                <span>⭐</span>
              </motion.div>

              {/* Title */}
              <h2 className="text-4xl font-black text-white leading-tight mb-1 drop-shadow-lg">
                COUPE DU<br />
                <span className="text-yellow-400">MONDE 2026</span>
              </h2>

              {/* Mbappé badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center space-x-3 bg-[#ED2939] rounded-2xl px-5 py-2.5 mt-3 mb-4 shadow-lg shadow-red-600/40"
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-white leading-none">10</div>
                  <div className="text-white/70 text-[9px] tracking-widest">FRANCE</div>
                </div>
                <div className="w-px h-10 bg-white/30" />
                <div className="text-left">
                  <div className="text-white font-black text-lg leading-none">MBAPPÉ</div>
                  <div className="text-white/80 text-xs">Kylian • FFF</div>
                </div>
                <Icon icon="twemoji:flag-france" className="w-7 h-7" />
              </motion.div>

              {/* Description */}
              <p className="text-gray-200 text-sm mb-5 leading-relaxed px-2">
                Regardez <span className="text-yellow-400 font-bold">tous les matchs</span> des Bleus en{' '}
                <span className="text-yellow-400 font-bold">HD & 4K</span> — 33 000+ chaînes,
                sports, Canal+, beIN Sports et bien plus.
              </p>

              {/* Price card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-5">
                <div className="text-gray-300 text-xs font-semibold tracking-wider mb-2 uppercase">
                  Offre Spéciale Coupe du Monde
                </div>
                <div className="flex items-center justify-center space-x-3 mb-1">
                  <span className="text-white/40 text-xl line-through">€29.98</span>
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-6xl font-black text-white drop-shadow-lg"
                  >
                    20€
                  </motion.span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <span className="flex items-center text-green-400 font-semibold">
                    <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 mr-1" />
                    2 mois d&apos;accès
                  </span>
                  <span className="flex items-center text-green-400 font-semibold">
                    <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 mr-1" />
                    Activation immédiate
                  </span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-green-600/30 transition-all flex items-center justify-center space-x-3"
              >
                <Icon icon="mdi:whatsapp" className="w-6 h-6" />
                <span>COMMANDER SUR WHATSAPP</span>
              </motion.button>

              <button
                onClick={() => setIsVisible(false)}
                className="mt-3 text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Non merci, je rate cette offre
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
