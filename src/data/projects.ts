export interface ProjectDetails {
  overview: string;
  features: string[];
  frontendTech: string[];
  backendTech: string[];
  databaseAuth: string[];
  integrations?: string[];
  highlights: string[];
}

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
  role?: string;
  timeline?: string;
  /** Gradient for the horizontal-scroll portfolio cards (reference style) */
  color: string;
  img: string;
  highlights?: string[];
  details: ProjectDetails;
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
    category: "Full Stack Web Application",
    featured: true,
    role: "Full Stack Developer",
    timeline: "2025",
    img: "/projects/applydock.png",
    details: {
      overview:
        "ApplyDock is a disciplined career workspace designed for high-stakes engineers. It unites reactive Kanban stages, high-density tabular search, automated countdown badges for upcoming interviews, and structured compensation benchmarking into an isolated, privacy-first web application.",
      features: [
        "Dual-engine pipeline: 6-stage adaptive Kanban board (Wishlist, Applied, Screening, Interview, Offer, Rejected/Withdrawn) with zero forced horizontal scrolling",
        "High-density data grid with real-time keyword search, work-mode filtering (Hybrid, Remote, On-site), and column sorting",
        "Slide-over inspector drawer showing job specs, recruiter contacts, technical skill indicators, and private notes",
        "Automated interview countdown milestones with overdue warning badges",
        "Structured compensation benchmarking with BDT (৳) base and bonus tracking",
        "RFC 4180 compliant CSV export and isolated Supabase database privacy",
      ],
      frontendTech: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Lucide React",
        "Next Themes",
      ],
      backendTech: [
        "Next.js Server Actions",
        "Route Handlers",
        "Zod Schema Validation",
        "bcryptjs",
      ],
      databaseAuth: [
        "PostgreSQL",
        "Drizzle ORM",
        "NextAuth (Auth.js) with Drizzle Adapter",
      ],
      integrations: [
        "Supabase / PostgreSQL connection",
        "RFC 4180 CSV Exporter",
      ],
      highlights: [
        "Engineered type-safe database schemas and migrations with Drizzle ORM and PostgreSQL",
        "Designed high-density, zero-forced-scroll Kanban UI optimized for rapid application tracking",
        "Implemented secure session authentication and role-safe middleware with NextAuth",
      ],
    },
  },
  {
    id: 2,
    slug: "medicare-connect",
    color: "from-blue-300 to-violet-300",
    title: "MediCare Connect",
    shortDescription:
      "A full-stack healthcare platform connecting patients with medical services and doctor appointments.",
    description:
      "MediCare Connect is a comprehensive healthcare platform enabling patients to discover specialist doctors, book and manage real-time appointments, process payments securely, and review health visit records. Built with Next.js, Node.js/Express, MongoDB, Firebase Auth, and Stripe.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
    ],
    liveUrl: "https://medicare-client-a10.vercel.app/",
    clientRepo: "https://github.com/ShahriarALshihab/medicare-clientA10",
    serverRepo: "https://github.com/ShahriarALshihab/medicareConnect-serverA10",
    category: "Full Stack Healthcare Platform",
    featured: true,
    role: "Full Stack Lead Developer",
    timeline: "2024",
    img: "/projects/medicare-connect.png",
    details: {
      overview:
        "MediCare Connect simplifies healthcare access by bridging patients and medical specialists through a unified booking platform. Patients can explore doctor profiles by specialty, book available consultation slots, pay fees securely, and manage their appointment timeline from a personal dashboard.",
      features: [
        "Specialist doctor discovery with instant search by name, department, and available schedules",
        "Real-time appointment slot booking engine with conflict prevention and cancellation controls",
        "Secure online payment gateway integration powered by Stripe",
        "Personal patient dashboard to track active bookings, payment receipts, and profile settings",
        "Visual health statistics and appointment analytics with Recharts",
      ],
      frontendTech: [
        "Next.js 14",
        "React 18",
        "Tailwind CSS",
        "DaisyUI",
        "Axios",
        "Framer Motion",
        "Recharts",
        "React Icons",
      ],
      backendTech: [
        "Node.js",
        "Express.js (v5)",
        "RESTful API Architecture",
        "JWT (jsonwebtoken)",
        "Cookie Parser",
        "CORS",
      ],
      databaseAuth: [
        "MongoDB",
        "Mongoose ODM",
        "Firebase Authentication (Email & Google)",
        "Firebase Admin SDK",
      ],
      integrations: [
        "Stripe Payment Gateway (@stripe/stripe-js, @stripe/react-stripe-js)",
        "Firebase Auth SDK",
      ],
      highlights: [
        "Developed scalable RESTful API endpoints with Express.js and optimized MongoDB queries with indexing",
        "Architected dual-layer authentication using Firebase on client and verified JWT tokens on backend",
        "Integrated Stripe payment processing with automated payment verification workflows",
      ],
    },
  },
  {
    id: 3,
    slug: "sun-cart",
    color: "from-violet-300 to-purple-300",
    title: "SunCart",
    shortDescription:
      "A modern summer-themed e-commerce platform with authenticated shopping and profile management.",
    description:
      "SunCart is a feature-packed e-commerce web application where users can explore seasonal product collections, view protected product details, manage shopping carts, and update their customer profile. Built with Next.js 16, Prisma ORM, Better Auth, and Tailwind CSS v4.",
    tech: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Prisma ORM",
      "Better Auth",
      "DaisyUI",
    ],
    liveUrl: "https://sun-cart-ph-8req.vercel.app/",
    githubRepo: "https://github.com/ShahriarALshihab/sunCartPH",
    category: "Full Stack E-Commerce",
    featured: true,
    role: "Full Stack Developer",
    timeline: "2024",
    img: "/projects/sun-cart.png",
    details: {
      overview:
        "SunCart provides a fast, modern shopping experience for seasonal essentials. Built with Next.js 16 and Prisma ORM, it features dynamic product listings, route-protected product detail pages, seamless session authentication via Better Auth, and interactive visual feedback.",
      features: [
        "Dynamic product catalog showcasing seasonal items with filtering and responsive cards",
        "Protected product details view restricted to authenticated users",
        "Dedicated customer profile page with account settings and update options",
        "Modern hero section with active promotional offers and featured product spotlights",
        "Engaging micro-interactions and animated UI elements powered by Lottie React",
      ],
      frontendTech: [
        "Next.js 16 (Turbopack)",
        "React 19",
        "Tailwind CSS v4",
        "DaisyUI",
        "Lottie React",
        "React Hot Toast",
      ],
      backendTech: [
        "Next.js Server Actions & API Handlers",
        "Prisma ORM",
        "TypeScript",
      ],
      databaseAuth: [
        "Relational Database (PostgreSQL/SQLite)",
        "Prisma Client",
        "Better Auth (Email/Password & Google OAuth)",
      ],
      integrations: [
        "Better Auth Authentication Engine",
        "Prisma Data Modeling Client",
      ],
      highlights: [
        "Built full-stack Next.js 16 application with Prisma ORM data modeling",
        "Implemented multi-provider authentication (Google OAuth & Email) using Better Auth",
        "Designed modern, responsive shopping interface using Tailwind CSS v4 and DaisyUI",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
