
"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCareersPage = pathname === '/careers';
  const isAboutPage = pathname === '/about';

  return (
      <body 
        className={cn(
          "font-body antialiased",
          isCareersPage && "careers-page-bg",
          isAboutPage && "about-page-bg"
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
  )
}
