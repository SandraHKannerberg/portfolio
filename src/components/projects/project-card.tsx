import Image from "next/image";
import { Project } from "@/lib/interfaces";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-grow flex">
        <CardTitle>
          <h2 className="text-lg uppercase">{project.title}</h2>
        </CardTitle>
        <CardDescription className="flex flex-col gap-3 flex-grow">
          <p className="flex-grow">{project.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-50 flex justify-center items-center">
        <Image
          src={project.img}
          width={200}
          height={200}
          alt="Cover-image to showcase project on different devices"
          className="m-auto object-contain"
        />
      </CardContent>
      <CardFooter>
        {Object.entries(project.links).map(([key, url]) =>
          url ? (
            <a
              key={key}
              href={url}
              target="_blank"
              className="col-span-1 flex justify-center items-center text-lg cursor-pointer hover:underline w-16 h-16"
            >
              {key === "github" ? "Github" : key === "demo" ? "Demo" : null}
            </a>
          ) : null
        )}
      </CardFooter>
    </Card>
  );
}
