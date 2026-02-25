'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function DMCA() {
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
            DMCA <span className="text-red-500">Notice</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Digital Millennium Copyright Act compliance and copyright information
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* DMCA Notice */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:copyright" className="w-7 h-7 text-red-500 mr-3" />
              Copyright Compliance
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at{' '}
              <a 
                href="mailto:support@ninhotv.net" 
                className="text-red-400 hover:text-red-300 transition-colors duration-200 font-semibold"
              >
                support@ninhotv.net
              </a>
            </p>
            
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center">
                <Icon icon="mdi:information" className="w-6 h-6 mr-2" />
                Copyright Takedown Process
              </h3>
              <p className="text-gray-300 leading-relaxed">
                For copyright takedown requests, we encourage you to reach out directly to original sources. If needed, we can provide a list of third-party sites that host the content in question. This will help you address your concerns directly at the source, saving time and effort.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center">
                <Icon icon="mdi:lightbulb" className="w-6 h-6 mr-2" />
                Our Approach
              </h3>
              <p className="text-gray-300 leading-relaxed italic">
                "If buying isn't owning, then piracy isn't stealing. Just a line to make us look cool like Hollywood movies — but don't worry, we're not pirates."
              </p>
            </div>
          </section>

          {/* DMCA Policy Details */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:scale-balance" className="w-7 h-7 text-red-500 mr-3" />
              DMCA Policy
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <Icon icon="mdi:numeric-1-circle" className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Designated Agent</h3>
                  <p className="leading-relaxed">
                    NinhoTV designates support@ninhotv.net as its agent to receive notifications of claimed copyright infringement.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon icon="mdi:numeric-2-circle" className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Notification Requirements</h3>
                  <p className="leading-relaxed">
                    To be effective, a notification of claimed infringement must be a written communication that includes the following:
                  </p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Signature of the authorized person</li>
                    <li>• Identification of the copyrighted work</li>
                    <li>• Description of the infringing material</li>
                    <li>• Contact information of the complaining party</li>
                    <li>• Statement of good faith belief</li>
                    <li>• Statement of accuracy and authority</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <Icon icon="mdi:numeric-3-circle" className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Response Time</h3>
                  <p className="leading-relaxed">
                    Upon receipt of a valid DMCA notice, we will act expeditiously to remove or disable access to the allegedly infringing material.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon icon="mdi:numeric-4-circle" className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Counter-Notification</h3>
                  <p className="leading-relaxed">
                    If you believe material has been removed or disabled by mistake, you may file a counter-notification following the same procedures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:email" className="w-7 h-7 text-red-500 mr-3" />
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Thank you for your understanding and cooperation. For any DMCA-related inquiries, please contact us at:
            </p>
            
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <div className="flex items-center text-red-400 font-semibold mb-2">
                <Icon icon="mdi:email" className="w-5 h-5 mr-2" />
                Email Contact
              </div>
              <a 
                href="mailto:support@ninhotv.net" 
                className="text-white hover:text-red-400 transition-colors duration-200"
              >
                support@ninhotv.net
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I have a DMCA-related inquiry.', '_blank')}
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
              <p className="mt-4">Thank you for your understanding and cooperation.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
