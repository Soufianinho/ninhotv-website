'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFreeTrial = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    setTimeout(() => {
      window.location.href = '/free-trial';
    }, 300);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.1)' }}
        >
          <source src="https://www.apple.com/105/media/us/apple-tv-4k/2022/90c4e81a-c161-4f7f-9ea3-137ffd1054f5/anim/dolby/large_2x.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10"
        >
          <Icon icon="mdi:play-circle" className="w-12 h-12 text-red-500/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10"
        >
          <Icon icon="mdi:television" className="w-16 h-16 text-blue-500/30" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
           

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t('hero.title')}
              <span className="block text-red-500">{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
              <span className="block text-green-400 font-medium mt-2">✓ {t('features.hd_quality')} ✓ {t('features.uk_servers')} ✓ {t('features.support')} ✓ {t('features.compatible')}</span>
            </motion.p>

            {/* Special Offer Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 max-w-md mx-auto lg:mx-0 border-2 border-red-400/50"
              >
                {/* Flash Badge */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-3 -right-3 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  ⚡ OFFRE FLASH
                </motion.div>
                
                <div className="text-center">
                  <div className="text-white/90 text-sm font-semibold mb-2">OFFRE LIMITÉE</div>
                  <div className="text-white text-3xl font-bold mb-2">12 Mois</div>
                  <div className="text-white text-4xl font-black mb-3">39.99€</div>
                  <div className="text-yellow-300 text-lg font-bold mb-3 animate-pulse">
                    🔥 ÉCONOMISEZ 40% 🔥
                  </div>
                  <div className="text-white/80 text-sm mb-4">
                    ⏰ Valable 1 JOUR SEULEMENT
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(`https://wa.me/212644870099?text=🔥 OFFRE SPÉCIALE 🔥%0A%0ABonjour! Je souhaite souscrire à l'abonnement 12 Mois à 39.99€ (normalement 79.99€)%0A%0A📌 OFFRE FLASH - Valable 1 JOUR SEULEMENT!%0A%0A✅ 50,000+ Chaînes en Direct%0A✅ 160,000+ Films & VOD%0A✅ Qualité HD & 4K%0A✅ Support 24/7%0A✅ Compatible Tous Appareils%0A%0AVeuillez activer mon compte immédiatement! ⚡`, '_blank')}
                    className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Profiter Maintenant →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile-Specific Free Trial Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:hidden mb-8"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Pulsing Ring Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-full"
                />
                
                <motion.button
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleFreeTrial}
                  className="relative w-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl border-2 border-red-400/50 hover:border-red-300/70 transition-all duration-400 overflow-hidden group"
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                      backgroundSize: '20px 20px',
                      animation: 'slide 2s linear infinite'
                    }}></div>
                  </div>
                  
                  <div className="relative flex items-center justify-center space-x-3">
                    <motion.div
                      animate={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon icon="mdi:play-circle" className="w-7 h-7 text-white drop-shadow-2xl" />
                    </motion.div>
                    <span className="tracking-wide font-bold">{t('hero.start_trial')}</span>
                    
                    {/* Mobile Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-yellow-400 text-red-900 text-xs px-2 py-1 rounded-full font-bold"
                    >
                      FREE
                    </motion.div>
                  </div>
                  
                  {/* Side Glow Effects */}
                  <motion.div
                    animate={{ 
                      x: [-20, 20, -20],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-0 w-3 h-3 bg-yellow-400/40 rounded-full blur-md"
                  />
                  <motion.div
                    animate={{ 
                      x: [20, -20, 20],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute top-1/2 right-0 w-3 h-3 bg-blue-400/40 rounded-full blur-md"
                  />
                </motion.button>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-5, -15, -5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 left-1/2 w-2 h-2"
                >
                  <div className="w-full h-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-lg"></div>
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [-10, -5, -10],
                    rotate: [360, 180, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7
                  }}
                  className="absolute -top-6 right-1/2 w-1.5 h-1.5"
                >
                  <div className="w-full h-full bg-gradient-to-r from-blue-300 to-purple-400 rounded-full shadow-lg"></div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              {/* Premium Free Trial Button - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative hidden lg:block"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl scale-110"></div>
                
                <motion.button
                  whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFreeTrial}
                  className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-10 py-4.5 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-red-500/40 border border-red-400/30 hover:border-red-300/50 group"
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="mr-3"
                    >
                      <Icon icon="mdi:play-circle" className="w-6 h-6 text-white drop-shadow-lg" />
                    </motion.div>
                    <span className="tracking-wide">{t('hero.start_trial')}</span>
                    
                    {/* Sparkle Icons */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Icon icon="mdi:star-four-points" className="w-3 h-3 text-yellow-300" />
                    </motion.div>
                  </div>
                </motion.button>
                
                {/* Floating Particles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -left-2 w-2 h-2"
                >
                  <div className="w-full h-full bg-yellow-400/60 rounded-full blur-sm"></div>
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -top-3 -right-3 w-1.5 h-1.5"
                >
                  <div className="w-full h-full bg-blue-400/60 rounded-full blur-sm"></div>
                </motion.div>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/pricing'}
                className="border-2 border-gray-600/50 hover:border-red-500/70 bg-gray-800/50 hover:bg-gray-700/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="mdi:television" className="inline-block w-5 h-5 mr-2" />
                {t('common.view_pricing')}
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              {[
                { icon: "mdi:television", label: "33,000+ Channels", value: "Live TV" },
                { icon: "mdi:movie", label: "150,000+ Titles", value: "Movies & Shows" },
                { icon: "mdi:earth", label: "Europe & Global", value: "Worldwide Access" },
                { icon: "mdi:devices", label: "All Devices", value: "Multi-Platform" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <Icon icon={feature.icon} className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-white font-semibold">{feature.value}</div>
                  <div className="text-gray-400 text-sm">{feature.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                
                
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -right-10 z-20"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-xl shadow-xl">
                  <Icon icon="mdi:star" className="w-8 h-8 text-white mb-2" />
                  <div className="text-white font-bold">4.9/5</div>
                  <div className="text-red-100 text-sm">Customer Rating</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-10 -left-10 z-20"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-xl">
                  <Icon icon="mdi:shield-check" className="w-8 h-8 text-white mb-2" />
                  <div className="text-white font-bold">100%</div>
                  <div className="text-blue-100 text-sm">Secure Service</div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500"
        >
          <Icon icon="mdi:chevron-down" className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
