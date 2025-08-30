import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-md object-cover"
            data-ai-hint={project.dataAiHint}
          />
        </div>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {project.githubUrl && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
