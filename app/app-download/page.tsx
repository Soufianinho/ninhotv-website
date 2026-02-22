'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const downloadSteps = [
  {
    id: 1,
    platform: 'Android',
    icon: 'mdi:android',
    color: 'from-green-500 to-green-600',
    videoUrl: 'https://www.youtube.com/embed/mTBtoJEO_NY'
  },
  {
    id: 2,
    platform: 'iOS',
    icon: 'mdi:apple',
    color: 'from-gray-600 to-gray-700',
    videoUrl: 'https://www.youtube.com/embed/mTBtoJEO_NY'
  },
  {
    id: 3,
    platform: 'Smart TV',
    icon: 'mdi:television',
    color: 'from-blue-500 to-blue-600',
    videoUrl: 'https://www.youtube.com/embed/mTBtoJEO_NY'
  }
];

export default function AppDownload() {
  const [selectedPlatform, setSelectedPlatform] = useState(1);

  const handleDownload = (platform: string) => {
    // Handle download logic based on platform
    console.log(`Downloading for ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-500/30">
            <Icon icon="mdi:download" className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Download Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Download <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NinhoTV</span> App
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow our step-by-step guide to download and install NinhoTV on any device
          </p>
        </motion.div>

        {/* Platform Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {downloadSteps.map((platform) => (
              <motion.button
                key={platform.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedPlatform === platform.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon icon={platform.icon} className="w-6 h-6 mr-2" />
                {platform.platform}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Download Steps */}
        <div className="max-w-6xl mx-auto">
          {downloadSteps.map((platform) => (
            selectedPlatform === platform.id && (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Video Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    <Icon icon="mdi:play-circle" className="w-8 h-8 mr-2 inline-block" />
                    {platform.platform} Installation Tutorial
                  </h3>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                      src={platform.videoUrl}
                      title={`${platform.platform} Installation Tutorial`}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-gray-300 mt-4 text-center">
                    Watch this step-by-step video tutorial to install NinhoTV on {platform.platform}
                  </p>
                  
                  {/* Download Button */}
                  <div className="text-center mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(platform.platform)}
                      className={`bg-gradient-to-r ${platform.color} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      <Icon icon="mdi:download" className="inline-block w-5 h-5 mr-2" />
                      Download {platform.platform} App
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              If you encounter any issues during installation, our support team is here to help you 24/7
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/212639040826?text=Hi! I need help installing the NinhoTV app.', '_blank')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Icon icon="mdi:whatsapp" className="inline-block w-5 h-5 mr-2" />
              Contact Support
            </motion.button>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            <Icon icon="mdi:arrow-left" className="inline-block w-5 h-5 mr-2" />
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
