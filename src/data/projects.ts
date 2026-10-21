export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubRepo?: string;
  clientRepo?: string;
  serverRepo?: string;
  category: string;
  featured: boolean;
  highlights?: string[];
  role?: string;
  timeline?: string;
  /** Gradient for the horizontal-scroll portfolio cards (reference style) */
  color: string;
  img?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "applydock",
    color: "from-red-300 to-blue-300",
    title: "ApplyDock",
    shortDescription:
      "An intelligent job application pipeline and interview command center for engineers.",
    description:
      "ApplyDock is a disciplined career workspace that replaces messy spreadsheets with high-density pipeline management, automated interview countdowns, structured compensation benchmarking, and 1–5 technical skill gap profiling. Built with Next.js App Router, PostgreSQL with Drizzle ORM, NextAuth, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "NextAuth", "Zod"],
    liveUrl: "https://applydock.vercel.app/",
    githubRepo: "https://github.com/ShahriarALshihab/applydock",
    category: "Full Stack",
    featured: true,
    role: "Full Stack Developer",
    timeline: "2025",
    img: "/projects/applydock.png",
    highlights: [
      "Adaptive Kanban board & high-density data grid with zero forced horizontal scrolling",
      "Automated interview countdown milestones & real-time search and filter engine",
      "Structured compensation benchmarking and 1–5 technical skill gap profiling",
      "Type-safe database architecture using PostgreSQL and Drizzle ORM",
    ],
  },
  {
    id: 2,
    slug: "medicare-connect",
    color: "from-blue-300 to-violet-300",
    title: "MediCare Connect",
    shortDescription:
      "A full-stack healthcare platform connecting patients with medical services.",
    description:
      "MediCare Connect is a comprehensive healthcare web application that allows users to browse medical services, book appointments, and manage their health records. Built with a React frontend and a Node.js/Express backend with MongoDB.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "JWT"],
    liveUrl: "https://medicare-client-a10.vercel.app/",
    clientRepo: "https://github.com/ShahriarALshihab/medicare-clientA10",
    serverRepo: "https://github.com/ShahriarALshihab/medicareConnect-serverA10",
    category: "Full Stack",
    featured: true,
    role: "Full Stack Lead Developer",
    timeline: "2024",
    img: "/projects/medicare-connect.png",
    highlights: [
      "Real-time appointment scheduling and slot booking engine",
      "Secure patient authentication with Firebase Auth & JWT authorization",
      "Medical records management and responsive patient dashboard",
      "RESTful API architecture with MongoDB database indexing",
    ],
  },
  {
    id: 3,
    slug: "sun-cart",
    color: "from-violet-300 to-purple-300",
    title: "SunCart",
    shortDescription:
      "A modern e-commerce platform with a sleek shopping experience.",
    description:
      "SunCart is a feature-rich e-commerce web application featuring product listings, cart management, user authentication, and a smooth checkout experience. Built with React on the frontend and powered by a robust backend.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://sun-cart-ph-8req.vercel.app/",
    githubRepo: "https://github.com/ShahriarALshihab/sunCartPH",
    category: "Full Stack",
    featured: true,
    role: "Full Stack Developer",
    timeline: "2024",
    img: "/projects/sun-cart.png",
    highlights: [
      "Dynamic product catalog with instant filtering and search",
      "Persistent shopping cart with synchronized state management",
      "Secure checkout flow and role-based administrative controls",
      "RESTful backend API with optimized MongoDB queries",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
