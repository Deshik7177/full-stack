
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, HeartHandshake } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const whyChooseUsItems = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of seasoned professionals brings a wealth of experience and expertise to every project, ensuring top-tier results.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies and creative strategies to deliver innovative solutions that drive growth and efficiency.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We collaborate closely with you to understand your unique needs and deliver tailored solutions.",
  }
];


export default function Home() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-white bg-black">
        <Image
          src="https://images.unsplash.com/photo-1615019048436-13226b62d7e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Abstract technology background"
          fill
          priority
          className="object-cover z-0"
          data-ai-hint="abstract technology"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 text-center z-20">
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

      <motion.section
        id="services"
        className="py-20 md:py-24 bg-background text-foreground"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
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
                    <motion.div variants={itemVariants} className="p-1 h-full">
                      <ServiceCard service={service} className="service-card-bg"/>
                    </motion.div>
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
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 md:py-24 bg-secondary text-foreground"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
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
                    <motion.div variants={itemVariants} className="p-1">
                      <ProjectCard project={project} />
                    </motion.div>
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
      </motion.section>

      <motion.section
        id="why-us"
        className="py-20 md:py-24 bg-background text-foreground"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are more than just a service provider; we are your strategic partner in innovation.
            </p>
          </div>
          <motion.div 
            className="mt-12 grid gap-8 md:grid-cols-3"
            variants={sectionVariants}
          >
            {whyChooseUsItems.map((item) => (
              <motion.div 
                key={item.title}
                variants={itemVariants}
              >
                <Card className="h-full text-center bg-card text-card-foreground">
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
      </motion.section>

      <motion.section
        className="py-20 md:py-24 bg-secondary text-foreground"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Ready to start a project?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-lg text-muted-foreground">
              Let's build something amazing together. Get in touch with us today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let's Talk
                </Link>
              </Button>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
