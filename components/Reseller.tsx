'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const resellerPlans = [
  {
    name: 'Starter Reseller',
    price: '£199.99',
    credits: 120,
    features: [
      '120 Credits',
      'Trial is free',
      '1 Month: 1 Credit',
      '3 Months: 3 Credits',
      '6 Months: 6 Credits',
      '12 Months: 12 Credits',
      'Customize groups',
      'Credits never expire',
      'Support chat'
    ],
    popular: false
  },
  {
    name: 'Professional Reseller',
    price: '£379.99',
    credits: 240,
    features: [
      '250 Credits',
      'Trial is free',
      '1 Month: 1 Credit',
      '3 Months: 3 Credits',
      '6 Months: 6 Credits',
      '12 Months: 12 Credits',
      'Customize groups',
      'Credits never expire',
      'Priority support chat',
      'White-label options'
    ],
    popular: true
  },
  {
    name: 'Enterprise Reseller',
    price: '£549.99',
    credits: 360,
    features: [
      '500 Credits',
      'Trial is free',
      '1 Month: 1 Credit',
      '3 Months: 3 Credits',
      '6 Months: 6 Credits',
      '12 Months: 12 Credits',
      'Customize groups',
      'Credits never expire',
      '24/7 Dedicated support',
      'White-label options',
      'API access',
      'Custom branding'
    ],
    popular: false
  }
];

export default function Reseller() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Perfect <span className="text-red-500">Plans</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-red-400 mb-6">
              Premium Reseller Panel
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Start your IPTV reselling business with our premium reseller panels. Get instant access to credits that never expire and enjoy full control over your customer groups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I want to become a NinhoTV IPTV RESELLER.', '_blank')}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                <Icon icon="mdi:whatsapp" className="inline-block w-6 h-6 mr-2" />
                Contact on WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:support@ninhotv.com?subject=IPTV Reseller Inquiry', '_blank')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <Icon icon="mdi:email" className="inline-block w-6 h-6 mr-2" />
                Email Us
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <Icon icon="mdi:account-group" className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-gray-300">Satisfied Customers</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <Icon icon="mdi:calendar" className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Since 2017</h3>
              <p className="text-gray-300">Leading IPTV Provider</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <Icon icon="mdi:earth" className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Worldwide</h3>
              <p className="text-gray-300">Global Service</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your <span className="text-red-500">Reseller Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your IPTV reselling business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resellerPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-500 shadow-2xl shadow-red-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-500">{plan.price}</span>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 mb-6">
                    <span className="text-2xl font-bold text-white">{plan.credits}</span>
                    <span className="text-gray-300 block">Credits</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300"
                    >
                      <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(`https://wa.me/212639040826?text=Hi! I want to order the ${plan.name} plan for ${plan.price}.`, '_blank')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/25'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-red-500">NinhoTV</span> Reseller?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'mdi:credit-card',
                title: 'Credits Never Expire',
                description: 'Your credits remain valid forever, giving you complete flexibility'
              },
              {
                icon: 'mdi:account-group',
                title: 'Custom Groups',
                description: 'Create and manage customer groups with ease'
              },
              {
                icon: 'mdi:headset',
                title: '24/7 Support',
                description: 'Dedicated support team to help you grow your business'
              },
              {
                icon: 'mdi:chart-line',
                title: 'Grow Your Business',
                description: 'Perfect opportunity to start your IPTV reselling business'
              },
              {
                icon: 'mdi:shield-check',
                title: 'Trusted Provider',
                description: 'Leading IPTV service since 2017 with thousands of happy customers'
              },
              {
                icon: 'mdi:rocket',
                title: 'Quick Setup',
                description: 'Get started immediately with our easy-to-use reseller panel'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300"
              >
                <Icon icon={feature.icon} className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your IPTV Reselling Business?
            </h2>
            <p className="text-white/90 mb-6">
              Join thousands of successful resellers and start earning today with NinhoTV
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I want to become a NinhoTV IPTV RESELLER.', '_blank')}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="inline-block w-5 h-5 mr-2" />
                Start Now on WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              >
                <Icon icon="mdi:home" className="inline-block w-5 h-5 mr-2" />
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
