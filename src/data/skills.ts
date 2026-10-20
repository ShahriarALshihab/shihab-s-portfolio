import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiExpress,
  SiFirebase,
  SiAxios,
  SiNestjs,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  FiDatabase,
  FiServer,
  FiShield,
  FiTerminal,
  FiBookOpen,
  FiCpu,
  FiZap,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  glowColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core programming languages for typed, scalable engineering",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", glowColor: "rgba(247, 223, 30, 0.25)" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", glowColor: "rgba(49, 120, 198, 0.25)" },
      { name: "SQL", icon: FiDatabase, color: "#00d8ff", glowColor: "rgba(0, 216, 255, 0.25)" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern component-driven UI frameworks and reactive architectures",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb", glowColor: "rgba(97, 218, 251, 0.25)" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", glowColor: "rgba(255, 255, 255, 0.25)" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "High-performance server runtimes, microservices, and API routing",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", glowColor: "rgba(51, 153, 51, 0.25)" },
      { name: "Express.js", icon: SiExpress, color: "#9ca3af", glowColor: "rgba(156, 163, 175, 0.25)" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e", glowColor: "rgba(224, 35, 78, 0.25)" },
      { name: "REST APIs", icon: FiServer, color: "#fb923c", glowColor: "rgba(251, 146, 60, 0.25)" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Document, relational, and structured data persistence layers",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", glowColor: "rgba(71, 162, 72, 0.25)" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", glowColor: "rgba(65, 105, 225, 0.25)" },
      { name: "SQL", icon: FiDatabase, color: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.25)" },
    ],
  },
  {
    id: "auth",
    title: "Authentication",
    description: "Identity management, token issuance, and access authorization",
    skills: [
      { name: "Firebase Auth", icon: SiFirebase, color: "#ffca28", glowColor: "rgba(255, 202, 40, 0.25)" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff", glowColor: "rgba(214, 58, 255, 0.25)" },
      { name: "Better Auth", icon: FiShield, color: "#10b981", glowColor: "rgba(16, 185, 129, 0.25)" },
    ],
  },
  {
    id: "ai",
    title: "AI-Assisted Dev",
    description: "Leveraging cutting-edge AI paradigms for accelerated delivery",
    skills: [
      { name: "AI Code Generation", icon: HiSparkles, color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.25)" },
      { name: "Debugging Assistance", icon: FiTerminal, color: "#f43f5e", glowColor: "rgba(244, 63, 94, 0.25)" },
      { name: "Code Explanation", icon: FiBookOpen, color: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.25)" },
      { name: "Problem Solving", icon: FiCpu, color: "#818cf8", glowColor: "rgba(129, 140, 248, 0.25)" },
      { name: "Dev Productivity Workflows", icon: FiZap, color: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.25)" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Version control, collaboration, and client networking",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032", glowColor: "rgba(240, 80, 50, 0.25)" },
      { name: "GitHub", icon: SiGithub, color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.25)" },
      { name: "Axios", icon: SiAxios, color: "#5a29e4", glowColor: "rgba(90, 41, 228, 0.25)" },
    ],
  },
];
