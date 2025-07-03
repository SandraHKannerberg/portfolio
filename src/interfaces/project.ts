import { ILink } from "./link";

export interface IProject {
  id: string;
  title: string;
  date: string;
  img: string;
  desc: string;
  tech: string;
  links: ILink[];
}
