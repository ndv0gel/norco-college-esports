import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Footer from '@/components/Footer';
import HomeBottomCta from '@/components/HomeBottomCta';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Norco College Esports',
  description: 'Official esports program of Norco College – Compete. Connect. Level Up.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-100 d-flex flex-column min-vh-100">
        <NavBar />
        {children}
        <Footer />
        <HomeBottomCta />
      </body>
    </html>
  );
}
