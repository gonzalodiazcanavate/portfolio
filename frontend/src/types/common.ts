export type NavLink = {
  name: string;
  href: string;
};

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    image?: string;
}

export interface Skill {
    name: string;
    level: string;
    pct: number;
    experience: number;
    description: string;
}