
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-300">
              Innovative Solutions for a Digital World.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-white/10">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-white/10">
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-white/10">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>123 Tech Street, Silicon Valley, CA 94000</li>
              <li>contact@sytecxlabs.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Sytecx Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
