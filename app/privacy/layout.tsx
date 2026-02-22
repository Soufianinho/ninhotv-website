import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Privacy Policy - NinhoTV | IPTV Privacy Protection',
  description: 'Read NinhoTV\'s comprehensive privacy policy. Learn how we collect, use, and protect your personal information. Your privacy is our priority.',
  keywords: 'privacy policy, IPTV privacy, data protection, NinhoTV privacy, personal information, data security, privacy protection',
  openGraph: {
    title: 'Privacy Policy - NinhoTV',
    description: 'NinhoTV privacy policy - Learn how we protect your personal information and ensure data security.',
    url: 'https://ninhotv.com/privacy',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV Privacy Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - NinhoTV',
    description: 'Read NinhoTV privacy policy - Comprehensive data protection and privacy commitment.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
