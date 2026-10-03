"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Heart,
  CloudRain,
  Zap,
  Moon,
  Search,
  SlidersHorizontal,
  Compass,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SquareStoryCard from "@/components/SquareStoryCard";
import { STORIES, SECTIONS, SectionType, Story } from "@/data/stories";

export default function HomePage() {
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtered stories based on tab & search query
  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      const matchesSection =
        selectedSection === "all" || story.section === selectedSection;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        story.title.toLowerCase().includes(q) ||
        story.subtitle.toLowerCase().includes(q) ||
        story.character.name.toLowerCase().includes(q) ||
        story.representative.name.toLowerCase().includes(q) ||
        story.representative.description.toLowerCase().includes(q) ||
        story.moodTags.some((tag) => tag.toLowerCase().includes(q));

      return matchesSection && matchesQuery;
    });
  }, [selectedSection, searchQuery]);

  // Section icons
  const getSectionIcon = (id: SectionType) => {
    switch (id) {
      case "happy":
        return <Heart className="w-4 h-4 text-amber-400" />;
      case "sad":
        return <CloudRain className="w-4 h-4 text-sky-400" />;
      case "exciting":
        return <Zap className="w-4 h-4 text-rose-400" />;
      case "fantasy":
        return <Moon className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Calm Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={selectedSection}
        onSelectSection={setSelectedSection}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Tranquil Hero Showcase */}
        <section className="text-center py-10 sm:py-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>A Serene Space for Immersive Reading</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Find Stillness in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-sky-200 to-purple-300">Every Story</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore 16 thoughtfully crafted tales across four emotional realms. Each story holds a unique emblem, distinctive characters, and a soothing atmosphere designed to quiet the mind.
          </p>

          {/* Section Pills / Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedSection("all")}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                selectedSection === "all"
                  ? "bg-slate-800 text-white border-slate-600 shadow-lg"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <Compass className="w-4 h-4 text-slate-300" />
              <span>All Tales (16)</span>
            </button>

            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                  selectedSection === sec.id
                    ? "bg-slate-800/90 text-white shadow-lg border-white/20"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800/80 hover:border-slate-700"
                }`}
                style={{
                  color: selectedSection === sec.id ? sec.color : undefined,
                }}
              >
                {getSectionIcon(sec.id)}
                <span>{sec.name} (4)</span>
              </button>
            ))}
          </div>
        </section>

        {/* Stories Listing */}
        {searchQuery.trim() !== "" ? (
          /* Search Results View */
          <div className="py-6">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
              <h2 className="text-xl font-serif font-bold text-white">
                Search results for &ldquo;{searchQuery}&rdquo;
              </h2>
              <span className="text-xs text-slate-400">
                {filteredStories.length} stories found
              </span>
            </div>

            {filteredStories.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p>No stories matched your search. Try another character or theme.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredStories.map((story) => (
                  <SquareStoryCard key={story.id} story={story} />
                ))}
              </div>
            )}
          </div>
        ) : selectedSection !== "all" ? (
          /* Single Section Expanded View */
          (() => {
            const sec = SECTIONS.find((s) => s.id === selectedSection);
            const sectionStories = STORIES.filter((s) => s.section === selectedSection);
            if (!sec) return null;

            return (
              <div className="py-6">
                <div
                  className="p-6 sm:p-8 rounded-3xl mb-8 border relative overflow-hidden"
                  style={{
                    backgroundColor: `${sec.color}0a`,
                    borderColor: `${sec.color}30`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getSectionIcon(sec.id)}
                    <span
                      className="text-xs uppercase font-semibold tracking-wider"
                      style={{ color: sec.color }}
                    >
                      Featured Realm
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                    {sec.name}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl font-light">
                    {sec.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sectionStories.map((story) => (
                    <SquareStoryCard key={story.id} story={story} />
                  ))}
                </div>
              </div>
            );
          })()
        ) : (
          /* All Sections View (Default) */
          <div className="space-y-16 py-4">
            {SECTIONS.map((sec) => {
              const sectionStories = STORIES.filter((s) => s.section === sec.id);

              return (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  {/* Section Header */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        {getSectionIcon(sec.id)}
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: sec.color }}
                        >
                          {sec.name}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                        {sec.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light max-w-xl">
                        {sec.tagline}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedSection(sec.id)}
                      className="self-start sm:self-auto text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors py-1"
                    >
                      <span>Focus section</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 4 Square Stories Grid (aspect-square cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectionStories.map((story) => (
                      <SquareStoryCard key={story.id} story={story} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* Calm Footer */}
      <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-sky-400" />
            </div>
            <span className="font-serif text-sm font-semibold text-white">
              Calm Stories
            </span>
            <span className="text-xs text-slate-500">— A Sanctuary for Readers</span>
          </div>

          <p className="text-xs text-slate-400 font-light">
            Crafted with serenity, gentle animations, and comforting tales.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Happy</span>
            <span>•</span>
            <span>Sad</span>
            <span>•</span>
            <span>Exciting</span>
            <span>•</span>
            <span>Fantasy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
