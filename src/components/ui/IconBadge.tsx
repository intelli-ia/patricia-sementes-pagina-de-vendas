import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Size = 'sm' | 'md';

const SIZES: Record<Size, { box: string; icon: string }> = {
  sm: { box: 'h-10 w-10', icon: 'h-[1.125rem] w-[1.125rem]' },
  md: { box: 'h-12 w-12', icon: 'h-5 w-5' },
};

export interface IconBadgeProps {
  icon: LucideIcon;
  size?: Size;
  className?: string;
}

/** Ícone em círculo — verde como luz: fundo e borda translúcidos, traço em primary. */
export function IconBadge({ icon: Icon, size = 'md', className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/20',
        SIZES[size].box,
        className,
      )}
    >
      <Icon className={cn('text-primary', SIZES[size].icon)} strokeWidth={1.75} aria-hidden />
    </span>
  );
}

export default IconBadge;
