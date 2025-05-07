import Image from "next/image";
import { IProject } from "@/lib/interfaces";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LinkWithIcon from "../ui/link-with-icon";

export default function ProjectCard({ project }: { project: IProject }) {
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
        {project.links.map((link, index) => (
          <LinkWithIcon
            key={index}
            label={link.label}
            url={link.url}
            newTab
            className="justify-center"
          />
        ))}
      </CardFooter>
    </Card>
  );
}
