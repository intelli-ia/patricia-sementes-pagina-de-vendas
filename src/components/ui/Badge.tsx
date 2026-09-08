import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Acompanha o `tone` da <Section>: sobre verde, o verde da pílula sumiria. */
type Tone = 'dark' | 'light';

const TONES: Record<Tone, { pill: string; dot: string }> = {
  dark: {
    pill: 'border-primary/20 bg-primary/10 text-primary-light',
    dot: 'bg-primary',
  },
  light: {
    pill: 'border-background/25 bg-background/10 text-background',
    dot: 'bg-background',
  },
};

export interface BadgeProps {
  children: ReactNode;
  /** Ponto verde pulsante à esquerda. Padrão: true. */
  dot?: boolean;
  /** Paleta. Padrão: 'dark'. */
  tone?: Tone;
  className?: string;
}

/** Pílula de contexto — label uppercase, borda e fundo translúcidos. */
export function Badge({ children, dot = true, tone = 'dark', className }: BadgeProps) {
  const { pill, dot: dotClass } = TONES[tone];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5',
        'font-sans text-xs font-semibold uppercase tracking-wider',
        pill,
        className,
      )}
    >
      {dot && (
        <span aria-hidden className="relative flex h-1.5 w-1.5">
          <span className={cn('absolute inline-flex h-full w-full animate-ping rounded-full opacity-60', dotClass)} />
          <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', dotClass)} />
        </span>
      )}
      {children}
    </span>
  );
}

export default Badge;
