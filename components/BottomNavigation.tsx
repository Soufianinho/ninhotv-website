'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
  };

  const handleHomeClick = () => {
    // Check if we're on the home page
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      scrollToSection('#home');
    } else {
      navigateToPage('/');
    }
  };

  const handleFreeTrial = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    setTimeout(() => {
      navigateToPage('/free-trial');
    }, 300);
  };

  const navItems = [
    { 
      id: 'home', 
      name: 'Home', 
      icon: 'mdi:home', 
      action: 'custom',
      handler: handleHomeClick
    },
    { 
      id: 'channels', 
      name: 'Channels', 
      icon: 'mdi:television', 
      action: 'scroll',
      href: '#channels'
    },
    { 
      id: 'free-trial', 
      name: 'Free Trial', 
      icon: 'mdi:play-circle', 
      action: 'custom',
      handler: handleFreeTrial
    },
    { 
      id: 'features', 
      name: 'Features', 
      icon: 'mdi:star', 
      action: 'scroll',
      href: '#features'
    },
    { 
      id: 'faq', 
      name: 'FAQ', 
      icon: 'mdi:help-circle', 
      action: 'scroll',
      href: '#faq'
    }
  ];

  const handleNavClick = (item: any) => {
    setActiveTab(item.id);
    if (item.action === 'custom' && item.handler) {
      item.handler();
    } else if (item.action === 'navigate') {
      navigateToPage(item.href);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 z-50 lg:hidden"
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick(item)}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
              activeTab === item.id 
                ? 'text-red-500' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon 
              icon={item.icon} 
              className={`w-5 h-5 mb-1 ${activeTab === item.id ? 'text-red-500' : ''}`}
            />
            <span className="text-xs font-medium">{item.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
