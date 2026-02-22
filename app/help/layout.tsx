import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Help Center - NinhoTV | IPTV Support & Guides',
  description: 'Get comprehensive help and support for NinhoTV IPTV service. Find setup guides, troubleshooting tips, and answers to frequently asked questions.',
  keywords: 'help center, IPTV help, NinhoTV support, setup guide, troubleshooting, FAQ, IPTV tutorial, customer support',
  openGraph: {
    title: 'Help Center - NinhoTV',
    description: 'NinhoTV help center - Complete guides, tutorials, and support for your IPTV service.',
    url: 'https://ninhotv.com/help',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV Help Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help Center - NinhoTV',
    description: 'Get help with NinhoTV IPTV service - Setup guides, troubleshooting, and support.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
