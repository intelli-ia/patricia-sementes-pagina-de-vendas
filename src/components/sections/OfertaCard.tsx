'use client';

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from 'react';

/**
 * Casca cliente do cartão da oferta.
 *
 * Existe por um motivo só: o foco de luz precisa saber onde está o cursor, e
 * isso obriga um event handler. Mantendo-o aqui, a seção Oferta continua sendo
 * server component — mesmo arranjo do SementesGallery dentro do Mecanismo.
 *
 * As camadas de luz seguem a ordem de pintura: halo externo (irmão, no arquivo
 * da seção), aresta, foco do cursor, lâmina de brilho, contorno interno e grão.
 * O conteúdo entra depois de todas, com `relative`, para não ficar por baixo.
 */
export function OfertaCard({ children }: { children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    // `pb` generoso: sobra deliberada no pé do cartão para a imagem que vem
    // apoiada sobre ele — o conteúdo continua ancorado no topo.
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      style={
        {
          '--mx': '50%',
          '--my': '0%',
          background:
            'radial-gradient(circle at 50% 40%, rgb(var(--color-surface-rgb)) 0%, #101211 100%)',
        } as CSSProperties
      }
      className="relative mx-auto max-w-[540px] overflow-hidden rounded-[20px] border border-white/15 px-6 pt-9 pb-48 shadow-[0_50px_110px_-45px_rgb(var(--color-primary-rgb)/0.35)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-primary/45 group-hover:shadow-[0_60px_120px_-45px_rgb(var(--color-primary-rgb)/0.5)] md:px-12 md:pt-11 md:pb-[21rem]"
    >
      {/* Aresta verde: o único filete de cor estrutural do cartão */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Foco de luz que segue o cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx) var(--my), rgb(var(--color-primary-rgb) / 0.16), transparent 66%)',
        }}
      />

      {/* Lâmina de brilho atravessando o cartão */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-[320%]"
      />

      {/* Contorno interno que acende */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 ring-1 ring-inset ring-primary/25 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {children}
    </div>
  );
}

export default OfertaCard;
