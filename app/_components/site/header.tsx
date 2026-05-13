"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useState } from "react";
import { headerPalette, navItems } from "./navigation";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";

function HeaderPalette({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Header color palette">
      {headerPalette.map((color, index) => (
        <span
          key={color}
          aria-label={`Warna ${index + 1}: ${color}`}
          title={color}
          className="h-5 w-5 rounded-full border border-[#BBD5DA] shadow-sm"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
      {navItems.map((item) => (
        <div key={item.label} className="group relative">
          <Link
            href={item.href}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-sm font-bold text-black transition-colors hover:bg-[#DFF1F1] hover:text-black"
          >
            <span>{item.label}</span>
            {item.hasDropdown ? (
              <ChevronDownIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            ) : null}
          </Link>

          {item.children ? (
            <div className="invisible absolute left-1/2 top-full z-20 mt-4 w-40 -translate-x-1/2 rounded-2xl border border-[#BBD5DA] bg-[#F5F5F5] p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block rounded-xl px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#DFF1F1] hover:text-black"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}

function MobileNav({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`grid overflow-hidden bg-[#F5F5F5] transition-[grid-template-rows,opacity,transform] duration-300 ease-out lg:hidden ${
        isOpen
          ? "grid-rows-[1fr] opacity-100 translate-y-0"
          : "grid-rows-[0fr] opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="min-h-0 border-t border-[#BBD5DA] px-6 py-5">
        <HeaderPalette className="mb-5" />

        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#DFF1F1] hover:text-black"
              >
                <span>{item.label}</span>
                {item.hasDropdown ? <ChevronDownIcon className="h-4 w-4" /> : null}
              </Link>

              {item.children ? (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-[#BBD5DA] pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="rounded-xl px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#DFF1F1] hover:text-black"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    const aboutSection = document.getElementById("about-kbm");

    if (!aboutSection || window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    setIsOpen(false);
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header
      id="kbm-site-header"
      className="relative z-50 h-20 min-h-20 w-full shrink-0 overflow-visible bg-[#F5F5F5] shadow-sm lg:sticky lg:top-0 lg:h-24 lg:min-h-24"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          id="kbm-header-logo"
          href="/#about-kbm"
          onClick={handleLogoClick}
          className="flex h-14 w-14 items-center justify-center lg:h-20 lg:w-20"
          aria-label="KBM home"
        >
          <Image
            src="/brand/logo-kbm-header.png"
            alt="Logo KBM"
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 1024px) 80px, 56px"
            className="h-14 w-14 object-contain lg:h-20 lg:w-20"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-4">
          <HeaderPalette className="hidden sm:flex" />

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#BBD5DA] bg-[#F5F5F5] text-black transition-colors hover:border-[#FF0000] hover:bg-[#DFF1F1] hover:text-black lg:hidden"
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MobileNav isOpen={isOpen} />
    </header>
  );
}
