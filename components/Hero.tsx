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
    setTimeout(() => {
      window.location.href = '/free-trial';
    }, 300);
  };

  return (
    <section id="home" className="relative min-h-[65vh] flex items-center justify-center bg-black overflow-hidden pt-20">
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
              className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {t('hero.title')}
              <span className="block text-red-500">{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-xl text-gray-300 mb-5 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
              <span className="block text-green-400 font-medium mt-2">✓ {t('features.hd_quality')} ✓ {t('features.uk_servers')} ✓ {t('features.support')} ✓ {t('features.compatible')}</span>
            </motion.p>

          

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
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0"
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

          {/* Right Content - Streaming UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-red-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-3xl"></div>

              {/* Floating badge: iOS/Android */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-6 z-20 bg-gray-900/90 border border-gray-700 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-2xl"
              >
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:cellphone" className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-xs font-semibold">iOS & Android</span>
                </div>
              </motion.div>

              {/* Floating badge: Smart TV */}
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-6 z-20 bg-gray-900/90 border border-gray-700 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-2xl"
              >
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:television" className="w-4 h-4 text-green-400" />
                  <span className="text-white text-xs font-semibold">Smart TV</span>
                </div>
              </motion.div>

              {/* Floating badge: Uptime */}
              <motion.div
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -right-8 z-20 bg-red-500 rounded-2xl px-3 py-2 shadow-2xl"
              >
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-bold">99.9% Uptime</span>
                </div>
              </motion.div>

              {/* Main Streaming UI */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-gray-950 rounded-2xl border border-gray-800/80 shadow-2xl overflow-hidden"
              >
                {/* App Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-950 px-4 py-3 flex items-center justify-between border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <Icon icon="mdi:television-classic" className="w-5 h-5 text-red-500" />
                    <span className="text-white text-sm font-bold">Ninho<span className="text-red-500">TV</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 bg-red-500/20 border border-red-500/40 rounded-md px-2 py-0.5">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 text-xs font-bold">LIVE</span>
                    </div>
                    <span className="text-gray-500 text-xs border border-gray-700 rounded px-1.5 py-0.5">HD 4K</span>
                  </div>
                </div>

                {/* Featured: Live Sports */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900/80 to-purple-950 p-4">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 120%, rgba(59,130,246,0.4) 0%, transparent 60%)' }}></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Icon icon="mdi:soccer" className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-bold tracking-wider">CHAMPIONS LEAGUE</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-300 text-xs">
                        <Icon icon="mdi:clock-outline" className="w-3 h-3" />
                        <span>67&apos;</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <div className="w-10 h-10 bg-blue-500/25 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-blue-300 text-[10px] font-black">MCI</span>
                        </div>
                        <span className="text-white text-xs">Man City</span>
                      </div>
                      <div className="text-center px-4">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-white text-4xl font-black">2</span>
                          <span className="text-gray-500 text-2xl">-</span>
                          <span className="text-white text-4xl font-black">1</span>
                        </div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="w-10 h-10 bg-red-500/25 border border-red-400/30 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-red-300 text-[10px] font-black">ARS</span>
                        </div>
                        <span className="text-white text-xs">Arsenal</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="bg-gray-700/40 rounded-full h-1.5 mb-1 overflow-hidden">
                      <motion.div
                        initial={{ width: '60%' }}
                        animate={{ width: '70%' }}
                        transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
                        className="bg-gradient-to-r from-red-500 to-orange-400 h-full rounded-full"
                      />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[10px]">0&apos;</span>
                      <span className="text-gray-500 text-[10px]">HT 45&apos;</span>
                      <span className="text-gray-600 text-[10px]">90&apos;</span>
                    </div>
                  </div>
                </div>

                {/* Category Tabs */}
                <div className="px-3 pt-3 pb-2 border-b border-gray-800/60">
                  <div className="flex space-x-2">
                    {['Sports', 'Movies', 'UK TV', 'News', 'Kids'].map((cat, i) => (
                      <span
                        key={cat}
                        className={`text-[11px] px-2.5 py-1 rounded-full font-medium cursor-default ${
                          i === 0
                            ? 'bg-red-500 text-white'
                            : 'text-gray-500'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini Channel Grid */}
                <div className="p-3 grid grid-cols-4 gap-2">
                  {[
                    { abbr: 'BBC', label: 'BBC One', color: 'from-red-900/80 to-red-950' },
                    { abbr: 'SKY', label: 'Sky Sports', color: 'from-blue-900/80 to-blue-950' },
                    { abbr: 'TNT', label: 'TNT Sports', color: 'from-purple-900/80 to-purple-950' },
                    { abbr: 'BT', label: 'BT Sport', color: 'from-orange-900/80 to-orange-950' },
                    { abbr: 'CNN', label: 'CNN Int\'l', color: 'from-gray-800 to-gray-900' },
                    { abbr: 'ITV', label: 'ITV Hub', color: 'from-green-900/80 to-green-950' },
                    { abbr: 'CH4', label: 'Channel 4', color: 'from-teal-900/80 to-teal-950' },
                    { abbr: '+8k', label: 'More...', color: 'from-gray-700/60 to-gray-800' },
                  ].map((ch, i) => (
                    <div
                      key={i}
                      className={`bg-gradient-to-br ${ch.color} rounded-lg p-2 border border-white/5 flex flex-col justify-between`}
                      style={{ aspectRatio: '16/9' }}
                    >
                      <span className="text-white text-[11px] font-black">{ch.abbr}</span>
                      <span className="text-white/50 text-[9px] leading-tight">{ch.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Status Bar */}
                <div className="px-4 py-2.5 bg-gray-950 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-gray-500 text-xs">33,000+ channels available</span>
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold tracking-wide">4K READY</span>
                </div>
              </motion.div>
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
