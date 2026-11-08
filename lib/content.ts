import type { Lang, TKey } from "./translations";

export type Category = "sports" | "fullstack" | "mobile";

export interface Screenshot {
  src: string;
  caption: string;
}

export interface Project {
  name: string;
  description: string;
  metrics: string[];
  tags: string[];
  category: Category;
  accent: "pitch" | "data";
  demo: string;
  repo: string;
  screenshots: Screenshot[];
}

export const projects: Record<Lang, Project[]> = {
  en: [
    {
      name: "El Valle F.S - Sports Management & AI Analytics",
      description:
      "Comprehensive web and PWA platform for futsal sports management. Features AI-powered match tactical extraction (Groq / Llama 3), biometric monitoring, and injury risk prediction.",
      metrics: [
        "Tactical AI Inference < 1.5s",
        "Docker + PostgreSQL",
        "PWA Offline Access",
      ],
      tags: ["React", "FastAPI", "Python", "PostgreSQL", "Docker", "Groq AI"],
      category: "sports",
      accent: "pitch",
      demo: "#",
      repo: "https://github.com/Gbriel2003/Proyecto-El-Valle-FS",
      screenshots: [
        {
          src: "/projects/elvalle/login.png",
          caption:
            "Institutional login portal for El Valle F.S. coaching staff, featuring role-based FastAPI security and JWT authentication.",
        },
        {
          src: "/projects/elvalle/dashboard.png",
          caption:
            "Head coach executive dashboard: global squad performance analytics, 100% win-rate balance, fatigue classification, and physical load monitoring.",
        },
        {
          src: "/projects/elvalle/athlete.png",
          caption:
            "Individualized athlete profile: jump power metrics, RPE fatigue tracking, and AI-powered injury risk prediction.",
        },
        {
          src: "/projects/elvalle/nutrition.png",
          caption:
            "Nutritional and biometric tracking: body mass index (BMI), sleep habits, hydration levels, and custom dietary meal libraries per athlete.",
        },
        {
          src: "/projects/elvalle/matches.png",
          caption:
            "Match calendar management, active tournament tracking, and PDF tactical report generation.",
        },
      ],
    },
    {
      name: "Gastos App - Mobile Personal Finance",
      description:
      "Offline-first personal finance mobile app built with React Native and Expo. Features real-time balance calculations, local SQLite persistence, and fluid gesture animations.",
      metrics: [
        "100% Offline (SQLite)",
        "Zustand Reactive State",
        "60 FPS Native Gestures",
      ],
      tags: ["React Native", "Expo", "SQLite", "TypeScript", "Zustand"],
      category: "mobile",
      accent: "pitch",
      demo: "#",
      repo: "https://github.com/Gbriel2003/Gastos-App",
      screenshots: [
        {
          src: "/projects/gastos/dashboard.png",
          caption:
            "Mobile interactive financial dashboard: real-time net balance, visual income vs. expense breakdown, category breakdown, and transaction history.",
        },
        {
          src: "/projects/gastos/icon.png",
          caption:
            "Official mobile application brand identity and app icon featuring modern emerald 3D gradient vector styling.",
        },
      ],
    },
    {
      name: "Pegaso Tech - Modern Software Solutions",
      description:
      "High-performance corporate landing page for modern software engineering. Built with Next.js 16, featuring interactive 3D constellations, smooth GSAP motion, and sub-0.8s LCP.",
      metrics: [
        "Core Web Vitals < 0.8s",
        "Lighthouse 98+",
        "Edge CDN on Vercel",
      ],
      tags: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "GSAP"],
      category: "fullstack",
      accent: "data",
      demo: "https://pegaso-landing.vercel.app/",
      repo: "https://github.com/Gbriel2003/pegaso-landing",
      screenshots: [
        {
          src: "/projects/pegaso/hero.png",
          caption:
            "Main Hero entrance: 'Build & scale your company software with Pegaso' featuring official brand identity, floating navbar, and quote CTAs.",
        },
        {
          src: "/projects/pegaso/services.png",
          caption:
            "Cutting-edge web & mobile engineering services showcase, emphasizing modern modular architectures and sub-0.8s LCP Core Web Vitals.",
        },
        {
          src: "/projects/pegaso/tech-stack.png",
          caption:
            "Cutting-edge tech stack constellation: interactive animated orbits featuring modern cloud & frontend frameworks.",
        },
        {
          src: "/projects/pegaso/philosophy.png",
          caption:
            "Pegaso Philosophy: 'Frictionless engineering. Tangible results', accompanied by high-impact corporate mission and vision.",
        },
        {
          src: "/projects/pegaso/values.png",
          caption:
            "Purpose and engineering principles: scalable architecture, 100% intellectual property ownership, and agile delivery.",
        },
        {
          src: "/projects/pegaso/footer.png",
          caption:
            "Enterprise technical footer and navigation with direct communication channels and service directory.",
        },
      ],
    },
  ],
  es: [
    {
      name: "El Valle F.S - Plataforma de Gestión Deportiva & Analítica IA",
      description:
      "Plataforma web y PWA para la gestión deportiva y táctica de fútbol sala. Incluye análisis de partidos con IA (Groq / Llama 3), seguimiento biométrico y prevención de lesiones.",
      metrics: [
        "Inferencia IA < 1.5s",
        "Docker + PostgreSQL",
        "Acceso PWA Offline",
      ],
      tags: ["React", "FastAPI", "Python", "PostgreSQL", "Docker", "Groq AI"],
      category: "sports",
      accent: "pitch",
      demo: "#",
      repo: "https://github.com/Gbriel2003/Proyecto-El-Valle-FS",
      screenshots: [
        {
          src: "/projects/elvalle/login.png",
          caption:
            "Portal de autenticación institucional del club El Valle F.S., con validación de roles en FastAPI y tokens seguros JWT.",
        },
        {
          src: "/projects/elvalle/dashboard.png",
          caption:
            "Panel principal del entrenador: analítica de rendimiento global, tasa de victorias (100% de efectividad), distribución de fatiga y monitoreo de carga física del plantel.",
        },
        {
          src: "/projects/elvalle/athlete.png",
          caption:
            "Ficha deportiva individualizada: cálculo de potencia de salto, fatiga RPE y predicción de riesgo de lesiones mediante IA.",
        },
        {
          src: "/projects/elvalle/nutrition.png",
          caption:
            "Control nutricional y biometría: seguimiento de peso, IMC, horas de sueño, hidratación y biblioteca de dietas personalizadas por atleta.",
        },
        {
          src: "/projects/elvalle/matches.png",
          caption:
            "Gestión de calendario de partidos, torneos activos y generación / visualización de reportes tácticos en PDF.",
        },
      ],
    },
    {
      name: "Gastos App - Finanzas Personales Móviles",
      description:
      "Aplicación móvil de finanzas personales offline-first con SQLite. Proporciona balance en tiempo real, categorización ágil de gastos y animaciones fluidas.",
      metrics: [
        "100% Offline (SQLite)",
        "Estado con Zustand",
        "60 FPS Reanimated",
      ],
      tags: ["React Native", "Expo", "SQLite", "TypeScript", "Zustand"],
      category: "mobile",
      accent: "pitch",
      demo: "#",
      repo: "https://github.com/Gbriel2003/Gastos-App",
      screenshots: [
        {
          src: "/projects/gastos/dashboard.png",
          caption:
            "Dashboard financiero interactivo móvil: balance disponible en tiempo real, desglose visual de ingresos/egresos, categorías de gasto y feed de transacciones.",
        },
        {
          src: "/projects/gastos/icon.png",
          caption:
            "Identidad visual e isotipo oficial de la aplicación móvil: billetera 3D moderna con vector de crecimiento financiero en degradado esmeralda.",
        },
      ],
    },
    {
      name: "Pegaso Tech - Plataforma de Soluciones de Software",
      description:
      "Landing corporativa de alto rendimiento desarrollada con Next.js 16. Destaca por sus animaciones cinemáticas con GSAP, constelaciones orbitales y LCP < 0.8s.",
      metrics: [
        "Core Web Vitals < 0.8s",
        "Lighthouse 98+",
        "Edge CDN en Vercel",
      ],
      tags: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "GSAP"],
      category: "fullstack",
      accent: "data",
      demo: "https://pegaso-landing.vercel.app/",
      repo: "https://github.com/Gbriel2003/pegaso-landing",
      screenshots: [
        {
          src: "/projects/pegaso/hero.png",
          caption:
            "Portada principal y Hero: 'Construye y escala el software de tu empresa con Pegaso' con identidad visual oficial, navbar flotante y accesos a cotización.",
        },
        {
          src: "/projects/pegaso/services.png",
          caption:
            "Sección de servicios de desarrollo web y móvil de vanguardia, destacando arquitecturas modernas y rendimiento optimizado Core Web Vitals (< 0.8s LCP).",
        },
        {
          src: "/projects/pegaso/tech-stack.png",
          caption:
            "Ecosistema tecnológico de vanguardia: visualizador interactivo con órbitas animadas de tecnologías modernas (React, TypeScript, Python, Docker, Next.js).",
        },
        {
          src: "/projects/pegaso/philosophy.png",
          caption:
            "Filosofía Pegaso: 'Ingeniería sin fricción. Resultados tangibles', acompañada de la visión y misión de impacto global.",
        },
        {
          src: "/projects/pegaso/values.png",
          caption:
            "Propósito y principios de ingeniería: plataformas escalables, propiedad intelectual exclusiva y entregas con ciclos ágiles transparentes.",
        },
        {
          src: "/projects/pegaso/footer.png",
          caption:
            "Navegación técnica y footer institucional con enlaces a servicios especializados y canales de contacto directo.",
        },
      ],
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
  labelKey: TKey;
  descKey: TKey;
  accent: "pitch" | "data";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    labelKey: "skills.frontend",
    descKey: "skills.frontendDesc",
    accent: "pitch",
    items: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    labelKey: "skills.backend",
    descKey: "skills.backendDesc",
    accent: "data",
    items: ["FastAPI", "Python", "Node.js", "PostgreSQL", "SQLite", "Inteligencia Artificial"],
  },
  {
    labelKey: "skills.devops",
    descKey: "skills.devopsDesc",
    accent: "pitch",
    items: ["Docker", "AWS", "Expo", "Git"],
  },
];

