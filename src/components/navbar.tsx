
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { NavLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/workshops", label: "Workshops" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };
  
  const overlayVariants = {
    closed: { 
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: { 
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
        when: "beforeChildren",
      },
     },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
              {pathname === href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full mt-1 block h-[2px] w-full bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
           <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 z-50 md:hidden"
          >
              <motion.div
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/50"
              />
              <motion.div
                variants={mobileMenuVariants}
                className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-background p-6 shadow-lg"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between">
                     <Logo />
                     <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                       <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                     </Button>
                   </div>
                  <nav className="flex flex-1 flex-col items-start gap-6">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "w-full rounded-md p-2 text-lg font-medium transition-colors hover:bg-muted hover:text-primary",
                          pathname === href
                            ? "bg-muted text-primary"
                            : "text-foreground"
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                   <div className="mt-8 flex items-center justify-between border-t pt-6">
                     <span className="text-sm font-medium">Theme</span>
                     <ThemeToggle />
                   </div>
                </div>
              </motion.div>
           </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
