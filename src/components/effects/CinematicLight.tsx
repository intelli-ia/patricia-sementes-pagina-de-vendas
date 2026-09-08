import { cn } from '@/lib/utils';

type LightPosition = 'key' | 'rim' | 'fill' | 'top' | 'custom';

const POSITIONS: Record<Exclude<LightPosition, 'custom'>, string> = {
  /** Key light — topo direita, a fonte principal. */
  key: '-top-32 -right-24 h-[36rem] w-[36rem] md:-top-40 md:-right-32 md:h-[44rem] md:w-[44rem]',
  /** Rim light — base direita, recorta a silhueta. */
  rim: '-bottom-40 -right-20 h-[30rem] w-[30rem] md:-bottom-52 md:-right-28 md:h-[38rem] md:w-[38rem]',
  /** Fill light — centro-esquerda, levanta as sombras. */
  fill: 'top-1/3 -left-32 h-[32rem] w-[32rem] md:-left-40 md:h-[40rem] md:w-[40rem]',
  /** Luz de topo centralizada — halo atrás de títulos. */
  top: '-top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 md:h-[36rem] md:w-[36rem]',
};

const BLURS = {
  soft: 'blur-[100px]',
  mid: 'blur-[120px]',
  wide: 'blur-[150px]',
} as const;

const OPACITIES = {
  20: 'opacity-20',
  25: 'opacity-25',
  30: 'opacity-30',
  40: 'opacity-40',
} as const;

const BLENDS = {
  screen: 'mix-blend-screen',
  dodge: 'mix-blend-color-dodge',
} as const;

export interface CinematicLightProps {
  /** Posição da luz na cena. Use `custom` + className para casos específicos. */
  position?: LightPosition;
  blur?: keyof typeof BLURS;
  opacity?: keyof typeof OPACITIES;
  blend?: keyof typeof BLENDS;
  /** Deriva lentamente (18s) — desligado por prefers-reduced-motion. */
  drift?: boolean;
  className?: string;
}

/**
 * Luz volumétrica: radial-gradient verde em blur alto e blend aditivo.
 * O verde é luz, nunca preenchimento — sempre por baixo do conteúdo (-z-10).
 */
export function CinematicLight({
  position = 'key',
  blur = 'wide',
  opacity = 30,
  blend = 'screen',
  drift = false,
  className,
}: CinematicLightProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute -z-10 rounded-full',
        position !== 'custom' && POSITIONS[position],
        BLURS[blur],
        OPACITIES[opacity],
        BLENDS[blend],
        drift && 'animate-light-drift',
        className,
      )}
      style={{
        background:
          'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
      }}
    />
  );
}

export default CinematicLight;
