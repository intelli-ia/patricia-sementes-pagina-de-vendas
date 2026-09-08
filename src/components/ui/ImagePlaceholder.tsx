import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ImagePlaceholderProps {
  /** Legenda discreta indicando qual imagem entra aqui. */
  label?: string;
  className?: string;
}

/**
 * Placeholder de imagem no idioma visual do projeto. Precisa ser visível o
 * bastante contra o fundo #0f0f0f para que a PROPORÇÃO do layout possa ser
 * validada antes da foto real existir — daí a superfície mais clara e a hachura.
 */
export function ImagePlaceholder({ label = 'Imagem', className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden',
        className,
      )}
    >
      {/* Superfície */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #31373a 0%, #23282a 45%, #16191a 100%)',
        }}
      />
      {/* Hachura diagonal — marca a área como "imagem entra aqui" */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgb(255 255 255 / 0.05) 0px, rgb(255 255 255 / 0.05) 1px, transparent 1px, transparent 14px)',
        }}
      />
      {/* Halo verde frio, no idioma da luz do projeto */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 70% at 65% 18%, rgb(var(--color-primary-rgb) / 0.22) 0%, transparent 60%)',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <ImageIcon className="h-8 w-8 text-white/30" strokeWidth={1.25} aria-hidden />
        <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-white/40">
          {label}
        </span>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
