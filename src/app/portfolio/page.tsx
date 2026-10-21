"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "ApplyDock",
    desc: "An intelligent job application pipeline and interview command center for engineers. Features dual-engine Kanban and data grid tracking, automated interview countdowns, compensation benchmarking, and technical skill profiling.",
    img: "/projects/applydock.png",
    link: "https://applydock.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "MediCare Connect",
    desc: "A comprehensive full-stack doctor appointment management platform featuring role-based dashboards, secure authentication, doctor slot scheduling, and patient health records.",
    img: "/projects/medicare-connect.png",
    link: "https://medicare-client-a10.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "SunCart",
    desc: "A modern full-stack e-commerce web platform with dynamic product catalog filtering, persistent shopping cart management, secure user authentication, and responsive checkout flows.",
    img: "/projects/sun-cart.png",
    link: "https://sun-cart-ph-8req.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement>(null);

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
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
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
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-gray-100 transition-colors cursor-pointer">
                      See Demo
                    </button>
                  </a>
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
    </motion.div>
  );
};

export default PortfolioPage;
