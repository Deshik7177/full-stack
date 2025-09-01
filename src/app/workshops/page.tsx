
"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { WorkshopCard } from "@/components/workshop-card";
import { workshops } from "@/lib/data";

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

export default function WorkshopsPage() {
  return (
    <div>
      <PageHeader
        title="Our Workshops"
        subtitle="Level up your skills with our hands-on workshops led by industry experts. Join us and learn something new."
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workshops.map((workshop) => (
            <motion.div key={workshop.title} variants={itemVariants}>
              <WorkshopCard workshop={workshop} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
