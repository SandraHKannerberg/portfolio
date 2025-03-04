import { Project } from "@/lib/interfaces";
// import ProjectCard from "./project-card";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="grid col-span-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
      {projects.map((project) => (
        <li key={project.id}>
          <Card>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.tech}</p>
            </CardContent>
            <CardFooter>{/* <p>{project.links}</p> */}</CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
}
