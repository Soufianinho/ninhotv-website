import { Metadata } from 'next';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Channels from '@/components/Channels';
import AppScreenshots from '@/components/AppScreenshots';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import PaymentMethods from '@/components/PaymentMethods';

export const metadata: Metadata = {
  title: 'NinhoTV - Best IPTV UK Service | 33,000+ Live Channels | Premium Streaming',
  description: 'Get the best IPTV service in UK with 33,000+ live channels and 150,000+ movies. Fast UK servers, 24/7 support, HD quality. Start your free trial today!',
  keywords: 'IPTV UK, best IPTV service, UK IPTV, live TV channels, streaming service, NinhoTV, British TV, sports channels, movies on demand',
  openGraph: {
    title: 'NinhoTV - Premium IPTV Service in UK',
    description: 'Access 33,000+ live channels and 150,000+ movies with the best IPTV service in UK. Fast servers, 24/7 support, free trial available.',
    url: 'https://ninhotv.com',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV IPTV UK Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NinhoTV - Best IPTV UK Service',
    description: 'Premium IPTV service with 33,000+ channels and 150,000+ movies. Free trial available.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Pricing />
      <Channels />
      <AppScreenshots />
      <Features />
      <PaymentMethods />
      <Reviews />
      <FAQ />
    </Layout>
  );
}
