'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const channelCategories = [
  {
    name: 'UK Sports Channels',
    icon: 'mdi:soccer',
    channels: ['Sky Sports UK', 'BT Sport UK', 'Premier League UK', 'BBC Sport', 'ITV Sport', 'Eurosport UK', 'BoxNation UK','UFC'],
    description: 'Watch all UK sports events live including Premier League, FA Cup, and more',
    image: 'https://www.androidauthority.com/wp-content/uploads/2025/05/Samsung-TV-Plus-new-sports-channels.jpg'
  },
  {
    name: 'UK Entertainment',
    icon: 'mdi:movie-open',
    channels: ['BBC iPlayer', 'ITV Hub', 'All 4', 'Channel 4', 'Channel 5', 'Sky Atlantic', 'NOW TV'],
    description: 'Popular UK entertainment channels and streaming services',
    image: 'https://static.independent.co.uk/2023/09/18/00/34301626cbbb3d454de44a8998d98c47Y29udGVudHNlYXJjaGFwaSwxNjk0ODc1MDIw-2.41916672.jpg?width=1200&auto=webp'
  },
  {
    name: 'UK News Channels',
    icon: 'mdi:newspaper',
    channels: ['BBC News', 'Sky News', 'ITV News', 'Channel 4 News', 'GB News', 'BBC World'],
    description: 'Stay updated with UK and global news 24/7',
    image: 'https://www.nationalworld.com/jpim-static/image/2023/07/10/16/NWLD-composite-news-km.jpg?width=1200&auto=webp&quality=75&trim=0,0,0,0&crop='
  },
  {
    name: 'International Channels',
    icon: 'mdi:earth',
    channels: ['France 24', 'Germany TV', 'Spain TV', 'Italy TV', 'Portugal TV', 'Netherlands TV', 'Belgium TV', 'Switzerland TV'],
    description: 'Channels from all European countries',
    image: 'https://tse2.mm.bing.net/th/id/OIP.lItwLxCmGHAinmo0cfWnTAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Kids & Family',
    icon: 'mdi:human-child',
    channels: ['CBeebies', 'CBBC', 'Nickelodeon UK', 'Cartoon Network UK', 'Disney Channel UK', 'Pop Kids'],
    description: 'Safe and entertaining content for UK kids and families',
    image: 'https://tse1.mm.bing.net/th/id/OIP.qx1Oku1Y33xX2tj6t1gAcgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Music & Culture',
    icon: 'mdi:music',
    channels: ['MTV UK', 'VH1', 'Kiss TV', 'The Box', 'Heart TV', 'Capital TV', 'Magic TV'],
    description: 'UK music channels and cultural programming',
    image: 'https://th.bing.com/th/id/R.5ffd7cdbdf0d68e8a9e0515963c0230d?rik=vt7iC3dNNUGtOQ&pid=ImgRaw&r=0'
  }
];

export default function Channels() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="channels" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            Our <span className="text-red-500">Channel</span> Lineup
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access over <span className="text-red-500 font-semibold">33,000+ Live TV Channels</span> including all 
            <span className="text-red-500 font-semibold"> UK IPTV</span> channels from around the world, 
            featuring all your favorite <span className="text-green-400 font-semibold">British TV channels</span>, 
            sports, movies, news and entertainment.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {channelCategories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={category.icon} className="w-5 h-5 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channelCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-800 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                selectedCategory === category.name || !selectedCategory
                  ? 'border-red-500 opacity-100'
                  : 'border-gray-700 opacity-50'
              }`}
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23374151;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%231F2937;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="400" height="300"/%3E%3Ctext fill="%239CA3AF" font-family="system-ui" font-size="20" x="50%" y="50%" text-anchor="middle" dy=".3em"%3EChannel Loading...%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Icon */}
                <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm p-3 rounded-full">
                  <Icon icon={category.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-white flex-1">{category.name}</h3>
                  <span className="text-gray-400 text-sm">{category.channels.length}+ channels</span>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  {category.channels.slice(0, selectedCategory === category.name ? category.channels.length : 5).map((channel, channelIndex) => (
                    <motion.div
                      key={channel}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: channelIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{channel}</span>
                    </motion.div>
                  ))}
                  
                  {selectedCategory !== category.name && category.channels.length > 5 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedCategory(category.name)}
                      className="text-red-500 text-sm font-semibold hover:text-red-400 transition-colors duration-200 mt-2"
                    >
                      Show all {category.channels.length} channels →
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Access to All UK IPTV Channels
            </h2>
            <p className="text-white/90 mb-6">
              Start your free trial and enjoy instant access to our complete UK IPTV channel lineup
              <span className="block text-sm mt-2">🇬🇧 Trusted by thousands of UK customers ✓ No buffering ✓ HD quality ✓ 24/7 Support</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I want to start a FREE 24-HOUR TRIAL of NinhoTV UK IPTV.', '_blank')}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon icon="mdi:play-circle" className="inline-block w-5 h-5 mr-2" />
                Start Free Trial UK
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              >
                <Icon icon="mdi:crown" className="inline-block w-5 h-5 mr-2" />
                Choose UK Subscription
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
