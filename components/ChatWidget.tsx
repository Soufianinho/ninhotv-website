'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function ChatWidget() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/212639040826?text=Hi! I am interested in NinhoTV IPTV service.', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/ninhotv', '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('NinhoTV Support Request');
    const body = encodeURIComponent(`Hello NinhoTV Team,

I would like to inquire about your IPTV service. Could you please provide me with more information?

Thank you
`);
    window.location.href = `mailto:support@ninhotv.net?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col space-y-3 lg:bottom-6 lg:right-6">
      {/* Email Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleEmailClick}
        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-200"
        title="Email Support"
      >
        <Icon icon="mdi:email" className="w-6 h-6" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-200"
        title="Chat on WhatsApp"
      >
        <Icon icon="mdi:whatsapp" className="w-6 h-6" />
      </motion.button>

      {/* Telegram Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleTelegramClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
        title="Join Telegram"
      >
        <Icon icon="mdi:telegram" className="w-6 h-6" />
      </motion.button>

      {/* Pulse Animation for WhatsApp */}
      <motion.div
        className="absolute bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
