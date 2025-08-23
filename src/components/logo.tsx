
import type { HTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Link href="/" className={cn("font-headline text-2xl font-bold text-foreground", className)} {...props}>
      Sytecx Labs
    </Link>
  );
}
