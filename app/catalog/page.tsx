'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Catalog() {
  const categories = [
    {
      title: '🔥 Trending Movies',
      items: ['Oppenheimer', 'Avatar: The Way of Water', 'John Wick: Chapter 4', 'The Batman', 'Dune']
    },
    {
      title: '📺 Popular Series',
      items: ['Stranger Things', 'The Last of Us', 'House of the Dragon', 'Peaky Blinders', 'Breaking Bad']
    },
    {
      title: '🎬 Action & Adventure',
      items: ['Mission: Impossible', 'Mad Max: Fury Road', 'Top Gun: Maverick', 'Gladiator']
    },
    {
      title: '😂 Comedy Favorites',
      items: ['The Hangover', 'Superbad', 'Free Guy', 'Deadpool']
    },
    {
      title: '👨‍👩‍👧 Family Movies',
      items: ['Toy Story', 'Frozen', 'Encanto', 'The Lion King']
    },
    {
      title: '👻 Horror & Thriller',
      items: ['The Conjuring', 'A Quiet Place', 'It', 'Get Out']
    },
    {
      title: '🕵️ Crime & Drama',
      items: ['The Godfather', 'Scarface', 'Narcos', 'Prison Break']
    },
    {
      title: '🚀 Sci-Fi Collection',
      items: ['Interstellar', 'The Matrix', 'Blade Runner 2049', 'Arrival']
    },
    {
      title: '🏆 Award Winning',
      items: ['Titanic', 'Forrest Gump', 'La La Land', 'Joker']
    },
    {
      title: '⭐ All-Time Classics',
      items: ['The Shawshank Redemption', 'Pulp Fiction', 'Fight Club', 'The Dark Knight']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 border-b border-gray-800 py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <Icon icon="mdi:movie" className="w-10 h-10 text-red-500 mr-3" />
            Movies & Series Catalog
          </h1>
          <p className="text-gray-400 text-lg">Explore popular movies and trending TV series</p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.section
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <span className="w-1 h-8 bg-red-500 mr-4 rounded-full"></span>
                {category.title}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#374151',
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gray-800 p-4 rounded-lg cursor-pointer border border-gray-700 hover:border-red-500 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon icon="mdi:play-circle" className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm leading-tight">{item}</h3>
                        <p className="text-gray-500 text-xs">HD Available</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Access to All This Content?
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Get instant access to 33,000+ live channels and 150,000+ movies & series
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/212669644802?text=Hi! I want to subscribe to NinhoTV IPTV service.', '_blank')}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              View Pricing Plans
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/212669644802?text=Hi! I want to start a FREE 24-HOUR TRIAL of NinhoTV IPTV.', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Icon icon="mdi:movie" className="w-5 h-5 text-red-500" />
            <p>Movie & Series Catalog — Discover trending entertainment</p>
            <Icon icon="mdi:movie" className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </footer>
    </div>
  );
}
