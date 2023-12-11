import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ptBR } from '@clerk/localizations'
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import Providers from '@/Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'casa das ferramentas',
  description: 'As melhores ferramentas você encontra aqui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br">
        <body className={`${inter.className} bg-[#fafafa] max-w-screen-2xl min-h-[100dvh] my-0 mx-auto flex flex-col`}>
          <Providers>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
