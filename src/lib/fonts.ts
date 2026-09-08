import { Alegreya, Inter } from 'next/font/google';

/** Serifada editorial — títulos e display. */
export const alegreya = Alegreya({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

/** Sans — corpo, botões, labels e UI. */
export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
});
