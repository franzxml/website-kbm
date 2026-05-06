import Image from "next/image";
import { footerImages, socials } from "./data";

export default function SiteFooter() {
  const carouselImages = [...footerImages, ...footerImages];

  return (
    <footer className="w-full bg-[#F5F5F5] text-black">
      <div className="h-[160px] bg-[#F5F5F5]" />

      <div className="relative min-h-[325px] w-full overflow-hidden border-y border-[#BBD5DA] bg-[#DFF1F1]/45 py-8">
        <style>
          {`
            @keyframes footer-carousel {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }

            .footer-carousel-track {
              animation: footer-carousel 22s linear infinite;
            }

            .footer-carousel-track:hover {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .footer-carousel-track {
                animation: none;
                flex-wrap: wrap;
                transform: none;
              }
            }
          `}
        </style>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent" />

        <div className="footer-carousel-track flex w-max items-end gap-8 px-8">
          {carouselImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              aria-label={`Footer carousel ${index + 1}`}
              className="flex h-[270px] w-[min(76vw,420px)] flex-none items-end justify-center overflow-hidden border border-black/10 bg-[#F5F5F5]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1024}
                height={1024}
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-[245px] items-center justify-center bg-[#F5F5F5] px-8">
        <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-20 gap-y-8">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 rounded-md px-2 py-1 transition-colors hover:bg-[#DFF1F1]"
                aria-label={social.label}
              >
                <Icon className="h-8 w-8 text-black" />
                <span className="text-[32px] font-black uppercase leading-none tracking-tight text-black">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
