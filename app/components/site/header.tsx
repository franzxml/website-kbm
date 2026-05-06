"use client";

import Link from "next/link";
import { useState } from "react";
import { headerPalette, navItems } from "./data";
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

function MobileNav() {
  return (
    <div className="border-t border-[#BBD5DA] bg-[#F5F5F5] px-6 py-5 lg:hidden">
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
  );
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F5F5F5] shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center text-3xl font-black tracking-tight text-black"
          aria-label="Placeholder Logo home"
        >
          <span>Placeholder Logo</span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-4">
          <HeaderPalette className="hidden sm:flex" />

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#BBD5DA] bg-[#F5F5F5] text-black transition-colors hover:border-[#FF0000] hover:bg-[#DFF1F1] hover:text-black lg:hidden"
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? <MobileNav /> : null}
    </header>
  );
}
