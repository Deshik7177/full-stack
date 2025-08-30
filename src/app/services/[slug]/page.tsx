
import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { StemEducationDetails } from "@/components/stem-education-details";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const imageGridClasses = [
      "col-span-2 row-span-2", // First image is larger
      "",
      "",
      "col-span-2", // Last image is wider
  ]

  return (
    <div>
      <PageHeader title={service.title} subtitle={service.tagline} />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {service.slug === 'stem-education' ? (
          <StemEducationDetails />
        ) : (
          <div
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <Badge className="mb-4">{service.category}</Badge>
              <div
                className="prose prose-invert max-w-none text-lg text-muted-foreground whitespace-pre-line leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.longDescription }}
              />
            </div>

            {service.images && service.images.length > 0 && (
              <div
                className="grid grid-cols-2 grid-rows-3 gap-4"
              >
                {service.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "overflow-hidden rounded-lg shadow-lg relative aspect-video",
                      imageGridClasses[index]
                    )}
                  >
                    <Image
                      src={image.url}
                      alt={`${service.title} image ${index + 1}`}
                      fill
                      className="object-cover transform transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.dataAiHint}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
