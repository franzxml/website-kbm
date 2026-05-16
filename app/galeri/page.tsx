"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  characters,
  statLabels,
  type Character,
} from "../_data/galeri/characters";
import GallerySection from "./gallery-section";
import { useArcadeAudio } from "./use-arcade-audio";

const C = {
  white:   "#F5F5F5",
  steel:   "#BBD5DA",
  red:     "#FF0000",
  redDark: "#cc0000",
};

const SEL = "SELECT PLAYER";
const TICKER_TOP_TEXT = Array(30).fill(SEL).join("          ");
const buildBottom = (name: string) => Array(50).fill(name.toUpperCase()).join("          ");

export default function StreetFighter() {
  const { playSfx, startMusic, stopMusic } = useArcadeAudio();
  const [selected, setSelected]     = useState<Character>(characters[0]);
  const [skinIndex, setSkinIndex]   = useState(0);
  const [slideKey, setSlideKey]     = useState(0);
  const [logoReady, setLogoReady]   = useState(false);
  const [isMobile, setIsMobile]     = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [lastTap, setLastTap]       = useState(0);

  const selectedRef   = useRef<Character>(characters[0]);
  const skinIndexRef  = useRef(0);
  const isSelectedRef = useRef(false);

  useEffect(() => { selectedRef.current   = selected;   }, [selected]);
  useEffect(() => { skinIndexRef.current  = skinIndex;  }, [skinIndex]);
  useEffect(() => { isSelectedRef.current = isSelected; }, [isSelected]);
  useEffect(() => {
    const timer = setTimeout(() => setLogoReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openWidget = useCallback(() => {
    setIsWidgetOpen(true);
    playSfx("open");
    startMusic();
  }, [playSfx, startMusic]);

  const exitArcade = useCallback(() => {
    playSfx("back");
    stopMusic();
    setIsSelected(false);
    setIsWidgetOpen(false);
  }, [playSfx, stopMusic]);

  const confirmSelect = useCallback(() => {
    playSfx("confirm");
    setIsSelected(true);
  }, [playSfx]);

  const goBack = useCallback(() => {
    playSfx("back");
    setIsSelected(false);
  }, [playSfx]);

  const selectMode = useCallback((next: number) => {
    const modes = selectedRef.current.skins;
    if (modes.length <= 1) return;
    const normalized = (next + modes.length) % modes.length;
    playSfx("move");
    setSkinIndex(normalized);
    skinIndexRef.current = normalized;
    setSlideKey((k) => k + 1);
  }, [playSfx]);

  const selectCharacter = useCallback((char: Character) => {
    if (isSelectedRef.current) return;
    if (selectedRef.current.id !== char.id) playSfx("move");
    setSelected(char);
    selectedRef.current  = char;
    setSkinIndex(0);
    skinIndexRef.current = 0;
    setSlideKey((k) => k + 1);
  }, [playSfx]);

  const handleCharTap = useCallback((char: Character) => {
    if (isSelectedRef.current) return;
    const now = Date.now();
    if (selected.id === char.id && now - lastTap < 400) {
      confirmSelect();
    } else {
      selectCharacter(char);
    }
    setLastTap(now);
  }, [selected, lastTap, selectCharacter, confirmSelect]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (!isWidgetOpen) return;
    if (isSelectedRef.current) {
      if (e.key === "Escape") goBack();
      if (e.key === "a") selectMode(skinIndexRef.current - 1);
      if (e.key === "d") selectMode(skinIndexRef.current + 1);
      return;
    }
    if (e.key === "Escape") {
      exitArcade();
      return;
    }
    if (e.key === "a" || e.key === "d") {
      const idx = characters.findIndex((c) => c.id === selectedRef.current.id);
      selectCharacter(
        e.key === "a"
          ? characters[(idx - 1 + characters.length) % characters.length]
          : characters[(idx + 1) % characters.length]
      );
    }
    if (e.key === "w" || e.key === "s") {
      const skins = selectedRef.current.skins;
      if (skins.length <= 1) return;
      const next = e.key === "w"
        ? (skinIndexRef.current - 1 + skins.length) % skins.length
        : (skinIndexRef.current + 1) % skins.length;
      selectMode(next);
    }
    if (e.key === "Enter" || e.key === " ") {
      confirmSelect();
    }
  }, [isWidgetOpen, selectCharacter, selectMode, confirmSelect, goBack, exitArcade]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const skins       = selected.skins;
  const currentSkin = skins[skinIndex] ?? selected.largeImg;
  const tickerBot   = buildBottom(selected.name);
  const sidePad     = isMobile ? "0px" : "110px";
  const bio         = selected.modeBios[skinIndex] ?? "";
  const stats       = selected.modeStats[skinIndex] ?? [70, 70, 70, 70];

  return (
    <>
    <div className="arcade-root" style={{
      position: "relative",
      minHeight: "var(--arcade-height)",
      height: "var(--arcade-height)",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      background: "#0d0d0d",
    }}>

      {/* ─── background ─── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/backgrounds/stage.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />

      {/* ─── overlay ─── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: `linear-gradient(to top,
          rgba(0,0,0,0.97) 0%,
          rgba(0,0,0,0.55) 35%,
          rgba(0,0,0,0.2)  100%)`,
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Press+Start+2P&display=swap');

        .arcade-root {
          --arcade-height: calc(100svh - 80px);
        }
        @media (min-width: 1024px) {
          .arcade-root {
            --arcade-height: calc(100svh - 96px);
          }
        }

        @keyframes fadein { to { opacity: 1; } }
        @keyframes fadeout { to { opacity: 0; pointer-events: none; } }

        @keyframes slideInChar {
          0%   { transform: translateX(calc(-50% - 80px)); filter: drop-shadow(10px 6px 0 #F5F5F5); }
          15%  { filter: drop-shadow(10px 6px 0 #000); }
          100% { transform: translateX(-50%);            filter: drop-shadow(10px 6px 0 #000); }
        }

        /* Desktop: geser karakter ke kiri via transform saja, left tetap 50% */
        @keyframes slideCharLeft {
          from { transform: translateX(-50%); }
          to   { transform: translateX(calc(-50% - 22vw)); }
        }

        /* Mobile: perkecil tinggi karakter, posisi bottom tetap */
        @keyframes slideCharUp {
          from { height: 65%; transform: translateX(-50%); }
          to   { height: 45%; transform: translateX(-50%); }
        }

        /* Detail panel slide in from right — desktop */
        @keyframes panelSlideRight {
          from { transform: translateX(120%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        /* Detail panel slide up from bottom — mobile */
        @keyframes panelSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        /* Select menu fade + scale out */
        @keyframes menuOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.92); pointer-events: none; }
        }

        @keyframes scrollV {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollVRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scrollH {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollHRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Flash effect on confirm */
        @keyframes flashScreen {
          0%   { opacity: 0; }
          30%  { opacity: 0.7; }
          100% { opacity: 0; }
        }

        @keyframes pressStartPulse {
          0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 0 0 rgba(255,0,0,0); }
          50%      { transform: translateY(-2px) scale(1.03); box-shadow: 0 0 34px rgba(255,0,0,0.55); }
        }

        .ticker-v-fwd { animation: scrollV    28s linear infinite; }
        .ticker-v-rev { animation: scrollVRev 28s linear infinite; }
        .ticker-h-fwd { animation: scrollH    18s linear infinite; }
        .ticker-h-rev { animation: scrollHRev 18s linear infinite; }

        .tk-big {
          font-family: 'Press Start 2P', monospace;
          font-size: 2.4rem;
          letter-spacing: 0.08em;
          color: #F5F5F5;
          text-shadow: 2px 2px 0 #FF0000;
          white-space: nowrap;
          display: inline-block;
        }
        .tk-small {
          font-family: 'Press Start 2P', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #BBD5DA;
          text-shadow: 1px 1px 0 #000;
          white-space: nowrap;
          display: inline-block;
        }
        .tk-big-h {
          font-family: 'Press Start 2P', monospace;
          font-size: 1.3rem;
          letter-spacing: 0.08em;
          color: #F5F5F5;
          text-shadow: 2px 2px 0 #FF0000;
          white-space: nowrap;
          display: inline-block;
        }
        .tk-small-h {
          font-family: 'Press Start 2P', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: #BBD5DA;
          text-shadow: 1px 1px 0 #000;
          white-space: nowrap;
          display: inline-block;
        }

        .char-btn { transition: filter 0.18s; }
        .char-btn:hover { filter: grayscale(0) brightness(1.25) !important; }

        .fight-btn {
          font-family: 'Press Start 2P', monospace;
          letter-spacing: 0.12em;
          cursor: pointer;
          border: 3px solid #FF0000;
          background: transparent;
          color: #FF0000;
          transition: background 0.15s, color 0.15s, transform 0.1s, box-shadow 0.15s;
          text-transform: uppercase;
        }
        .fight-btn:hover {
          background: #FF0000;
          color: #F5F5F5;
          box-shadow: 0 0 24px #FF000088;
          transform: scale(1.05);
        }
        .fight-btn:active { transform: scale(0.97); }

        .start-fighter-btn {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(0.7rem, 2vw, 1.25rem);
          line-height: 1.7;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #F5F5F5;
          background: #111;
          border: 4px solid #FF0000;
          padding: 18px 24px;
          cursor: pointer;
          text-shadow: 3px 3px 0 #FF0000, 5px 5px 0 #111;
          animation: pressStartPulse 1.3s ease-in-out infinite;
        }
        .start-fighter-btn:hover {
          background: #FF0000;
          color: #fff;
          border-color: #F5F5F5;
        }

        .kbm-fighter-logo {
          font-family: 'Permanent Marker', 'Arial Black', Impact, sans-serif;
          font-size: clamp(4.2rem, 10vw, 8.5rem);
          font-style: italic;
          font-weight: 400;
          line-height: 0.78;
          letter-spacing: 0;
          color: #ffdf38;
          -webkit-text-stroke: 3px #d91010;
          text-transform: uppercase;
          transform: skewX(-9deg) rotate(-5deg);
          paint-order: stroke fill;
          text-shadow:
            3px 2px 0 #fff2,
            6px 5px 0 #7a0000,
            11px 9px 0 #111,
            -3px 8px 0 #f15b00,
            0 0 22px rgba(255, 0, 0, 0.7);
          filter: drop-shadow(0 0 1px #111);
        }

        .arcade-nav-btn {
          font-family: 'Press Start 2P', monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #F5F5F5;
          background: rgba(0,0,0,0.72);
          border: 2px solid #FF0000;
          padding: 9px 12px;
          cursor: pointer;
          box-shadow: 3px 3px 0 #111;
          transition: transform 0.12s, background 0.12s, color 0.12s;
        }
        .arcade-nav-btn:hover {
          background: #FF0000;
          color: #fff;
          transform: translateY(-1px);
        }

        .stat-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FF0000, #cc0000);
          transition: width 0.8s cubic-bezier(0.25,1,0.5,1);
          position: relative;
        }
        .stat-bar-fill::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 3px;
          background: #fff8;
        }

        .gallery-img {
          border: 1px solid #BBD5DA33;
          transition: border-color 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .gallery-img:hover {
          border-color: #FF0000;
          transform: scale(1.04);
        }

        .character-detail-panel {
          scrollbar-width: thin;
          scrollbar-color: #FF0000 #111;
        }
        .character-detail-panel::-webkit-scrollbar {
          width: 12px;
        }
        .character-detail-panel::-webkit-scrollbar-track {
          background: #090909;
          border-left: 1px solid rgba(187,213,218,0.2);
        }
        .character-detail-panel::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #FF0000, #7a0000);
          border: 2px solid #090909;
          box-shadow: inset 0 0 0 1px rgba(245,245,245,0.28);
        }
        .character-detail-panel::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ff3b3b, #cc0000);
        }

      `}</style>

      {!isWidgetOpen && (
        <div style={{
          position: "relative",
          zIndex: 20,
          minHeight: "var(--arcade-height)",
          height: "var(--arcade-height)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 28 : 42,
          padding: "24px",
          textAlign: "center",
        }}>
          <div
            className="kbm-fighter-logo"
            style={{
              opacity: logoReady ? 1 : 0,
              transform: logoReady
                ? "skewX(-9deg) rotate(-5deg) scale(1)"
                : "skewX(-9deg) rotate(-5deg) scale(0.75)",
              transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.25,1,0.5,1)",
            }}
          >
            KBM
          </div>
          <button className="start-fighter-btn" onClick={openWidget}>
            Select Your Fighter
          </button>
        </div>
      )}

      {isWidgetOpen && (
        <>

      <div style={{
        position: "absolute",
        top: isMobile ? 72 : 28,
        left: isMobile ? 12 : 128,
        right: isMobile ? 12 : 128,
        zIndex: 40,
        display: "flex",
        justifyContent: isSelected ? "space-between" : "flex-start",
        pointerEvents: "none",
      }}>
        <button
          className="arcade-nav-btn"
          onClick={exitArcade}
          style={{ pointerEvents: "auto" }}
        >
          Exit
        </button>
        {isSelected && (
          <button
            className="arcade-nav-btn"
            onClick={goBack}
            style={{ pointerEvents: "auto" }}
          >
            Back
          </button>
        )}
      </div>

      {/* ══════════ FLASH on select ══════════ */}
      {isSelected && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999, pointerEvents: "none",
          background: "#fff",
          animation: "flashScreen 0.5s ease forwards",
        }} />
      )}

      {/* ══════════ TICKER KIRI — desktop only ══════════ */}
      {!isMobile && (
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: 110, zIndex: 30,
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          background: "rgba(0,0,0,0.45)",
          borderRight: `2px solid ${C.red}`,
          overflow: "hidden",
          display: "flex", flexDirection: "row",
        }}>
          <div style={{ flex: 1, position: "relative", overflow: "hidden", borderRight: `1px solid rgba(187,213,218,0.15)` }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "rotate(-90deg)", transformOrigin: "center center", width: "3000px", marginLeft: "-1500px", marginTop: "-1em" }}>
              <span className="tk-big ticker-v-fwd">{TICKER_TOP_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TICKER_TOP_TEXT}</span>
            </div>
          </div>
          <div style={{ width: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "rotate(-90deg)", transformOrigin: "center center", width: "3000px", marginLeft: "-1500px", marginTop: "-0.6em" }}>
              <span className="tk-small ticker-v-rev">{tickerBot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerBot}</span>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ TICKER KANAN — desktop only ══════════ */}
      {!isMobile && (
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: 110, zIndex: 30,
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          background: "rgba(0,0,0,0.45)",
          borderLeft: `2px solid ${C.red}`,
          overflow: "hidden",
          display: "flex", flexDirection: "row",
        }}>
          <div style={{ width: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "rotate(90deg)", transformOrigin: "center center", width: "3000px", marginLeft: "-1500px", marginTop: "-0.6em" }}>
              <span className="tk-small ticker-v-fwd">{tickerBot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerBot}</span>
            </div>
          </div>
          <div style={{ flex: 1, position: "relative", overflow: "hidden", borderLeft: `1px solid rgba(187,213,218,0.15)` }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "rotate(90deg)", transformOrigin: "center center", width: "3000px", marginLeft: "-1500px", marginTop: "-1em" }}>
              <span className="tk-big ticker-v-rev">{TICKER_TOP_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TICKER_TOP_TEXT}</span>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ TICKER ATAS — mobile only ══════════ */}
      {isMobile && (
        <div style={{
          position: "relative", zIndex: 30, width: "100%",
          background: "rgba(0,0,0,0.55)",
          borderBottom: `2px solid ${C.red}`,
          overflow: "hidden",
        }}>
          <div style={{ overflow: "hidden", padding: "7px 0 3px" }}>
            <span className="tk-big-h ticker-h-fwd">{TICKER_TOP_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TICKER_TOP_TEXT}</span>
          </div>
          <div style={{ overflow: "hidden", padding: "3px 0 7px" }}>
            <span className="tk-small-h ticker-h-rev">{tickerBot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerBot}</span>
          </div>
        </div>
      )}

      {/* ─── CHARACTER IMAGE ─── */}
      {/* FIX: left selalu "50%", pergeseran hanya lewat transform di dalam keyframes */}
      <Image
        key={`${slideKey}-${isSelected ? "selected" : "idle"}`}
        src={currentSkin}
        alt={selected.name}
        width={900}
        height={1200}
        unoptimized
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          height: isMobile ? "65%" : "var(--arcade-height)",
          zIndex: 2,
          objectFit: "contain",
          objectPosition: "bottom",
          animation: isSelected
            ? (isMobile
                ? "slideCharUp 0.55s cubic-bezier(0.25,1,0.5,1) forwards"
                : "slideCharLeft 0.55s cubic-bezier(0.25,1,0.5,1) forwards")
            : "slideInChar 0.65s ease forwards",
        }}
      />

      {/* ─── logo ─── */}
      <div style={{
        position: "absolute",
        top: isMobile ? 98 : 42,
        left: 0,
        right: 0,
        zIndex: 10,
        display: "flex", justifyContent: "center",
        pointerEvents: "none",
      }}>
        <div className="kbm-fighter-logo" style={{
          fontSize: isMobile ? "3rem" : "4.7rem",
          opacity: logoReady ? 1 : 0,
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          KBM
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* ══════════ BOTTOM UI — SELECT MODE ══════════ */}
      {!isSelected && (
        <div style={{
          position: "relative", zIndex: 10, width: "100%",
          display: "flex", flexDirection: "column", alignItems: "center",
          paddingBottom: isMobile ? "0.85rem" : "1rem",
          paddingLeft: sidePad, paddingRight: sidePad,
          boxSizing: "border-box",
          animation: "fadein 0.8s linear 0.4s forwards", opacity: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)",
        }}>
          {/* — nama karakter — */}
          <div style={{ marginBottom: isMobile ? "0.55rem" : "0.65rem", textAlign: "center" }}>
            <h1 style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: isMobile ? "1.2rem" : "2rem",
              color: C.white,
              margin: "0 0 0.2rem",
              letterSpacing: "0.05em",
              textShadow: `3px 3px 0 ${C.red}, 5px 5px 0 ${C.redDark}`,
              display: "flex", alignItems: "baseline",
              justifyContent: "center", gap: "0.6rem", flexWrap: "wrap",
            }}>
              {selected.name}
              {selected.skinNames[skinIndex] !== "Default" && (
                <span style={{
                  fontSize: isMobile ? "0.7rem" : "1rem",
                  color: C.steel,
                  fontFamily: "'Press Start 2P', monospace",
                  textShadow: `2px 2px 0 #000`,
                }}>
                  ({selected.skinNames[skinIndex]})
                </span>
              )}
            </h1>
            {skins.length > 1 && (
              <div style={{ display: "flex", gap: 7, justifyContent: "center", marginTop: 8 }}>
                {skins.map((_, i) => (
                  <div key={i} style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: i === skinIndex ? C.red : C.steel,
                    opacity: i === skinIndex ? 1 : 0.4,
                    transform: i === skinIndex ? "scale(1.4)" : "scale(1)",
                    transition: "all 0.2s",
                  }} />
                ))}
              </div>
            )}
          </div>

          {/* — character selector grid — */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            border: `2px solid ${C.red}`,
            maxWidth: "100%",
          }}>
            {characters.map((char: Character) => {
              const isActive  = selected.id === char.id;
              const btnW      = isMobile ? 46 : 60;
              const btnH      = isMobile ? 52 : 68;
              return (
                <button
                  key={char.id}
                  className="char-btn"
                  onClick={() => handleCharTap(char)}
                  onMouseEnter={() => !isActive && playSfx("move")}
                  title={char.name}
                  style={{
                    position: "relative",
                    width: btnW, height: btnH,
                    border: `1px solid ${C.steel}`,
                    margin: "0 -1px -1px 0",
                    backgroundImage: `url(${char.smallImg})`,
                    backgroundSize: "cover", backgroundPosition: "center",
                    outline: "none", cursor: "pointer",
                    filter: isActive
                      ? "grayscale(0) brightness(1.4)"
                      : "grayscale(1) brightness(0.7)",
                  }}
                >
                  {isActive && (
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      background: C.red,
                      color: C.white,
                      fontSize: isMobile ? 5 : 6,
                      fontFamily: "'Press Start 2P', monospace",
                      textAlign: "center", textTransform: "uppercase",
                      padding: "2px 0", letterSpacing: "0.03em",
                    }}>
                      {char.name}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* — FIGHT button + hints — */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? 7 : 8, marginTop: isMobile ? 9 : 10 }}>
            <button className="fight-btn" onClick={confirmSelect} style={{
              fontSize: isMobile ? "0.62rem" : "0.78rem",
              padding: isMobile ? "8px 22px" : "10px 30px",
            }}>
              ▶ FIGHT!
            </button>

            {!isMobile && (
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[["a - d", "CHARACTER"], ["w - s", "MODE"], ["enter", "SELECT"]].map(([k, v]) => (
                  <p key={k} style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 9, letterSpacing: "0.05em",
                    color: C.steel, opacity: 0.55, margin: 0,
                  }}>
                    {k} {v}
                  </p>
                ))}
              </div>
            )}
            {isMobile && (
              <p style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 7, color: C.steel, opacity: 0.5, margin: 0, textAlign: "center",
              }}>
                double-tap to select
              </p>
            )}
          </div>
        </div>
      )}

      {/* ══════════ DETAIL PANEL — after selection ══════════ */}
      {isSelected && (
        <div className="character-detail-panel" style={{
          position: isMobile ? "relative" : "absolute",
          zIndex: 10,
          // Desktop: right panel
          ...(isMobile ? {
            width: "100%",
            marginTop: "auto",
          } : {
            right: 110,
            top: 0,
            bottom: 0,
            width: "42vw",
            maxWidth: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }),
          animation: isMobile
            ? "panelSlideUp 0.5s cubic-bezier(0.25,1,0.5,1) forwards"
            : "panelSlideRight 0.55s cubic-bezier(0.25,1,0.5,1) 0.2s both",
          background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 100%)",
          backdropFilter: "blur(10px)",
          borderTop: isMobile ? `2px solid ${C.red}` : "none",
          borderLeft: !isMobile ? `2px solid ${C.red}` : "none",
          padding: isMobile ? "18px 20px 24px" : "88px 36px 28px",
          overflowY: "auto",
          boxSizing: "border-box",
        }}>
          {/* Name */}
          <h2 style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: isMobile ? "1.3rem" : "1.8rem",
            color: C.white,
            margin: "0 0 4px",
            textShadow: `2px 2px 0 ${C.red}`,
          }}>
            {selected.name}
          </h2>
          <p style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 9,
            color: C.red,
            margin: "0 0 16px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            {selected.fighting}
          </p>

          {/* Bio */}
          <p style={{
            fontFamily: "monospace",
            fontSize: isMobile ? 12 : 13,
            color: "#ccd8da",
            lineHeight: 1.7,
            margin: "0 0 20px",
            borderLeft: `2px solid ${C.red}`,
            paddingLeft: 12,
          }}>
            {bio}
          </p>

          {/* Stats */}
          <div style={{ marginBottom: 20 }}>
            {statLabels.map((label, i) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 8,
                    color: C.steel,
                    letterSpacing: "0.1em",
                  }}>{label}</span>
                  <span style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 8,
                    color: C.white,
                  }}>{stats[i]}</span>
                </div>
                <div style={{
                  height: 6,
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  overflow: "hidden",
                }}>
                  <div className="stat-bar-fill" style={{ width: `${stats[i]}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Info chips */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {[
              ["HEIGHT", selected.height],
              ["ORIGIN", selected.birth.toUpperCase()],
              ["SKILL", selected.skills],
            ].map(([k, v]) => (
              <div key={k} style={{
                background: "#111",
                border: `1px solid #333`,
                padding: "6px 10px",
              }}>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: C.red, marginBottom: 3 }}>{k}</div>
                <div style={{ fontFamily: "monospace", fontSize: 12, color: C.white }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Mode */}
          <div style={{ marginBottom: 8 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              marginBottom: 10,
            }}>
              <p style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 8,
                color: C.steel,
                letterSpacing: "0.15em",
                margin: 0,
              }}>MODE</p>
              {!isMobile && (
                <p style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 6,
                  color: C.steel,
                  opacity: 0.55,
                  margin: 0,
                  letterSpacing: "0.08em",
                }}>A - D</p>
              )}
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
            }}>
              {skins.map((skin, i) => {
                const modeImg = selected.modeImgs[i] ?? skin;
                return (
                <button
                  key={`${skin}-${i}`}
                  onClick={() => selectMode(i)}
                  onMouseEnter={() => i !== skinIndex && playSfx("move")}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: 0,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <Image
                    className="gallery-img"
                    src={modeImg}
                    alt={`${selected.name} ${selected.skinNames[i] ?? `Mode ${i + 1}`}`}
                    width={360}
                    height={480}
                    unoptimized
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      borderColor: i === skinIndex ? C.red : "#BBD5DA33",
                      filter: i === skinIndex ? "brightness(1.18)" : "brightness(0.78) grayscale(0.35)",
                    }}
                  />
                  <p style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 6,
                    color: i === skinIndex ? C.white : C.steel,
                    margin: 0,
                    textAlign: "center",
                    opacity: i === skinIndex ? 1 : 0.6,
                    lineHeight: 1.4,
                  }}>
                    {selected.skinNames[i] ?? `Mode ${i + 1}`}
                  </p>
                </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

        </>
      )}
    </div>

    <GallerySection />
    </>
  );
}
