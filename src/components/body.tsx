
"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
      <body 
        className={cn(
          "font-body antialiased",
          isHomePage && "homepage-bg"
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
  )
}
