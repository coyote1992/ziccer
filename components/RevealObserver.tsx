"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades [data-reveal] elements in as they enter the viewport. Content is visible without
 * JavaScript; whatever is already on screen at mount is marked first, so nothing flickers.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add("is-in");
    }
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => !el.classList.contains("is-in") && io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
