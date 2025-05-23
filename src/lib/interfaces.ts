export interface ILink {
  label: string;
  url: string;
}

export interface IProject {
  id: number;
  title: string;
  date: string;
  img: string;
  desc: string;
  tech: string;
  links: ILink[];
}

export interface ISkill {
  src: string;
  alt: string;
  name: string;
}

export interface IExperience {
  companyOrSchool: string;
  title: string;
  date: string;
  desc: string;
  isEducation: false;
}
