"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { founderProfiles, type FounderProfile } from "../../_data/founders";

function FounderPortrait({
  founder,
}: {
  founder: FounderProfile;
}) {
  if (founder.image) {
    return (
      <Image
        src={founder.image}
        alt={`Foto ${founder.name}.`}
        width={900}
        height={900}
        sizes="(min-width: 1024px) 360px, 86vw"
        className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_24px_24px_rgba(0,0,0,0.16)]"
      />
    );
  }

  return (
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <span className="text-[clamp(4.5rem,13vw,8.5rem)] font-semibold leading-none text-[#FF0000]">
        {founder.shortName.slice(0, 2)}
      </span>
    </div>
  );
}

export default function FoundersBook() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  function scrollToPage(page: number) {
    const nextPage = Math.max(0, Math.min(page, founderProfiles.length - 1));
    const target = scrollerRef.current?.querySelector<HTMLElement>(
      `[data-book-page="${nextPage}"]`,
    );

    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActivePage(nextPage);
  }

  function syncActivePage() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    const pages = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-book-page]"),
    );

    const nearest = pages.reduce(
      (best, page) => {
        const pageCenter = page.offsetLeft + page.clientWidth / 2;
        const distance = Math.abs(center - pageCenter);

        return distance < best.distance
          ? {
              distance,
              index: Number(page.dataset.bookPage),
            }
          : best;
      },
      { distance: Number.POSITIVE_INFINITY, index: activePage },
    );

    if (nearest.index !== activePage) {
      setActivePage(nearest.index);
    }
  }

  return (
    <div className="relative max-w-[640px] lg:justify-self-end lg:max-w-[660px]">
      <div
        className="pointer-events-none absolute -inset-x-3 bottom-0 h-16 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.14),transparent_68%)] blur-xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[6px] border border-black/10 bg-[#EEF7F6] p-2 shadow-[0_24px_54px_rgba(0,0,0,0.12)] sm:p-3">
        <div
          className="absolute inset-y-0 left-0 w-[76px] bg-[linear-gradient(90deg,rgba(187,213,218,0.85),rgba(255,255,255,0.35)_48%,transparent_78%),repeating-linear-gradient(to_bottom,transparent_0_26px,rgba(0,0,0,0.08)_26px_27px)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-3 left-[76px] w-px bg-black/10"
          aria-hidden="true"
        />

        <div className="relative grid overflow-hidden rounded-[4px] border border-black/10 bg-[#F7FBFA] lg:min-h-[610px] lg:grid-cols-[120px_1fr]">
          <aside className="relative hidden overflow-hidden bg-[#F8FCFB] text-black shadow-[inset_-18px_0_26px_rgba(0,0,0,0.08)] lg:block">
            <div
              className="absolute inset-y-0 left-0 w-2 bg-[#FF0000]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-10 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.08)),repeating-linear-gradient(to_right,transparent_0_4px,rgba(0,0,0,0.06)_4px_5px)]"
              aria-hidden="true"
            />
          </aside>

          <div className="relative overflow-hidden bg-[#E8F1F0] p-3 sm:p-5">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_42%),linear-gradient(90deg,rgba(0,0,0,0.055),transparent_11%,transparent_90%,rgba(0,0,0,0.07))]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-6 bottom-4 h-8 rounded-[50%] bg-black/10 blur-xl"
              aria-hidden="true"
            />

            <div
              ref={scrollerRef}
              onScroll={syncActivePage}
              className="founders-book-scroller relative flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4 scroll-smooth"
              aria-label="First eight founders book"
            >
              {founderProfiles.map((founder, index) => (
                <article
                  key={founder.name}
                  data-book-page={index}
                  className="relative grid h-[min(76vw,500px)] w-[min(76vw,500px)] shrink-0 snap-center grid-rows-[0.34fr_0.66fr] gap-3 overflow-hidden rounded-[3px] border border-black/10 bg-[#FFFDF7] p-3 shadow-[0_16px_34px_rgba(0,0,0,0.13)]"
                >
                  <div className="relative flex min-h-0 items-center border border-black/10 bg-[#FFFDF6] px-5 py-5 sm:px-7">
                    <div
                      className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04),transparent_18%)]"
                      aria-hidden="true"
                    />
                    <p className="relative text-[clamp(1.35rem,4.3vw,2.7rem)] font-semibold leading-[0.98] tracking-normal text-[#FF0000]">
                      {founder.name}
                    </p>
                  </div>

                  <div className="relative min-h-0 overflow-hidden bg-[#DFF1F1]">
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_48%_24%,rgba(255,255,255,0.92),transparent_34%),linear-gradient(140deg,rgba(255,255,255,0.7),transparent_34%,transparent_70%,rgba(0,0,0,0.1))]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-x-8 bottom-6 h-8 rounded-[50%] bg-black/14 blur-lg"
                      aria-hidden="true"
                    />
                    <FounderPortrait founder={founder} />
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-1 flex justify-end">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToPage(activePage - 1)}
                  className="grid h-10 w-10 place-items-center border border-black/10 bg-white/90 text-black/64 shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition hover:border-black/25 hover:text-[#FF0000]"
                  aria-label="Halaman sebelumnya"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToPage(activePage + 1)}
                  className="grid h-10 w-10 place-items-center border border-black/10 bg-white/90 text-black/64 shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition hover:border-black/25 hover:text-[#FF0000]"
                  aria-label="Halaman berikutnya"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <style jsx>{`
              .founders-book-scroller {
                scrollbar-width: none;
              }

              .founders-book-scroller::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
