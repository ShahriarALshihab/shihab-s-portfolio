"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("nav_to_bottom") === "true") {
        sessionStorage.removeItem("nav_to_bottom");
        const timer = setTimeout(() => {
          window.scrollTo(0, document.documentElement.scrollHeight);
        }, 120);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[500vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {projects.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 md:gap-8 text-white px-4">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-lg overflow-hidden shadow-2xl border border-white/20">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, 600px"
                      className="object-cover"
                      priority={item.id === 1}
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.description}
                  </p>
                  <div className="flex justify-end gap-3 items-center flex-wrap pt-2">
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base lg:px-7 lg:py-3.5 lg:text-lg bg-white/20 hover:bg-white text-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-200 border border-white/40 backdrop-blur-xs cursor-pointer shadow-sm active:scale-95"
                    >
                      Project Details
                    </button>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base lg:px-7 lg:py-3.5 lg:text-lg bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer shadow-md active:scale-95">
                        See Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer and UI Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </motion.div>
  );
};

export default PortfolioPage;
