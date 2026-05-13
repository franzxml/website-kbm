import Image from "next/image";
import type { ReactNode } from "react";
import { activities, ladderWords, notes } from "../../_data/home";
import FoundersBook from "./founders-book";
import SplashIntro from "./splash-intro";

function TinyMeta({
  left,
  right,
}: {
  left: string;
  right?: string;
}) {
  return (
    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-black/35">
      <span>{left}</span>
      {right ? <span>{right}</span> : null}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-black/12" />;
}

function HeroPeopleImage() {
  return (
    <div className="relative min-h-[360px] overflow-visible sm:min-h-[460px] lg:min-h-[520px]">
      <span className="absolute left-[15%] top-[22%] z-10 hidden -rotate-12 text-base font-black uppercase tracking-[0.5em] text-[#FF0000] lg:block">
        Fahdil
      </span>
      <span className="absolute right-[6%] top-[28%] z-10 hidden rotate-6 text-base font-black uppercase tracking-[0.5em] text-[#FF0000] lg:block">
        Frans
      </span>
      <Image
        src="/beranda/frans-fahdil.png"
        alt="Frans dan Fahdil, dua anggota KBM."
        width={2338}
        height={2338}
        priority
        sizes="(min-width: 1024px) 530px, 100vw"
        className="absolute inset-x-1/2 bottom-0 w-[108%] max-w-none -translate-x-1/2 object-contain [mask-image:linear-gradient(to_bottom,black_0%,black_98%,transparent_100%)] sm:w-[104%] lg:w-full"
      />
    </div>
  );
}

function IdentityPeopleImage() {
  return (
    <div className="relative min-h-[320px] overflow-visible sm:min-h-[420px] lg:min-h-[500px]">
      <span className="absolute left-[22%] top-[25%] z-10 hidden -rotate-6 text-sm font-black uppercase tracking-[0.45em] text-[#FF0000] lg:block">
        Paundra
      </span>
      <span className="absolute right-[13%] top-[31%] z-10 hidden rotate-12 text-sm font-black uppercase tracking-[0.45em] text-[#FF0000] lg:block">
        Chris
      </span>
      <Image
        src="/beranda/paundra-chris.png"
        alt="Paundra dan Chris, dua anggota KBM."
        width={2001}
        height={2001}
        priority
        sizes="(min-width: 1024px) 411px, 88vw"
        className="absolute inset-x-1/2 bottom-0 w-[92%] max-w-none -translate-x-1/2 object-contain [mask-image:linear-gradient(to_bottom,black_0%,black_98%,transparent_100%)] sm:w-[88%] lg:w-[84%]"
      />
    </div>
  );
}

function PeopleConnectionArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 520"
      className="pointer-events-none absolute -bottom-[17rem] -left-10 z-20 hidden h-[430px] w-[430px] overflow-visible text-black xl:block"
      fill="none"
    >
      <defs>
        <marker
          id="people-arrow-head"
          markerWidth="18"
          markerHeight="18"
          refX="14"
          refY="9"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M2 2L16 9L2 16" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      <path
        d="M72 150C-42 318 -36 610 145 880"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#people-arrow-head)"
      />
    </svg>
  );
}

function GamingAssetImage() {
  return (
    <div className="relative w-full max-w-[180px] justify-self-start lg:justify-self-end">
      <Image
        src="/beranda/joy.png"
        alt="Joystick arcade merah dan hitam."
        width={720}
        height={720}
        className="w-full object-contain"
      />
    </div>
  );
}

