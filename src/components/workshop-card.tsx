import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Workshop } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface WorkshopCardProps {
  workshop: Workshop;
}

export function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="rounded-md object-cover"
            data-ai-hint={workshop.dataAiHint}
          />
        </div>
        <CardTitle className="font-headline text-xl">{workshop.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{new Date(workshop.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{workshop.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={workshop.registrationUrl}>Register Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
