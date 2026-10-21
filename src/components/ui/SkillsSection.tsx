"use client";

import React from "react";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiAxios,
} from "react-icons/si";
import { FiServer, FiShield } from "react-icons/fi";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "REST APIs", icon: FiServer, color: "#0284C7" },
    ],
  },
  {
    category: "Database & Authentication",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase Authentication", icon: SiFirebase, color: "#FFCA28" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Better Auth", icon: FiShield, color: "#10B981" },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {skillGroups.map((group) => (
        <div key={group.category} className="flex flex-col gap-3">
          {/* CATEGORY TITLE */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {group.category}
            </span>
            <div className="h-px bg-black/10 flex-1" />
          </div>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2.5 sm:gap-3">
            {group.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/70 hover:bg-white border border-black/5 hover:border-black/15 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  role="listitem"
                  aria-label={skill.name}
                >
                  {/* ICON CONTAINER */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-slate-50/80 group-hover:bg-slate-100/90 border border-slate-100 transition-colors shrink-0">
                    <Icon
                      className="text-lg sm:text-xl transition-transform duration-200 group-hover:scale-110"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* SKILL NAME */}
                  <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-black leading-snug line-clamp-2">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
