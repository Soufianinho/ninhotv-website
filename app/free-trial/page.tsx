'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FreeTrial() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedApp, setSelectedApp] = useState('');
  const [otherAppName, setOtherAppName] = useState('');
  const { t } = useLanguage();
  
  const devices = [
    { 
      id: 'firestick', 
      name: 'Amazon Fire Stick', 
      icon: 'mdi:amazon-fire-tv',
      description: 'Perfect streaming device for IPTV'
    },
    { 
      id: 'android-box', 
      name: 'Android Box', 
      icon: 'mdi:set-top-box',
      description: 'Powerful Android TV boxes'
    },
    { 
      id: 'smart-tv', 
      name: 'Smart TV', 
      icon: 'mdi:television',
      description: 'Samsung, LG, Sony and more'
    },
    { 
      id: 'android-phone', 
      name: 'Android Phone', 
      icon: 'mdi:android',
      description: 'All Android smartphones'
    },
    { 
      id: 'iphone-ipad', 
      name: 'iPhone & iPad', 
      icon: 'mdi:apple',
      description: 'Apple iOS devices'
    },
    { 
      id: 'pc-mac', 
      name: 'PC & Mac', 
      icon: 'mdi:laptop',
      description: 'Windows and Mac computers'
    },
    { 
      id: 'mag-box', 
      name: 'MAG Box', 
      icon: 'mdi:set-top-box',
      description: 'MAG 250, 254, 322 devices'
    },
    { 
      id: 'other', 
      name: 'Other', 
      icon: 'mdi:devices',
      description: 'Any other IPTV compatible device'
    }
  ];
  
  const iptvApps = [
    { 
      id: 'iptv-smarters', 
      name: 'IPTV Smarters Pro', 
      icon: 'mdi:play-box-multiple',
      description: 'Most popular IPTV app',
      recommended: true
    },
    { 
      id: 'xciptv', 
      name: 'XCIPTV', 
      icon: 'mdi:play-box-multiple',
      description: 'Professional IPTV player'
    },
    { 
      id: 'ibo-player', 
      name: 'IBO Player', 
      icon: 'mdi:play-box-multiple',
      description: '(Recommended) Fast and reliable',
      recommended: true
    },
    { 
      id: 'cap-player', 
      name: 'CAP Player', 
      icon: 'mdi:play-box-multiple',
      description: 'Simple and effective'
    },
    { 
      id: 'hot-player', 
      name: 'Hot Player', 
      icon: 'mdi:play-box-multiple',
      description: 'Lightweight IPTV app'
    },
    { 
      id: 'xtream-codes', 
      name: 'Xtream Codes', 
      icon: 'mdi:play-box-multiple',
      description: 'For Xtream compatible apps'
    },
    { 
      id: 'tivimate', 
      name: 'TiviMate', 
      icon: 'mdi:play-box-multiple',
      description: 'User-friendly interface'
    },
    { 
      id: 'other', 
      name: 'Other App', 
      icon: 'mdi:play-box-multiple',
      description: 'Any other IPTV application',
      hasInput: true
    }
  ];
  
  const handleFreeTrial = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    const messages: Record<string, string> = {
      en: `Hello, I would like to request a FREE 24-HOUR TRIAL for NinhoTV Europe IPTV.\n\nDevice: ${selectedDevice ? t(`free_trial.${selectedDevice.replace('-', '_')}`) : 'Not specified'}\nApp: ${selectedApp === 'other' ? otherAppName || 'Not specified' : t(`free_trial.${selectedApp.replace('-', '_')}`)}\n\nPlease provide trial access details. Thank you.`,
      fr: `Bonjour, je souhaite demander un ESSAI GRATUIT de 24 HEURES pour NinhoTV Europe IPTV.\n\nAppareil : ${selectedDevice ? t(`free_trial.${selectedDevice.replace('-', '_')}`) : 'Non spécifié'}\nApplication : ${selectedApp === 'other' ? otherAppName || 'Non spécifié' : t(`free_trial.${selectedApp.replace('-', '_')}`)}\n\nMerci de fournir les détails d'accès à l'essai.`,
      es: `Hola, me gustaría solicitar una PRUEBA GRATUITA de 24 HORAS para NinhoTV Europe IPTV.\n\nDispositivo: ${selectedDevice ? t(`free_trial.${selectedDevice.replace('-', '_')}`) : 'No especificado'}\nAplicación: ${selectedApp === 'other' ? otherAppName || 'No especificado' : t(`free_trial.${selectedApp.replace('-', '_')}`)}\n\nPor favor proporcione los detalles de acceso de la prueba. Gracias.`,
      nl: `Hallo, ik wil graag een GRATIS PROEFPERIODE van 24 UUR aanvragen voor NinhoTV Europe IPTV.\n\nApparaat: ${selectedDevice ? t(`free_trial.${selectedDevice.replace('-', '_')}`) : 'Niet gespecificeerd'}\nApp: ${selectedApp === 'other' ? otherAppName || 'Niet gespecificeerd' : t(`free_trial.${selectedApp.replace('-', '_')}`)}\n\nGelieve de proef toegangsgegevens te verstrekken. Dank u.`,
      ar: `مرحبا، أود طلب تجربة مجانية لمدة 24 ساعة من NinhoTV Europe IPTV.\n\nالجهاز: ${selectedDevice ? t(`free_trial.${selectedDevice.replace('-', '_')}`) : 'غير محدد'}\nالتطبيق: ${selectedApp === 'other' ? otherAppName || 'غير محدد' : t(`free_trial.${selectedApp.replace('-', '_')}`)}\n\nيرجى تزويدي بتفاصيل الوصول التجريبي. شكرا.`
    };

    setTimeout(() => {
      const currentLang = t('common.language');
      let langCode = 'en';
      
      if (currentLang === 'Langue') langCode = 'fr';
      else if (currentLang === 'Idioma') langCode = 'es';
      else if (currentLang === 'Taal') langCode = 'nl';
      else if (currentLang === 'اللغة') langCode = 'ar';
      
      window.open(`https://wa.me/212644870099?text=${encodeURIComponent(messages[langCode])}`, '_blank');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Icon icon="mdi:television-classic" className="w-12 h-12 text-red-500" />
              <span className="text-3xl font-bold text-white">Ninho<span className="text-red-500">TV</span></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t('free_trial.title') }} />
            <p className="text-xl text-gray-300 mb-8">
              {t('free_trial.subtitle')}
            </p>
          </motion.div>

          {/* Device Selection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                <Icon icon="mdi:devices" className="w-6 h-6 text-red-500 mr-2 inline-block" />
                {t('free_trial.select_device')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {devices.map((device, index) => (
                  <motion.button
                    key={device.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDevice(device.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedDevice === device.id
                        ? 'border-red-500 bg-gradient-to-br from-red-500/20 to-red-600/20 shadow-lg shadow-red-500/30'
                        : 'border-gray-600 bg-gray-800/50 hover:border-red-400 hover:bg-gray-700/50 hover:shadow-lg'
                    }`}
                  >
                    <Icon 
                      icon={device.icon} 
                      className={`w-8 h-8 mb-2 mx-auto ${
                        selectedDevice === device.id ? 'text-red-400' : 'text-gray-400'
                      }`} 
                    />
                    <div className="text-center">
                      <div className={`text-sm font-semibold mb-1 ${
                        selectedDevice === device.id ? 'text-white' : 'text-gray-300'
                      }`}>
                        {t(`free_trial.${device.id.replace('-', '_')}`)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {device.description}
                      </div>
                    </div>
                    {selectedDevice === device.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
                      >
                        <Icon icon="mdi:check" className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* IPTV App Selection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                <Icon icon="mdi:play-box-multiple" className="w-6 h-6 text-red-500 mr-2 inline-block" />
                {t('free_trial.select_iptv_app')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {iptvApps.map((app, index) => (
                  <motion.button
                    key={app.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedApp(app.id);
                      if (app.id !== 'other') {
                        setOtherAppName('');
                      }
                    }}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedApp === app.id
                        ? 'border-red-500 bg-gradient-to-br from-red-500/20 to-red-600/20 shadow-lg shadow-red-500/30'
                        : 'border-gray-600 bg-gray-800/50 hover:border-red-400 hover:bg-gray-700/50 hover:shadow-lg'
                    }`}
                  >
                    <Icon 
                      icon={app.icon} 
                      className={`w-8 h-8 mb-2 mx-auto ${
                        selectedApp === app.id ? 'text-red-400' : 'text-gray-400'
                      }`} 
                    />
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <div className={`text-sm font-semibold ${
                          selectedApp === app.id ? 'text-white' : 'text-gray-300'
                        }`}>
                          {t(`free_trial.${app.id.replace('-', '_')}`)}
                        </div>
                        {app.recommended && (
                          <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                            {t('free_trial.recommended')}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        {app.description}
                      </div>
                    </div>
                    {selectedApp === app.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
                      >
                        <Icon icon="mdi:check" className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Other App Input */}
              {selectedApp === 'other' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('free_trial.specify_app_name')}
                  </label>
                  <input
                    type="text"
                    value={otherAppName}
                    onChange={(e) => setOtherAppName(e.target.value)}
                    placeholder={t('free_trial.enter_app_name')}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Main Trial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl"
          >
            <div className="mb-8">
              <div className="inline-flex items-center bg-green-500/20 rounded-full px-4 py-2 mb-6">
                <Icon icon="mdi:gift" className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">{t('free_trial.trial_badge')}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('free_trial.try_before_buy')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('free_trial.trial_description')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: 'mdi:television', text: '33,000+ Live Channels' },
                { icon: 'mdi:movie', text: '150,000+ Movies & VOD' },
                { icon: 'mdi:high-definition', text: 'HD & 4K Quality' },
                { icon: 'mdi:devices', text: 'Multiple Device Support' },
                { icon: 'mdi:server', text: 'Fast UK Servers' },
                { icon: 'mdi:headset', text: '24/7 Support' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <Icon icon={feature.icon} className="w-6 h-6 text-red-500" />
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFreeTrial}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <Icon icon="mdi:play-circle" className="w-6 h-6" />
                <span>{t('free_trial.start_trial_now')}</span>
              </motion.button>
              
              <p className="text-gray-400 mt-4 text-sm">
                {t('free_trial.no_card_required')}
              </p>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: 'mdi:shield-check', title: t('free_trial.secure_title'), desc: t('free_trial.secure_desc') },
              { icon: 'mdi:clock-fast', title: t('free_trial.instant_title'), desc: t('free_trial.instant_desc') },
              { icon: 'mdi:help-circle', title: t('free_trial.support_title'), desc: t('free_trial.support_desc') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <Icon icon={item.icon} className="w-8 h-8 text-red-500 mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
