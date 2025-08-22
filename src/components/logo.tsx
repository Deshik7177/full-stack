
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
    <text x="0" y="30" font-family="Space Grotesk, sans-serif" font-size="30" font-weight="bold" fill="hsl(var(--foreground))">Sytecx Labs</text>
  </svg>`;

  return (
    <div
      className={cn('relative h-7 w-40', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  );
}
