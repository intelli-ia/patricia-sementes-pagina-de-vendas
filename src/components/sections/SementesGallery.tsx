'use client';

import { useEffect, useState } from 'react';
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery-2';

/**
 * Casca cliente da galeria das 8 Sementes.
 *
 * Existe por dois motivos.
 *
 * `bend` precisa ser responsivo. A curvatura é medida em unidades de mundo,
 * então o mesmo valor produz arcos muito diferentes conforme o aspecto do
 * canvas — com `bend={3}` a rotação nas bordas passa de 19° no desktop para
 * ~52° no mobile, e os cards vizinhos entram de lado na tela. O componente só
 * monta depois que o breakpoint é conhecido, para a cena WebGL ser criada uma
 * única vez.
 *
 * E a legenda com o título é desenhada em <canvas>, com a cor lida de
 * `getComputedStyle(container).color`. Numa seção clara, o branco herdado
 * sumiria — daí `tone`, que fixa a cor no elemento. Vai por `style` de
 * propósito: `cn` aqui só concatena, então uma classe de cor não venceria a
 * `text-foreground` embutida no componente.
 */
export function SementesGallery({
  items,
  tone = 'dark',
}: {
  items: GalleryItem[];
  tone?: 'dark' | 'light';
}) {
  const [bend, setBend] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setBend(mq.matches ? 3 : 1.1);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  if (bend === null) return null;

  return (
    <CircularGallery
      items={items}
      bend={bend}
      borderRadius={0.05}
      scrollEase={0.02}
      fontClassName="font-display"
      style={{
        color:
          tone === 'light'
            ? 'rgb(var(--color-background-rgb))'
            : 'rgb(var(--color-foreground-rgb))',
      }}
    />
  );
}

export default SementesGallery;
