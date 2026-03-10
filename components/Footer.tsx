'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('footer.pages'),
      links: [
        { name: t('nav.channels'), href: '#channels' },
        { name: t('nav.features'), href: '#features' },
        { name: t('nav.pricing'), href: '#pricing' },
        { name: t('nav.start_free_trial'), href: '#pricing' }
      ]
    },
    {
      title: t('footer.support'),
      links: [
        { name: 'FAQ', href: '#faq' },
        { name: t('nav.contact'), href: 'https://wa.me/212644870099' },
        { name: 'Help Center', href: '/help' },
        { name: 'support@ninhotv.net', href: 'mailto:support@ninhotv.net' }
      ]
    },
    {
      title: t('footer.legal'),
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Refund Policy', href: '/refund' },
        { name: 'DMCA', href: '/dmca' }
      ]
    },
    {
      title: t('footer.contact_us'),
      links: [
        { name: 'support@ninhotv.net', href: 'mailto:support@ninhotv.net' },
        { name: 'WhatsApp', href: 'https://wa.me/212644870099' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'mdi:whatsapp', href: 'https://wa.me/212644870099', label: 'WhatsApp' },
    { icon: 'mdi:telegram', href: 'https://t.me/ninhotv', label: 'Telegram' },
    { icon: 'mdi:email', href: 'mailto:support@ninhotv.net', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Icon icon="mdi:television-classic" className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">Ninho<span className="text-red-500">TV</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
                >
                  <Icon icon={social.icon} className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} NinhoTV. {t('footer.all_rights_reserved')}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Icon icon="mdi:shield-check" className="w-4 h-4 text-green-500" />
                <span>{t('footer.secure_payment')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Icon icon="mdi:server" className="w-4 h-4 text-blue-500" />
                <span>{t('footer.uk_servers')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Icon icon="mdi:headset" className="w-4 h-4 text-purple-500" />
                <span>{t('footer.support_24_7')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
