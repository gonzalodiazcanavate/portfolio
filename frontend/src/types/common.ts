export type NavLink = {
  name: string;
  href: string;
};

export interface Project {
    id: number;
    title: string;
    description: string;
    architecture?: string;
    tech: string[];
    github?: string;
    live?: string;
    coverImage?: string;
    images?: string[];
}

export interface Skill {
    name: string;
    level: string;
    pct: number;
    experience: number;
    description: string;
}