
"use client";

import { motion } from "framer-motion";
import { CareerCard } from "@/components/career-card";
import { careers, whyJoinUs } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

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
          title="Build a Future You Believe In"
          subtitle="Our people are our greatest asset. We are committed to supporting them to change the world and create a better future for everyone."
        />

      <section className="py-20 md:py-24 bg-transparent text-white">
        <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold mb-12 text-center text-white">
              Why Join Sytecx Labs?
            </h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {whyJoinUs.map((item, index) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="items-center">
                      <div className="bg-primary/10 text-primary p-4 rounded-full">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline text-xl pt-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      <section className="bg-transparent text-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center text-white">
            Open Positions
          </h2>
          <motion.div
            className="space-y-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {careers.length > 0 ? (
              careers.map((career) => (
                <motion.div key={career.title} variants={itemVariants}>
                  <CareerCard career={career} />
                </motion.div>
              ))
            ) : (
               <div className="text-center text-muted-foreground py-8">
                 <p>There are no open positions at this time. Please check back later!</p>
               </div>
            )}
          </motion.div>
          <div className="text-center mt-4">
             <Link href="/contact" className="text-sm hover:underline text-white">
               Don't see a fit? Contact us with your resume.
             </Link>
           </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-transparent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Trophy className="h-12 w-12 mx-auto mb-4 text-white" />
              <blockquote className="font-headline text-2xl md:text-3xl italic text-white">
                "Our investment in strategic talent development and the linking of learning to career development have energized our workforce. Our empowering, performance-driven work culture is helping us attract local talent across all our key markets."
              </blockquote>
              <p className="mt-6 font-semibold text-white">- xxxxxxx, Chief Human Resources Officer</p>
            </motion.div>
        </div>
      </section>
      
      <section className="bg-background/80 py-16">
        <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Fake Job Alert</h3>
                <p className="text-sm text-muted-foreground">Sytecx Labs does not charge any fee at any stage of the recruitment process.</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
