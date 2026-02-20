import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Маникюр в Алматы | Наталия Горлач',
  description:
    'Профессиональный маникюр, педикюр и nail-дизайн в Алматы от Наталии Горлач. Запись онлайн.',
  keywords: [
    'маникюр Алматы',
    'педикюр Алматы',
    'нейл арт Алматы',
    'маникюр недорого Алматы',
    'nail дизайн Алматы',
    'покрытие гель лак Алматы',
    'наращивание ногтей Алматы',
    'маникюр мастер Алматы',
    'Наталия Горлач маникюр',
    'маникюр Казахстан',
  ],
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
