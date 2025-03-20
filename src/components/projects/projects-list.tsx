import { Project } from "@/lib/interfaces";
import ProjectCard from "./project-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="col-span-12"
    >
      <CarouselContent>
        {projects
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <CarouselItem
              key={project.id}
              className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
