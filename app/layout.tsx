import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'PromptAI | AI Implementation for Construction',
  description:
    'We help residential builders and contractors implement AI systems that cut admin time, eliminate repetitive tasks, and let your people focus on what actually matters—building.',
  keywords: [
    'AI consulting',
    'construction AI',
    'AI for builders',
    'AI implementation',
    'construction automation',
    'residential builders',
    'contractors',
    'Australia',
  ],
  authors: [{ name: 'PromptAI Consulting' }],
  openGraph: {
    title: 'PromptAI | AI Implementation for Construction',
    description:
      'We help residential builders and contractors implement AI systems that cut admin time by 50-90%.',
    url: 'https://promptaiconsulting.com',
    siteName: 'PromptAI Consulting',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptAI | AI Implementation for Construction',
    description:
      'We help residential builders and contractors implement AI systems that cut admin time by 50-90%.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
