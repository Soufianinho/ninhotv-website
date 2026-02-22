'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const plans = [
  {
    name: '1 Month',
    price: '£9.99',
    originalPrice: '£19.99',
    period: '/month',
    features: [
      '33,000+ Live Channels',
      '150,000+ Movies & VOD',
      'HD & 4K Quality',
      '1 Connection',
      '24/7 Support',
      'EPG Guide'
    ],
    popular: false,
    color: 'from-gray-600 to-gray-700'
  },
  {
    name: '3 Months',
    price: '£24.99',
    originalPrice: '£59.97',
    period: '/3 months',
    features: [
      '33,000+ Live Channels',
      '150,000+ Movies & VOD',
      'HD & 4K Quality',
      '1 Connection',
      '24/7 Support',
      'EPG Guide'
    ],
    popular: false,
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: '6 Months',
    price: '£44.99',
    originalPrice: '£119.94',
    period: '/6 months',
    features: [
      '33,000+ Live Channels',
      '150,000+ Movies & VOD',
      'HD & 4K Quality',
      '2 Connections',
      '24/7 Support',
      'EPG Guide'
    ],
    popular: true,
    color: 'from-red-500 to-red-600'
  },
  {
    name: '12 Months',
    price: '£79.99',
    originalPrice: '£239.88',
    period: '/year',
    features: [
      '33,000+ Live Channels',
      '150,000+ Movies & VOD',
      'HD & 4K Quality',
      '3 Connections',
      '24/7 Support',
      'EPG Guide'
    ],
    popular: false,
    color: 'from-purple-600 to-purple-700'
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleSubscribe = (planName: string) => {
    // Handle subscription logic
    console.log(`Subscribing to ${planName}`);
  };

  const handleFreeTrial = () => {
    window.open('https://wa.me/212639040826?text=Hi! I want to start a FREE 24-HOUR TRIAL of NinhoTV UK IPTV.', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            Simple <span className="text-red-500">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your entertainment needs. All plans include full access to our UK IPTV service.
          </p>
        </motion.div>

        {/* Free Trial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon icon="mdi:gift" className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Try Before You Buy</h3>
            </div>
            <p className="text-green-100 mb-6">
              Get a <span className="font-bold">FREE 24-HOUR TRIAL</span> with full access to all channels and features
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFreeTrial}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Icon icon="mdi:play-circle" className="inline-block w-5 h-5 mr-2" />
              Start Free Trial Now
            </motion.button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative bg-gray-800 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500 shadow-2xl shadow-red-500/20' 
                  : 'border-gray-700 hover:border-red-500/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through text-sm">{plan.originalPrice}</div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.popular && <Icon icon="mdi:crown" className="inline-block w-4 h-4 mr-2" />}
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { icon: 'mdi:shield-check', label: 'Secure Payment' },
              { icon: 'mdi:restart', label: 'Instant Activation' },
              { icon: 'mdi:cancel', label: 'Cancel Anytime' },
              { icon: 'mdi:headset', label: '24/7 Support' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Icon icon={badge.icon} className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-gray-300 text-sm">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
