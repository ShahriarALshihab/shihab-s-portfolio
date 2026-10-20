# Shahriar Al Shihab — Animated Personal Portfolio

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Faithfully recreates the visual layout, interactions, and animation patterns of Safak's animated portfolio while presenting Shahriar Al Shihab's verified identity, full-stack projects, and technical skills.

---

## 🌟 Key Features

- **Page Wipe Transitions (`TransitionProvider`)**: Screen-filling curved black curtains animate in/out on route change with centered route title flashing.
- **Responsive Dynamic Navigation (`Navbar` & `NavLink`)**: Clean desktop header with branding, navigation links, and social links. Animated hamburger icon and full-screen overlay menu on mobile with staggered item entrances.
- **Interactive Homepage (`/`)**: Hero section featuring Shahriar's workspace visual, animated typewriter effect for rotating developer specializations, bio summary, CV download button, and direct navigation CTAs.
- **Animated About Experience (`/about`)**:
  - Scrollable left column with personal biography, verified skills badges (with hover inverted color transitions), and an education/experience vertical timeline.
  - Sticky right column with an interactive SVG **Brain** component whose internal mechanical cogs rotate in real time driven by `scrollYProgress`.
- **Horizontal Scroll Portfolio Showcase (`/portfolio`)**:
  - `600vh` scroll track with full-screen sticky view converting vertical scrolling into horizontal slide-through of project cards with vibrant gradients.
  - Direct links to **Live Demo**, **GitHub**, and **In-Depth Case Study** routes.
  - End CTA section with a continuous 360-degree rotating circular text banner (`<textPath>`) and a centered circular "Hire Me" button leading to `/contact`.
- **Dynamic Case Study Routes (`/projects/[slug]`)**: SSG-prerendered individual project case studies for `medicare-connect` and `sun-cart` with architectural highlights, complete tech stack badges, and live deployment links.
- **Letter-Style Contact Experience (`/contact`)**: Animated letter-by-letter fading greeting on the left, letter-format contact form on the right with integrated direct email copy, social profiles, and Web3Forms delivery.
- **Custom 404 Page (`/not-found`)**: Styled not-found page ensuring clean navigation recovery.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript (strict type checking)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`SiReact`, `SiNextdotjs`, `SiGithub`, `FaLinkedin`, `FiMail`, etc.)
- **Fonts**: Next.js `next/font/google` (`Inter`)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested and verified on Node `v24.11.1`)
- npm `v10+` or `v11+`

### 2. Installation

```bash
# Clone or navigate to the project directory
cd portfolio-shahriar

# Install dependencies
npm install
```

### 3. Environment Variables (Optional)

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

For the contact form to deliver emails to your inbox, obtain a free access key from [Web3Forms](https://web3forms.com) and assign it:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

### 4. Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Running TypeScript & Lint Checks

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint
```

### 6. Building for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
portfolio-shahriar/
├── public/
│   ├── favicon.ico
│   ├── hero-bg.jpg
│   └── Shahriar Al Shihab_cv.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── projects/
│   │       └── [slug]/
│   │           ├── page.tsx
│   │           └── ProjectDetailClient.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── TransitionProvider.tsx
│   │   └── ui/
│   │       └── Brain.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── types/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📄 License

MIT © [Shahriar Al Shihab](https://github.com/ShahriarALshihab)
