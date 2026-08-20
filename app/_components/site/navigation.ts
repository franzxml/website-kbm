export const colors = {
  background: "#F5F5F5",
  hover: "#DFF1F1",
  border: "#BBD5DA",
  accent: "#FF0000",
};

export const headerPalette = [
  colors.background,
  colors.hover,
  colors.border,
  colors.accent,
];

type NavItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  children?: readonly Omit<NavItem, "children" | "hasDropdown">[];
};

export const navItems: readonly NavItem[] = [
  { label: "Beranda", href: "/", hasDropdown: false },
  { label: "Galeri", href: "/galeri", hasDropdown: false },
  { label: "Kutipan", href: "/kutipan", hasDropdown: false },
  { label: "Pameran", href: "/pameran-proyek", hasDropdown: false },
];
