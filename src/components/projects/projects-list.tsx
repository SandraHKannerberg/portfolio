import { Project } from "@/lib/interfaces";
import ProjectCard from "./project-card";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid col-span-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
