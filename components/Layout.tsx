'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navigation from './Navigation';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <Icon icon="mdi:television-classic" className="w-16 h-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Ninho<span className="text-red-500">TV</span></h2>
              <p className="text-gray-400">Premium IPTV Service</p>
            </motion.div>
          </div>
        </motion.div>
      )}
      
      <main className="relative">
        {children}
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}
