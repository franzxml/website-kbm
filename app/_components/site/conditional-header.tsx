"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./header";

const headerlessRoutes = new Set(["/gaming", "/playlist", "/pameran-aib"]);

export default function ConditionalHeader() {
  const pathname = usePathname();

  if (headerlessRoutes.has(pathname)) {
    return null;
  }

  return <SiteHeader />;
}
