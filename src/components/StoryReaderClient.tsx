"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  User,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Share2,
  Check,
  Type,
  Sun,
  Moon,
  Compass,
} from "lucide-react";
import { Story } from "@/data/stories";
import AmbientAudio from "./AmbientAudio";

interface StoryReaderClientProps {
  story: Story;
  prevStory: Story | null;
  nextStory: Story | null;
}

export default function StoryReaderClient({
  story,
  prevStory,
  nextStory,
}: StoryReaderClientProps) {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [readingTheme, setReadingTheme] = useState<"slate" | "sepia" | "night">("slate");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getThemeClasses = () => {
    switch (readingTheme) {
      case "sepia":
        return "bg-[#181512] text-[#f4eee4] border-[#382f25]";
      case "night":
        return "bg-[#030712] text-[#e5e7eb] border-[#1f2937]";
      default:
        return "bg-[#090d16] text-[#f1f5f9] border-[#1e293b]";
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "text-base leading-relaxed";
      case "lg":
        return "text-xl leading-loose";
      default:
        return "text-lg leading-relaxed";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${getThemeClasses()}`}>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: story.accentColor,
        }}
      />

      {/* Top Floating Calm Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Stories</span>
          </Link>

          {/* Reading Customization Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Size Adjuster */}
            <div className="flex items-center bg-slate-900/80 rounded-full p-0.5 border border-slate-800 text-xs">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  fontSize === "sm" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  fontSize === "base" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                title="Standard text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  fontSize === "lg" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                title="Comfortable text"
              >
                A+
              </button>
            </div>

            {/* Reading Palette Selector */}
            <div className="hidden sm:flex items-center bg-slate-900/80 rounded-full p-0.5 border border-slate-800">
              <button
                onClick={() => setReadingTheme("slate")}
                className={`w-5 h-5 rounded-full bg-slate-900 border transition-all ${
                  readingTheme === "slate" ? "border-sky-400 scale-110" : "border-slate-700"
                }`}
                title="Twilight Slate"
              />
              <button
                onClick={() => setReadingTheme("sepia")}
                className={`w-5 h-5 rounded-full bg-[#27211b] border ml-1.5 transition-all ${
                  readingTheme === "sepia" ? "border-amber-400 scale-110" : "border-amber-900/60"
                }`}
                title="Warm Parchment"
              />
              <button
                onClick={() => setReadingTheme("night")}
                className={`w-5 h-5 rounded-full bg-[#030712] border ml-1.5 transition-all ${
                  readingTheme === "night" ? "border-purple-400 scale-110" : "border-slate-800"
                }`}
                title="Deep Noir"
              />
            </div>

            {/* Share Link */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full bg-slate-800/60 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              title="Copy story link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            {/* Ambient Audio Player */}
            <AmbientAudio />
          </div>
        </div>
      </header>

      {/* Hero Ambient Glow */}
      <div
        className="pointer-events-none fixed top-16 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-25 z-0"
        style={{ backgroundColor: story.accentColor }}
      />

      {/* Main Content Article Container */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Section Pill & Reading Duration */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Link
            href={`/#${story.section}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md border transition-transform hover:scale-105"
            style={{
              backgroundColor: `${story.accentColor}20`,
              color: story.accentColor,
              borderColor: `${story.accentColor}40`,
            }}
          >
            {story.sectionTitle}
          </Link>

          <span className="flex items-center gap-1 text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-white/5">
            <Clock className="w-3 h-3 text-slate-400" />
            {story.readingTime}
          </span>

          {story.moodTags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-400 bg-slate-900/50 px-2.5 py-1 rounded-full border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight sm:leading-[1.15]">
          {story.title}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
          {story.subtitle}
        </p>

        {/* ONE THING THAT REPRESENTS THE STORY (User requested: "make in every square one thing to represent the story and make it different") */}
        <div className="my-8 p-5 sm:p-6 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Representative Visual Illustration in a Square Frame */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-xl shrink-0">
              <Image
                src={story.image}
                alt={story.representative.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 text-2xl">
                {story.representative.symbol}
              </div>
            </div>

            {/* Representative Description */}
            <div className="text-center sm:text-left">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Representative Emblem of this Story
              </div>
              <h3 className="text-lg font-serif font-bold text-white mt-0.5 flex items-center justify-center sm:justify-start gap-2">
                <span>{story.representative.name}</span>
                <span className="text-sm font-normal text-slate-400">({story.representative.badge})</span>
              </h3>
              <p className="mt-1.5 text-sm text-slate-300 font-light leading-relaxed">
                {story.representative.description}
              </p>
            </div>
          </div>
        </div>

        {/* Character Dossier Showcase */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold shadow-md shrink-0"
              style={{
                backgroundColor: `${story.accentColor}25`,
                color: story.accentColor,
                border: `1px solid ${story.accentColor}40`,
              }}
            >
              {story.character.name.charAt(0)}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <User className="w-3 h-3 text-slate-400" />
                <span>{story.character.role}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-medium">{story.character.archetype}</span>
              </div>
              <h4 className="text-base font-semibold text-white mt-0.5">
                {story.character.name}
              </h4>
            </div>
          </div>

          <div className="sm:max-w-xs text-xs text-slate-300 italic pl-3 border-l-2 border-slate-700">
            &ldquo;{story.character.quote}&rdquo;
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <article className={`space-y-6 ${getFontSizeClass()} font-serif text-slate-200/90 tracking-wide`}>
          {story.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={`${
                idx === 0
                  ? "first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                  : ""
              }`}
            >
              {p}
            </p>
          ))}
        </article>

        {/* Story Memorable Quote */}
        <div
          className="my-12 p-6 sm:p-8 rounded-3xl border relative overflow-hidden"
          style={{
            backgroundColor: `${story.accentColor}0a`,
            borderColor: `${story.accentColor}30`,
          }}
        >
          <Quote
            className="w-10 h-10 opacity-20 absolute top-4 right-4"
            style={{ color: story.accentColor }}
          />
          <blockquote className="text-lg sm:text-xl font-serif italic text-white/95 leading-relaxed relative z-10">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <div className="mt-3 text-xs uppercase tracking-wider font-semibold text-slate-400">
            — Memory from {story.title}
          </div>
        </div>

        {/* USER REQUIREMENT: "and then write 'more stories soon' in the end of every story" */}
        <section className="my-16 pt-8 border-t border-slate-800 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-sky-400 mb-3 shadow-inner">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            More stories soon...
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto font-light leading-relaxed">
            The ink is resting, but new tales of calm, wonder, and adventure are gently being woven under the quiet stars.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-full text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/80 transition-all hover:scale-105"
            >
              Browse All Stories
            </Link>

            {nextStory && (
              <Link
                href={`/story/${nextStory.id}`}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-950 font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: story.accentColor }}
              >
                Next Story: {nextStory.title} →
              </Link>
            )}
          </div>
        </section>

        {/* Previous / Next Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
          {prevStory ? (
            <Link
              href={`/story/${prevStory.id}`}
              className="p-4 rounded-2xl glass-card flex items-center gap-3 group text-left"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Previous Tale
                </span>
                <h5 className="text-sm font-serif font-medium text-white truncate group-hover:text-sky-300">
                  {prevStory.title}
                </h5>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextStory ? (
            <Link
              href={`/story/${nextStory.id}`}
              className="p-4 rounded-2xl glass-card flex items-center justify-between gap-3 group text-right sm:text-right"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Next Tale
                </span>
                <h5 className="text-sm font-serif font-medium text-white truncate group-hover:text-sky-300">
                  {nextStory.title}
                </h5>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}
