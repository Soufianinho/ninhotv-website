import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Terms of Service - NinhoTV | IPTV Service Terms',
  description: 'Read NinhoTV\'s terms of service. Understand your rights and responsibilities when using our IPTV service. Comprehensive terms covering usage, privacy, and legal obligations.',
  keywords: 'terms of service, IPTV terms, NinhoTV terms, service terms, legal terms, user agreement, IPTV service agreement',
  openGraph: {
    title: 'Terms of Service - NinhoTV',
    description: 'NinhoTV terms of service - Understand your rights and responsibilities when using our premium IPTV service.',
    url: 'https://ninhotv.com/terms',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV Terms of Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - NinhoTV',
    description: 'Read NinhoTV terms of service - Comprehensive terms for IPTV service usage.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
