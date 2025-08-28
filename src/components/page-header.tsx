
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  const sectionStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};
  
  return (
    <section 
      className={cn(
        "py-16 md:py-20 bg-secondary",
        backgroundImage && "bg-cover bg-center bg-no-repeat"
      )}
      style={sectionStyle}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className={cn(
          "font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl",
          backgroundImage && "text-white"
        )}>
          {title}
        </h1>
        <p className={cn(
          "mt-3 max-w-2xl mx-auto text-lg text-muted-foreground",
          backgroundImage && "text-gray-200"
          )}>
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
