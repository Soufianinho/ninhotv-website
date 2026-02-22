import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'IPTV Reseller - NinhoTV | Start Your IPTV Business',
  description: 'Become an IPTV reseller with NinhoTV. Get premium reseller panels, credits that never expire, and start your IPTV business today. Affordable reseller plans available.',
  keywords: 'IPTV reseller, become IPTV reseller, IPTV business, NinhoTV reseller, IPTV panel, reseller credits',
  openGraph: {
    title: 'IPTV Reseller - NinhoTV',
    description: 'Start your IPTV reselling business with NinhoTV. Premium reseller panels with credits that never expire.',
    url: 'https://ninhotv.com/reseller',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV IPTV Reseller'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Reseller - NinhoTV',
    description: 'Become an IPTV reseller with NinhoTV. Start your IPTV business today with premium reseller panels.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