function MiniMilitiaImage({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative min-h-[340px] overflow-visible sm:min-h-[420px] ${className}`}>
      <Image
        src="/beranda/mini-militia.png"
        alt="Karakter Mini Militia membawa senjata."
        width={316}
        height={316}
        sizes="(min-width: 1280px) 340px, (min-width: 1024px) 30vw, 82vw"
        className="absolute inset-x-1/2 bottom-0 h-auto w-[min(82vw,340px)] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_28px_rgba(0,0,0,0.16)]"
      />
    </div>
  );
}

function HeroSection() {
  return (
    <div id="about-kbm" className="grid scroll-mt-24 gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative px-5 py-6 sm:px-8 sm:py-8">
        <div
          className="pointer-events-none absolute -inset-x-8 -inset-y-10 bg-[linear-gradient(to_right,rgba(187,213,218,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(187,213,218,0.13)_1px,transparent_1px),radial-gradient(circle_at_30%_20%,rgba(223,241,241,0.22),transparent_35%)] bg-[size:72px_72px,72px_72px,100%_100%] [mask-image:radial-gradient(ellipse_at_center,black_35%,rgba(0,0,0,0.7)_58%,transparent_82%)]"
          aria-hidden="true"
        />
        <h1 className="relative max-w-5xl text-[clamp(3.8rem,10vw,8.2rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-[#FF0000]">
          about
          <br />
          KBM
        </h1>

        <div className="relative mt-8 max-w-3xl">
          <p className="text-lg leading-8 text-black/72">
            KBM adalah singkatan dari Keluarga Besar Maheswara. Sebuah komunitas mahasiswa yang lahir dari tongkrongan kelas, tumbuh lewat game, tugas, pemrograman, dan banyak momen random yang akhirnya berubah menjadi keluarga kecil.
          </p>

          <div className="mt-8 grid border-y border-black/10 text-sm text-black/64 sm:grid-cols-3">
            <div className="border-b border-black/10 py-4 sm:border-b-0 sm:border-r sm:pr-5">
              <TinyMeta left="Terbentuk" />
              <p className="mt-3 text-base font-medium tracking-[-0.03em] text-black">
                13 Maret 2025
              </p>
            </div>
            <div className="border-b border-black/10 py-4 sm:border-b-0 sm:border-r sm:px-5">
              <TinyMeta left="Nama awal" />
              <p className="mt-3 text-base font-medium tracking-[-0.03em] text-black">
                Mini Militia
              </p>
            </div>
            <div className="py-4 sm:pl-5">
              <TinyMeta left="Website" />
              <p className="mt-3 max-w-[220px] text-base font-medium leading-6 tracking-[-0.03em] text-black">
                Dokumentasi, hiburan, arsip, dan identitas KBM.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <HeroPeopleImage />
        <PeopleConnectionArrow />
      </div>
    </div>
  );
}

function IdentitySection() {
  return (
    <section className="grid gap-10 py-14 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="overflow-hidden pt-8 lg:pt-14">
        <div className="grid gap-3">
          {ladderWords.map((item, index) => (
            <span
              key={item}
              className={`block whitespace-nowrap py-1 text-[clamp(2.2rem,4.7vw,4.4rem)] font-semibold leading-[1.08] tracking-[-0.07em] ${
                index === 0 || index === 2 ? "text-[#FF0000]" : "text-black"
              }`}
              style={{
                marginLeft: `clamp(0rem, ${index * 7}vw, ${index * 2.6}rem)`,
              }}
            >
              &quot;{item}&quot;
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-8">
        <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#FF0000]">
          tongkrongan, keluarga.
        </h2>
        <IdentityPeopleImage />
      </div>

      <div className="lg:col-span-2 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 text-base leading-8 text-black/62">
          <p>
            KBM bisa disebut komunitas, bisa juga disebut tongkrongan. Tapi yang paling pas, KBM adalah keluarga kecil yang tumbuh dari kebiasaan bersama.
          </p>
          <p>
            Di dalamnya ada game malam, nugas bareng, pemrograman, humor sarkas, quote anggota, dan banyak momen yang tidak selalu rapi, tetapi selalu terasa hidup.
          </p>
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="relative">
          <div className="mb-8 h-1 w-24 bg-[#FF0000]" aria-hidden="true" />
          <h2 className="relative z-10 text-6xl font-semibold leading-[0.88] text-[#FF0000] sm:text-7xl lg:text-8xl">
            from Mini
            <br />
            Militia
          </h2>

          <p className="mt-8 max-w-sm text-lg leading-8 text-black/58">
            Nama lama yang jadi titik awal sebelum tongkrongan ini tumbuh jadi KBM.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MiniMilitiaImage />

          <div className="grid gap-10 [grid-auto-rows:1fr]">
            <div className="relative ml-2 flex h-full items-center border-l border-black/10 pl-8">
              <p className="text-lg leading-8 text-black/58">
                Berawal dari tongkrongan kelas, aktivitas ngegame, dan grup WhatsApp bernama Mini Militia.
              </p>
            </div>

            <div className="relative ml-2 h-full border-l border-black/10 pl-8">
              <div className="flex items-start justify-between gap-6">
                <span className="text-7xl font-black leading-[0.8] text-[#FF0000]" aria-hidden="true">
                  “
                </span>
              </div>

              <p className="mt-8 text-lg leading-9 text-black/62">
                KBM tidak lahir dari gagasan formal, tetapi dari kebersamaan yang terus berulang. Dari obrolan, game, dan tugas, lalu perlahan menjadi ruang yang terasa seperti rumah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyNote({
  children,
  tilt,
}: {
  children: ReactNode;
  tilt: string;
}) {
  return (
    <div
      className={`relative min-h-[220px] bg-[#DFF1F1]/60 px-6 pb-6 pt-10 shadow-[0_20px_36px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:rotate-0 ${tilt}`}
    >
      <span
        className="absolute left-1/2 top-0 h-7 w-24 -translate-x-1/2 -translate-y-1/2 rotate-2 bg-[#BBD5DA]/75"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 right-0 h-10 w-10 bg-[linear-gradient(135deg,transparent_0_50%,rgba(187,213,218,0.75)_50%_100%)]"
        aria-hidden="true"
      />
      <p className="text-lg leading-8 tracking-[-0.02em] text-black/70">
        {children}
      </p>
    </div>
  );
}

function NotesSection() {
  const noteTilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

  return (
    <section className="py-16">
      <h2 className="text-center text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-[#FF0000]">
        core notes
      </h2>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {notes.map((note, index) => (
          <StickyNote key={note} tilt={noteTilts[index % noteTilts.length]}>
            {note}
          </StickyNote>
        ))}
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
      <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#FF0000]">
        what we do
      </h2>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {activities.map((item, index) => (
            <span
              key={item}
              className={`text-[clamp(2rem,5.5vw,4.75rem)] font-semibold leading-none tracking-[-0.08em] ${
                index === 0 || index === 5 ? "text-[#FF0000]" : "text-black"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <GamingAssetImage />
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
      <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#FF0000]">
        the first eight
      </h2>

      <FoundersBook />
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#F5F5F5] text-black">
      <SplashIntro />
      <section className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <HeroSection />
        <IdentitySection />
        <Divider />
        <HistorySection />
        <Divider />
        <NotesSection />
        <Divider />
        <ActivitiesSection />
        <Divider />
        <FoundersSection />
      </section>
    </main>
  );
}
