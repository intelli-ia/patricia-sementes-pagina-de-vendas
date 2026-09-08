import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'compact' | 'sm' | 'md' | 'lg';

const SIZES: Record<Size, string> = {
  /** Altura livre e tipografia pequena — CTAs de copy longa. */
  compact: 'px-6 py-3 text-[0.75rem] leading-snug sm:text-[0.8125rem]',
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-7 text-sm md:text-base',
  lg: 'h-14 px-9 text-base md:text-lg',
};

const BASE =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-sans font-semibold tracking-tight transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40';

/**
 * Profundidade vem de LUZ, nunca de sombra escura:
 * - filete branco inset no topo, como luz batendo na aresta superior;
 * - halo verde difuso por baixo, que abre no hover;
 * - gradiente de 200% que desliza da esquerda para a direita no hover;
 * - varredura especular diagonal (ver <Sweep />).
 */
const VARIANTS: Record<Variant, string> = {
  primary: cn(
    'bg-gradient-to-r from-primary to-primary-deep text-background',
    'shadow-[inset_0_1px_0_0_rgb(255_255_255/0.45),0_10px_30px_-12px_rgb(var(--color-primary-rgb)/0.55)]',
    'hover:-translate-y-px hover:brightness-[1.12]',
    'hover:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.65),0_18px_44px_-12px_rgb(var(--color-primary-rgb)/0.9)]',
    'active:translate-y-0 active:brightness-100 active:duration-100',
    'active:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.3),0_6px_18px_-10px_rgb(var(--color-primary-rgb)/0.5)]',
  ),
  secondary: cn(
    'bg-primary text-white',
    'shadow-[inset_0_1px_0_0_rgb(255_255_255/0.2),0_10px_30px_-14px_rgb(var(--color-primary-rgb)/0.5)]',
    'hover:bg-primary-dark hover:-translate-y-px',
  ),
  ghost: 'border border-white/15 text-white/80 hover:border-white/25 hover:text-white',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={cn(BASE, SIZES[size], VARIANTS[variant], className)} {...props}>
      {variant !== 'ghost' && <Sweep strong={variant === 'primary'} />}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
});

/**
 * Varredura especular: uma faixa de luz estreita e inclinada que atravessa o
 * botão em 1000ms. Banda apertada (12% da largura) para ler como reflexo em
 * superfície polida, não como um clarão difuso.
 */
export function Sweep({ strong = false }: { strong?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        // ease-in-out, não ease-out: a faixa precisa atravessar em ritmo
        // constante para ser percebida — com ease-out ela cruza em 380ms.
        'pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-sweep ease-in-out group-hover:translate-x-full',
        strong
          ? 'bg-[linear-gradient(100deg,transparent_38%,rgb(255_255_255/0.7)_50%,transparent_62%)]'
          : 'bg-[linear-gradient(100deg,transparent_35%,rgb(255_255_255/0.28)_50%,transparent_65%)]',
      )}
    />
  );
}

export default Button;
