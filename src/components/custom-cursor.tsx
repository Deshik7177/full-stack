"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", onMouseMove);

    const hoverables = document.querySelectorAll('a, button, [role="button"]');
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  if (!isClient) {
    return null;
  }
  
  const primaryColor = theme === 'dark' ? 'hsl(271 100% 85%)' : 'hsl(271 100% 25%)';
  const accentColor = theme === 'dark' ? 'hsla(283, 100%, 71%, 0.2)' : 'hsla(283, 100%, 41%, 0.2)';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <div
        className={cn("custom-cursor", { grow: isHovering })}
        style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            borderColor: primaryColor,
            backgroundColor: isHovering ? accentColor : 'transparent',
         }}
      />
    </div>
  );
}
