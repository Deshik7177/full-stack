
"use client";

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, Youtube, View, ArrowRight } from "lucide-react";
import { team, services } from "@/lib/data";
import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allServices = services.filter(s => s.category === 'Technology & Innovation' || s.category === 'Creative Solutions');

const podcastStats = [
    {
        icon: Users,
        value: "4k+",
        label: "Subscribers"
    },
    {
        icon: Youtube,
        value: "70+",
        label: "Podcasts"
    },
    {
        icon: View,
        value: "10k+",
        label: "Views"
    }
]

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About Sytecx Labs"
                subtitle="We're a creative and technological playground where future engineers, filmmakers, and digital leaders are shaped."
            />
            <div className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-3xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-200">
                        At Sytecx Labs, we believe that every student has the power to create, innovate, and lead with impact. Our mission is to bridge the gap between classroom knowledge and real-world skills by offering hands-on, project-driven learning from Class 4 to BTech. Students dive deep into Robotics, Drones, IoT Embedded Systems, Industrial Electronics, and now the dynamic worlds of Digital Marketing and Filmmaking Techniques.
                    </p>
                    <p className="text-lg text-gray-200 mt-4">
                        From building their own STEM kits and aerial drones to producing cinematic short films and mastering growth marketing strategies, our students aren’t just studying concepts—they’re solving real problems, telling impactful stories, and building their personal brand along the way.
                    </p>
                </section>
                
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-3xl font-bold text-white mb-4">Our Vision</h2>
                     <p className="text-lg text-gray-200">
                        Our vision at Sytecx Labs is to empower students with real-world skills, creative confidence, and the mindset to build meaningful solutions. We aim to transform young minds—into innovators, problem-solvers, and storytellers through hands-on education in Robotics, Drones, IoT, Embedded Systems, Industrial Electronics, Filmmaking, and Digital Marketing. We don’t just teach subjects. We nurture creators who can design, build, market, and lead in tomorrow’s world.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold text-white mb-12 text-center">What We Do?</h2>
                    <p className="text-center max-w-3xl mx-auto text-lg text-gray-200 mb-12">
                        We provide practical STEM education, focusing on real-world sectors. Our hands-on approach covers everything from drone technology and filmmaking to digital marketing.
                    </p>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full text-center bg-card/80 text-card-foreground">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 text-primary p-4 rounded-full">
                                            <service.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-headline text-xl font-semibold pt-2">{service.title}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
                
                <section className="bg-secondary/80 rounded-lg p-8 md:p-12">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div>
                             <h2 className="font-headline text-3xl font-bold text-primary mb-4">The ATC Podcasters</h2>
                             <Badge variant="default" className="mb-4">All Topics Considered</Badge>
                             <p className="text-lg text-muted-foreground mb-4">
                                We're more than a channel; we're a growing family of Telugu AND other language speakers who love to explore and discuss a variety of subjects. Our goal is to entertain, inform, and bring everyone closer through meaningful content.
                             </p>
                              <p className="text-muted-foreground mb-6">
                                This channel is your place for everything that catches your interest, spoken in our own Telugu English. From the exciting world of movies to the critical discussions on politics, entertaining content, and the latest current social issues , technology , Business, culture etc.
                             </p>
                            <Button asChild>
                                <Link href="https://www.youtube.com/@ATC.Podcasters" target="_blank" rel="noopener noreferrer">
                                    Visit Channel <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                         </div>
                         <div className="grid grid-cols-3 gap-4 text-center">
                             {podcastStats.map((stat) => (
                                 <div key={stat.label} className="bg-background/50 rounded-lg p-4 flex flex-col items-center justify-center">
                                    <stat.icon className="h-10 w-10 text-primary mb-2"/>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                </section>

                <section>
                    <Card className="bg-card/80 text-card-foreground p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <motion.div 
                                className="md:col-span-1"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="aspect-square relative rounded-full overflow-hidden mx-auto w-48 h-48 md:w-full md:h-full">
                                    <Image 
                                        src="https://placehold.co/400x400.png"
                                        alt="Kandi Ajay Kumar"
                                        fill
                                        className="object-cover"
                                        data-ai-hint="man portrait professional"
                                    />
                                </div>
                            </motion.div>
                            <motion.div 
                                className="md:col-span-2"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <blockquote className="text-xl italic text-white border-l-4 border-primary pl-6">
                                    <p className="mb-4">"At SytecX Labs, our mission is to spark innovation in every young mind. We guide students from idea to prototype, product to business, helping them explore the real world of entrepreneurship."</p>
                                    <p>"With a special focus on defence technology and digital media solutions, we aim to shape every child into a confident innovator and future entrepreneur."</p>
                                </blockquote>
                                <p className="mt-6 font-semibold text-white text-right">Kandi Ajay Kumar</p>
                                <p className="text-sm text-primary text-right">Founder, SytecX Labs</p>
                            </motion.div>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <TeamMemberCard member={member} />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
