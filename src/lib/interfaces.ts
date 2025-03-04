export interface Links {
  github?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  tech: string;
  links: Links[];
}
