'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function RefundPolicy() {
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
            Refund <span className="text-red-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to quality service and customer satisfaction
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Products Guarantees and Refunds */}
          <section className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon icon="mdi:shield-check" className="w-8 h-8 text-red-500 mr-3" />
              Products Guarantees and Refunds
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">1-Month Subscription</h3>
                <p className="text-gray-300 leading-relaxed">
                  We provide a 1-month guarantee during which NinhoTV will replace or refund any product damage or dysfunction caused by the producer of the product. In case of product damage, we will also offer a full refund for the remaining subscription period or the option to change the product.
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">3-Months Subscription</h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer a 3-month guarantee period. If you encounter any product damage or dysfunction caused by the producer of the product within these 3 months, NinhoTV will replace or refund your subscription. In case of product damage, we will also provide a full refund for the remaining subscription period or the option to change the product.
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">6-Months Subscription</h3>
                <p className="text-gray-300 leading-relaxed">
                  Customers who choose a 6-month subscription will have a 6-month guarantee period. If you experience any issues related to product damage or dysfunction caused by the producer of the product within this timeframe, you are eligible for a replacement or refund. In case of product damage, we will also offer a full refund for the remaining subscription period or the option to change the product.
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">12-Months Subscription</h3>
                <p className="text-gray-300 leading-relaxed">
                  For our 12-month subscription, we provide a 12-month guarantee period. If you encounter any product damage or dysfunction caused by the producer of the product within the first 12 months of your subscription, NinhoTV will replace or refund the affected product. In case of product damage, we will also provide a full refund for the remaining subscription period or the option to change the product.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon icon="mdi:email" className="w-8 h-8 text-red-500 mr-3" />
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have any refund-related queries or concerns, please contact our customer support team at{' '}
              <a 
                href="mailto:support@ninhotv.net" 
                className="text-red-400 hover:text-red-300 transition-colors duration-200 font-semibold"
              >
                support@ninhotv.net
              </a>
              . To help us assess the situation, provide a clear problem description and any relevant screenshots or photos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I have a question about the refund policy.', '_blank')}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5 mr-2" />
                Contact on WhatsApp
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
              >
                <Icon icon="mdi:home" className="w-5 h-5 mr-2" />
                Back to Home
              </motion.button>
            </div>
          </section>

          {/* Changes to this Refund Policy */}
          <section className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon icon="mdi:file-document-edit" className="w-8 h-8 text-red-500 mr-3" />
              Changes to this Refund Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We reserve the right to update this Refund Policy as needed to reflect changes in our practices or legal requirements. The updated policy will be posted on our website and indicate the date of the last update.
            </p>
          </section>

          {/* Company Information */}
          <section className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <Icon icon="mdi:television-classic" className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">NinhoTV</h3>
              <p className="text-white/90">The best IPTV service provider</p>
            </div>
            
            <div className="text-white/80 space-y-2">
              <p>Customer Service Office</p>
              <p>NinhoTV, LLC</p>
              <p>1001 S. MAIN ST. STE 600, Kalispell, 59901, Montana</p>
              <p className="mt-4">Enjoy HD channels, live sports, movies & more with a reliable IPTV subscription.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
