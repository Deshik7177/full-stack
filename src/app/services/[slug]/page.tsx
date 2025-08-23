
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageGridClasses = [
      "col-span-2 row-span-2", // First image is larger
      "",
      "",
      "col-span-2", // Last image is wider
  ]

  return (
    <div>
      <PageHeader title={service.title} subtitle={service.tagline} />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4">{service.category}</Badge>
            <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>

          {service.images && service.images.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 grid-rows-3 gap-4"
            >
              {service.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "overflow-hidden rounded-lg shadow-lg",
                    imageGridClasses[index]
                  )}
                >
                  <Image
                    src={image.url}
                    alt={`${service.title} image ${index + 1}`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.dataAiHint}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
