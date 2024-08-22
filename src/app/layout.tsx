import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/Menu';

export const metadata: Metadata = {
  title: 'Origamid Next',
  description: 'Criando por Origamid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
