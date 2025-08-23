
import type { TeamMember } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="h-full text-center overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            data-ai-hint={member.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-primary">{member.role}</p>
      </CardContent>
      <CardFooter className="justify-center p-4 pt-0">
        <div className="flex space-x-2">
            {member.socials.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            )}
            {member.socials.twitter && (
              <Button variant="ghost" size="icon" asChild>
                <Link href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            )}
            {member.socials.github && (
              <Button variant="ghost" size="icon" asChild>
                <Link href={member.socials.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}
