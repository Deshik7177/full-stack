"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Sytecx Labs"
        subtitle="We are a passionate team of innovators, creators, and problem-solvers dedicated to pushing the boundaries of technology and design."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative aspect-square h-auto w-full">
               <Image
                src="https://placehold.co/600x600.png"
                alt="Sytecx Labs Team"
                fill
                className="rounded-lg object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-md">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold">Our Mission</h3>
                      <p className="mt-1 text-muted-foreground">
                        To empower businesses and individuals by creating innovative, human-centered technology solutions that solve real-world problems and inspire progress.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-md">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold">Our Vision</h3>
                      <p className="mt-1 text-muted-foreground">
                        To be a leading force in digital innovation, recognized for our creativity, technical excellence, and unwavering commitment to our clients' success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                   <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-md">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold">Our Team</h3>
                      <p className="mt-1 text-muted-foreground">
                        Our strength lies in our diversity. We are a collective of engineers, designers, and strategists united by a shared passion for technology and a drive to create amazing things.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
