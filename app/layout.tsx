import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://amran.dev'),
  title: {
    default: 'Md. Amran Hossen | MERN Stack Developer',
    template: '%s | Md. Amran Hossen',
  },
  description: 'Portfolio of Md. Amran Hossen, a passionate MERN Stack Developer specializing in React, Node.js, Next.js, and cloud-native applications.',
  keywords: ['MERN Stack', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Md. Amran Hossen' }],
  creator: 'Md. Amran Hossen',
  alternates: {
    canonical: 'https://amran.dev',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/Amran.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amran.dev',
    title: 'Md. Amran Hossen | MERN Stack Developer',
    description: 'Portfolio of Md. Amran Hossen, a passionate MERN Stack Developer specializing in React, Node.js, Next.js, and cloud-native applications.',
    siteName: 'Md. Amran Hossen Portfolio',
    images: [
      {
        url: '/Amran.png',
        width: 1200,
        height: 630,
        alt: 'Md. Amran Hossen Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Amran Hossen | MERN Stack Developer',
    description: 'Portfolio of Md. Amran Hossen, a passionate MERN Stack Developer specializing in React, Node.js, Next.js, and cloud-native applications.',
    creator: '@amrandev',
    images: ['/Amran.png'],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        suppressHydrationWarning
        className={`${inter.className} antialiased bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
