"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiExternalLink,
  FiCheckCircle,
  FiCalendar,
  FiUserCheck,
  FiLayers,
  FiServer,
  FiDatabase,
  FiCpu,
  FiAward,
} from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while modal is active
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-focus close button when modal opens for keyboard accessibility
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-overview"
        >
          {/* Translucent Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[88vh] bg-white text-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/90 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Gradient Bar matching project color */}
            <div
              className={`h-2.5 w-full bg-gradient-to-r ${project.color} shrink-0`}
            />

            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 shrink-0 bg-white/95 backdrop-blur-sm">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      Featured Project
                    </span>
                  )}
                  {project.timeline && (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <FiCalendar className="w-3.5 h-3.5" />
                      {project.timeline}
                    </span>
                  )}
                  {project.role && (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <FiUserCheck className="w-3.5 h-3.5" />
                      {project.role}
                    </span>
                  )}
                </div>
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  {project.title}
                </h2>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close project specifications modal"
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-7 text-sm sm:text-base leading-relaxed">
              {/* Overview Section */}
              <section className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FiLayers className="w-4 h-4 text-slate-500" />
                  Project Overview &amp; Purpose
                </h3>
                <p id="modal-overview" className="text-slate-700 font-normal leading-relaxed">
                  {project.details.overview}
                </p>
              </section>

              {/* Key Features Section */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                  Key Features &amp; Capabilities
                </h3>
                <ul className="space-y-2">
                  {project.details.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 text-slate-700 text-xs sm:text-sm"
                    >
                      <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technical Architecture & Stack Breakdown */}
              <section className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FiCpu className="w-4 h-4 text-blue-500" />
                  Technical Stack Breakdown
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Frontend */}
                  <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200/70 bg-slate-50/50 space-y-2">
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Frontend Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.details.frontendTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200/70 bg-slate-50/50 space-y-2">
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      Backend Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.details.backendTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Database & Auth */}
                  <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200/70 bg-slate-50/50 space-y-2">
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <FiDatabase className="w-3.5 h-3.5 text-emerald-500" />
                      Database &amp; Authentication
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.details.databaseAuth.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* APIs & Integrations */}
                  {project.details.integrations &&
                    project.details.integrations.length > 0 && (
                      <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200/70 bg-slate-50/50 space-y-2">
                        <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                          <FiServer className="w-3.5 h-3.5 text-purple-500" />
                          APIs &amp; Important Integrations
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.details.integrations.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200/60"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </section>

              {/* Implementation Highlights Section */}
              {project.details.highlights &&
                project.details.highlights.length > 0 && (
                  <section className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FiAward className="w-4 h-4 text-amber-500" />
                      Contributions &amp; Implementation Highlights
                    </h3>
                    <div className="space-y-2">
                      {project.details.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/40 border border-amber-200/40 text-xs sm:text-sm text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
            </div>

            {/* Modal Footer with Action Buttons */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {project.clientRepo && (
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>Client Repo</span>
                  </a>
                )}
                {project.serverRepo && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>Server Repo</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2.5 ml-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-black text-white hover:bg-slate-800 transition-colors shadow-md cursor-pointer"
                >
                  <span>Launch Live Demo</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
