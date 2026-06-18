'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function WorldCupBanner() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/212644870099?text=Bonjour!%20Je%20veux%20profiter%20de%20l'offre%20sp%C3%A9ciale%20Coupe%20du%20Monde%202026%20%C3%A0%2020%E2%82%AC%20%F0%9F%87%AB%F0%9F%87%B7%20Allez%20les%20Bleus!",
      '_blank'
    );
  };

  return (
    <section className="relative overflow-hidden py-0">
      {/* French flag stripes at top */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-[#002395]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#ED2939]" />
      </div>

      <div className="relative bg-gradient-to-br from-gray-950 via-[#001a6e]/60 to-gray-950">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#002395]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-[#ED2939]/15 rounded-full blur-3xl" />
        </div>

        {/* Floating soccer balls */}
        {[15, 35, 55, 75, 90].map((left, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 text-white/5 pointer-events-none"
            style={{ left: `${left}%` }}
            animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          >
            <Icon icon="mdi:soccer" className="w-16 h-16" />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left: Trophy + Title */}
            <div className="flex items-center space-x-5">
              <motion.div
                animate={{ rotate: [-8, 8, -8], y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex-shrink-0"
              >
                <Icon icon="mdi:trophy" className="w-14 h-14 text-yellow-400 drop-shadow-lg" />
              </motion.div>

              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-yellow-400 text-xs font-black tracking-widest">⭐ OFFRE LIMITÉE</span>
                  <span className="bg-[#ED2939] text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    NOUVEAU
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
                  Coupe du Monde 2026
                  <span className="ml-2">🇫🇷</span>
                </h3>
                <p className="text-gray-300 text-sm mt-0.5">
                  Tous les matchs de <span className="text-yellow-400 font-bold">Mbappé & les Bleus</span> en HD & 4K
                </p>
              </div>
            </div>

            {/* Center: Jersey + price */}
            <div className="flex items-center space-x-4">
              {/* Mbappé badge */}
              <div className="bg-[#002395] border-2 border-white/20 rounded-2xl px-4 py-3 text-center hidden sm:block">
                <div className="text-3xl font-black text-white leading-none">10</div>
                <div className="text-white/60 text-[9px] tracking-widest font-bold">MBAPPÉ</div>
              </div>

              <div className="text-center">
                <div className="flex items-baseline space-x-2 justify-center">
                  <span className="text-white/30 text-lg line-through">€29.98</span>
                  <motion.span
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl font-black text-white"
                  >
                    20€
                  </motion.span>
                </div>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400 text-xs font-semibold">2 mois • Accès immédiat</span>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center space-y-2">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-7 py-3.5 rounded-2xl font-black text-base shadow-xl shadow-green-600/25 transition-all"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                <span>COMMANDER MAINTENANT</span>
              </motion.button>
              <span className="text-gray-500 text-xs">Via WhatsApp • Réponse instantanée</span>
            </div>
          </div>
        </div>
      </div>

      {/* French flag stripes at bottom */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-[#002395]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#ED2939]" />
      </div>
    </section>
  );
}
