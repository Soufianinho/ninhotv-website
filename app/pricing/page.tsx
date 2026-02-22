'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const basePlans = [
  {
    name: '1 Month',
    basePrice: 9.99,
    originalPrice: 19.99,
    period: '/month',
    color: 'from-gray-600 to-gray-700'
  },
  {
    name: '3 Months',
    basePrice: 19.99,
    originalPrice: 39.97,
    period: '/3 months',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: '6 Months',
    basePrice: 29.99,
    originalPrice: 49.94,
    period: '/6 months',
    color: 'from-red-500 to-red-600'
  },
  {
    name: '12 Months',
    basePrice: 44.99,
    originalPrice: 79.99,
    period: '/year',
    color: 'from-purple-600 to-purple-700'
  }
];

const devicePricing = {
  1: 1.0,    // Base price
  2: 1.5,    // 50% more
  3: 2.0      // 100% more
};

export default function PricingPage() {
  const [selectedDevices, setSelectedDevices] = useState(1);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Calculate plans based on selected devices
  const plans = basePlans.map(plan => ({
    ...plan,
    price: `£${(plan.basePrice * devicePricing[selectedDevices as keyof typeof devicePricing]).toFixed(2)}`,
    features: [
      '33,000+ Live Channels',
      '150,000+ Movies & VOD',
      'HD & 4K Quality',
      `${selectedDevices} Connection${selectedDevices > 1 ? 's' : ''}`,
      '24/7 Support',
      'EPG Guide'
    ],
    popular: plan.name === '12 Months'
  }));

  const handleSubscribe = (planName: string) => {
    const plan = plans.find(p => p.name === planName);
    const price = plan?.price;
    window.open(`https://wa.me/212639040826?text=Hi! I want to subscribe to the ${planName} plan for ${selectedDevices} device${selectedDevices > 1 ? 's' : ''} at ${price}.`, '_blank');
  };

  const handleFreeTrial = () => {
    window.open(`https://wa.me/212639040826?text=Hi! I want to start a FREE 24-HOUR TRIAL of NinhoTV UK IPTV for ${selectedDevices} device${selectedDevices > 1 ? 's' : ''}.`, '_blank');
  };

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
            Simple <span className="text-red-500">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your entertainment needs. All plans include full access to our UK IPTV service.
          </p>
        </motion.div>

        {/* Device Selection - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-gray-800 rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-gray-700"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
              <Icon icon="mdi:devices" className="w-7 h-7 text-red-500 mr-3" />
              Choose Your Device Package
            </h2>
            <p className="text-gray-400">Select how many devices you want to use simultaneously</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { 
                devices: 1, 
                price: 'Base Price', 
                description: 'Perfect for individual use',
                icon: 'mdi:cellphone',
                color: 'from-gray-600 to-gray-700'
              },
              { 
                devices: 2, 
                price: '+50%', 
                description: 'Great for couples or small families',
                icon: 'mdi:tablet',
                color: 'from-blue-600 to-blue-700'
              },
              { 
                devices: 3, 
                price: '+100%', 
                description: 'Ideal for families or sharing',
                icon: 'mdi:television',
                color: 'from-red-600 to-red-700'
              }
            ].map((option, index) => (
              <motion.div
                key={option.devices}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedDevices(option.devices)}
                className={`relative bg-gradient-to-br ${option.color} rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedDevices === option.devices 
                    ? 'ring-4 ring-red-500 ring-opacity-50 scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center ${
                    selectedDevices === option.devices ? 'bg-white/30' : ''
                  }`}>
                    <Icon icon={option.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{option.devices}</div>
                  <div className="text-lg font-semibold text-white mb-2">{option.price}</div>
                  <p className="text-white/80 text-sm">{option.description}</p>
                </div>
                {selectedDevices === option.devices && (
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                    <Icon icon="mdi:check" className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-gray-700 rounded-lg px-4 py-2">
              <Icon icon="mdi:information" className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">
                Selected: <span className="font-bold text-white">{selectedDevices} device{selectedDevices > 1 ? 's' : ''}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Free Trial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon icon="mdi:gift" className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Try Before You Buy</h3>
            </div>
            <p className="text-green-100 mb-6">
              Get a <span className="font-bold">FREE 24-HOUR TRIAL</span> with full access to all channels and features for {selectedDevices} device{selectedDevices > 1 ? 's' : ''}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
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
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <Icon icon={badge.icon} className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-gray-300 text-sm">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Icon icon="mdi:home" className="inline-block w-5 h-5 mr-2" />
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
