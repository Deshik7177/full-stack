import type { Service } from "@/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="bg-primary text-primary-foreground p-4 rounded-lg">
          <service.icon className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
