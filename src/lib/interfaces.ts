export interface ILink {
  label: string;
  url: string;
}

export interface IProject {
  id: number;
  title: string;
  img: string;
  description: string;
  tech: string;
  links: ILink[];
}

export interface ISkill {
  src: string;
  alt: string;
  name: string;
}
