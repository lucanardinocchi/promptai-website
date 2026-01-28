import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientWrapper from '@/components/layout/ClientWrapper';

export const metadata: Metadata = {
  title: 'PromptAI | AI Implementation for Construction',
  description:
    'We help construction companies implement AI that actually sticks. Hands-on training, documented workflows, monthly accountability.',
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
      'We help construction companies implement AI that actually sticks.',
    url: 'https://promptaiconsulting.com.au',
    siteName: 'PromptAI Consulting',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptAI | AI Implementation for Construction',
    description:
      'We help construction companies implement AI that actually sticks.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream cursor-none md:cursor-none">
        <ClientWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
