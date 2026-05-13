"use client";

import { ChevronsDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ACTIVE_CLASS = "home-splash-logo-active";
const LOGO_SRC = "/brand/logo-kbm.png";

let hasShownSplash = false;

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function SplashIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const header = document.getElementById("kbm-site-header");
    const headerLogo = document.getElementById("kbm-header-logo");

    if (!section || !logo || !header || !headerLogo) {
      return;
    }

    const sectionElement = section;
    const logoElement = logo;
    const headerElement = header;
    const headerLogoElement = headerLogo;

    if (window.innerWidth < 640) {
      sectionElement.style.display = "none";
      logoElement.style.display = "none";
      headerElement.style.opacity = "1";
      headerElement.style.pointerEvents = "auto";
      headerLogoElement.style.opacity = "1";
      document.body.classList.remove(ACTIVE_CLASS);

      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hasShownSplash) {
      sectionElement.style.display = "none";
      logoElement.style.display = "none";
      logoElement.style.opacity = "0";
      headerElement.style.opacity = "1";
      headerElement.style.pointerEvents = "auto";
      headerElement.style.removeProperty("transform");
      headerLogoElement.style.opacity = "1";
      document.body.classList.remove(ACTIVE_CLASS);
      window.scrollTo(0, 0);

      return;
    }

    let animationFrame = 0;
    let isDismissed = false;
    window.scrollTo(0, 0);
    headerElement.style.transition = "opacity 180ms ease";
    headerLogoElement.style.transition = "opacity 120ms ease";

    function dismissSplash() {
      if (isDismissed) {
        return;
      }

      isDismissed = true;
      hasShownSplash = true;
      logoElement.style.display = "none";
      logoElement.style.opacity = "0";
      headerElement.style.opacity = "1";
      headerElement.style.pointerEvents = "auto";
      headerElement.style.removeProperty("transform");
      headerLogoElement.style.opacity = "1";
      sectionElement.style.display = "none";
      document.body.classList.remove(ACTIVE_CLASS);
      window.scrollTo(0, 0);
    }

    function updateLogoPosition() {
      if (isDismissed) {
        return;
      }

      if (window.innerWidth < 1024) {
        const progress = clamp(window.scrollY / 260, 0, 1);
        const easedProgress = easeOutCubic(progress);
        const splashSize = window.innerWidth < 640 ? 144 : 178;
        const currentSize = splashSize * (1 - easedProgress * 0.18);
        const currentX = window.innerWidth / 2;
        const currentY = window.innerHeight / 2 - easedProgress * 48;

        logoElement.style.height = `${currentSize}px`;
        logoElement.style.width = `${currentSize}px`;
        logoElement.style.transform = `translate3d(${currentX - currentSize / 2}px, ${
          currentY - currentSize / 2
        }px, 0)`;
        logoElement.style.opacity = `${1 - easedProgress}`;
        headerElement.style.opacity = "0";
        headerElement.style.pointerEvents = "none";
        headerLogoElement.style.opacity = "0";
        sectionElement.style.display = "grid";
        sectionElement.style.opacity = `${1 - easedProgress * 0.35}`;
        document.body.classList.add(ACTIVE_CLASS);

        if (progress >= 0.995) {
          dismissSplash();
        }

        return;
      }

      const target = headerLogoElement.getBoundingClientRect();
      const scrollDistance = Math.max(360, window.innerHeight - target.bottom);
      const progress = clamp(window.scrollY / scrollDistance, 0, 1);
      const easedProgress = easeOutCubic(progress);
      const splashSize = window.innerWidth < 640 ? 144 : 178;
      const targetSize = target.width || 92;
      const currentSize = splashSize + (targetSize - splashSize) * easedProgress;
      const startX = window.innerWidth / 2;
      const startY = window.innerHeight / 2;
      const targetX = target.left + target.width / 2;
      const targetY = target.top + target.height / 2;
      const currentX = startX + (targetX - startX) * easedProgress;
      const currentY = startY + (targetY - startY) * easedProgress;

      logoElement.style.height = `${currentSize}px`;
      logoElement.style.width = `${currentSize}px`;
      logoElement.style.transform = `translate3d(${currentX - currentSize / 2}px, ${
        currentY - currentSize / 2
      }px, 0)`;

      if (progress >= 0.995) {
        dismissSplash();
      } else {
        logoElement.style.opacity = "1";
        headerElement.style.opacity = "0";
        headerElement.style.pointerEvents = "none";
        headerLogoElement.style.opacity = "0";
        sectionElement.style.display = "grid";
        document.body.classList.add(ACTIVE_CLASS);
      }
    }

    function scheduleUpdate() {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateLogoPosition();
      });
    }

    document.body.classList.add(ACTIVE_CLASS);
    updateLogoPosition();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      document.body.classList.remove(ACTIVE_CLASS);
      sectionElement.style.removeProperty("display");
      sectionElement.style.removeProperty("opacity");
      headerElement.style.removeProperty("opacity");
      headerElement.style.removeProperty("pointer-events");
      headerElement.style.removeProperty("transform");
      headerElement.style.removeProperty("transition");
      headerLogoElement.style.removeProperty("opacity");
      headerLogoElement.style.removeProperty("transition");
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 grid min-h-[100svh] place-items-center overflow-hidden bg-[#F5F5F5] px-6 text-black lg:-mt-24"
    >
      <div
        ref={logoRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-36 w-36 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src={LOGO_SRC}
          alt=""
          width={1024}
          height={1024}
          priority
          sizes="178px"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="h-36 w-36 sm:h-44 sm:w-44" aria-hidden="true" />
        <p className="mt-12 text-sm font-medium leading-none tracking-normal text-black/56 sm:mt-8 sm:text-base">
          Logo created with love by Viona
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#FF0000]">
        <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-black/40">
          scroll
        </span>
        <ChevronsDown className="h-7 w-7 animate-bounce" strokeWidth={2.4} />
      </div>
    </section>
  );
}
