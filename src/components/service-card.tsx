
import type { Service } from "@/lib/types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full group">
      <Card className={cn("h-full transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col", className)}>
        <CardHeader className="flex flex-row items-center gap-4 pb-4">
          <div className="bg-primary text-primary-foreground p-3 rounded-lg">
            <service.icon className="h-6 w-6" />
          </div>
          <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <p className="font-semibold italic text-primary/90 mb-2">"{service.tagline}"</p>
          <p className="text-muted-foreground flex-grow">{service.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
