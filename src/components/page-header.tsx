"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
