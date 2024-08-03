import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import { StoreProvider } from '@/provider';

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
      <body>
        <StoreProvider>
          <div className="wrapper">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
