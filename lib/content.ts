import type { Lang } from "./translations";

export type Category = "sports" | "fullstack";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  category: Category;
  accent: "pitch" | "data";
  demo: string;
  repo: string;
}

export const projects: Record<Lang, Project[]> = {
  en: [
    {
      name: "Project 1 (Demo)",
      description:
        "Description of your first project. Edit this text in lib/content.ts to showcase your actual work and the problems you solved.",
      tags: ["React", "FastAPI", "PostgreSQL"],
      category: "fullstack",
      accent: "pitch",
      demo: "#",
      repo: "#",
    },
    {
      name: "Project 2 (Demo)",
      description:
        "Description of your second project. Replace this placeholder with real details when you have your projects deployed.",
      tags: ["Next.js", "Tailwind CSS", "Docker"],
      category: "fullstack",
      accent: "data",
      demo: "#",
      repo: "#",
    },
    {
      name: "Project 3 (Demo)",
      description:
        "Description of your third project. Highlight your architecture, real-time features, or any specific integrations.",
      tags: ["Node.js", "WebSockets", "Redis"],
      category: "fullstack",
      accent: "pitch",
      demo: "#",
      repo: "#",
    },
  ],
  es: [
    {
      name: "Proyecto 1 (Demo)",
      description:
        "Descripción de tu primer proyecto. Edita este texto en lib/content.ts para mostrar tu trabajo real y los problemas que resolviste.",
      tags: ["React", "FastAPI", "PostgreSQL"],
      category: "fullstack",
      accent: "pitch",
      demo: "#",
      repo: "#",
    },
    {
      name: "Proyecto 2 (Demo)",
      description:
        "Descripción de tu segundo proyecto. Reemplaza este marcador de posición con detalles reales cuando tengas tus proyectos desplegados.",
      tags: ["Next.js", "Tailwind CSS", "Docker"],
      category: "fullstack",
      accent: "data",
      demo: "#",
      repo: "#",
    },
    {
      name: "Proyecto 3 (Demo)",
      description:
        "Descripción de tu tercer proyecto. Destaca tu arquitectura, características en tiempo real o integraciones específicas.",
      tags: ["Node.js", "WebSockets", "Redis"],
      category: "fullstack",
      accent: "pitch",
      demo: "#",
      repo: "#",
    },
  ],
};

export interface EducationItem {
  role: string;
  institution: string;
  period: string;
  points: string[];
  logo?: string;
}

export const education: Record<Lang, EducationItem[]> = {
  en: [
    {
      role: "Systems Engineer",
      institution: "Universidad de Margarita (UNIMAR)",
      period: "2022 — 2026",
      logo: "/unimar.png",
      points: [
        "Degree Thesis: Designed and built an AI-powered futsal team management web platform.",
        "Core coursework focused on software architecture, web development, database design, and intelligent systems.",
      ],
    },
  ],
  es: [
    {
      role: "Ingeniero de Sistemas",
      institution: "Universidad de Margarita (UNIMAR)",
      period: "2022 — 2026",
      logo: "/unimar.png",
      points: [
        "Tesis de Grado: Diseño y desarrollo de plataforma web de gestión deportiva con inteligencia artificial para un equipo de fútbol sala.",
        "Enfoque académico en arquitectura de software, desarrollo web, diseño de bases de datos y sistemas inteligentes.",
      ],
    },
  ],
};

export interface SkillGroup {
  labelKey: string;
  descKey: string;
  accent: "pitch" | "data";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    labelKey: "skills.frontend",
    descKey: "skills.frontendDesc",
    accent: "pitch",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    labelKey: "skills.backend",
    descKey: "skills.backendDesc",
    accent: "data",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL"],
  },
  {
    labelKey: "skills.devops",
    descKey: "skills.devopsDesc",
    accent: "pitch",
    items: ["Docker", "WebSockets"],
  },
];

export interface TickerItem {
  home: string;
  away: string;
  score: string;
  minute: string;
}

export const tickerItems: Record<Lang, TickerItem[]> = {
  en: [
    { home: "LIVE · Inter", away: "Milan", score: "2 - 1", minute: "67'" },
    { home: "Bayern", away: "Dortmund", score: "1 - 1", minute: "HT" },
    { home: "Palmeiras", away: "Flamengo", score: "3 - 0", minute: "FT" },
    { home: "Barcelona", away: "Real Madrid", score: "0 - 2", minute: "71'" },
    { home: "River Plate", away: "Boca Juniors", score: "1 - 0", minute: "34'" },
    { home: "Futsal AI", away: "UNIMAR Feed", score: "4 - 2", minute: "Q4" },
    { home: "Djokovic", away: "Alcaraz", score: "6-4 · 3-6 · 5-3", minute: "3rd" },
  ],
  es: [
    { home: "EN VIVO · Inter", away: "Milan", score: "2 - 1", minute: "67'" },
    { home: "Bayern", away: "Dortmund", score: "1 - 1", minute: "HT" },
    { home: "Palmeiras", away: "Flamengo", score: "3 - 0", minute: "FT" },
    { home: "Barcelona", away: "Real Madrid", score: "0 - 2", minute: "71'" },
    { home: "River Plate", away: "Boca Juniors", score: "1 - 0", minute: "34'" },
    { home: "Futsal AI", away: "Feed UNIMAR", score: "4 - 2", minute: "Q4" },
    { home: "Djokovic", away: "Alcaraz", score: "6-4 · 3-6 · 5-3", minute: "3er" },
  ],
};

export interface Stat {
  value: number;
  suffix: string;
  labelKey: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: "+", labelKey: "stats.projects" },
  { value: 1500, suffix: "+", labelKey: "stats.commits" },
  { value: 6, suffix: "+", labelKey: "stats.sports" },
  { value: 10, suffix: "+", labelKey: "stats.cups" },
];

