
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Innovative Solutions for a Digital World.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground hover:bg-accent">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground hover:bg-accent">
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground hover:bg-accent">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>D.no 102, sri satya ragevendra arcade, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026</li>
              <li>contact@sytecxlabs.com</li>
              <li>+91 9959316065</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sytecx Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
