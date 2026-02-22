'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const features = [
  {
    icon: 'mdi:television-classic',
    title: '33,000+ Live Channels',
    description: 'Access thousands of live TV channels from around the world, including all UK channels',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: 'mdi:movie-open',
    title: '150,000+ Movies & VOD',
    description: 'Huge library of movies, series, and video-on-demand content',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: 'mdi:server',
    title: 'Fast UK Servers',
    description: 'Lightning-fast servers located in the UK for optimal performance',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: 'mdi:devices',
    title: 'All Devices Supported',
    description: 'Watch on TV, smartphone, tablet, computer, and more',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: 'mdi:shield-check',
    title: '100% Secure Service',
    description: 'Encrypted connections and secure payment processing',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: 'mdi:headset',
    title: '24/7 UK Support',
    description: 'Round-the-clock customer support from our UK-based team',
    color: 'from-pink-500 to-pink-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-red-500">NinhoTV</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the best IPTV service in the UK with premium features and unmatched quality
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-500/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon icon={feature.icon} className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '33,000+', label: 'Live Channels' },
              { number: '150,000+', label: 'Movies & VOD' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
