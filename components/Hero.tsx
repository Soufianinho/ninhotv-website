'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Hero() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10"></div>
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
              The Best
              <span className="block text-red-500">IPTV UK</span>
              Experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Get instant access to <span className="text-red-500 font-semibold">33,000+ Live TV Channels</span> and 
              <span className="text-red-500 font-semibold">150,000+ Movies & VODs</span>. 
              Premium UK IPTV service with fast servers, 24/7 support, and all your favorite British channels.
              <span className="block text-green-400 font-medium mt-2">✓ Fast UK Servers ✓ HD Quality ✓ 24/7 Support ✓ All UK Channels</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFreeTrial}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                <Icon icon="mdi:play-circle" className="inline-block w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#channels')}
                className="border-2 border-gray-600 hover:border-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                <Icon icon="mdi:television" className="inline-block w-5 h-5 mr-2" />
                View Channels
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
                { icon: "mdi:earth", label: "UK & Global", value: "Worldwide Access" },
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
                <img
                  src="https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png"
                  alt="NinhoTV IPTV UK Service"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
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
