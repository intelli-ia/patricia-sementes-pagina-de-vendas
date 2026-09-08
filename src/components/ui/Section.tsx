import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

/**
 * `dark` é a página inteira: preto com o verde entrando como luz.
 * `light` inverte — o verde vira superfície e o texto vira o quase-preto. Serve
 * para quebrar o preto em blocos pontuais; usar em muitas seções seguidas
 * desmancha o contraste que faz a inversão valer.
 */
type Tone = 'dark' | 'light';

export interface SectionProps {
  children: ReactNode;
  /** Âncora de navegação. */
  id?: string;
  /** Envolve o conteúdo no container base. Padrão: true. */
  contained?: boolean;
  /** Aplica o ritmo vertical py-12 md:py-20 lg:py-32. Padrão: true. */
  rhythm?: boolean;
  /** Paleta da seção. Padrão: 'dark'. */
  tone?: Tone;
  /** Classes do <section>. */
  className?: string;
  /** Classes do container interno. */
  innerClassName?: string;
}

/**
 * Casca de seção: posicionamento relativo (para luzes e vinhetas),
 * ritmo vertical e container base.
 */
export function Section({
  children,
  id,
  contained = true,
  rhythm = true,
  tone = 'dark',
  className,
  innerClassName,
}: SectionProps) {
  const claro = tone === 'light';

  return (
    <section
      id={id}
      className={cn('relative isolate overflow-hidden', rhythm && 'section-rhythm', className)}
      style={
        claro
          ? {
              background:
                'radial-gradient(circle at 50% 30%, rgb(var(--color-primary-light-rgb)) 0%, rgb(var(--color-primary-rgb)) 55%, rgb(var(--color-primary-deep-rgb)) 100%)',
            }
          : undefined
      }
    >
      {claro && (
        <>
          {/* Mesma malha e mesmo grão das seções escuras, com os valores
              invertidos: linhas escuras e blend multiply — sobre superfície
              clara, overlay não marca. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgb(15 15 15 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 15 15 / 0.05) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              backgroundAttachment: 'fixed',
            }}
          />
          <div
            aria-hidden
            className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.12] mix-blend-multiply"
          />
          {/* Costura com a seção escura que termina acima */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-background opacity-25"
          />
        </>
      )}

      {contained ? <Container className={innerClassName}>{children}</Container> : children}
    </section>
  );
}

export default Section;
