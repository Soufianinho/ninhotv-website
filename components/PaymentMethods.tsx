'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const paymentMethods = [
  {
    name: 'PayPal',
    icon: 'mdi:paypal',
    color: 'from-blue-500 to-blue-600',
    description: 'Fast and secure PayPal payments',
    features: ['Instant payment', 'Buyer protection', 'Global acceptance']
  },
  {
    name: 'Crypto',
    icon: 'mdi:bitcoin',
    color: 'from-orange-500 to-orange-600',
    description: 'Pay with Bitcoin and other cryptocurrencies',
    features: ['Anonymous', 'Low fees', 'Fast transactions']
  },
  {
    name: 'Western Union',
    icon: 'mdi:bank-transfer',
    color: 'from-yellow-500 to-yellow-600',
    description: 'Traditional money transfer service',
    features: ['Worldwide', 'Trusted', 'Cash pickup available']
  },
  {
    name: 'Skrill',
    icon: 'mdi:wallet',
    color: 'from-purple-500 to-purple-600',
    description: 'Digital wallet for online payments',
    features: ['Instant transfer', 'Multi-currency', 'Mobile app']
  },
  {
    name: 'Wise',
    icon: 'mdi:bank',
    color: 'from-green-500 to-green-600',
    description: 'International money transfer platform',
    features: ['Low fees', 'Real exchange rate', 'Fast transfers']
  },
  {
    name: 'Bank Transfer',
    icon: 'mdi:account-balance',
    color: 'from-gray-500 to-gray-600',
    description: 'Direct bank wire transfers',
    features: ['Secure', 'Available everywhere', 'Large amounts']
  }
];

export default function PaymentMethods() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-500/30">
            <Icon icon="mdi:credit-card" className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Payment Options</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            We Accept <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">All Payment Methods</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from multiple secure payment options. We support PayPal, cryptocurrency, Western Union, Skrill, Wise, and bank transfers for your convenience.
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Icon and Name */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <Icon icon={method.icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{method.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 text-sm">Available</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {method.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I want to subscribe to NinhoTV using ' + method.name + ' payment method.', '_blank')}
                className={`w-full bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
              >
                <Icon icon="mdi:arrow-right" className="inline-block w-4 h-4 mr-2" />
                Pay with {method.name}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              <Icon icon="mdi:security" className="w-6 h-6 mr-2 inline-block" />
              Secure & Protected Payments
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              All payment transactions are encrypted and secure. We never store your payment information and process all payments through trusted, secure gateways.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon icon="mdi:shield-check" className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">SSL Encrypted</h4>
                <p className="text-gray-400 text-sm">256-bit encryption</p>
              </div>
              <div className="text-center">
                <Icon icon="mdi:lock" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Secure Storage</h4>
                <p className="text-gray-400 text-sm">PCI DSS compliant</p>
              </div>
              <div className="text-center">
                <Icon icon="mdi:verified" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Verified</h4>
                <p className="text-gray-400 text-sm">Trusted providers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/212639040826?text=Hi! I need help choosing the best payment method for my NinhoTV subscription.', '_blank')}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon icon="mdi:headset" className="inline-block w-6 h-6 mr-2" />
            Need Help Choosing Payment Method?
          </motion.button>
          <p className="text-gray-400 mt-4 text-sm">
            Our support team is available 24/7 to help you choose the best payment option
          </p>
        </motion.div>
      </div>
    </section>
  );
}
