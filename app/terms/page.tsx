'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function TermsOfService() {
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
            Terms of <span className="text-red-500">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our IPTV service
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Third-Party Links */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:link-variant" className="w-7 h-7 text-red-500 mr-3" />
              Third-Party Links
            </h2>
            <p className="text-gray-300 leading-relaxed">
              NinhoTV may include links to websites operated by third parties. These links are provided for your convenience only. We do not control or endorse the content on any external websites and are not responsible for their accuracy, availability, or practices. Please review the terms and privacy policies of any third-party site you visit.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:copyright" className="w-7 h-7 text-red-500 mr-3" />
              Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this Site, including text, images, logos, and video content, is the property of NinhoTV or its licensors and is protected by UK and international copyright and trademark laws. Unauthorized use, reproduction, or distribution of any materials is strictly prohibited without written consent.
            </p>
          </section>

          {/* Permitted Use */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:check-circle" className="w-7 h-7 text-red-500 mr-3" />
              Permitted Use
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to use this Site only for lawful, personal, and non-commercial purposes. You may download or print portions of the Site for your own use, but you may not copy, modify, distribute, or publicly display content without prior permission from NinhoTV.
            </p>
          </section>

          {/* User Submissions */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:account-edit" className="w-7 h-7 text-red-500 mr-3" />
              User Submissions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By submitting content to the Site, including reviews or feedback, you grant NinhoTV the right to use, display, distribute, or modify your content in connection with our services. You confirm that you have the legal right to share such content and that it does not violate the rights of others.
            </p>
          </section>

          {/* No Warranties */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:alert-circle" className="w-7 h-7 text-red-500 mr-3" />
              No Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Site and all its content are provided "as is" and "as available." We make no guarantees about the accuracy, performance, or reliability of the Site or its content. We do not guarantee uninterrupted or error-free access and disclaim all warranties to the fullest extent permitted by law.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:shield-off" className="w-7 h-7 text-red-500 mr-3" />
              Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              NinhoTV is not responsible for any direct, indirect, incidental, or consequential damages arising from your use of the Site or any linked content. Your use of the Site is at your own risk.
            </p>
          </section>

          {/* Indemnity */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:handshake" className="w-7 h-7 text-red-500 mr-3" />
              Indemnity
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold NinhoTV, its owners, employees, and affiliates harmless from any claims or liabilities resulting from your use of the Site, your submissions, or your violation of these Terms.
            </p>
          </section>

          {/* Monitoring and Content Management */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:monitor-eye" className="w-7 h-7 text-red-500 mr-3" />
              Monitoring and Content Management
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right, but not the obligation, to monitor user activity and submissions on the Site. We may remove or edit content at our sole discretion to comply with legal obligations or to enforce these Terms.
            </p>
          </section>

          {/* Compliance with Laws */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:gavel" className="w-7 h-7 text-red-500 mr-3" />
              Compliance with Laws
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to comply with all applicable laws and regulations in the jurisdiction from which you access the Site. This includes respecting local content restrictions, privacy regulations, and consumer protection laws.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:scale-balance" className="w-7 h-7 text-red-500 mr-3" />
              Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by the laws of the United Kingdom. Any legal disputes must be brought before a court of competent jurisdiction in the UK.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:file-document-multiple" className="w-7 h-7 text-red-500 mr-3" />
              Entire Agreement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service, along with our Privacy Policy, represent the entire agreement between you and NinhoTV regarding the use of this Site. If any provision is found invalid, the remaining terms shall remain enforceable.
            </p>
          </section>

          {/* Termination of Use */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:account-cancel" className="w-7 h-7 text-red-500 mr-3" />
              Termination of Use
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to restrict or terminate your access to the Site at any time, especially in cases of misuse or violation of these Terms.
            </p>
          </section>

          {/* Privacy Commitment */}
          <section className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Icon icon="mdi:shield-check" className="w-7 h-7 text-red-500 mr-3" />
              Privacy Commitment
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By using this Site, you acknowledge that you have read, understood, and agree to our Privacy Policy, which explains how we collect, use, and safeguard your personal data.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <Icon icon="mdi:television-classic" className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">NinhoTV</h3>
              <p className="text-white/90">The best IPTV service provider</p>
            </div>
            
            <div className="text-white/80 space-y-2 mb-6">
              <p>Customer Service Office</p>
              <p>NinhoTV, LLC</p>
              <p>1001 S. MAIN ST. STE 600, Kalispell, 59901, Montana</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/212639040826?text=Hi! I have a question about the terms of service.', '_blank')}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5 mr-2" />
                Contact on WhatsApp
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
          </section>
        </motion.div>
      </div>
    </div>
  );
}
