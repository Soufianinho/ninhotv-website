'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCountry } from '@/hooks/useCountry';

const content = {
  fr: {
    badge: 'COUPE DU MONDE 2026',
    title: 'Regardez chaque match',
    subtitle: 'en HD & 4K',
    original: '400€',
    duration: '2 mois d\'accès complet',
    features: ['33 000+ chaînes live', 'Sport en HD & 4K', 'Activation immédiate'],
    cta: 'PROFITER DE L\'OFFRE',
    sub: 'Via WhatsApp · Réponse instantanée',
    wa: 'Bonjour! Je veux profiter de l\'offre Coupe du Monde 2026 — 2 mois à 20€ 🏆⚽',
  },
  de: {
    badge: 'WM 2026',
    title: 'Sieh jedes Spiel',
    subtitle: 'in HD & 4K',
    original: '400€',
    duration: '2 Monate Vollzugang',
    features: ['33 000+ Live-Kanäle', 'Sport in HD & 4K', 'Sofortige Aktivierung'],
    cta: 'ANGEBOT NUTZEN',
    sub: 'Via WhatsApp · Sofortige Antwort',
    wa: 'Hallo! Ich möchte das WM 2026 Angebot — 2 Monate für 20€ nutzen 🏆⚽',
  },
  es: {
    badge: 'COPA DEL MUNDO 2026',
    title: 'Mira cada partido',
    subtitle: 'en HD & 4K',
    original: '400€',
    duration: '2 meses de acceso completo',
    features: ['33 000+ canales en vivo', 'Deporte en HD & 4K', 'Activación inmediata'],
    cta: 'APROVECHAR LA OFERTA',
    sub: 'Via WhatsApp · Respuesta inmediata',
    wa: 'Hola! Quiero la oferta Copa del Mundo 2026 — 2 meses por 20€ 🏆⚽',
  },
  sv: {
    badge: 'VM 2026',
    title: 'Se varje match',
    subtitle: 'i HD & 4K',
    original: '4 500 kr',
    duration: '2 månaders full åtkomst',
    features: ['33 000+ livekanaler', 'Sport i HD & 4K', 'Omedelbar aktivering'],
    cta: 'TA ERBJUDANDET',
    sub: 'Via WhatsApp · Omedelbart svar',
    wa: 'Hej! Jag vill ha VM 2026-erbjudandet — 2 månader för 225 kr 🏆⚽',
  },
  no: {
    badge: 'VM 2026',
    title: 'Se hver kamp',
    subtitle: 'i HD & 4K',
    original: '4 500 kr',
    duration: '2 måneders full tilgang',
    features: ['33 000+ live-kanaler', 'Sport i HD & 4K', 'Umiddelbar aktivering'],
    cta: 'BENYTT TILBUDET',
    sub: 'Via WhatsApp · Umiddelbart svar',
    wa: 'Hei! Jeg vil benytte VM 2026-tilbudet — 2 måneder for 225 kr 🏆⚽',
  },
};

export default function WorldCupOffer() {
  const { language } = useLanguage();
  const { country } = useCountry();

  const lang = (['fr', 'de', 'es', 'sv', 'no'] as const).find(l => l === language) ?? 'fr';
  const c = content[lang];
  const price = (language === 'sv' || language === 'no') ? '225 kr' : '20€';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/212644870099?text=${encodeURIComponent(c.wa)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gray-950 py-6 px-4">

      {/* Pitch texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px)' }}
      />

      {/* Gold glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #c8a400 0%, transparent 70%)' }}
        animate={{ opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating balls — hidden on mobile to keep it clean */}
      {[
        { x: '4%',  size: 28, dur: 7,  delay: 0 },
        { x: '92%', size: 22, dur: 9,  delay: 1.5 },
        { x: '15%', size: 18, dur: 11, delay: 3 },
        { x: '80%', size: 32, dur: 8,  delay: 0.8 },
      ].map((b, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none hidden sm:block"
          style={{ left: b.x, width: b.size, height: b.size }}
          animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        >
          <Icon icon="mdi:soccer" style={{ width: b.size, height: b.size }} />
        </motion.div>
      ))}

      {/* Card */}
      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Header strip */}
          <div className="bg-gradient-to-r from-yellow-500 to-amber-400 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon="mdi:trophy" className="w-6 h-6 text-gray-900" />
              </motion.div>
              <span className="text-gray-900 font-black text-sm tracking-widest">{c.badge}</span>
            </div>
            <span className="bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-full tracking-wide">
              -95%
            </span>
          </div>

          {/* Body */}
          <div className="px-5 pt-5 pb-6 space-y-5">

            {/* Title row */}
            <div className="flex items-start space-x-3">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="flex-shrink-0 mt-0.5"
              >
                <Icon icon="mdi:soccer" className="w-7 h-7 text-yellow-400" />
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {c.title}
                </h2>
                <span className="text-yellow-400 font-black text-xl sm:text-2xl">{c.subtitle}</span>
              </div>
            </div>

            {/* Price block */}
            <div className="flex items-center space-x-4 bg-white/5 rounded-2xl px-4 py-4">
              {/* -95% */}
              <div className="flex-shrink-0 text-center bg-red-500/20 border border-red-500/30 rounded-xl px-3 py-2">
                <div className="text-red-400 text-2xl font-black leading-none">-95%</div>
                <div className="text-red-400/70 text-[9px] font-bold tracking-wider mt-0.5">REMISE</div>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-white/10" />

              {/* Price */}
              <div className="flex-1 min-w-0">
                <div className="text-gray-500 text-xs line-through">{c.original}</div>
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl sm:text-5xl font-black text-white leading-none"
                >
                  {price}
                </motion.div>
                <div className="text-gray-400 text-xs mt-1">{c.duration}</div>
              </div>
            </div>

            {/* Feature list */}
            <ul className="space-y-2">
              {c.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center">
                    <Icon icon="mdi:check" className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{f}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-black text-base shadow-xl shadow-green-600/25 active:shadow-none transition-shadow"
            >
              <Icon icon="mdi:whatsapp" className="w-6 h-6 flex-shrink-0" />
              <span>{c.cta}</span>
            </motion.button>

            <p className="text-center text-gray-600 text-xs">{c.sub}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
