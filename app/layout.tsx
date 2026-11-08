import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { profile } from "@/lib/config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  title: `${profile.name} · Ingeniero de Sistemas & Desarrollador de Software`,
  description:
    "Ingeniero de Sistemas egresado de UNIMAR. Desarrollador de software creando aplicaciones web escalables, apps móviles, integraciones con IA y arquitectura en tiempo real.",
  keywords: [
    "Gabriel Cardona",
    "Ingeniero de Sistemas",
    "UNIMAR",
    "Software Developer",
    "React",
    "FastAPI",
    "Python",
    "Node.js",
    "Next.js",
    "Docker",
    "Sports Tech",
    "IA Integrations",
    "Remote Developer",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} · Ingeniero de Sistemas & Desarrollador de Software`,
    description: "Ingeniería de software, desarrollo web, móvil, IA y sistemas en tiempo real.",
    url: "/",
    siteName: profile.name,
    images: [
      {
        url: "/avatar.jpg", // A better practice is having an /og-image.jpg, but this works
        width: 800,
        height: 600,
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Ingeniero de Sistemas`,
    description: "Ingeniería de software, desarrollo web, móvil, IA y sistemas en tiempo real.",
    creator: "@gabrielcardona", // Replace with your actual handle if applicable
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    alternateName: "Gabriel Cardona",
    url: "https://gabrielcardona.dev",
    image: "https://gabrielcardona.dev/avatar.jpg",
    jobTitle: "Ingeniero de Sistemas & Full-Stack Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad de Margarita (UNIMAR)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Isla de Margarita",
      addressRegion: "Nueva Esparta",
      addressCountry: "VE",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "React",
      "React Native",
      "Next.js",
      "FastAPI",
      "Python",
      "TypeScript",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
      "Sports Technology",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

