'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'mdi:rocket-launch',
    color: 'text-blue-500',
    articles: [
      {
        title: 'How to Activate Your Subscription',
        content: 'After purchasing your subscription, you will receive an activation email with your M3U URL and login credentials. Simply enter these details in your IPTV player to start watching.',
        tags: ['setup', 'activation']
      },
      {
        title: 'Installing IPTV Apps',
        content: 'Download compatible IPTV apps like IPTV Smarters, TiviMate, or VLC Media Player. Each app has different features, so choose based on your device and preferences.',
        tags: ['installation', 'apps']
      },
      {
        title: 'First Time Setup Guide',
        content: 'Follow our step-by-step guide to configure your IPTV service on various devices including Smart TVs, smartphones, and streaming boxes.',
        tags: ['setup', 'beginner']
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: 'mdi:wrench',
    color: 'text-orange-500',
    articles: [
      {
        title: 'Buffering Issues',
        content: 'Buffering can be caused by slow internet, server load, or app issues. Try restarting your router, clearing app cache, or switching to a different server.',
        tags: ['buffering', 'performance']
      },
      {
        title: 'Connection Problems',
        content: 'If you can\'t connect, check your internet connection, verify your login details, and ensure your subscription is active. Contact support if issues persist.',
        tags: ['connection', 'login']
      },
      {
        title: 'Audio/Video Sync Issues',
        content: 'Audio and video sync problems can be fixed by restarting the app, checking your device settings, or updating your IPTV player to the latest version.',
        tags: ['sync', 'quality']
      }
    ]
  },
  {
    id: 'devices',
    title: 'Device Setup',
    icon: 'mdi:devices',
    color: 'text-green-500',
    articles: [
      {
        title: 'Smart TV Setup',
        content: 'Install IPTV apps from your TV\'s app store, enter your M3U URL, and configure player settings for optimal viewing experience.',
        tags: ['smart-tv', 'setup']
      },
      {
        title: 'Android/iOS Setup',
        content: 'Download IPTV apps from Google Play or App Store, import your playlist, and customize the interface for mobile viewing.',
        tags: ['mobile', 'android', 'ios']
      },
      {
        title: 'Fire Stick & Android TV',
        content: 'Sideload IPTV apps or install from app store, configure remote control settings, and optimize for streaming quality.',
        tags: ['firestick', 'android-tv']
      }
    ]
  },
  {
    id: 'features',
    title: 'Features & Guides',
    icon: 'mdi:star',
    color: 'text-purple-500',
    articles: [
      {
        title: 'Using EPG (Electronic Program Guide)',
        content: 'Learn how to navigate the program guide, set reminders, and schedule recordings with the Electronic Program Guide feature.',
        tags: ['epg', 'guide']
      },
      {
        title: 'Catch-up TV & VOD',
        content: 'Access catch-up TV for missed programs and Video on Demand content. Browse categories and search for specific content.',
        tags: ['catchup', 'vod']
      },
      {
        title: 'Multi-Screen Viewing',
        content: 'Watch multiple channels simultaneously with picture-in-picture or split-screen features on supported devices.',
        tags: ['multi-screen', 'features']
      }
    ]
  },
  {
    id: 'account',
    title: 'Account Management',
    icon: 'mdi:account-cog',
    color: 'text-red-500',
    articles: [
      {
        title: 'Managing Your Subscription',
        content: 'View your subscription details, check expiry dates, and renew or upgrade your service through your account dashboard.',
        tags: ['subscription', 'management']
      },
      {
        title: 'Changing Password',
        content: 'Secure your account by regularly updating your password. Use strong passwords and enable two-factor authentication when available.',
        tags: ['security', 'password']
      },
      {
        title: 'Device Management',
        content: 'Add or remove devices from your account, monitor active connections, and set device limits for security.',
        tags: ['devices', 'security']
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    icon: 'mdi:credit-card',
    color: 'text-yellow-500',
    articles: [
      {
        title: 'Payment Methods',
        content: 'We accept various payment methods including credit cards, PayPal, and cryptocurrency. Choose the most convenient option for you.',
        tags: ['payment', 'methods']
      },
      {
        title: 'Subscription Renewal',
        content: 'Set up automatic renewal or manually renew your subscription. Receive reminders before expiry to avoid service interruption.',
        tags: ['renewal', 'subscription']
      },
      {
        title: 'Refund Process',
        content: 'Learn about our refund policy and the process for requesting refunds if you experience service issues.',
        tags: ['refund', 'billing']
      }
    ]
  }
];

export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState(helpCategories[0]);
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = selectedCategory.articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help <span className="text-red-500">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions and learn how to get the most out of your NinhoTV service
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            />
            <Icon icon="mdi:magnify" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-8">
              <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
              <div className="space-y-2">
                {helpCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchTerm('');
                      setExpandedArticle(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      selectedCategory.id === category.id
                        ? 'bg-red-500 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon icon={category.icon} className={`w-5 h-5 mr-3 ${selectedCategory.id === category.id ? 'text-white' : category.color}`} />
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Articles Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <Icon icon={selectedCategory.icon} className={`w-8 h-8 ${selectedCategory.color} mr-3`} />
                <h2 className="text-2xl font-bold text-white">{selectedCategory.title}</h2>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <Icon icon="mdi:search-off" className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No articles found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedArticle(expandedArticle === article.title ? null : article.title)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-600 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                        <Icon
                          icon={expandedArticle === article.title ? "mdi:chevron-up" : "mdi:chevron-down"}
                          className="w-5 h-5 text-gray-400"
                        />
                      </button>
                      
                      {expandedArticle === article.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-300 leading-relaxed mb-4">{article.content}</p>
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
              <p className="text-white/90 mb-6">
                Can't find what you're looking for? Our support team is here to help you 24/7
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://wa.me/212639040826?text=Hi! I need help with my NinhoTV service.', '_blank')}
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5 mr-2" />
                  WhatsApp Support
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/'}
                  className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors flex items-center justify-center"
                >
                  <Icon icon="mdi:home" className="w-5 h-5 mr-2" />
                  Back to Home
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
