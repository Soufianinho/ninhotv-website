import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'App Download - NinhoTV | Download IPTV App',
  description: 'Download NinhoTV app for Android, iOS, Smart TV, and more. Step-by-step installation guide for all devices.',
  keywords: 'NinhoTV download, IPTV app download, Android APK, iOS app, Smart TV app, IPTV installation',
  openGraph: {
    title: 'App Download - NinhoTV',
    description: 'Download NinhoTV app for all devices with easy installation instructions.',
    url: 'https://ninhotv.com/app-download',
    siteName: 'NinhoTV',
    images: [
      {
        url: 'https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png',
        width: 1200,
        height: 630,
        alt: 'NinhoTV App Download'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Download - NinhoTV',
    description: 'Download NinhoTV app for Android, iOS, and Smart TV.',
    images: ['https://wiztv.co.uk/wp-content/uploads/2025/10/iptv-uk-2.png']
  }
};

export default function AppDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
