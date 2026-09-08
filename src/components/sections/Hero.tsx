'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CinematicLight } from '@/components/effects';
import { Badge, Button } from '@/components/ui';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const items = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-item]'));

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      // Entrada na carga da página: badge → H1 → H2 → CTA.
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.15 },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative isolate flex min-h-[90svh] overflow-hidden lg:min-h-screen"
    >
      {/* ── Retrato de fundo (desktop) ────────────────────────────────
          Ocupa a seção inteira, atrás de absolutamente tudo: -z-20 fica abaixo
          das CinematicLight (-z-10), que continuam clareando por cima dele.
          No mobile ele não é renderizado — lá o retrato ainda é o placeholder
          da coluna direita, que vira pano de fundo da seção. */}
      <div aria-hidden className="absolute inset-0 -z-20 hidden lg:block">
        <Image
          src="/patricia-hero.png"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Véu que devolve o fundo da marca à metade esquerda. A foto tem um fundo
          azul-petróleo próprio, e sem isto ele brigaria com o #0f0f0f do resto
          da página e roubaria contraste do H1. Some antes de chegar em Patrícia. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[15] hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--color-background-rgb)) 0%, rgb(var(--color-background-rgb) / 0.88) 30%, rgb(var(--color-background-rgb) / 0.45) 55%, transparent 78%)',
        }}
      />

      {/* Luz cinematográfica: key (topo direita), rim (base direita), fill (centro-esquerda) */}
      <CinematicLight position="key" blur="wide" opacity={30} blend="dodge" drift />
      <CinematicLight position="rim" blur="mid" opacity={20} blend="dodge" />
      <CinematicLight position="fill" blur="wide" opacity={20} blend="dodge" />

      {/* Grid de largura total, split 55/45. O texto começa na calha do container
          base e a imagem sangra até a borda direita. A calha esquerda cresce
          junto com a viewport, então a medida útil do H1 fica estável em
          ~648-688px do desktop ao ultrawide. */}
      <div className="grid w-full flex-1 grid-cols-1 items-start lg:grid-cols-[55fr_45fr] lg:items-center">
        {/* ── Retrato (só mobile) ──────────────────────────────────────
            Bloco em fluxo, colado no topo: no mobile a foto abre a dobra e o
            texto vem abaixo dela. No desktop some — lá o retrato é o fundo da
            seção inteira, e a faixa de 45fr do grid fica vazia só para segurar
            a medida do texto em 55%. */}
        <div className="relative z-10 h-[42svh] min-h-[280px] w-full lg:hidden">
          <Image
            src="/patricia-sobre.png"
            alt="Patrícia Souza sentada, de blazer claro, sorrindo para a câmera"
            fill
            priority
            sizes="100vw"
            className="mask-fade-bottom object-cover object-top"
          />
        </div>

        {/* ── Texto ────────────────────────────────────────────────── */}
        <div className="pl-container-gutter relative z-10 flex justify-center pb-16 pr-4 pt-8 md:pr-6 md:pt-10 lg:justify-start lg:py-24 lg:pr-4 xl:pr-8">
          <div className="align-editorial flex w-full max-w-3xl flex-col items-center md:items-start">
            <div data-hero-item className="reveal-init hidden lg:block">
              <Badge>Comunidade Chaves da Prosperidade</Badge>
            </div>

            <h1
              data-hero-item
              className="reveal-init mt-0 break-words text-[length:clamp(2rem,3.6vw,3.5rem)] font-display lg:mt-6 font-medium leading-[1.15] tracking-tight text-white"
            >
              Você recebeu uma história. Agora pode escolher a prosperidade que vai construir a
              partir dela.
            </h1>

            <p
              data-hero-item
              className="reveal-init mt-7 max-w-lg font-sans text-body font-light leading-relaxed text-white/70"
            >
              Uma comunidade criada para ajudar você a romper padrões que limitam sua prosperidade,
              construir uma nova forma de pensar, escolher e agir e assumir, com mais consciência, o
              protagonismo da própria história, deixando uma nova referência para as próximas
              gerações.
            </p>

            <div data-hero-item className="reveal-init mt-9 w-full md:w-auto">
              <Button
                size="compact"
                className="w-full max-w-md whitespace-normal uppercase tracking-wide sm:w-auto sm:max-w-none sm:whitespace-nowrap"
              >
                Quero começar a construir uma nova história
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Emenda com a seção seguinte: as luzes em color-dodge e a superfície do
          retrato clareiam o Hero inteiro, o que cortaria em linha reta contra o
          preto puro da próxima section. Este gradiente dissolve os últimos 18vh
          até o #0f0f0f exato. Fica acima do retrato (z-0) e abaixo do texto (z-10). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[18vh] bg-gradient-to-b from-background/0 via-background/70 to-background"
      />
    </section>
  );
}

export default Hero;
