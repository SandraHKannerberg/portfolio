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
  links: Links;
}

export interface Skill {
  src: string;
  alt: string;
  name: string;
}
