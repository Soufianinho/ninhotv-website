'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function FreeTrial() {
  const handleFreeTrial = () => {
    // Trigger Meta Pixel Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    
    // Open WhatsApp with pre-filled message
    window.open('https://wa.me/212639040826?text=Hi! I want to start a FREE 24-HOUR TRIAL of NinhoTV UK IPTV. Please provide me with the trial access details.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Icon icon="mdi:television-classic" className="w-12 h-12 text-red-500" />
              <span className="text-3xl font-bold text-white">Ninho<span className="text-red-500">TV</span></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Start Your <span className="text-red-500">FREE</span> Trial
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the best IPTV service in UK with no commitment
            </p>
          </motion.div>

          {/* Main Trial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl"
          >
            <div className="mb-8">
              <div className="inline-flex items-center bg-green-500/20 rounded-full px-4 py-2 mb-6">
                <Icon icon="mdi:gift" className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">24-HOUR FREE TRIAL</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Try Before You Buy
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get instant access to all our premium features completely free for 24 hours. 
                No credit card required, no hidden fees, just pure entertainment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: 'mdi:television', text: '33,000+ Live Channels' },
                { icon: 'mdi:movie', text: '150,000+ Movies & VOD' },
                { icon: 'mdi:high-definition', text: 'HD & 4K Quality' },
                { icon: 'mdi:devices', text: 'Multiple Device Support' },
                { icon: 'mdi:server', text: 'Fast UK Servers' },
                { icon: 'mdi:headset', text: '24/7 Support' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <Icon icon={feature.icon} className="w-6 h-6 text-red-500" />
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFreeTrial}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <Icon icon="mdi:play-circle" className="w-6 h-6" />
                <span>Start Your Free Trial Now</span>
              </motion.button>
              
              <p className="text-gray-400 mt-4 text-sm">
                No credit card required • Instant activation • Cancel anytime
              </p>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: 'mdi:shield-check', title: '100% Secure', desc: 'Your data is protected' },
              { icon: 'mdi:clock-fast', title: 'Instant Setup', desc: 'Start watching immediately' },
              { icon: 'mdi:help-circle', title: '24/7 Support', desc: 'We\'re here to help' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <Icon icon={item.icon} className="w-8 h-8 text-red-500 mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
