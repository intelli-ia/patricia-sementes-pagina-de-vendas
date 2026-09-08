import type { Metadata, Viewport } from 'next';
import { FilmGrain } from '@/components/effects';
import { alegreya, inter } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chaves da Prosperidade | Patrícia Souza',
  description:
    'Um caminho para destravar a prosperidade — método, presença e prática com Patrícia Souza.',
  openGraph: {
    title: 'Chaves da Prosperidade | Patrícia Souza',
    description:
      'Um caminho para destravar a prosperidade — método, presença e prática com Patrícia Souza.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn(alegreya.variable, inter.variable)}>
      <body className="relative min-h-screen bg-background">
        {children}
        {/* Grão de filme fixo sobre toda a página */}
        <FilmGrain />
      </body>
    </html>
  );
}
