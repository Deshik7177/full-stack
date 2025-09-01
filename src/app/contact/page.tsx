
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

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

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind or just want to say hello? We'd love to hear from you. Drop us a line and we'll get back to you."
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h2 className="font-headline text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Find us at our office, send us an email, or give us a call.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary mt-1 p-3 rounded-md">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Our Office</h3>
                  <p className="text-muted-foreground">D.no 102, sri satya ragevendra arcade, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary mt-1 p-3 rounded-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">we@sytecxlabs.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary mt-1 p-3 rounded-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+91 9959316065</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
