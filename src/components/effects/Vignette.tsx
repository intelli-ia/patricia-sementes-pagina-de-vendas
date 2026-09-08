import { cn } from '@/lib/utils';

type Edge = 'top' | 'bottom' | 'left' | 'right';

const EDGES: Record<Edge, string> = {
  top: 'inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/60 to-transparent md:h-48',
  bottom:
    'inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent md:h-48',
  left: 'inset-y-0 left-0 w-24 bg-gradient-to-r from-background/80 via-transparent to-transparent md:w-48',
  right:
    'inset-y-0 right-0 w-24 bg-gradient-to-l from-background/80 via-transparent to-transparent md:w-48',
};

export interface VignetteProps {
  /** Bordas a escurecer. Padrão: topo e base. */
  edges?: Edge[];
  /** Escurecimento radial adicional nos cantos. */
  radial?: boolean;
  className?: string;
}

/**
 * Vinhetas em camadas — legibilidade do texto sobre seções com imagem.
 * Sempre acima da imagem e abaixo do conteúdo.
 */
export function Vignette({
  edges = ['top', 'bottom'],
  radial = false,
  className,
}: VignetteProps) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0', className)}>
      {edges.map((edge) => (
        <div key={edge} className={cn('absolute', EDGES[edge])} />
      ))}
      {radial && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgb(var(--color-background-rgb) / 0.85) 100%)',
          }}
        />
      )}
    </div>
  );
}

export default Vignette;
