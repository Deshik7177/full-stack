import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div
      className={cn('relative h-7 w-40', className)}
      {...props}
    >
      <Image
        src="/images/logo.png"
        alt="Sytecx Labs Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="object-contain"
      />
    </div>
  );
}
