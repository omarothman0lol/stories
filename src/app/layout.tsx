import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calm Stories | A Serene Collection of Tales",
  description:
    "Immerse yourself in gentle, heartwarming, reflective, and thrilling stories designed with calm animations, soothing themes, and ambient soundscapes.",
  keywords: ["stories", "calm", "reading", "happy", "sad", "exciting", "fantasy", "peaceful"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {/* Subtle Ambient Background Particle Starfield */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-sky-900/10 blur-[120px] ambient-glow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[140px] ambient-glow" />
          <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-amber-900/5 blur-[120px]" />
        </div>

        {/* Application Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
