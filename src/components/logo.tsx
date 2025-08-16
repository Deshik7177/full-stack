import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 28"
      width="160"
      height="28"
      {...props}
    >
      <g className="font-headline" fill="hsl(var(--foreground))">
        <text x="0" y="22" fontSize="24" fontWeight="bold">
          Sytecx
        </text>
        <text x="88" y="22" fontSize="24" fontWeight="bold" className="fill-muted-foreground">
          Labs
        </text>
      </g>
    </svg>
  );
}
