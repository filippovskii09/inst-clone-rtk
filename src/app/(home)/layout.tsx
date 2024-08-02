import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';
import { StoreProvider } from '@/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social',
  description: 'Social network',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="wrapper">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
