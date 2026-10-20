import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/layout/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahriar Al Shihab | Full Stack Developer",
  description:
    "Portfolio of Shahriar Al Shihab — Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web architectures.",
  authors: [{ name: "Shahriar Al Shihab", url: "https://github.com/ShahriarALshihab" }],
  keywords: [
    "Shahriar Al Shihab",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Portfolio",
    "Web Developer Dhaka Bangladesh",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Shahriar Al Shihab | Full Stack Developer",
    description:
      "Passionate full-stack developer crafting modern, scalable web experiences with React, Next.js, and Node.js.",
    siteName: "Shahriar Al Shihab Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahriar Al Shihab | Full Stack Developer",
    description:
      "Passionate full-stack developer crafting modern, scalable web experiences with React, Next.js, and Node.js.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}