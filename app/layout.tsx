import type { Metadata } from 'next';
import { Geist, Geist_Mono, Alexandria } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const alexendria = Alexandria({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lead Consulting',
  description: 'Le meilleur prestataire de services en électricité',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col min-h-screen overflow-x-hidden`}
      >
        <NavBar />

        <div className={`flex-1  w-full ${alexendria.className}`}>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
