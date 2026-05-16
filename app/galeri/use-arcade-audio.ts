"use client";

import { useCallback, useEffect, useRef } from "react";

export type ArcadeSfx = "move" | "confirm" | "back" | "open";

export function useArcadeAudio() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const musicTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const musicStepRef = useRef(0);

  const getAudio = useCallback(() => {
    if (typeof window === "undefined") return null;
    const AudioCtor =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtor) return null;

    if (audioCtxRef.current?.state === "closed") {
      audioCtxRef.current = null;
      masterGainRef.current = null;
    }

    if (!audioCtxRef.current) {
      const ctx = new AudioCtor();
      const master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
      audioCtxRef.current = ctx;
      masterGainRef.current = master;
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      void ctx.resume();
    }
    return ctx;
  }, []);

  const playSfx = useCallback((type: ArcadeSfx = "move") => {
    const ctx = getAudio();
    const master = masterGainRef.current;
    if (!ctx || !master) return;

    const now = ctx.currentTime;
    const gain = ctx.createGain();
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const settings = {
      move: { start: 640, end: 920, duration: 0.055, volume: 0.14, wave: "square" as OscillatorType },
      confirm: { start: 360, end: 1180, duration: 0.18, volume: 0.22, wave: "sawtooth" as OscillatorType },
      back: { start: 360, end: 180, duration: 0.13, volume: 0.18, wave: "triangle" as OscillatorType },
      open: { start: 220, end: 880, duration: 0.25, volume: 0.2, wave: "square" as OscillatorType },
    }[type];

    osc.type = settings.wave;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(2200, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(settings.volume, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + settings.duration);
    osc.frequency.setValueAtTime(settings.start, now);
    osc.frequency.exponentialRampToValueAtTime(settings.end, now + settings.duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(now);
    osc.stop(now + settings.duration + 0.02);
  }, [getAudio]);

  const stopMusic = useCallback(() => {
    if (musicTimerRef.current) {
      clearInterval(musicTimerRef.current);
      musicTimerRef.current = null;
    }
    musicStepRef.current = 0;
  }, []);

  const startMusic = useCallback(() => {
    const ctx = getAudio();
    const master = masterGainRef.current;
    if (!ctx || !master || musicTimerRef.current) return;

    const lead = [
      196, 247, 294, 330, 294, 247, 220, 247,
      196, 247, 294, 392, 330, 294, 247, 220,
      196, 233, 294, 349, 392, 349, 294, 233,
      220, 247, 294, 330, 392, 330, 294, 247,
    ];
    const bass = [98, 98, 123.5, 98, 87.31, 87.31, 98, 116.54];
    const chordStabs = [
      [196, 246.94, 293.66],
      [174.61, 220, 261.63],
      [196, 233.08, 293.66],
      [220, 261.63, 329.63],
    ];

    const playNote = (freq: number, start: number, duration: number, volume: number, wave: OscillatorType) => {
      if (freq <= 0) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      osc.type = wave;
      osc.frequency.setValueAtTime(freq, start);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(wave === "sawtooth" ? 980 : 2400, start);
      filter.frequency.exponentialRampToValueAtTime(wave === "sawtooth" ? 560 : 1500, start + duration);
      filter.Q.setValueAtTime(wave === "sawtooth" ? 3.5 : 1.5, start);
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(master);
      osc.start(start);
      osc.stop(start + duration + 0.03);
    };

    const playNoise = (start: number, duration: number, volume: number, frequency: number) => {
      const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i += 1) {
        output[i] = Math.random() * 2 - 1;
      }

      const source = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      source.buffer = buffer;
      filter.type = "highpass";
      filter.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(volume, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      source.connect(filter);
      filter.connect(gain);
      gain.connect(master);
      source.start(start);
      source.stop(start + duration);
    };

    const playKick = (start: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(135, start);
      osc.frequency.exponentialRampToValueAtTime(42, start + 0.09);
      gain.gain.setValueAtTime(0.16, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);
      osc.connect(gain);
      gain.connect(master);
      osc.start(start);
      osc.stop(start + 0.12);
    };

    const playChordStab = (start: number, notes: number[]) => {
      notes.forEach((note, index) => playNote(note, start + index * 0.004, 0.08, 0.035, "square"));
    };

    const playStep = () => {
      const step = musicStepRef.current;
      const now = ctx.currentTime;
      const leadFreq = lead[step % lead.length];
      const bassFreq = bass[Math.floor(step / 2) % bass.length];

      playNote(leadFreq, now, step % 8 === 7 ? 0.15 : 0.09, step % 4 === 0 ? 0.09 : 0.06, "square");
      if (step % 2 === 0) {
        playNote(bassFreq, now, 0.16, 0.07, "sawtooth");
      }
      if (step % 8 === 3 || step % 8 === 7) {
        playNote(leadFreq * 2, now + 0.035, 0.055, 0.025, "square");
      }
      if (step % 16 === 0) {
        playChordStab(now, chordStabs[Math.floor(step / 8) % chordStabs.length]);
      }
      if (step % 4 === 0) {
        playKick(now);
      }
      if (step % 8 === 4) {
        playNoise(now, 0.07, 0.06, 1000);
      }
      if (step % 2 === 1) {
        playNoise(now, 0.02, 0.018, 3800);
      }
      musicStepRef.current = step + 1;
    };

    const beginLoop = () => {
      if (musicTimerRef.current) return;
      playStep();
      musicTimerRef.current = setInterval(playStep, 118);
    };

    if (ctx.state === "suspended") {
      void ctx.resume().then(beginLoop).catch(beginLoop);
      return;
    }

    beginLoop();
  }, [getAudio]);

  useEffect(() => {
    return () => {
      stopMusic();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        void audioCtxRef.current.close();
      }
      audioCtxRef.current = null;
      masterGainRef.current = null;
    };
  }, [stopMusic]);

  return { playSfx, startMusic, stopMusic };
}
