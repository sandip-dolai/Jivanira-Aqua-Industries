import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PreLaunchBanner from '@/components/layout/PreLaunchBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://jivanira.com'),
  title: {
    default: 'JIVANIRA – Packaged Drinking Water Brand | West Bengal',
    template: '%s | JIVANIRA – Packaged Drinking Water',
  },
  description:
    'Official corporate portal of JIVANIRA, an upcoming packaged drinking water enterprise by Jivanira Aqua Industries, Dabadari, Paschim Medinipur, West Bengal. Pure Refreshment. A Better Tomorrow.',
  keywords: [
    'JIVANIRA',
    'Jivanira Aqua Industries',
    'Packaged Drinking Water West Bengal',
    'Drinking Water Brand Paschim Medinipur',
    'Packaged Water Brand India',
    'Sandip Dolai',
  ],
  authors: [{ name: 'Jivanira Aqua Industries' }],
  creator: 'Sandip Dolai',
  publisher: 'Jivanira Aqua Industries',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'JIVANIRA – Packaged Drinking Water Brand',
    description:
      'Pure Refreshment. A Better Tomorrow. Upcoming packaged drinking water brand from West Bengal, India. Planned launch in 2027.',
    siteName: 'JIVANIRA Aqua Industries',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 800,
        alt: 'JIVANIRA Aqua Industries Logo',
      },
    ],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ThemeRegistry>
          <PreLaunchBanner />
          <Navbar />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

