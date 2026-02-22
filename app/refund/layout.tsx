import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Refund Policy - NinhoTV | IPTV Service Guarantee',
  description: 'Read NinhoTV\'s comprehensive refund policy. We offer guarantees on all IPTV subscriptions with replacement and refund options. Customer satisfaction guaranteed.',
  keywords: 'refund policy, IPTV refund, NinhoTV refund, subscription guarantee, IPTV service guarantee, money back guarantee',
  openGraph: {
    title: 'Refund Policy - NinhoTV',
    description: 'NinhoTV refund policy - Comprehensive guarantees on all IPTV subscriptions with replacement and refund options.',
    url: 'https://ninhotv.com/refund',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV Refund Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy - NinhoTV',
    description: 'Read NinhoTV refund policy - Comprehensive guarantees on all IPTV subscriptions.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
