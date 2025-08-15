import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://academy.deepbioltd.com'),
  title: "Bioinformatics and Computational Biology - DeepBio Academy",
  description: "Professional training program in Bioinformatics and Computational Biology. Master the skills needed for modern biological data analysis and computational research at DeepBio Academy.",
  keywords: ["bioinformatics", "computational biology", "training", "education", "data analysis", "genomics", "biology", "professional development"],
  authors: [{ name: "DeepBio Academy" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://academy.deepbioltd.com/',
    title: 'Bioinformatics and Computational Biology - DeepBio Academy',
    description: 'Professional training program in Bioinformatics and Computational Biology. Master the skills needed for modern biological data analysis and computational research.',
    siteName: 'DeepBio Academy',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Bioinformatics and Computational Biology Professional Training Program - DeepBio Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bioinformatics and Computational Biology - DeepBio Academy',
    description: 'Professional training program in Bioinformatics and Computational Biology. Master the skills needed for modern biological data analysis.',
    images: ['/og-image.svg'],
    creator: '@deepbioacademy',
    site: '@deepbioacademy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DeepBio Academy" />
        
        {/* LinkedIn specific */}
        <meta property="article:author" content="DeepBio Academy" />
        <meta property="article:publisher" content="DeepBio Academy" />
        
        {/* Telegram specific */}
        <meta name="telegram:channel" content="@deepbioacademy" />
        
        {/* WhatsApp specific */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Additional social meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://academy.deepbioltd.com/" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/og-image.svg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
