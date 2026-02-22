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

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    // Check if we're on the home page
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      scrollToSection('#home');
    } else {
      navigateToPage('/');
    }
  };

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
              <p className="text-gray-400 mb-8">Premium IPTV Service</p>
              
              <nav className="space-y-4">
                {[
                  { name: 'Home', href: '#home', action: 'custom', handler: handleHomeClick },
                  { name: 'Channels', href: '#channels', action: 'scroll' },
                  { name: 'IPTV reseller', href: '/reseller', action: 'navigate' },
                  { name: 'Features', href: '#features', action: 'scroll' },
                  { name: 'Pricing', href: '#pricing', action: 'scroll' },
                  { name: 'FAQ', href: '#faq', action: 'scroll' }
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      if (item.action === 'custom' && item.handler) {
                        item.handler();
                      } else if (item.action === 'navigate') {
                        navigateToPage(item.href);
                      } else {
                        scrollToSection(item.href);
                      }
                    }}
                    className="block w-full text-lg text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
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
