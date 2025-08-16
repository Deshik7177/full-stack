"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { CareerCard } from "@/components/career-card";
import { careers } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, Heart } from "lucide-react";

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

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        title="Join Our Team"
        subtitle="We're looking for passionate, creative, and dedicated individuals to help us build the future of technology."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold text-primary mb-8">
              Open Positions
            </h2>
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {careers.map((career) => (
                <motion.div key={career.title} variants={itemVariants}>
                  <CareerCard career={career} />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <aside className="lg:col-span-1">
             <Card className="sticky top-24">
               <CardHeader>
                 <CardTitle className="font-headline text-2xl">Why Sytecx Labs?</CardTitle>
               </CardHeader>
               <CardContent className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/10 text-primary p-2 rounded-md">
                     <Lightbulb className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-semibold">Innovate & Grow</h3>
                     <p className="text-sm text-muted-foreground">Work on cutting-edge projects and continuously learn new skills.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/10 text-primary p-2 rounded-md">
                     <Users className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-semibold">Collaborative Culture</h3>
                     <p className="text-sm text-muted-foreground">Be part of a supportive team that values communication and teamwork.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/10 text-primary p-2 rounded-md">
                     <Heart className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-semibold">Work-Life Balance</h3>
                     <p className="text-sm text-muted-foreground">We offer flexible work arrangements and prioritize your well-being.</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
