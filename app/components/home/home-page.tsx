import Image from "next/image";
import Link from "next/link";
import { activities, archiveLinks, founders, ladderWords, notes } from "./data";

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

function RedDot({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-block h-5 w-5 rounded-full border border-[#BBD5DA] bg-[#FF0000] ${className}`}
      aria-hidden="true"
    />
  );
}

function PlaceholderImage({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#DFF1F1]/35 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04),rgba(0,0,0,0.08))]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(187,213,218,0.45),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(223,241,241,0.7),transparent_40%)]" />
    </div>
  );
}

function SectionIntro({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div>
      <TinyMeta left={index} />
      <h2 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#FF0000]">
        {title}
      </h2>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-black/12" />;
}

function HeroPeopleImage() {
  return (
    <div className="relative min-h-[360px] overflow-visible sm:min-h-[460px] lg:min-h-[520px]">
      <div className="absolute inset-0 overflow-hidden border border-black/10 bg-[#DFF1F1]/45">
        <div className="absolute right-16 top-14 z-10 w-[360px] -rotate-6 bg-white px-12 py-4 shadow-[0_14px_22px_rgba(0,0,0,0.12)] ring-1 ring-black/5 after:absolute after:inset-x-0 after:-bottom-3 after:h-3 after:bg-[#BBD5DA]/70">
          <span className="block text-center text-sm font-black uppercase tracking-[0.55em] text-[#FF0000]">
            Frans - Fahdil
          </span>
        </div>
        <Image
          src="/beranda/frans-fahdil.png"
          alt="Frans dan Fahdil, dua anggota KBM."
          width={2338}
          height={2338}
          priority
          className="absolute inset-x-1/2 bottom-0 w-[108%] max-w-none -translate-x-1/2 object-contain sm:w-[104%] lg:w-full"
        />
      </div>
    </div>
  );
}

function IdentityPeopleImage() {
  return (
    <div className="relative min-h-[320px] overflow-visible sm:min-h-[420px] lg:min-h-[500px]">
      <div className="absolute inset-0 overflow-hidden border border-black/10 bg-[#DFF1F1]/45">
        <div className="absolute right-8 top-5 z-10 w-[min(300px,80%)] -rotate-6 bg-white px-8 py-3 shadow-[0_14px_22px_rgba(0,0,0,0.12)] ring-1 ring-black/5 after:absolute after:inset-x-0 after:-bottom-3 after:h-3 after:bg-[#BBD5DA]/70 sm:right-10 sm:top-7 sm:px-10 sm:py-4">
          <span className="block text-center text-sm font-black uppercase tracking-[0.45em] text-[#FF0000]">
            Paundra - Chris
          </span>
        </div>
        <Image
          src="/beranda/paundra-chris.png"
          alt="Paundra dan Chris, dua anggota KBM."
          width={2001}
          height={2001}
          className="absolute inset-x-1/2 bottom-0 w-[92%] max-w-none -translate-x-1/2 object-contain sm:w-[88%] lg:w-[84%]"
        />
      </div>
    </div>
  );
}

function PeopleConnectionArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 520"
      className="pointer-events-none absolute -left-[18rem] top-[82%] z-20 hidden h-[520px] w-[520px] overflow-visible text-black xl:block"
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
        d="M286 18C84 92 44 238 148 352C196 404 248 440 332 474"
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

function HeroSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
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
              <p className="mt-3 max-w-[220px] leading-6">
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
        <SectionIntro index="01 / identity" title="tongkrongan, keluarga." />
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
    <section className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
      <SectionIntro index="02 / history" title="from Mini Militia" />

      <div className="grid gap-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-black/10 bg-[#F5F5F5] p-4">
            <TinyMeta left="timeline" />
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-black/35">
                  13.03.25
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                  KBM terbentuk
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-black/35">
                  origin
                </p>
                <p className="mt-2 text-base leading-7 text-black/58">
                  Berawal dari tongkrongan kelas, aktivitas ngegame, dan grup WhatsApp bernama Mini Militia.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
            <PlaceholderImage className="min-h-[220px]" />
            <div className="flex flex-col justify-between border border-black/10 bg-[#F5F5F5] p-5">
              <p className="text-base leading-8 text-black/62">
                KBM tidak lahir dari gagasan formal, tetapi dari kebersamaan yang terus berulang. Dari obrolan, game, dan tugas, lalu perlahan menjadi ruang yang terasa seperti rumah.
              </p>
              <div className="mt-5 flex justify-end">
                <RedDot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotesSection() {
  return (
    <section className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
      <SectionIntro index="03 / notes" title="core notes" />

      <div className="grid gap-6 sm:grid-cols-2">
        {notes.map((note, index) => (
          <div key={note} className="border border-black/10 bg-[#F5F5F5] p-5">
            <TinyMeta left={`0${index + 1}`} />
            <p className="mt-5 text-lg leading-8 tracking-[-0.02em] text-black/70">
              {note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
      <SectionIntro index="04 / activities" title="what we do" />

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
      <SectionIntro index="05 / founding circle" title="the first eight" />

      <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
        {founders.map((name, index) => (
          <div
            key={name}
            className="min-h-[150px] border-b border-black/10 py-5 pr-5 first:pl-0 sm:border-r sm:pl-5 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
          >
            <TinyMeta left={String(index + 1).padStart(2, "0")} />
            <p className="mt-5 max-w-[170px] text-lg font-medium leading-6 tracking-[-0.03em]">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section id="arsip" className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
      <SectionIntro index="06 / archive" title="explore KBM" />

      <div className="grid gap-x-8 lg:grid-cols-5">
        {archiveLinks.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className="group grid min-h-[180px] grid-rows-[auto_1fr_auto] border-t border-black/20 py-5 transition hover:border-black"
          >
            <div className="flex items-start justify-between gap-5">
              <TinyMeta left={String(index + 1).padStart(2, "0")} />
              <span className="text-sm text-black/35 transition group-hover:text-[#FF0000]">
                ↗
              </span>
            </div>

            <h3 className="mt-5 text-[2rem] font-semibold leading-none tracking-[-0.06em] text-[#FF0000]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[210px] text-sm leading-6 text-black/55">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#F5F5F5] text-black">
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
        <Divider />
        <ArchiveSection />
      </section>
    </main>
  );
}
