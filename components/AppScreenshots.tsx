'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const screenshots = [
  {
    id: 1,
    url: 'https://twinstv.net/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-29-at-21.42.13.jpeg',
    title: 'Channel Selection',
    description: 'Browse through 33,000+ live channels from around the world',
    features: ['Live TV', 'Sports', 'Movies', 'News', 'Kids']
  },
  {
    id: 2,
    url: 'https://twinstv.net/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-29-at-21.42.14.jpeg',
    title: 'Live Streaming',
    description: 'Enjoy crystal-clear HD and 4K quality streaming on any device',
    features: ['HD Quality', '4K Support', 'No Buffering', 'Fast Loading']
  },
  {
    id: 3,
    url: 'https://twinstv.net/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-29-at-21.42.14-1.jpeg',
    title: 'Movies & VOD',
    description: 'Access 150,000+ movies and TV shows on demand',
    features: ['Latest Movies', 'TV Series', 'Documentaries', 'Kids Content']
  }
];

export default function AppScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-500/30">
            <Icon icon="mdi:cellphone" className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">App Preview</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Experience Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Premium App</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect blend of simplicity and power with our cutting-edge IPTV application
          </p>
        </motion.div>

        {/* Main Screenshot Display */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className="overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex transition-transform duration-700 ease-out"
              animate={{ x: `-${currentIndex * 100}%` }}
            >
              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Phone Mockup */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="relative mx-auto max-w-sm lg:max-w-md">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
                        
                        {/* Phone Frame */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-3 shadow-2xl border border-gray-800">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl"></div>
                          
                          {/* Screen */}
                          <div className="relative overflow-hidden rounded-2xl bg-black shadow-inner">
                            <img
                              src={screenshot.url}
                              alt={screenshot.title}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                            
                            {/* Screen Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                          </div>
                          
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full"></div>
                        </div>
                        
                        {/* Floating Elements */}
                        <motion.div
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Icon icon="mdi:play" className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <motion.div
                          animate={{ y: [10, -10, 10] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Icon icon="mdi:star" className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-center lg:text-left px-4"
                    >
                      <div className="inline-flex items-center bg-blue-500/20 rounded-full px-3 py-1 mb-4">
                        <Icon icon="mdi:star-four-points" className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-blue-300 text-sm font-medium">Feature {index + 1}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {screenshot.title}
                      </h3>
                      
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {screenshot.description}
                      </p>
                      
                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                        {screenshot.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 + featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-full px-4 py-2 border border-gray-600"
                          >
                            <span className="text-gray-300 text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('https://wa.me/212639040826?text=Hi! I want to start a FREE 24-HOUR TRIAL of NinhoTV UK IPTV.', '_blank')}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Icon icon="mdi:download" className="inline-block w-5 h-5 mr-2" />
                        Try It Now
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-600"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-600"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105 shadow-lg shadow-blue-500/25'
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-1 border border-gray-600">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </div>
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'mdi:cellphone-link',
                title: 'Multi-Platform',
                description: 'iOS, Android, Smart TV, Fire TV, Apple TV',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: 'mdi:shield-check',
                title: 'Secure & Private',
                description: 'End-to-end encryption and privacy protection',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: 'mdi:lightning-bolt',
                title: 'Lightning Fast',
                description: 'Optimized servers for buffer-free streaming',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Icon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Steps Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/app-download'}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon icon="mdi:download" className="inline-block w-6 h-6 mr-3" />
            Follow the following steps to download our app
          </motion.button>
          <p className="text-gray-400 mt-4 text-sm">
            Click here to get step-by-step instructions for downloading and installing our app
          </p>
        </motion.div>
      </div>
    </section>
  );
}
