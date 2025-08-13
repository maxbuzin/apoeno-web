import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Martial Arts Instructor - Brazilian Jiu-Jitsu & MMA',
  description: 'Professional martial arts instruction in Brazilian Jiu-Jitsu and MMA. Empowering students through combat sports.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}