"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiCheckCircle,
  FiCalendar,
  FiUserCheck,
} from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { Project } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="h-full overflow-y-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 group"
        >
          <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Main Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-slate-300/80 bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500" />

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-amber-500/20 bg-amber-500/10 text-amber-600">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Featured Project
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500">
            {project.timeline && (
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            )}
            {project.role && (
              <span className="flex items-center gap-1.5">
                <FiUserCheck className="w-3.5 h-3.5" />
                {project.role}
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          {project.title}
        </h1>

        {/* Short Summary Lead */}
        <p className="text-lg sm:text-xl font-medium text-slate-700 mb-8 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-slate-200">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-black hover:bg-slate-800 transition-all duration-200"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>Launch Live Demo</span>
          </a>

          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-black text-black hover:bg-black hover:text-white transition-all duration-200"
            >
              <SiGithub className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.clientRepo && (
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-black text-black hover:bg-black hover:text-white transition-all duration-200"
            >
              <SiGithub className="w-4 h-4" />
              <span>Client Repo (Frontend)</span>
            </a>
          )}

          {project.serverRepo && (
            <a
              href={project.serverRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-black text-black hover:bg-black hover:text-white transition-all duration-200"
            >
              <SiGithub className="w-4 h-4" />
              <span>Server Repo (Backend)</span>
            </a>
          )}
        </div>

        {/* Deep Dive & Highlights */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Key Architectural Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50"
                  >
                    <FiCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Tech Stack Badges */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Technologies &amp; Libraries
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
