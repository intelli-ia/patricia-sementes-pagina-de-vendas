'use client';

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from 'react';
import { REVEAL, gsap, prefersReducedMotion } from '@/lib/gsap';
import { cn } from '@/lib/utils';

export interface RevealProps {
  children: ReactNode;
  /** Tag renderizada. Padrão: div. */
  as?: ElementType;
  /** Atraso antes de iniciar, em segundos. */
  delay?: number;
  /** Deslocamento vertical inicial em px. Padrão: 50. */
  y?: number;
  /** Anima os filhos diretos em cascata (true = 0.08s por índice). */
  stagger?: number | boolean;
  /** Onde o ScrollTrigger dispara. Padrão: 'top 80%'. */
  start?: string;
  className?: string;
}

/**
 * Entrada padrão via GSAP ScrollTrigger:
 * opacity 0→1 + 50px, 0.8s, power2.out, start 'top 80%', dispara uma única vez.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = REVEAL.y,
  stagger = false,
  start = REVEAL.start,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element | Element[] = stagger ? Array.from(el.children) : el;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: REVEAL.duration,
          ease: REVEAL.ease,
          delay,
          stagger: stagger === true ? REVEAL.stagger : Number(stagger) || 0,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, start, stagger, y]);

  return (
    <Tag ref={ref as never} className={cn(stagger ? 'reveal-stagger' : 'reveal-init', className)}>
      {children}
    </Tag>
  );
}

export default Reveal;
