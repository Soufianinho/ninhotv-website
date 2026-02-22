'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const faqs = [
  {
    question: 'What is NinhoTV IPTV?',
    answer: 'NinhoTV is a premium IPTV service that provides access to over 33,000 live TV channels and 150,000+ movies and VOD content. We offer high-quality streaming with fast UK servers and 24/7 customer support.',
    category: 'general'
  },
  {
    question: 'How do I start my free trial?',
    answer: 'Click the "Start Free Trial" button and contact us via WhatsApp. You\'ll get instant access to all our channels and features for 24 hours completely free, no credit card required.',
    category: 'trial'
  },
  {
    question: 'What devices are compatible?',
    answer: 'NinhoTV works on all devices including Smart TVs, Android TV, MAG boxes, Firestick, smartphones (iOS/Android), tablets, computers, and more. You can use up to 3 connections simultaneously.',
    category: 'technical'
  },
  {
    question: 'Do you offer UK channels?',
    answer: 'Yes! We offer all major UK channels including BBC, ITV, Channel 4, Channel 5, Sky Sports, BT Sport, and many more. All your favorite British TV channels are available.',
    category: 'channels'
  },
  {
    question: 'What internet speed do I need?',
    answer: 'For HD quality, we recommend minimum 10 Mbps internet speed. For 4K content, 25 Mbps or higher is recommended. Our service is optimized to work well even with moderate internet connections.',
    category: 'technical'
  },
  {
    question: 'How do I pay for the service?',
    answer: 'We accept various payment methods including credit/debit cards, PayPal, and cryptocurrency. All payments are secure and processed instantly. Your subscription activates immediately after payment.',
    category: 'payment'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term commitments. You can also switch between plans easily.',
    category: 'billing'
  },
  {
    question: 'What if I have technical issues?',
    answer: 'Our UK-based support team is available 24/7 to help you. Contact us via WhatsApp, email, or live chat. We typically respond within minutes and resolve most issues quickly.',
    category: 'support'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: 'mdi:help-circle' },
    { id: 'general', name: 'General', icon: 'mdi:information' },
    { id: 'trial', name: 'Free Trial', icon: 'mdi:gift' },
    { id: 'technical', name: 'Technical', icon: 'mdi:cog' },
    { id: 'channels', name: 'Channels', icon: 'mdi:television' },
    { id: 'payment', name: 'Payment', icon: 'mdi:credit-card' },
    { id: 'billing', name: 'Billing', icon: 'mdi:receipt' },
    { id: 'support', name: 'Support', icon: 'mdi:headset' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
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
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about NinhoTV IPTV service
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={category.icon} className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
              >
                <div className="flex items-center space-x-3 flex-1">
                  <Icon icon="mdi:help-circle" className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-white font-medium">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon icon="mdi:chevron-down" className="w-5 h-5 text-gray-400" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/90 mb-6">
              Our UK support team is available 24/7 to help you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I have a question about NinhoTV IPTV.', '_blank')}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="inline-block w-5 h-5 mr-2" />
                Chat on WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:support@ninhotv.com', '_blank')}
                className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              >
                <Icon icon="mdi:email" className="inline-block w-5 h-5 mr-2" />
                Email Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
