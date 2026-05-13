import { CodeXml } from "lucide-react";
import { founderNames } from "../../_data/founders";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#F5F5F5] text-black">
      <div className="mx-auto max-w-[1440px] border-t border-[#BBD5DA] px-5 py-8 sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden bg-[#F5F5F5] py-8 lg:min-h-[650px]">
          <div
            className="pointer-events-none absolute right-0 top-0 h-36 w-44 bg-[radial-gradient(circle,#FF0000_1.2px,transparent_1.2px)] bg-[size:14px_14px] opacity-10"
            aria-hidden="true"
          />
          <svg
            className="pointer-events-none absolute -bottom-8 right-0 hidden h-56 w-[520px] text-[#FF0000]/10 lg:block"
            viewBox="0 0 620 260"
            fill="none"
            aria-hidden="true"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <path
                key={index}
                d={`M0 ${190 + index * 9}C105 ${112 + index * 8} 206 ${254 + index * 2} 315 ${171 + index * 6}C416 ${94 + index * 7} 495 ${149 + index * 4} 620 ${74 + index * 7}`}
                stroke="currentColor"
                strokeWidth="1.4"
              />
            ))}
          </svg>

          <div className="grid gap-12 lg:grid-cols-[minmax(560px,0.92fr)_1px_minmax(0,1fr)] lg:items-stretch">
            <div>
              <div className="flex items-center">
                <p className="whitespace-nowrap text-sm font-black uppercase leading-none tracking-[0.42em] text-[#FF0000]">
                  Dikembangkan oleh:
                </p>
              </div>

              <ol className="mt-9 divide-y divide-black/10">
                {founderNames.map((name, index) => (
                  <li key={name} className="flex min-h-[70px] items-center gap-8 py-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#FF0000]/10 text-xl font-black text-[#FF0000]">
                      {index + 1}
                    </span>
                    <span className="text-[clamp(1.25rem,1.75vw,1.75rem)] font-black leading-tight text-black/88">
                      {name}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="hidden w-px bg-[#BBD5DA] lg:block" aria-hidden="true" />

            <div className="relative flex flex-col justify-center lg:pl-12">
              <CodeXml className="absolute right-5 top-8 hidden h-14 w-14 text-[#FF0000] lg:block" strokeWidth={3} />
              <a
                href="https://github.com/franzxml/website-kbm"
                target="_blank"
                rel="noreferrer"
                className="group inline-block max-w-max text-[clamp(4.7rem,10vw,9.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-black transition-transform duration-300 hover:-translate-y-1"
                aria-label="Buka source code website KBM di GitHub"
              >
                Source
                <br />
                <span className="text-[#FF0000] transition-colors group-hover:text-black">Code</span>
              </a>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-0.5 w-28 bg-[#FF0000]" aria-hidden="true" />
                <span className="h-4 w-4 rounded-full bg-[#FF0000]" aria-hidden="true" />
              </div>

              <p className="mt-7 max-w-xl text-2xl leading-10 text-black/58">
                Dibangun dengan kolaborasi, dedikasi, dan semangat kekeluargaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
