"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight, User } from "lucide-react";
import { Story } from "@/data/stories";

interface SquareStoryCardProps {
  story: Story;
}

export default function SquareStoryCard({ story }: SquareStoryCardProps) {
  return (
    <Link
      href={`/story/${story.id}`}
      className="group relative block aspect-square w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-slate-700"
      style={{
        boxShadow: `0 8px 30px -10px ${story.accentColor}20`,
      }}
    >
      {/* Background Story Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        {/* Calming gradient overlays for contrast and serenity */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Top Bar with Section & Reading Time */}
      <div className="relative z-10 flex items-center justify-between p-4 sm:p-5">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase backdrop-blur-md border"
          style={{
            backgroundColor: `${story.accentColor}20`,
            color: story.accentColor,
            borderColor: `${story.accentColor}40`,
          }}
        >
          {story.sectionTitle}
        </span>

        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          <Clock className="w-3 h-3 text-slate-400" />
          {story.readingTime}
        </span>
      </div>

      {/* Center Representative Feature (The One Unique Thing representing the story) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform rounded-2xl p-3 text-center backdrop-blur-xl border border-white/20 shadow-2xl max-w-[85%]"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.88)",
          }}
        >
          <div className="text-2xl mb-1">{story.representative.symbol}</div>
          <div className="text-xs font-semibold text-slate-100 tracking-wide uppercase">
            {story.representative.name}
          </div>
          <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 font-light leading-relaxed">
            {story.representative.description}
          </p>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
        {/* Distinct Representative Badge always visible */}
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-slate-200">
            <span>{story.representative.symbol}</span>
            <span className="font-medium truncate max-w-[130px] sm:max-w-[160px]">
              {story.representative.name}
            </span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-semibold text-white tracking-tight line-clamp-1 group-hover:text-amber-200 transition-colors">
          {story.title}
        </h3>

        {/* Character info */}
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-300">
            <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate max-w-[150px] font-medium text-slate-200">
              {story.character.name}
            </span>
          </div>

          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-800/80 text-slate-300 group-hover:bg-white group-hover:text-slate-950 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Corner Ambient Glow on Hover */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: story.accentColor }}
      />
    </Link>
  );
}
