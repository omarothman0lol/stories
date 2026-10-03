"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles, CloudRain, Bell, Waves, Sliders } from "lucide-react";

type SoundMode = "rain" | "chimes" | "waves" | "drone";

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [mode, setMode] = useState<SoundMode>("chimes");
  const [isOpen, setIsOpen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize or resume AudioContext
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const master = ctx.createGain();
      master.gain.setValueAtTime(volume, ctx.currentTime);
      master.connect(ctx.destination);

      audioCtxRef.current = ctx;
      masterGainRef.current = master;
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return { ctx: audioCtxRef.current, master: masterGainRef.current };
  };

  const stopCurrentSound = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (noiseSourceRef.current) {
      try {
        noiseSourceRef.current.stop();
        noiseSourceRef.current.disconnect();
      } catch {}
      noiseSourceRef.current = null;
    }
  };

  const playChimes = (ctx: AudioContext, master: GainNode) => {
    const pentatonicFrequencies = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
    const strikeChime = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state === "suspended") return;
      const freq = pentatonicFrequencies[Math.floor(Math.random() * pentatonicFrequencies.length)];
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

      osc.connect(gain);
      gain.connect(master);

      osc.start();
      osc.stop(ctx.currentTime + 3.6);
    };

    // Strike one immediately
    strikeChime();
    timerRef.current = setInterval(() => {
      if (Math.random() > 0.3) {
        strikeChime();
      }
    }, 1800);
  };

  const playRain = (ctx: AudioContext, master: GainNode) => {
    // Generate pink noise buffer
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    // Filter to simulate soft raindrops
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, ctx.currentTime);

    noise.connect(filter);
    filter.connect(master);
    noise.start();
    noiseSourceRef.current = noise;
  };

  const playWaves = (ctx: AudioContext, master: GainNode) => {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.08;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(300, ctx.currentTime);
    filter.Q.setValueAtTime(2.0, ctx.currentTime);

    // Wave swell LFO
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 8 second cycle
    lfoGain.gain.setValueAtTime(250, ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    noise.connect(filter);
    filter.connect(master);

    noise.start();
    lfo.start();
    noiseSourceRef.current = noise;
  };

  const playDrone = (ctx: AudioContext, master: GainNode) => {
    const baseFreq = 216; // Harmonious 432 / 2 Hz
    const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2];
    
    freqs.forEach((f) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      osc.connect(gain);
      gain.connect(master);
      osc.start();
    });
  };

  const startSound = (soundType: SoundMode) => {
    const { ctx, master } = getAudioContext();
    if (!ctx || !master) return;
    stopCurrentSound();

    if (soundType === "chimes") playChimes(ctx, master);
    else if (soundType === "rain") playRain(ctx, master);
    else if (soundType === "waves") playWaves(ctx, master);
    else if (soundType === "drone") playDrone(ctx, master);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopCurrentSound();
      setIsPlaying(false);
    } else {
      startSound(mode);
      setIsPlaying(true);
    }
  };

  const handleModeChange = (newMode: SoundMode) => {
    setMode(newMode);
    if (isPlaying) {
      startSound(newMode);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopCurrentSound();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          isPlaying
            ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"
        }`}
        title="Calming Ambient Soundscape"
      >
        {isPlaying ? (
          <>
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sound: {mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Calm Audio</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-4 rounded-2xl glass-panel shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Calm Soundscapes
            </span>
            <button
              onClick={togglePlay}
              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
                isPlaying
                  ? "bg-rose-500/20 text-rose-300 hover:bg-rose-500/30"
                  : "bg-sky-500/20 text-sky-300 hover:bg-sky-500/30"
              }`}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          {/* Sound Presets */}
          <div className="grid grid-cols-2 gap-2 my-3">
            <button
              onClick={() => handleModeChange("chimes")}
              className={`flex items-center gap-1.5 p-2 rounded-xl text-xs transition-all ${
                mode === "chimes"
                  ? "bg-sky-500/20 text-sky-200 border border-sky-500/40"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-transparent"
              }`}
            >
              <Bell className="w-3.5 h-3.5" /> Chimes
            </button>

            <button
              onClick={() => handleModeChange("rain")}
              className={`flex items-center gap-1.5 p-2 rounded-xl text-xs transition-all ${
                mode === "rain"
                  ? "bg-sky-500/20 text-sky-200 border border-sky-500/40"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-transparent"
              }`}
            >
              <CloudRain className="w-3.5 h-3.5" /> Soft Rain
            </button>

            <button
              onClick={() => handleModeChange("waves")}
              className={`flex items-center gap-1.5 p-2 rounded-xl text-xs transition-all ${
                mode === "waves"
                  ? "bg-sky-500/20 text-sky-200 border border-sky-500/40"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-transparent"
              }`}
            >
              <Waves className="w-3.5 h-3.5" /> Ocean Swell
            </button>

            <button
              onClick={() => handleModeChange("drone")}
              className={`flex items-center gap-1.5 p-2 rounded-xl text-xs transition-all ${
                mode === "drone"
                  ? "bg-sky-500/20 text-sky-200 border border-sky-500/40"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-transparent"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> Serene Tone
            </button>
          </div>

          {/* Volume Slider */}
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
