// Fetch projects data from local json-file
import { Project } from "./interfaces";

export async function fetchProjects(): Promise<Project[]> {
  // TODO: add env
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }/data/projects-data.json`
  );

  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
}
