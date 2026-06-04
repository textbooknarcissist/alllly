import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ally Digital - Modern Banking for the Future',
  description: 'Banking built around your goals. Save smarter, spend confidently, invest for the future with Ally Digital banking platform.',
  keywords: 'digital banking, fintech, savings, investments, loans, mobile banking',
  openGraph: {
    title: 'Ally Digital - Modern Banking for the Future',
    description: 'Banking built around your goals. Save smarter, spend confidently, invest for the future.',
    url: 'https://allydigital.com',
    siteName: 'Ally Digital',
    images: [
      {
        url: 'https://allydigital.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ally Digital - Modern Banking for the Future',
    description: 'Banking built around your goals.',
    images: ['https://allydigital.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D1B2A" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="overflow-x-hidden bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}
