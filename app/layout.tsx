import './globals.css';
import clsx from 'clsx';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const metainfo = {
  name: 'Muhammad Yafi Alhakim',
  description: 'Front End Engineer from Indonesia.',
  url: 'https://yafialhakim.vercel.app',
  image: '/meta/meta.png',
  twitter: '@koalasigma',
};

export const metadata: Metadata = {
  metadataBase: new URL(metainfo.url),
  title: metainfo.name,
  description: metainfo.description,
  authors: {
    name: metainfo.name,
    url: metainfo.url,
  },
  creator: metainfo.name,
  openGraph: {
    type: 'website',
    url: metainfo.url,
    title: metainfo.name,
    description: metainfo.description,
    images: metainfo.image,
  },
  twitter: {
    card: 'summary_large_image',
    title: metainfo.name,
    description: metainfo.description,
    creator: metainfo.twitter,
    images: metainfo.image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body className='bg-neutral-100 dark:bg-neutral-950'>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div
              className={clsx(
                'container flex min-h-screen max-w-4xl flex-col ',
                jakarta.className
              )}
            >
              <Header />
              <main className='flex flex-1 flex-col pb-20 pt-40 md:pt-32'>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
