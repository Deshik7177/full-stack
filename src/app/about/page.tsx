
"use client";

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const teamMembers = [
    {
        name: "Alex Johnson",
        role: "Lead Developer",
        bio: "Alex is the visionary founder of Sytecx Labs, driving the company's mission to innovate and excel in the tech industry.",
        image: "https://placehold.co/400x400.png",
        dataAiHint: "man portrait"
    },
    {
        name: "Maria Garcia",
        role: "Project Manager",
        bio: "Maria ensures every project is a success, from initial concept to final delivery, with a keen eye for detail and a passion for excellence.",
        image: "https://placehold.co/400x400.png",
        dataAiHint: "woman portrait"
    },
    {
        name: "David Smith",
        role: "UI/UX Designer",
        bio: "David is the creative force behind our stunning and intuitive user interfaces, blending artistry with user-centric design principles.",
        image: "https://placehold.co/400x400.png",
        dataAiHint: "man portrait professional"
    }
];

const coreValues = [
    "Innovation",
    "Integrity",
    "Collaboration",
    "Customer Centricity",
    "Excellence"
];

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About Sytecx Labs"
                subtitle="We are a passionate team of innovators, creators, and problem-solvers dedicated to pushing the boundaries of what's possible in the digital world."
            />
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <section className="mb-24 text-center">
                    <h2 className="font-headline text-3xl font-bold text-primary mb-4">Our Mission</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Our mission is to empower businesses and individuals through cutting-edge technology and creative solutions. We strive to build products that are not only powerful and functional but also beautiful and intuitive. We believe in the power of collaboration and are committed to forging lasting partnerships with our clients to help them achieve their goals.
                    </p>
                </section>

                <section className="mb-24">
                    <h2 className="font-headline text-3xl font-bold text-primary mb-12 text-center">Meet Our Team</h2>
                    <motion.div
                        className="grid gap-12 md:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <div className="relative w-40 h-40 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        className="rounded-full object-cover shadow-lg"
                                        data-ai-hint={member.dataAiHint}
                                    />
                                </div>
                                <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                                <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {coreValues.map((value) => (
                            <motion.div
                                key={value}
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center justify-center bg-primary/10 text-primary w-20 h-20 rounded-full mb-4">
                                    <Check className="w-10 h-10" />
                                </div>
                                <h3 className="font-semibold">{value}</h3>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
