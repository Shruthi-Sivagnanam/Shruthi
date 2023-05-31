import { IconType } from "react-icons";

export interface Education {
  course: string;
  institute: string;
  year: string;
  percentage: string;
}

export interface Work {
  title: string;
  companyName: string;
  duration: string;
  ip: string;
}

export interface Achivements {
  title: string;
  des: string;
}
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  skill: string;
  level: string;
}
export interface ProjectsWebiste {
  title: string;
  projectUrl: string;
  webisteUrl: string;
  des: string;
}
