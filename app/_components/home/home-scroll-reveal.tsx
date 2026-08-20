"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HomeScrollReveal({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-home-reveal]")
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const reveal = (item: HTMLElement) => {
      item.classList.add("home-reveal-visible");
    };

    items.forEach((item) => {
      item.style.setProperty(
        "--home-reveal-delay",
        `${item.dataset.homeRevealDelay ?? 0}ms`
      );
      item.classList.add("home-reveal-pending");
    });

    let observer: IntersectionObserver | null = null;
    let animationFrame = 0;

    animationFrame = window.requestAnimationFrame(() => {
      animationFrame = window.requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              reveal(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            });
          },
          {
            threshold: 0.15,
            rootMargin: "0px 0px -8% 0px",
          }
        );

        items.forEach((item) => observer?.observe(item));
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      items.forEach((item) => {
        item.classList.remove("home-reveal-pending");
        item.classList.remove("home-reveal-visible");
        item.style.removeProperty("--home-reveal-delay");
      });
    };
  }, []);

  return <div ref={containerRef} className="contents">{children}</div>;
}
