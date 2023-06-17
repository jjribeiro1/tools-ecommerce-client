import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#fafafa]`}>
        {/* @ts-expect-error async server component*/}
        <Header />
        {children}
        {/* @ts-expect-error async server component*/}
        <Footer/>
      </body>
    </html>
  );
}
