"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const routes = ["/", "/about", "/portfolio", "/contact"];

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const router = useRouter();

  const isLocked = useRef(false);
  const deltaAccumulator = useRef(0);
  const resetTimer = useRef<NodeJS.Timeout | null>(null);

  // Keep route transitions locked until animations finish and momentum decays
  useEffect(() => {
    isLocked.current = true;
    deltaAccumulator.current = 0;
    const timer = setTimeout(() => {
      isLocked.current = false;
    }, 1300);
    return () => clearTimeout(timer);
  }, [pathName]);

  useEffect(() => {
    const canElementScroll = (target: EventTarget | null, deltaY: number): boolean => {
      // 1. Check target and its ancestors
      let el = target as HTMLElement | null;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        const isScrollable =
          overflowY === "auto" ||
          overflowY === "scroll" ||
          el.tagName === "TEXTAREA" ||
          el.classList.contains("overflow-scroll") ||
          el.classList.contains("overflow-y-auto");

        if (isScrollable && el.scrollHeight > el.clientHeight + 4) {
          if (deltaY > 0) {
            const maxScroll = el.scrollHeight - el.clientHeight;
            if (el.scrollTop < maxScroll - 8) {
              return true;
            }
          } else if (deltaY < 0) {
            if (el.scrollTop > 8) {
              return true;
            }
          }
        }
        el = el.parentElement;
      }

      // 2. Check any active scrollable container in the current view (e.g. About page container)
      const scrollContainers = document.querySelectorAll<HTMLElement>(
        ".overflow-scroll, .overflow-y-auto, [data-scroll-container]"
      );
      for (let i = 0; i < scrollContainers.length; i++) {
        const container = scrollContainers[i];
        if (container.scrollHeight > container.clientHeight + 4) {
          if (deltaY > 0) {
            const maxScroll = container.scrollHeight - container.clientHeight;
            if (container.scrollTop < maxScroll - 8) {
              return true;
            }
          } else if (deltaY < 0) {
            if (container.scrollTop > 8) {
              return true;
            }
          }
        }
      }

      // 3. Check window / document scroll (e.g. Portfolio page)
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll =
        Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) -
        window.innerHeight;

      if (maxScroll > 15) {
        if (deltaY > 0 && scrollY < maxScroll - 15) {
          return true;
        }
        if (deltaY < 0 && scrollY > 15) {
          return true;
        }
      }

      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      const currentIndex = routes.indexOf(pathName);
      if (currentIndex === -1) return;

      // If transition is currently in progress, ignore wheel event
      if (isLocked.current) {
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 3) return;

      const direction = delta > 0 ? "down" : "up";

      // Boundary checks: cannot go above first page or below last page
      if (direction === "down" && currentIndex >= routes.length - 1) return;
      if (direction === "up" && currentIndex <= 0) return;

      // Check if internal content can still scroll in this direction
      if (canElementScroll(e.target, delta)) {
        deltaAccumulator.current = 0;
        return;
      }

      // Reset accumulator if user reverses scroll direction
      if (
        (direction === "down" && deltaAccumulator.current < 0) ||
        (direction === "up" && deltaAccumulator.current > 0)
      ) {
        deltaAccumulator.current = 0;
      }

      deltaAccumulator.current += delta;

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
      resetTimer.current = setTimeout(() => {
        deltaAccumulator.current = 0;
      }, 350);

      const THRESHOLD = 60;
      if (Math.abs(deltaAccumulator.current) < THRESHOLD) {
        return;
      }

      // Deliberate wheel scroll at section boundary: smoothly navigate
      isLocked.current = true;
      deltaAccumulator.current = 0;

      if (direction === "down") {
        const nextRoute = routes[currentIndex + 1];
        router.push(nextRoute);
      } else {
        const prevRoute = routes[currentIndex - 1];
        if (prevRoute === "/about" || prevRoute === "/portfolio") {
          try {
            sessionStorage.setItem("nav_to_bottom", "true");
          } catch {}
        }
        router.push(prevRoute);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, [pathName, router]);

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
