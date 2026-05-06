import { GithubIcon, InstagramIcon } from "./icons";

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

export const navItems = [
  { label: "Beranda", href: "/", hasDropdown: false },
  { label: "Galeri", href: "/galeri", hasDropdown: false },
  { label: "Gaming", href: "/gaming", hasDropdown: false },
  { label: "Kutipan", href: "/kutipan", hasDropdown: false },
  { label: "Playlist", href: "/playlist", hasDropdown: false },
  {
    label: "Pameran",
    href: "/pameran-proyek",
    hasDropdown: true,
    children: [
      { label: "Proyek", href: "/pameran-proyek" },
      { label: "Aib", href: "/pameran-aib" },
    ],
  },
];

export const footerImages = [
  {
    src: "/footer/frans.png",
    alt: "Frans.",
  },
  {
    src: "/footer/paundra.png",
    alt: "Paundra memegang laptop.",
  },
];

export const socials = [
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/franzxml/" },
  { label: "Github", icon: GithubIcon, href: "https://github.com/franzxml" },
];
