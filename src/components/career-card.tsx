
import type { Career } from "@/lib/types";
import Link from "next/link";
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
import { MapPin } from "lucide-react";

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{career.title}</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{career.location}</span>
          </div>
          <Badge variant="outline">{career.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{career.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={career.applyUrl}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
