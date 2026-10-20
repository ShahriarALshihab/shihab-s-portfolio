"use client";

import { motion } from "framer-motion";

export default function BangladeshMap() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-black/10 shadow-sm flex flex-col items-center">
      {/* MAP SVG CONTAINER */}
      <div className="relative w-full aspect-[4/5] max-w-[380px] flex items-center justify-center overflow-hidden rounded-xl bg-slate-100/80 border border-slate-200">
        <svg
          viewBox="0 0 500 620"
          className="w-full h-full object-contain filter drop-shadow-sm select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle gradient for Bangladesh territory */}
            <linearGradient id="bdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Pin shadow */}
            <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* SURROUNDING LAND (subtle neighboring regions context) */}
          <path
            d="M 0,0 L 500,0 L 500,620 L 0,620 Z"
            fill="#f1f5f9"
          />

          {/* BANGLADESH MAIN OUTLINE */}
          <path
            d="M 175,25 
               C 185,20 195,45 190,65 
               C 210,55 240,65 260,75 
               C 275,85 270,110 250,120 
               C 255,135 285,130 315,125 
               C 345,120 375,135 390,150 
               C 405,170 395,200 375,215 
               C 350,225 330,220 325,245 
               C 320,270 335,285 345,310 
               C 360,335 385,380 395,420 
               C 405,465 410,510 405,535 
               C 395,545 385,530 380,490 
               C 370,450 350,420 330,410 
               C 315,405 305,420 295,435 
               C 285,450 290,480 270,495 
               C 250,510 240,490 230,470 
               C 215,460 205,480 185,495 
               C 165,510 145,505 130,485 
               C 115,465 125,430 115,400 
               C 105,370 85,340 90,305 
               C 95,270 70,240 65,210 
               C 60,175 85,145 110,120 
               C 130,100 135,70 145,50 
               Z"
            fill="url(#bdGrad)"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* INTERNAL DIVISION BOUNDARY LINES */}
          {/* Rangpur / Rajshahi border */}
          <path
            d="M 115,120 C 150,115 180,130 205,125 C 220,122 235,115 250,120"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
          {/* Mymensingh / Sylhet division line */}
          <path
            d="M 250,120 C 265,150 280,180 305,195"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
          {/* Dhaka north border */}
          <path
            d="M 175,200 C 210,195 250,205 305,195"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
          {/* Jamuna / Padma River flow (Rajshahi / Dhaka / Khulna separation) */}
          <path
            d="M 205,125 C 190,165 175,200 180,240 C 185,270 210,290 230,315 C 255,345 270,385 285,450"
            fill="none"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Meghna River & Chittagong division boundary */}
          <path
            d="M 305,195 C 295,230 280,265 285,310 C 290,340 315,360 330,410"
            fill="none"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Khulna / Barishal division line */}
          <path
            d="M 180,350 C 200,375 210,410 205,475"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />

          {/* DHAKA LOCATION MARKER (x: 250, y: 285) */}
          <g transform="translate(250, 285)">
            {/* Pulsing Beacon Ring */}
            <circle r="18" fill="#ef4444" opacity="0.25">
              <animate
                attributeName="r"
                values="8;24;8"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0.05;0.4"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Target Outer Ring */}
            <circle r="7" fill="none" stroke="#dc2626" strokeWidth="2.5" />

            {/* Target Center Dot */}
            <circle r="3.5" fill="#dc2626" />

            {/* ANIMATED RED PIN */}
            <motion.g
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            >
              <path
                d="M 0,-4 C 0,-4 -18,-24 -18,-42 C -18,-52 -10,-60 0,-60 C 10,-60 18,-52 18,-42 C 18,-24 0,-4 0,-4 Z"
                fill="#ef4444"
                stroke="#b91c1c"
                strokeWidth="1.5"
                filter="url(#pinShadow)"
              />
              {/* Inner White Cutout Hole */}
              <circle cx="0" cy="-42" r="6.5" fill="#ffffff" />
            </motion.g>

            {/* DHAKA LABEL (Red) */}
            <text
              x="0"
              y="22"
              textAnchor="middle"
              fill="#dc2626"
              fontSize="14"
              fontWeight="800"
              letterSpacing="1.5"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              DHAKA
            </text>

            {/* BANGLADESH LABEL (Green, as in reference) */}
            <text
              x="0"
              y="38"
              textAnchor="middle"
              fill="#15803d"
              fontSize="16"
              fontWeight="900"
              letterSpacing="2"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              BANGLADESH
            </text>
          </g>
        </svg>
      </div>

      {/* METADATA / BADGES */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Dhaka (UTC+6)
        </span>
        <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium">
          Open to Remote Worldwide &amp; Relocation
        </span>
      </div>
    </div>
  );
}
