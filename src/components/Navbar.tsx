"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Sparkles, Search, Compass, Heart } from "lucide-react";
import AmbientAudio from "./AmbientAudio";
import { SECTIONS } from "@/data/stories";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
}

export default function Navbar({
  searchQuery = "",
  onSearchChange,
  activeSection = "all",
  onSelectSection,
}: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              Calm Stories
            </span>
            <span className="hidden sm:block text-[10px] tracking-widest uppercase text-slate-400 font-medium">
              Peaceful Sanctuaries
            </span>
          </div>
        </Link>

        {/* Section Quick Jump (Desktop) */}
        {onSelectSection && (
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800">
            <button
              onClick={() => onSelectSection("all")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeSection === "all"
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Tales
            </button>
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeSection === sec.id
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                style={{
                  color: activeSection === sec.id ? sec.color : undefined,
                }}
              >
                {sec.name.replace(" Stories", "")}
              </button>
            ))}
          </nav>
        )}

        {/* Actions Right */}
        <div className="flex items-center gap-3">
          {/* Search Toggle */}
          {onSearchChange && (
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-3 py-1 animate-in fade-in zoom-in-95 duration-200">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search stories, characters..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    autoFocus
                    className="bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none w-36 sm:w-48"
                  />
                  <button
                    onClick={() => {
                      onSearchChange("");
                      setShowSearch(false);
                    }}
                    className="text-slate-400 hover:text-white text-xs px-1"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Search stories"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {/* Calming Ambient Audio Player */}
          <AmbientAudio />
        </div>
      </div>
    </header>
  );
}
