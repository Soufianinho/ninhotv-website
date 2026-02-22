import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'DMCA Notice - NinhoTV | Copyright Compliance',
  description: 'Read NinhoTV\'s DMCA notice and copyright compliance policy. Information about copyright takedown requests and designated agent contact.',
  keywords: 'DMCA, copyright, takedown notice, intellectual property, NinhoTV DMCA, copyright compliance, DMCA policy',
  openGraph: {
    title: 'DMCA Notice - NinhoTV',
    description: 'NinhoTV DMCA notice - Copyright compliance and takedown request procedures.',
    url: 'https://ninhotv.com/dmca',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV DMCA Notice'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Notice - NinhoTV',
    description: 'Read NinhoTV DMCA notice - Copyright compliance and intellectual property protection.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function DMCALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
