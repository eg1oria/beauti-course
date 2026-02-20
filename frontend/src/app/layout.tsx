import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Онлайн - курс Наталии Горлач',
  description: 'Онлайн курс по нутрициологии',
  metadataBase: new URL('https://nataliagorlach.kz'),
  verification: {
    google: 'bFyqpJ-qcpmoSUapVFLXa5hq9tBA7zdgQ2OYSS3xb3c',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/fonts/CormorantGaramond-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
