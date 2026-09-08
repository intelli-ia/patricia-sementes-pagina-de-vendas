import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Hover = 'border' | 'lift' | 'none';

const HOVERS: Record<Hover, string> = {
  /** Apenas a borda ganha luz. */
  border: 'hover:border-white/20',
  /** Borda verde + escala — para cards clicáveis. */
  lift: 'hover:border-primary hover:scale-105',
  none: '',
};

export interface CardProps {
  children: ReactNode;
  hover?: Hover;
  className?: string;
}

/** Superfície padrão: #1a1c1d a 50%, borda white/10, transição de 300ms. */
export function Card({ children, hover = 'border', className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-white/10 bg-surface/50 p-6 transition-all duration-300 ease-out',
        HOVERS[hover],
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
