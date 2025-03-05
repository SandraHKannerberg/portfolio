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
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-lg">{project.title}</h2>
        </CardTitle>
        <CardDescription className="flex flex-col gap-3">
          <p>{project.description}</p>
          <p>
            <strong>Tech-stack:</strong> {project.tech}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={project.img}
          width={200}
          height={200}
          alt="Cover-image to showcase project on different devices"
          className="m-auto"
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
