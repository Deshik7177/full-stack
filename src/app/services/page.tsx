
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";
import type { Service } from "@/lib/types";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const serviceCategories = [
  {
    title: "Technology & Innovation",
    services: services.filter((s) => s.category === "Technology & Innovation"),
  },
  {
    title: "Creative Solutions",
    services: services.filter((s) => s.category === "Creative Solutions"),
  },
  {
    title: "Education & Training",
    services: services.filter((s) => s.category === "Education & Training"),
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="We provide end-to-end solutions to help your business thrive in the digital landscape. Discover how we can help you succeed."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {serviceCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center md:text-left">
              {category.title}
            </h2>
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.services.map((service: Service) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a project in mind or need a dedicated team to bring your vision to life? We're here to help.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let’s Work Together <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
