
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects, services } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative text-white h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615019048436-13226b62d7e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Sytecx Labs
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 md:text-xl">
              Innovative Solutions for a Digital World. We build beautiful,
              functional, and scalable web applications.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              We offer a wide range of services to help you achieve your goals.
            </p>
          </div>
          <div className="mt-12">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
              }}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <ServiceCard service={service} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
          <div className="mt-12 text-center">
             <Button asChild size="lg" variant="link">
               <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
             </Button>
           </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              Check out some of the amazing work we've delivered.
            </p>
          </div>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <ProjectCard project={project} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
           <div className="mt-12 text-center">
             <Button asChild size="lg" variant="link">
               <Link href="/projects">View All Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
             </Button>
           </div>
        </div>
      </section>

       <section className="py-20 md:py-24 bg-primary text-primary-foreground">
         <div className="container mx-auto px-4 text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Ready to start a project?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-lg text-primary-foreground/80">
              Let's build something amazing together. Get in touch with us today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Let's Talk
                </Link>
              </Button>
            </div>
           </motion.div>
         </div>
       </section>
    </div>
  );
}
