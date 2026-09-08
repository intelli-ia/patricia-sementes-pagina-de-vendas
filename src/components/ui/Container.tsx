import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** max-w-7xl mx-auto, px-4 md:px-6 lg:px-12 */
export function Container({ children, as: Tag = 'div', className }: ContainerProps) {
  return <Tag className={cn('container-base', className)}>{children}</Tag>;
}

export default Container;
