const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'stories');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const svgs = {
  'bakers-secret-ingredient': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#451a03" />
      <stop offset="50%" stop-color="#78350f" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <radialGradient id="sun" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="loaf" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fde68a" />
      <stop offset="30%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />
  <circle cx="300" cy="280" r="220" fill="url(#sun)" filter="url(#glow)" />
  
  <!-- Countertop -->
  <path d="M50 480 Q300 460 550 480 L550 560 L50 560 Z" fill="#27272a" opacity="0.6"/>
  <line x1="50" y1="480" x2="550" y2="480" stroke="#f59e0b" stroke-opacity="0.3" stroke-width="2"/>

  <!-- Golden Loaf -->
  <g filter="url(#glow)">
    <ellipse cx="300" cy="380" rx="140" ry="75" fill="url(#loaf)" />
    <!-- Braided Crust Cuts -->
    <path d="M220 360 Q240 340 260 365" stroke="#fef3c7" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.9"/>
    <path d="M280 355 Q300 330 320 360" stroke="#fef3c7" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.95"/>
    <path d="M340 360 Q360 340 380 365" stroke="#fef3c7" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.9"/>
  </g>

  <!-- Steam wisps -->
  <path d="M250 310 Q240 260 270 220 T260 170" stroke="#fde68a" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round"/>
  <path d="M300 300 Q320 250 290 200 T310 140" stroke="#fde68a" stroke-width="3.5" fill="none" opacity="0.55" stroke-linecap="round"/>
  <path d="M350 310 Q370 260 340 210 T350 160" stroke="#fde68a" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round"/>

  <!-- Flour particles -->
  <circle cx="210" cy="290" r="3" fill="#fef08a" opacity="0.7"/>
  <circle cx="390" cy="270" r="2.5" fill="#fef08a" opacity="0.8"/>
  <circle cx="280" cy="180" r="2" fill="#fef08a" opacity="0.6"/>
  <circle cx="330" cy="220" r="3.5" fill="#fef08a" opacity="0.75"/>
  <circle cx="180" cy="380" r="2" fill="#fef08a" opacity="0.5"/>
  <circle cx="420" cy="370" r="2.5" fill="#fef08a" opacity="0.6"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-90" y="-18" width="180" height="36" rx="18" fill="#18181b" stroke="#f59e0b" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fde68a" text-anchor="middle" letter-spacing="1">THE HONEY LOAF</text>
  </g>
</svg>`,

  'lighthouse-of-whispering-bells': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#082f49" />
    </linearGradient>
    <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85" />
      <stop offset="60%" stop-color="#fde047" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="bellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="60%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />

  <!-- Moon / Lighthouse Light Beam -->
  <polygon points="300,190 580,300 560,420 300,210" fill="url(#lightBeam)" />
  <polygon points="300,190 20,320 40,440 300,210" fill="url(#lightBeam)" opacity="0.6"/>

  <!-- Ocean Waves -->
  <path d="M0 450 Q150 430 300 460 T600 450 L600 600 L0 600 Z" fill="#0c4a6e" opacity="0.6"/>
  <path d="M0 480 Q200 460 400 490 T600 480 L600 600 L0 600 Z" fill="#075985" opacity="0.7"/>

  <!-- Lighthouse Silhouette -->
  <polygon points="280,440 286,220 314,220 320,440" fill="#f8fafc" opacity="0.95" />
  <!-- Lantern Room -->
  <rect x="282" y="190" width="36" height="30" rx="3" fill="#fde047" />
  <polygon points="275,190 300,150 325,190" fill="#dc2626" />
  <circle cx="300" cy="205" r="8" fill="#ffffff" />

  <!-- Prominent Whispering Brass Bell Motif -->
  <g transform="translate(300, 290)">
    <circle cx="0" cy="0" r="60" fill="#0f172a" opacity="0.7"/>
    <path d="M-28,15 C-28,3 -20,-20 0,-25 C20,-20 28,3 28,15 L33,20 C35,23 32,26 27,26 L-27,26 C-32,26 -35,23 -33,20 Z" fill="url(#bellGrad)" stroke="#fef08a" stroke-width="1.5"/>
    <circle cx="0" cy="30" r="6" fill="#fde68a" />
    <!-- Sound Waves -->
    <path d="M-40,0 A45,45 0 0,0 -40,25" stroke="#fef08a" stroke-width="2.5" fill="none" opacity="0.7" stroke-linecap="round"/>
    <path d="M40,0 A45,45 0 0,1 40,25" stroke="#fef08a" stroke-width="2.5" fill="none" opacity="0.7" stroke-linecap="round"/>
  </g>

  <!-- Flying Gulls -->
  <path d="M120 150 Q135 140 150 150 Q165 140 180 150" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.7"/>
  <path d="M420 120 Q432 112 445 120 Q457 112 470 120" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.7"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-95" y="-18" width="190" height="36" rx="18" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#7dd3fc" text-anchor="middle" letter-spacing="1">THE BRASS CHIME</text>
  </g>
</svg>`,

  'garden-of-paper-butterflies': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14532d" />
      <stop offset="50%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#042f2e" />
    </linearGradient>
    <linearGradient id="wingL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67e8f9" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="wingR" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#075985" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />

  <!-- Cherry Blossom Branch -->
  <path d="M60 480 Q180 380 320 340 T540 260" stroke="#78350f" stroke-width="10" stroke-linecap="round" fill="none" opacity="0.6"/>
  <path d="M220 370 Q280 280 360 270" stroke="#78350f" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.6"/>

  <!-- Blossoms -->
  <circle cx="190" cy="380" r="14" fill="#fbcfe8" opacity="0.75" />
  <circle cx="340" cy="275" r="12" fill="#fbcfe8" opacity="0.8" />
  <circle cx="460" cy="270" r="16" fill="#fbcfe8" opacity="0.7" />

  <!-- Origami Butterfly Focus -->
  <g transform="translate(300, 270)">
    <!-- Origami Left Wing Top -->
    <polygon points="0,0 -110,-100 -30,-40" fill="url(#wingL)" stroke="#e0f2fe" stroke-width="1.5" />
    <!-- Origami Left Wing Bottom -->
    <polygon points="0,0 -85,40 -20,20" fill="url(#wingL)" stroke="#bae6fd" stroke-width="1.5" opacity="0.85"/>
    <!-- Origami Right Wing Top -->
    <polygon points="0,0 110,-100 30,-40" fill="url(#wingR)" stroke="#e0f2fe" stroke-width="1.5" />
    <!-- Origami Right Wing Bottom -->
    <polygon points="0,0 85,40 20,20" fill="url(#wingR)" stroke="#bae6fd" stroke-width="1.5" opacity="0.85"/>
    <!-- Center Crease Body -->
    <polygon points="-4,-40 4,-40 2,30 -2,30" fill="#f8fafc" />
    <!-- Golden Thread -->
    <path d="M0,-40 Q10,-100 -20,-160" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4" fill="none" opacity="0.8"/>
  </g>

  <!-- Smaller fluttering paper butterflies -->
  <g transform="translate(160, 180) scale(0.4) rotate(-20)">
    <polygon points="0,0 -90,-80 -25,-30" fill="#fde047" />
    <polygon points="0,0 90,-80 25,-30" fill="#facc15" />
  </g>
  <g transform="translate(440, 160) scale(0.45) rotate(25)">
    <polygon points="0,0 -90,-80 -25,-30" fill="#f472b6" />
    <polygon points="0,0 90,-80 25,-30" fill="#ec4899" />
  </g>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#064e3b" stroke="#34d399" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#a7f3d0" text-anchor="middle" letter-spacing="1">PAPER BLUE MONARCH</text>
  </g>
</svg>`,

  'pup-who-caught-a-cloud': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="60%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#86efac" />
    </linearGradient>
    <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="80%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#e2e8f0" stop-opacity="0.8" />
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#sky)" />

  <!-- Rolling Meadow Hills -->
  <path d="M-20 440 Q150 380 320 430 T640 410 L640 600 L-20 600 Z" fill="#22c55e" opacity="0.8"/>
  <path d="M-20 480 Q200 420 420 490 T640 470 L640 600 L-20 600 Z" fill="#15803d" />

  <!-- Fluffy Cloud Focus -->
  <g transform="translate(300, 240)">
    <circle cx="-70" cy="10" r="60" fill="url(#cloudGlow)" />
    <circle cx="70" cy="10" r="55" fill="url(#cloudGlow)" />
    <circle cx="0" cy="-25" r="75" fill="url(#cloudGlow)" />
    <circle cx="-35" cy="20" r="55" fill="url(#cloudGlow)" />
    <circle cx="35" cy="20" r="60" fill="url(#cloudGlow)" />
  </g>

  <!-- Golden Hound Silhouette Leaping -->
  <g transform="translate(260, 360)">
    <!-- Body & Fur -->
    <ellipse cx="40" cy="40" rx="65" ry="32" fill="#d97706" transform="rotate(-25 40 40)"/>
    <!-- Head -->
    <circle cx="95" cy="5" r="28" fill="#f59e0b" />
    <!-- Floppy Ear -->
    <path d="M85 0 Q70 25 80 40 Q95 30 90 10 Z" fill="#b45309" />
    <!-- Wagging Tail -->
    <path d="M-20 60 Q-40 45 -45 25" stroke="#f59e0b" stroke-width="12" stroke-linecap="round" fill="none"/>
    <!-- Joyful Nose -->
    <circle cx="118" cy="8" r="6" fill="#18181b" />
  </g>

  <!-- Pip the Little Robin -->
  <g transform="translate(370, 180)">
    <ellipse cx="0" cy="0" rx="14" ry="10" fill="#991b1b" />
    <circle cx="6" cy="-4" r="8" fill="#b91c1c" />
    <polygon points="13,-5 20,-2 13,0" fill="#f59e0b" />
    <circle cx="9" cy="-6" r="2" fill="#ffffff" />
    <circle cx="10" cy="-6" r="1" fill="#000000" />
  </g>

  <!-- Dandelion Seeds -->
  <circle cx="210" cy="180" r="3" fill="#ffffff" opacity="0.9"/>
  <circle cx="420" cy="300" r="2.5" fill="#ffffff" opacity="0.8"/>
  <circle cx="160" cy="280" r="2" fill="#ffffff" opacity="0.7"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-95" y="-18" width="190" height="36" rx="18" fill="#15803d" stroke="#86efac" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#dcfce7" text-anchor="middle" letter-spacing="1">MEADOW CLOUD</text>
  </g>
</svg>`,

  'last-song-on-autumn-porch': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="autumnDusk" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>
    <linearGradient id="celloGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350f" />
      <stop offset="50%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#autumnDusk)" />

  <!-- Porch Wooden Planks -->
  <path d="M0 430 L600 430 L600 600 L0 600 Z" fill="#1c1917" opacity="0.75"/>
  <line x1="0" y1="470" x2="600" y2="470" stroke="#44403c" stroke-width="2"/>
  <line x1="0" y1="520" x2="600" y2="520" stroke="#44403c" stroke-width="2"/>

  <!-- Rain Drops in Twilight -->
  <line x1="80" y1="60" x2="60" y2="120" stroke="#93c5fd" stroke-width="1" opacity="0.3"/>
  <line x1="200" y1="40" x2="180" y2="110" stroke="#93c5fd" stroke-width="1" opacity="0.4"/>
  <line x1="450" y1="80" x2="430" y2="150" stroke="#93c5fd" stroke-width="1" opacity="0.35"/>

  <!-- The Cello -->
  <g transform="translate(300, 280)">
    <!-- Body -->
    <path d="M-45,-120 C-90,-80 -70,-20 -40,0 C-85,30 -95,100 -55,140 C-20,165 20,165 55,140 C95,100 85,30 40,0 C70,-20 90,-80 45,-120 Z" fill="url(#celloGrad)" stroke="#f59e0b" stroke-width="2"/>
    <!-- F-Holes -->
    <path d="M-30,-20 Q-25,10 -32,30" stroke="#18181b" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M30,-20 Q25,10 32,30" stroke="#18181b" stroke-width="4" stroke-linecap="round" fill="none"/>
    <!-- Fingerboard -->
    <rect x="-8" y="-180" width="16" height="240" fill="#18181b" />
    <!-- Strings -->
    <line x1="-4" y1="-180" x2="-4" y2="140" stroke="#e2e8f0" stroke-width="1.2" opacity="0.9"/>
    <line x1="-1.5" y1="-180" x2="-1.5" y2="140" stroke="#cbd5e1" stroke-width="1.2" opacity="0.9"/>
    <line x1="1.5" y1="-180" x2="1.5" y2="140" stroke="#cbd5e1" stroke-width="1.2" opacity="0.9"/>
    <line x1="4" y1="-180" x2="4" y2="140" stroke="#e2e8f0" stroke-width="1.2" opacity="0.9"/>
    <!-- Pegbox & Scroll -->
    <rect x="-12" y="-210" width="24" height="32" fill="#451a03" />
    <circle cx="-16" cy="-195" r="4" fill="#d97706" />
    <circle cx="16" cy="-195" r="4" fill="#d97706" />
  </g>

  <!-- Falling Maple Leaves -->
  <g transform="translate(180, 220) scale(0.8) rotate(35)">
    <path d="M0,0 Q-25,-30 0,-50 Q25,-30 0,0" fill="#ea580c" opacity="0.8"/>
  </g>
  <g transform="translate(420, 200) scale(0.9) rotate(-40)">
    <path d="M0,0 Q-25,-30 0,-50 Q25,-30 0,0" fill="#d97706" opacity="0.85"/>
  </g>
  <g transform="translate(240, 420) scale(0.7) rotate(60)">
    <path d="M0,0 Q-25,-30 0,-50 Q25,-30 0,0" fill="#b45309" opacity="0.75"/>
  </g>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-95" y="-18" width="190" height="36" rx="18" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#7dd3fc" text-anchor="middle" letter-spacing="1">THE AUTUMN CELLO</text>
  </g>
</svg>`,

  'echoes-in-the-clocktower': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <radialGradient id="dialGlow" cx="50%" cy="40%" r="45%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />

  <!-- Fog Layers -->
  <ellipse cx="300" cy="500" rx="360" ry="120" fill="#334155" opacity="0.35"/>
  <ellipse cx="300" cy="420" rx="250" ry="80" fill="#475569" opacity="0.25"/>

  <!-- Clockface Silhouette -->
  <circle cx="300" cy="240" r="150" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.4"/>
  <circle cx="300" cy="240" r="140" fill="none" stroke="#0ea5e9" stroke-width="1" stroke-dasharray="6,8" opacity="0.5"/>
  <circle cx="300" cy="240" r="160" fill="url(#dialGlow)" />

  <!-- Roman Numerals Accents -->
  <text x="300" y="125" font-family="serif" font-size="20" fill="#94a3b8" text-anchor="middle" opacity="0.6">XII</text>
  <text x="420" y="247" font-family="serif" font-size="20" fill="#94a3b8" text-anchor="middle" opacity="0.6">III</text>
  <text x="300" y="370" font-family="serif" font-size="20" fill="#94a3b8" text-anchor="middle" opacity="0.6">VI</text>
  <text x="180" y="247" font-family="serif" font-size="20" fill="#94a3b8" text-anchor="middle" opacity="0.6">IX</text>

  <!-- Brass Pendulum (Distinct Representative Object) -->
  <g transform="translate(300, 240)">
    <!-- Pendulum Rod swinging slightly -->
    <line x1="0" y1="0" x2="-25" y2="180" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <!-- Giant Brass Bob -->
    <circle cx="-25" cy="180" r="38" fill="#b45309" stroke="#fde047" stroke-width="3" />
    <circle cx="-25" cy="180" r="24" fill="#78350f" />
    <!-- Clock Hands -->
    <line x1="0" y1="0" x2="35" y2="-45" stroke="#f1f5f9" stroke-width="4.5" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="-60" y2="-20" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="8" fill="#f59e0b" />
  </g>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#7dd3fc" text-anchor="middle" letter-spacing="1">PENDULUM OF FOG</text>
  </g>
</svg>`,

  'letters-to-the-north-wind': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="tundraNight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="60%" stop-color="#0f2942" />
      <stop offset="100%" stop-color="#1e3a5f" />
    </linearGradient>
    <linearGradient id="letterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#cbd5e1" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#tundraNight)" />

  <!-- Aurora Borealis Green Wave in sky -->
  <path d="M0 120 Q180 60 340 130 T600 90 L600 0 L0 0 Z" fill="#2dd4bf" opacity="0.18"/>
  <path d="M0 150 Q220 80 400 160 T600 110" stroke="#38bdf8" stroke-width="30" fill="none" opacity="0.2" filter="blur(20px)"/>

  <!-- Snow Pines Silhouettes -->
  <polygon points="60,460 30,530 90,530" fill="#0f172a" />
  <polygon points="120,440 90,520 150,520" fill="#0f172a" />
  <polygon points="500,450 470,530 530,530" fill="#0f172a" />

  <!-- Glowing Frosted Letter (The Distinct Representative Object) -->
  <g transform="translate(300, 270) rotate(-8)">
    <!-- Envelope Shadow -->
    <rect x="-120" y="-80" width="240" height="160" rx="8" fill="#000000" opacity="0.4" transform="translate(10, 15)"/>
    <!-- Envelope Base -->
    <rect x="-120" y="-80" width="240" height="160" rx="8" fill="url(#letterGrad)" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Fold lines -->
    <path d="M-120,-80 L0,20 L120,-80" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <path d="M-120,80 L-25,-5" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
    <path d="M120,80 L25,-5" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Blue Wax Seal -->
    <circle cx="0" cy="20" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="0" cy="20" r="16" fill="#0369a1" />
    <path d="M-6,14 L0,26 L6,14" stroke="#e0f2fe" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- Whirling Wind Trails & Snowflakes -->
  <path d="M100 240 Q250 180 400 260 T540 220" stroke="#e2e8f0" stroke-width="2" fill="none" opacity="0.45" stroke-dasharray="5,6"/>
  <circle cx="210" cy="180" r="3" fill="#ffffff" opacity="0.9"/>
  <circle cx="430" cy="380" r="2.5" fill="#ffffff" opacity="0.8"/>
  <circle cx="360" cy="140" r="3.5" fill="#ffffff" opacity="0.85"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#0f2942" stroke="#38bdf8" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#7dd3fc" text-anchor="middle" letter-spacing="1">WAX-SEALED LETTER</text>
  </g>
</svg>`,

  'ceramic-kintsugi-heart': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111827" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
    <linearGradient id="celadon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d1fae5" />
      <stop offset="50%" stop-color="#a7f3d0" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />

  <!-- Soft Studio Light -->
  <circle cx="300" cy="280" r="200" fill="#047857" opacity="0.15" filter="blur(30px)"/>

  <!-- Tatami Table Top -->
  <path d="M40 450 L560 450 L560 560 L40 560 Z" fill="#292524" opacity="0.6"/>
  <line x1="40" y1="450" x2="560" y2="450" stroke="#78716c" stroke-width="2"/>

  <!-- Celadon Bowl (The Unique Representative Kintsugi Bowl) -->
  <g transform="translate(300, 320)">
    <!-- Bowl Base -->
    <path d="M-130,-40 C-130,80 -60,110 0,110 C60,110 130,80 130,-40 Z" fill="url(#celadon)" stroke="#065f46" stroke-width="2"/>
    <!-- Bowl Rim Rim ellipse -->
    <ellipse cx="0" cy="-40" rx="130" ry="24" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
    <ellipse cx="0" cy="-40" rx="115" ry="18" fill="#10b981" opacity="0.4"/>

    <!-- Prominent Golden Kintsugi Seam Fractures -->
    <path d="M-60,-40 Q-40,20 -10,35 Q20,50 15,110" stroke="#fde047" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M-60,-40 Q-40,20 -10,35 Q20,50 15,110" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-linecap="round"/>

    <!-- Branching Gold Seams -->
    <path d="M-10,35 Q-40,60 -65,75" stroke="#fde047" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M20,50 Q60,65 90,50" stroke="#fde047" stroke-width="4" fill="none" stroke-linecap="round"/>
    
    <!-- Gold Dust motes on seams -->
    <circle cx="-10" cy="35" r="4" fill="#ffffff" />
    <circle cx="-65" cy="75" r="3" fill="#ffffff" />
    <circle cx="15" cy="95" r="3.5" fill="#ffffff" />
  </g>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#064e3b" stroke="#f59e0b" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fde68a" text-anchor="middle" letter-spacing="1">GOLDEN KINTSUGI SEAM</text>
  </g>
</svg>`,

  'midnight-skyrunner': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="canyonNight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090b" />
      <stop offset="50%" stop-color="#271a38" />
      <stop offset="100%" stop-color="#4c0519" />
    </linearGradient>
    <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fb7185" />
      <stop offset="50%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#canyonNight)" />

  <!-- Canyon Mesa Pillars Silhouette -->
  <polygon points="0,600 60,320 140,320 180,600" fill="#18181b" />
  <polygon points="420,600 460,260 550,260 600,600" fill="#18181b" />

  <!-- Lightning Bolt Flash in canyon -->
  <path d="M470 50 L450 140 L480 160 L440 260" stroke="#f43f5e" stroke-width="3" fill="none" opacity="0.8"/>
  <path d="M470 50 L450 140 L480 160 L440 260" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.9"/>

  <!-- High-Tech Aerodynamic Glider Wings (Representative Object) -->
  <g transform="translate(300, 270)">
    <!-- Ion Thruster Plumes -->
    <path d="M-15,30 L0,120 L15,30 Z" fill="#38bdf8" opacity="0.8" filter="blur(4px)"/>
    <path d="M-8,30 L0,90 L8,30 Z" fill="#ffffff" opacity="0.95"/>

    <!-- Wing Structure Left & Right -->
    <polygon points="0,-40 -160,20 -140,50 -20,10" fill="url(#wingGrad)" stroke="#fda4af" stroke-width="2"/>
    <polygon points="0,-40 160,20 140,50 20,10" fill="url(#wingGrad)" stroke="#fda4af" stroke-width="2"/>

    <!-- Wing Tip Neon Glow trails -->
    <circle cx="-160" cy="20" r="5" fill="#f43f5e" />
    <circle cx="160" cy="20" r="5" fill="#f43f5e" />
    <line x1="-160" y1="20" x2="-220" y2="100" stroke="#f43f5e" stroke-width="3" opacity="0.6"/>
    <line x1="160" y1="20" x2="220" y2="100" stroke="#f43f5e" stroke-width="3" opacity="0.6"/>

    <!-- Cockpit Core -->
    <ellipse cx="0" cy="-10" rx="14" ry="32" fill="#0f172a" stroke="#fb7185" stroke-width="2"/>
    <ellipse cx="0" cy="-15" rx="8" ry="16" fill="#38bdf8" />
  </g>

  <!-- Speed lines -->
  <line x1="100" y1="80" x2="180" y2="140" stroke="#f43f5e" stroke-width="2" opacity="0.4"/>
  <line x1="420" y1="90" x2="360" y2="140" stroke="#f43f5e" stroke-width="2" opacity="0.4"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#271a38" stroke="#f43f5e" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fecdd3" text-anchor="middle" letter-spacing="1">DAWN GLIDER WINGS</text>
  </g>
</svg>`,

  'descent-of-abyssal-vault': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="abyss" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="50%" stop-color="#042f2e" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
    <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#67e8f9" />
      <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#0891b2" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#abyss)" />

  <!-- Submerged Obsidian Temple Ruins -->
  <polygon points="80,520 80,360 140,360 140,520" fill="#0f172a" />
  <polygon points="460,520 460,340 520,340 520,520" fill="#0f172a" />
  <polygon points="60,360 300,280 540,360" fill="#0f172a" opacity="0.7"/>

  <!-- Giant Glowing Abyssal Phosphor Crystal (Representative Object) -->
  <circle cx="300" cy="270" r="160" fill="url(#crystalGlow)" />
  <g transform="translate(300, 270)">
    <!-- Crystal Facets -->
    <polygon points="0,-100 -55,-20 0,90 55,-20" fill="#22d3ee" stroke="#cffafe" stroke-width="2"/>
    <polygon points="0,-100 -20,-20 0,90" fill="#06b6d4" stroke="#cffafe" stroke-width="1.5"/>
    <polygon points="0,-100 20,-20 0,90" fill="#67e8f9" stroke="#cffafe" stroke-width="1.5"/>
    <polygon points="-55,-20 -20,-20 0,90" fill="#0891b2" />
    <polygon points="55,-20 20,-20 0,90" fill="#0e7490" />
    <circle cx="0" cy="-20" r="12" fill="#ffffff" filter="blur(6px)"/>
  </g>

  <!-- Deep Sea Bioluminescent Siphonophores -->
  <circle cx="160" cy="180" r="6" fill="#22d3ee" opacity="0.8"/>
  <path d="M160 186 Q150 220 165 240" stroke="#22d3ee" stroke-width="1.5" fill="none" opacity="0.6"/>
  <circle cx="440" cy="190" r="5" fill="#2dd4bf" opacity="0.7"/>
  <path d="M440 195 Q450 230 435 250" stroke="#2dd4bf" stroke-width="1.5" fill="none" opacity="0.5"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-115" y="-18" width="230" height="36" rx="18" fill="#042f2e" stroke="#22d3ee" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#a5f3fc" text-anchor="middle" letter-spacing="1">ABYSSAL PHOSPHOR CORE</text>
  </g>
</svg>`,

  'clockwork-locomotive-heist': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18181b" />
      <stop offset="50%" stop-color="#27272a" />
      <stop offset="100%" stop-color="#3f3f46" />
    </linearGradient>
    <linearGradient id="brassKey" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#854d0e" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />

  <!-- Speeding Locomotive Silhouette in Background -->
  <path d="M0 400 L600 400 L600 600 L0 600 Z" fill="#09090b" opacity="0.8"/>
  <rect x="80" y="340" width="260" height="70" rx="6" fill="#1c1917" />
  <circle cx="140" cy="410" r="30" fill="#292524" stroke="#78716c" stroke-width="3"/>
  <circle cx="220" cy="410" r="30" fill="#292524" stroke="#78716c" stroke-width="3"/>
  <circle cx="300" cy="410" r="30" fill="#292524" stroke="#78716c" stroke-width="3"/>
  <!-- Steam Cloud -->
  <circle cx="360" cy="300" r="50" fill="#52525b" opacity="0.4"/>
  <circle cx="430" cy="270" r="60" fill="#71717a" opacity="0.3"/>

  <!-- Clockwork Chrono-Key (The Distinct Representative Object) -->
  <g transform="translate(300, 240) rotate(-30)">
    <!-- Key Bow / Handle (Clockwork Gear) -->
    <circle cx="0" cy="-60" r="45" fill="none" stroke="url(#brassKey)" stroke-width="12"/>
    <!-- Gear teeth on bow -->
    <circle cx="0" cy="-60" r="28" fill="#10b981" stroke="#fde047" stroke-width="3"/>
    <text x="0" y="-55" font-family="system-ui" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">⚙</text>
    <!-- Key Shaft -->
    <rect x="-8" y="-15" width="16" height="150" rx="3" fill="url(#brassKey)" stroke="#ca8a04" stroke-width="1.5"/>
    <!-- Key Bit (Interlocking teeth) -->
    <rect x="8" y="70" width="35" height="12" rx="2" fill="url(#brassKey)" />
    <rect x="8" y="95" width="26" height="12" rx="2" fill="url(#brassKey)" />
    <rect x="8" y="115" width="40" height="14" rx="2" fill="url(#brassKey)" />
    <!-- Emerald Glow in center -->
    <circle cx="0" cy="-60" r="14" fill="#34d399" opacity="0.8" filter="blur(3px)"/>
  </g>

  <!-- Sparks Flying -->
  <circle cx="160" cy="420" r="3" fill="#fde047" />
  <circle cx="240" cy="430" r="2" fill="#f97316" />
  <circle cx="280" cy="415" r="3" fill="#fde047" />

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-110" y="-18" width="220" height="36" rx="18" fill="#18181b" stroke="#eab308" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fef08a" text-anchor="middle" letter-spacing="1">EMERALD CHRONO-KEY</text>
  </g>
</svg>`,

  'riders-of-the-solar-flare': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="deepSpace" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050510" />
      <stop offset="50%" stop-color="#180a2a" />
      <stop offset="100%" stop-color="#3b0764" />
    </linearGradient>
    <radialGradient id="solarCorona" cx="30%" cy="80%" r="70%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="30%" stop-color="#f59e0b" />
      <stop offset="70%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#3b0764" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#deepSpace)" />

  <!-- Blazing Solar Prominence Arcs -->
  <circle cx="200" cy="520" r="260" fill="url(#solarCorona)" opacity="0.85"/>
  <path d="M100 480 Q250 200 420 380" stroke="#fde047" stroke-width="16" fill="none" opacity="0.75" filter="blur(6px)"/>
  <path d="M100 480 Q250 200 420 380" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.9"/>

  <!-- The Solar Crest Board (The Representative Object) -->
  <g transform="translate(340, 240) rotate(-35)">
    <!-- Plasma Fin & Magnetic Wake -->
    <path d="M-60,0 L-180,30 L-140,5 Z" fill="#f43f5e" opacity="0.8" filter="blur(6px)"/>
    <path d="M-60,0 L-120,15 L-90,0 Z" fill="#fde047" opacity="0.9"/>

    <!-- High-Velocity Surf Skiff Board -->
    <path d="M-80,-15 Q0,-22 90,0 Q0,22 -80,15 Z" fill="#0f172a" stroke="#f59e0b" stroke-width="3"/>
    <!-- Solar Flare Fins -->
    <polygon points="30,-18 70,-45 50,-15" fill="#f59e0b" stroke="#fde047" stroke-width="1"/>
    <polygon points="30,18 70,45 50,15" fill="#f59e0b" stroke="#fde047" stroke-width="1"/>
    <!-- Center Core Deck -->
    <ellipse cx="0" cy="0" rx="30" ry="8" fill="#38bdf8" />
  </g>

  <!-- Stars in Void -->
  <circle cx="100" cy="100" r="2" fill="#ffffff" />
  <circle cx="480" cy="90" r="3" fill="#ffffff" />
  <circle cx="530" cy="180" r="2" fill="#ffffff" />

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#180a2a" stroke="#f59e0b" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fde047" text-anchor="middle" letter-spacing="1">SOLAR CREST BOARD</text>
  </g>
</svg>`,

  'weaver-of-falling-constellations': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f0c29" />
      <stop offset="50%" stop-color="#302b63" />
      <stop offset="100%" stop-color="#24243e" />
    </linearGradient>
    <linearGradient id="starWeft" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="50%" stop-color="#f472b6" />
      <stop offset="100%" stop-color="#60a5fa" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)" />

  <!-- Constellations in Deep Violet Sky -->
  <g stroke="#ffffff" stroke-width="1" opacity="0.5">
    <line x1="80" y1="80" x2="140" y2="120" />
    <line x1="140" y1="120" x2="220" y2="90" />
    <line x1="420" y1="70" x2="480" y2="130" />
    <line x1="480" y1="130" x2="520" y2="90" />
  </g>
  <circle cx="80" cy="80" r="3" fill="#ffffff" />
  <circle cx="140" cy="120" r="3.5" fill="#fbcfe8" />
  <circle cx="220" cy="90" r="3" fill="#ffffff" />
  <circle cx="420" cy="70" r="3" fill="#fbcfe8" />
  <circle cx="480" cy="130" r="4" fill="#ffffff" />

  <!-- The Celestial Stardust Loom (The Representative Object) -->
  <g transform="translate(300, 270)">
    <!-- Loom Frame -->
    <rect x="-110" y="-120" width="220" height="240" rx="8" fill="none" stroke="#e9d5ff" stroke-width="8" opacity="0.85"/>
    <rect x="-120" y="-130" width="240" height="18" fill="#c084fc" rx="4"/>
    <rect x="-120" y="112" width="240" height="18" fill="#c084fc" rx="4"/>

    <!-- Warp Strings (Vertical Starlight Filaments) -->
    <line x1="-80" y1="-115" x2="-80" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.7"/>
    <line x1="-50" y1="-115" x2="-50" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.85"/>
    <line x1="-20" y1="-115" x2="-20" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.95"/>
    <line x1="10" y1="-115" x2="10" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.95"/>
    <line x1="40" y1="-115" x2="40" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.85"/>
    <line x1="70" y1="-115" x2="70" y2="115" stroke="#ffffff" stroke-width="1.5" opacity="0.7"/>

    <!-- Woven Nebula Fabric in center -->
    <rect x="-90" y="-30" width="180" height="60" rx="4" fill="url(#starWeft)" opacity="0.7"/>

    <!-- Shuttle (Weaving Stardust) -->
    <polygon points="-70,-6 70,-6 85,0 70,6 -70,6 -85,0" fill="#fef08a" stroke="#d97706" stroke-width="2"/>
    <circle cx="0" cy="0" r="4" fill="#ffffff" />
  </g>

  <!-- Glowing Stardust Droplets -->
  <circle cx="240" cy="380" r="3" fill="#e9d5ff" filter="blur(1px)"/>
  <circle cx="360" cy="390" r="3.5" fill="#fbcfe8" filter="blur(1px)"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#302b63" stroke="#c084fc" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#f3e8ff" text-anchor="middle" letter-spacing="1">THE STARDUST LOOM</text>
  </g>
