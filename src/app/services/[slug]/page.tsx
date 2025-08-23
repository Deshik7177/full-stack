
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

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
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {service.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-w-4 aspect-h-3">
                           <Image
                            src={image.url}
                            alt={`${service.title} image ${index + 1}`}
                            width={800}
                            height={600}
                            className="object-cover w-full h-full"
                            data-ai-hint={image.dataAiHint}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {service.images.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </>
                  )}
                </Carousel>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
