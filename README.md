# 🌙 Calm Stories

> A serene, immersive storytelling web application built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

Experience 16 beautifully illustrated and thoughtfully written tales across four distinctive realms, accompanied by calming aesthetics, smooth micro-animations, customizable reader typography, and a zero-dependency synthesized ambient soundscape player.

---

## ✨ Features

- **Four Curated Emotional Sections**:
  - ☀️ **Happy Stories**: Warmth, comfort, laughter, and morning sunlight.
  - 🌧️ **Sad Stories**: Melancholy, memory, gentle acceptance, and healing rain.
  - ⚡ **Exciting Stories**: High-altitude speed, deep-sea expeditions, and stellar thrills.
  - 🌌 **Fantasy Stories**: Starlight looms, ancient boughs, living glass, and siren lullabies.
- **16 Distinct Stories & Characters**:
  - 4 stories per section with completely unique characters matching each realm's mood.
  - Character dossiers with archetypes, roles, backstories, and memorable quotes.
- **Square Story Tiles**:
  - Interactive square aspect ratio cards (`aspect-square`) with smooth hover physics.
  - **One unique representative thing** featured in every square (e.g. *The Sun-Honey Loaf*, *The Whispering Brass Bell*, *The Golden Kintsugi Seam*, *The Emerald Chrono-Key*, *The Stardust Loom*).
- **Dedicated Reading Mode (`/story/[id]`)**:
  - Full multi-paragraph narrative for each story with elegant drop-caps.
  - Interactive font size controls (Compact, Standard, Relaxed).
  - Ambient palette toggles (Twilight Slate, Warm Parchment, Deep Noir).
  - Dynamic scroll progress bar and quick sharing.
  - **"More stories soon..."** serene closing banner at the end of every story.
- **Ambient Soundscapes (Web Audio API)**:
  - Real-time synthesized nature audio (Wind Chimes, Soft Rain, Ocean Swell, Serene Tone).
  - Works 100% offline with zero external audio assets or network latency.
- **Fast & Responsive**:
  - Pre-rendered static pages for all 16 stories via `generateStaticParams`.
  - Responsive layouts optimized for mobile, tablet, and desktop displays.

---

## 📚 Stories Directory

| Section | Title | Representative Emblem | Character |
| :--- | :--- | :--- | :--- |
| **Happy** | *The Baker's Secret Ingredient* | 🍞 The Sun-Honey Loaf | Milo Finch |
| **Happy** | *The Lighthouse of Whispering Bells* | 🔔 The Whispering Brass Bell | Captain Samira Cruz |
| **Happy** | *The Garden of Paper Butterflies* | 🦋 The Origami Blue Monarch | Grandpa Ren |
| **Happy** | *The Pup Who Caught a Cloud* | ☁️ The Low-Hanging Cloud | Barnaby & Pip |
| **Sad** | *The Last Song on the Autumn Porch* | 🎻 The Autumn Cello | Clara Vance |
| **Sad** | *Echoes in the Clocktower* | 🕰️ The Pendulum of Fog | Elias Mercer |
| **Sad** | *Letters to the North Wind* | ✉️ The Wax-Sealed Blue Letter | Astrid Lind |
| **Sad** | *The Ceramic Kintsugi Heart* | 🍵 The Golden Kintsugi Seam | Master Kenji |
| **Exciting** | *The Midnight Skyrunner* | ⚡ The Dawn Glider Wings | Zara Kael |
| **Exciting** | *The Descent of the Abyssal Vault* | 💎 The Abyssal Phosphor Crystal | Dax Sterling |
| **Exciting** | *The Clockwork Locomotive Heist* | 🗝️ The Emerald Chrono-Key | Kora the Rook |
| **Exciting** | *Riders of the Solar Flare* | 🏄‍♂️ The Solar Crest Board | Torin Vance |
| **Fantasy** | *The Weaver of Falling Constellations* | 🌌 The Stardust Loom | Lyra Nightbloom |
| **Fantasy** | *The Tree of Sleeping Dragons* | 🐉 The Sleeping Sapphire Drake | Sylvan the Guardian |
| **Fantasy** | *The Alchemist's Whispering Glass* | 🔮 The Memory Glass Phial | Ignis & Zephyr |
| **Fantasy** | *The Isle Where Sirens Sing Peace* | 🐚 The Siren's Moonlit Pearl | Lady Thalassa |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node 22 / 24)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Sound**: HTML5 Web Audio API
- **Language**: TypeScript