</svg>`,

  'tree-of-sleeping-dragons': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="enchantedForest" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#022c22" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <radialGradient id="dragonScale" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="70%" stop-color="#1d4ed8" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#enchantedForest)" />

  <!-- Twin Moons in canopy -->
  <circle cx="160" cy="110" r="40" fill="#fbcfe8" opacity="0.6"/>
  <circle cx="210" cy="90" r="26" fill="#c4b5fd" opacity="0.75"/>

  <!-- Ancient Bough with Emerald Moss -->
  <path d="M-20 380 Q180 340 340 370 T620 330 L620 460 L-20 460 Z" fill="#14532d" />
  <path d="M-20 380 Q180 340 340 370 T620 330" stroke="#4ade80" stroke-width="8" fill="none" opacity="0.6"/>

  <!-- Sleeping Sapphire Drake Curled (Representative Object) -->
  <g transform="translate(300, 310)">
    <!-- Drake Body Curled in a circle -->
    <path d="M0,0 C60,-40 80,40 20,50 C-40,60 -60,0 0,-30" fill="url(#dragonScale)" stroke="#93c5fd" stroke-width="2.5"/>
    <!-- Folded Tiny Wings with Azure Webbing -->
    <path d="M-5,-10 Q25,-60 40,-20 Q15,-10 -5,-10" fill="#3b82f6" stroke="#bfdbfe" stroke-width="1.5"/>
    <path d="M10,-10 Q45,-50 55,-15 Q25,-5 10,-10" fill="#2563eb" stroke="#bfdbfe" stroke-width="1.5" opacity="0.8"/>
    <!-- Cute Peaceful Snout & Closed Eye -->
    <ellipse cx="-25" cy="5" rx="14" ry="10" fill="#1e40af" />
    <path d="M-30,4 Q-25,8 -20,4" stroke="#bfdbfe" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Dragon Tail curled around body -->
    <path d="M35,35 Q10,75 -30,45" stroke="#1d4ed8" stroke-width="6" stroke-linecap="round" fill="none"/>
    <!-- Tiny puff of lavender sleep mist -->
    <circle cx="-42" cy="-4" r="5" fill="#e9d5ff" opacity="0.7"/>
    <circle cx="-54" cy="-14" r="8" fill="#e9d5ff" opacity="0.5"/>
  </g>

  <!-- Bioluminescent Forest Spores -->
  <circle cx="140" cy="260" r="3.5" fill="#86efac" opacity="0.8"/>
  <circle cx="460" cy="240" r="4" fill="#a7f3d0" opacity="0.8"/>
  <circle cx="390" cy="180" r="2.5" fill="#fbcfe8" opacity="0.9"/>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-110" y="-18" width="220" height="36" rx="18" fill="#022c22" stroke="#60a5fa" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#bfdbfe" text-anchor="middle" letter-spacing="1">SLEEPING SAPPHIRE DRAKE</text>
  </g>
</svg>`,

  'alchemists-whispering-glass': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="apothecary" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#2e1065" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <radialGradient id="memoryPhial" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#fde047" />
      <stop offset="70%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#4c1d95" stop-opacity="0.8" />
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#apothecary)" />

  <!-- Shelves of Glowing Vials Silhouette -->
  <rect x="60" y="100" width="480" height="12" fill="#3b0764" />
  <rect x="60" y="440" width="480" height="12" fill="#3b0764" />

  <!-- Floating Crystal Phial (The Representative Object) -->
  <g transform="translate(300, 270)">
    <!-- Phial Glow Aura -->
    <circle cx="0" cy="0" r="130" fill="#c084fc" opacity="0.2" filter="blur(25px)"/>

    <!-- Glass Sphere Body -->
    <circle cx="0" cy="15" r="95" fill="url(#memoryPhial)" stroke="#e9d5ff" stroke-width="3"/>

    <!-- Swirling Nebula Memory Inside -->
    <path d="M-50,20 Q0,-40 50,20 Q0,70 -50,20 Z" fill="#fef08a" opacity="0.6" filter="blur(4px)"/>

    <!-- Phial Neck & Brass Stopper -->
    <rect x="-24" y="-115" width="48" height="40" rx="4" fill="#6b21a8" stroke="#d8b4fe" stroke-width="2"/>
    <!-- Ornate Brass Cork -->
    <path d="M-30,-115 L30,-115 L20,-140 L-20,-140 Z" fill="#d97706" stroke="#fde047" stroke-width="2"/>
    <circle cx="0" cy="-145" r="8" fill="#f59e0b" />

    <!-- Glass Highlight Glare -->
    <path d="M-60,-40 A75,75 0 0,1 -20,-70" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- Spark Sprite Zephyr Flitting Nearby -->
  <circle cx="430" cy="190" r="8" fill="#f59e0b" filter="blur(2px)"/>
  <circle cx="430" cy="190" r="4" fill="#ffffff" />

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#2e1065" stroke="#c084fc" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#f3e8ff" text-anchor="middle" letter-spacing="1">MEMORY GLASS PHIAL</text>
  </g>
