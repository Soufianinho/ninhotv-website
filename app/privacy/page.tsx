'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function PrivacyPolicy() {
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
            Privacy <span className="text-red-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Information We Collect */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:database" className="w-7 h-7 text-red-500 mr-3" />
              Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We collect personally identifiable information (such as name, telephone number or e-mail address, and contact details) that you provide voluntarily when using our website or engaging with our services. This information is used to provide you with requested services and to communicate with you regarding our offerings.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:cog" className="w-7 h-7 text-red-500 mr-3" />
              How We Use Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Provide and improve our services</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Communicate with you about our offerings, updates, and promotions</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Respond to inquiries and provide customer support</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Ensure compliance with our terms and policies</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Protect the security and integrity of our website and services</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Comply with legal obligations</span>
              </li>
            </ul>
          </section>

          {/* Sharing of Information */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:share-variant" className="w-7 h-7 text-red-500 mr-3" />
              Sharing of Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not share, disclose, or sell your personally identifiable information to unaffiliated companies or organizations for non-NinhoTV marketing purposes. However, we may share information under the following circumstances:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Icon icon="mdi:shield-alert" className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>To comply with legal demands or regulatory requirements</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:shield-alert" className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>To protect public safety or the rights of NinhoTV and its users</span>
              </li>
              <li className="flex items-start">
                <Icon icon="mdi:shield-alert" className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>In the context of a merger, sale, or other corporate reorganization</span>
              </li>
            </ul>
          </section>

          {/* Your Choices */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:account-settings" className="w-7 h-7 text-red-500 mr-3" />
              Your Choices
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the option to opt-out of future communications from NinhoTV. Instructions for opting out are included in our communications. You can also contact us at{' '}
              <a 
                href="mailto:support@ninhotv.com" 
                className="text-red-400 hover:text-red-300 transition-colors duration-200 font-semibold"
              >
                support@ninhotv.com
              </a>
              {' '}to manage your communication preferences.
            </p>
          </section>

          {/* Security Measures */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:shield-check" className="w-7 h-7 text-red-500 mr-3" />
              Security Measures
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We employ encryption, firewalls, and other security measures to protect your personal information and prevent unauthorized access. You may need to use authentication information, such as passwords, to access certain features of our website.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:file-document-edit" className="w-7 h-7 text-red-500 mr-3" />
              Changes to this Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the updated policy on our website and indicate the last update date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:email" className="w-7 h-7 text-red-500 mr-3" />
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have any questions, concerns, or requests related to your personal information or this Privacy Policy, please contact us at{' '}
              <a 
                href="mailto:support@ninhotv.com" 
                className="text-red-400 hover:text-red-300 transition-colors duration-200 font-semibold"
              >
                support@ninhotv.com
              </a>
              .
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I have a question about the privacy policy.', '_blank')}
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
              <p className="mt-4">Enjoy HD channels, live sports, movies & more with a reliable IPTV subscription.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
