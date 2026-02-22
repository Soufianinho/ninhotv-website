import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Pricing - NinhoTV | IPTV Subscription Plans',
  description: 'Choose your perfect IPTV plan. 1, 3, 6, or 12 month subscriptions with up to 50% discount. 33,000+ channels, 150,000+ movies, HD & 4K quality, 24/7 support.',
  keywords: 'IPTV pricing, IPTV subscription, NinhoTV plans, UK IPTV, streaming plans, IPTV service, monthly subscription',
  openGraph: {
    title: 'Pricing - NinhoTV',
    description: 'NinhoTV IPTV pricing - Choose your subscription plan with free trial and premium features.',
    url: 'https://ninhotv.com/pricing',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV IPTV Pricing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - NinhoTV',
    description: 'Choose your IPTV subscription plan - Free trial available.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