</svg>`,

  'isle-where-sirens-sing-peace': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="lagoonNight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#022c22" />
      <stop offset="50%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#115e59" />
    </linearGradient>
    <linearGradient id="pearlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#fbcfe8" />
      <stop offset="80%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#fdf4ff" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#lagoonNight)" />

  <!-- Bioluminescent Waves -->
  <path d="M0 400 Q150 370 300 410 T600 390 L600 600 L0 600 Z" fill="#042f2e" opacity="0.8"/>
  <path d="M0 450 Q200 420 400 460 T600 440" stroke="#2dd4bf" stroke-width="4" fill="none" opacity="0.7"/>

  <!-- Pearl-White Coral Arches in background -->
  <path d="M100 440 C100 240 220 240 220 440" stroke="#f0fdfa" stroke-width="18" fill="none" opacity="0.4"/>
  <path d="M380 440 C380 220 500 220 500 440" stroke="#f0fdfa" stroke-width="18" fill="none" opacity="0.4"/>

  <!-- Siren's Giant Moonlit Pearl Shell (The Representative Object) -->
  <g transform="translate(300, 290)">
    <!-- Giant Nacre Clamshell Bottom -->
    <path d="M-110,60 C-110,120 110,120 110,60 C110,30 -110,30 -110,60 Z" fill="#0d9488" stroke="#5eead4" stroke-width="2"/>
    <!-- Shell Ridges Top -->
    <path d="M-120,40 C-120,-70 120,-70 120,40 Q0,10 -120,40 Z" fill="#134e4a" stroke="#2dd4bf" stroke-width="2.5"/>
    <line x1="0" y1="20" x2="-90" y2="-30" stroke="#5eead4" stroke-width="2" opacity="0.7"/>
    <line x1="0" y1="20" x2="-40" y2="-60" stroke="#5eead4" stroke-width="2" opacity="0.7"/>
    <line x1="0" y1="20" x2="0" y2="-70" stroke="#5eead4" stroke-width="2" opacity="0.7"/>
    <line x1="0" y1="20" x2="40" y2="-60" stroke="#5eead4" stroke-width="2" opacity="0.7"/>
    <line x1="0" y1="20" x2="90" y2="-30" stroke="#5eead4" stroke-width="2" opacity="0.7"/>

    <!-- Radiant Siren Pearl nestled in center -->
    <circle cx="0" cy="20" r="42" fill="url(#pearlGrad)" stroke="#fdf4ff" stroke-width="2"/>
    <circle cx="-12" cy="10" r="10" fill="#ffffff" opacity="0.9"/>
    <!-- Shimmer Aura -->
    <circle cx="0" cy="20" r="65" fill="#fdf4ff" opacity="0.15" filter="blur(15px)"/>
  </g>

  <!-- Representative Emblem Badge -->
  <g transform="translate(300, 520)">
    <rect x="-105" y="-18" width="210" height="36" rx="18" fill="#042f2e" stroke="#2dd4bf" stroke-width="1.5" opacity="0.95"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ccfbf1" text-anchor="middle" letter-spacing="1">SIREN MOONLIT PEARL</text>
  </g>
</svg>`
};

for (const [key, content] of Object.entries(svgs)) {
  const filePath = path.join(dir, key + '.svg');
  fs.writeFileSync(filePath, content.trim(), 'utf8');
}

console.log('Successfully generated all 16 story SVGs with representative emblems!');
