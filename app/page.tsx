import Link from "next/link";

const routes = [
  { href: "/galeri", label: "Galeri" },
  { href: "/gaming", label: "Gaming" },
  { href: "/kritik-kami", label: "Kritik Kami" },
  { href: "/pameran-proyek", label: "Pameran Proyek" },
  { href: "/kutipan", label: "Kutipan" },
  { href: "/pameran-aib", label: "Pameran Aib" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="flex flex-wrap items-center gap-3 border-b border-zinc-200 px-6 py-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-black"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
