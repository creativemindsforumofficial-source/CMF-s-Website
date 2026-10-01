import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'motion/react';
import NeuralWeb from './NeuralWeb';

// ── Social Platform Chiclets Data ───────────────────────────────────────
// ── Social Platform Icons (Cinematic Floating Emblems) ─────────────────
const SOCIALS = [
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#FF0000"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        />
        <polygon fill="#FFFFFF" points="9.5,8.4 15.8,12 9.5,15.6" />
      </svg>
    ),
    glow: 'rgba(255, 0, 0, 0.65)',
    tilt: -18,
    offsetX: '-155px',
    offsetY: '18px',
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
        <path
          fill="#00F2EA"
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
          transform="translate(-1.5, -0.5)"
          opacity="0.9"
        />
        <path
          fill="#FE2C55"
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
          transform="translate(1.5, 0.5)"
          opacity="0.9"
        />
        <path
          fill="#FFFFFF"
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        />
      </svg>
    ),
    glow: 'rgba(0, 242, 234, 0.65)',
    tilt: 22,
    offsetX: '-75px',
    offsetY: '-10px',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
        <defs>
          <linearGradient id="instaCinematicGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="25%" stopColor="#fd5949" />
            <stop offset="50%" stopColor="#d6249f" />
            <stop offset="75%" stopColor="#833ab4" />
            <stop offset="100%" stopColor="#285aeb" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaCinematicGrad)" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="15.8" cy="8.2" r="1" fill="#FFFFFF" />
      </svg>
    ),
    glow: 'rgba(214, 36, 159, 0.65)',
    tilt: -12,
    offsetX: '0px',
    offsetY: '14px',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="24" height="24" rx="5.5" fill="#0A66C2" />
        <path
          fill="#FFFFFF"
          d="M19 19h-3v-4.7c0-1.1-.4-1.9-1.4-1.9-.8 0-1.3.5-1.5 1.1-.1.2-.1.5-.1.8V19h-3V9.5h3V11c.4-.7 1.3-1.7 3-1.7 2.2 0 3 1.5 3 4.2V19zM6.5 8.2c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zM5 19h3V9.5H5V19z"
        />
      </svg>
    ),
    glow: 'rgba(10, 102, 194, 0.65)',
    tilt: 25,
    offsetX: '75px',
    offsetY: '-8px',
  },
  {
    name: 'X',
    href: 'https://x.com/official_cmfglobal',
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
        <path
          fill="#FFFFFF"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
    glow: 'rgba(255, 255, 255, 0.55)',
    tilt: -22,
    offsetX: '155px',
    offsetY: '16px',
  },
];

export default function Hero() {
  const [isLowPower, setIsLowPower] = useState(false);
  const [mobileTab, setMobileTab] = useState<'studio' | 'schedule'>('studio');

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isLowCores = (navigator.hardwareConcurrency || 4) < 4;
      setIsLowPower(isMobile || prefersReducedMotion || isLowCores);
    };
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-x-clip pt-24 pb-16 sm:pt-28 sm:pb-20 select-none">
      {/* ── 3D Canvas / Background ── */}
      <div className="absolute inset-0 z-0 bg-[var(--color-cmf-black)] pointer-events-none">
        {!isLowPower ? (
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.5} />
            <NeuralWeb />
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cmf-black)] via-[#2a1c00] to-[#3a2600] opacity-80" />
        )}

        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[900px] h-[340px] sm:h-[450px] lg:h-[600px] bg-[radial-gradient(circle,rgba(255,204,0,0.09)_0%,rgba(138,43,226,0.05)_40%,transparent_70%)] pointer-events-none" />

        {/* Dotted Constellation Pattern (matching reference) */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
          }}
        />

        {/* Soft vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmf-black)] via-transparent to-[var(--color-cmf-black)]/70 pointer-events-none" />
      </div>

      {/* ── SVG Radiating Perspective Guide Lines (Desktop Constellation) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden xl:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradLeft" x1="50%" y1="20%" x2="10%" y2="8%">
              <stop offset="0%" stopColor="rgba(255,204,0,0.4)" />
              <stop offset="100%" stopColor="rgba(255,204,0,0.02)" />
            </linearGradient>
            <linearGradient id="lineGradRight" x1="50%" y1="20%" x2="90%" y2="8%">
              <stop offset="0%" stopColor="rgba(255,204,0,0.4)" />
              <stop offset="100%" stopColor="rgba(255,204,0,0.02)" />
            </linearGradient>
          </defs>
          <line x1="50%" y1="18%" x2="14%" y2="12%" stroke="url(#lineGradLeft)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6" />
          <line x1="50%" y1="18%" x2="20%" y2="28%" stroke="url(#lineGradLeft)" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
          <line x1="50%" y1="18%" x2="86%" y2="12%" stroke="url(#lineGradRight)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6" />
          <line x1="50%" y1="18%" x2="80%" y2="28%" stroke="url(#lineGradRight)" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP FLOATING CARDS CONSTELLATION (xl+ screens)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden max-w-[1700px] mx-auto hidden xl:block">

        {/* ── TOP-LEFT: Floating Pill Node 1 (Literary Arts) ── */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute top-[10%] left-[4%] 2xl:left-[7%] pointer-events-auto flex items-center gap-3 bg-[#131316]/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-[var(--color-cmf-gold)]/40 transition-colors cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[var(--color-cmf-gold)]/10 border border-[var(--color-cmf-gold)]/30 flex items-center justify-center text-[var(--color-cmf-gold)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide group-hover:text-[var(--color-cmf-gold)] transition-colors">Literary Arts</span>
            <span className="text-[10px] text-gray-400 font-mono">Anthologies & Poetry</span>
          </div>
        </motion.div>

        {/* ── TOP-LEFT: Floating Mini Card 2 (Spoken Word Audio Badge) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          }}
          className="absolute top-[24%] left-[2%] 2xl:left-[4%] pointer-events-auto flex items-center gap-2.5 bg-[#141418]/90 backdrop-blur-xl border border-white/10 p-2.5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.7)] hover:border-amber-400/40 transition-colors cursor-pointer"
        >
          <img src="/Arise.jpg" alt="Author" className="w-10 h-10 rounded-xl object-cover border border-white/15" />
          <div className="pr-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-medium text-gray-200">Spoken Word</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1 h-3 bg-[var(--color-cmf-gold)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-4 bg-[var(--color-cmf-gold)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-2 bg-[var(--color-cmf-gold)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="w-1 h-5 bg-[var(--color-cmf-gold)] rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
              <span className="text-[10px] font-mono text-gray-400 ml-1">02:45</span>
            </div>
          </div>
        </motion.div>

        {/* ── TOP-RIGHT: Floating Pill Node 1 (Cinematic Media) ── */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          }}
          className="absolute top-[10%] right-[4%] 2xl:right-[7%] pointer-events-auto flex items-center gap-3 bg-[#131316]/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-purple-400/40 transition-colors cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors">Cinematic Media</span>
            <span className="text-[10px] text-gray-400 font-mono">Film & Narrative Visuals</span>
          </div>
        </motion.div>

        {/* ── TOP-RIGHT: Floating Mini Card 2 (Vanguard AI & Tech) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            y: { duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
          }}
          className="absolute top-[24%] right-[2%] 2xl:right-[4%] pointer-events-auto flex items-center gap-2.5 bg-[#141418]/90 backdrop-blur-xl border border-white/10 p-2.5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.7)] hover:border-cyan-400/40 transition-colors cursor-pointer"
        >
          <img src="/RAD.jpg" alt="Vanguard Lead" className="w-10 h-10 rounded-xl object-cover border border-white/15" />
          <div className="pr-2 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-medium text-gray-200">Vanguard AI</span>
            </div>
            <span className="text-[10px] text-cyan-300/80">pipeline.build()</span>
          </div>
        </motion.div>

        {/* ── BOTTOM-LEFT: Large Layered Mockup Cards ── */}
        <div className="absolute bottom-[2%] left-[-1%] 2xl:left-[2%] pointer-events-auto">
          {/* Back Card: Studio Window */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, rotate: -2, transition: { duration: 0.3 } }}
            className="relative w-[370px] 2xl:w-[410px] bg-[#111114]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
            style={{ transformOrigin: 'bottom left' }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Studio • Anthology</span>
              <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-md font-mono">v3.4</span>
            </div>

            <div className="mt-3 relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video flex items-center justify-center group/preview">
              <img src="/audacity_flyer.png" alt="Showcase" className="w-full h-full object-cover opacity-60 group-hover/preview:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover/preview:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-white drop-shadow">Audacity '26 Reel</span>
                <span className="font-mono text-[10px] text-gray-300">01:48 / 03:20</span>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center gap-3">
              <button className="w-7 h-7 rounded-lg bg-[var(--color-cmf-gold)] text-black flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
              <div className="flex-1 flex items-center gap-1 h-5">
                {[40, 65, 30, 85, 95, 50, 70, 45, 90, 100, 60, 40, 75, 80, 55, 35, 70, 90, 65, 45, 80, 50].map((h, idx) => (
                  <span
                    key={idx}
                    className="flex-1 rounded-full transition-all"
                    style={{
                      height: `${h}%`,
                      backgroundColor: idx < 10 ? 'var(--color-cmf-gold)' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-[var(--color-cmf-gold)] shrink-0">48kHz</span>
            </div>
          </motion.div>

          {/* Front Overlapping Card: Verses Modal */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, y: -4, rotate: -4, transition: { duration: 0.3 } }}
            className="absolute -bottom-4 left-6 2xl:left-12 w-[320px] 2xl:w-[350px] bg-[#18181d] border border-white/20 rounded-3xl p-4 shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_25px_rgba(255,204,0,0.1)] cursor-pointer"
            style={{ transform: 'rotate(-5deg)' }}
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-white border-b-2 border-[var(--color-cmf-gold)] pb-1">Verses</span>
                <span className="text-xs text-gray-400 pb-1 hover:text-white transition-colors">Style & Cadence</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-cmf-gold)]/15 text-[var(--color-cmf-gold)] font-mono font-medium">PACE: 98/100</span>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-black/50 border border-white/[0.08]">
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
                <span className="text-[var(--color-cmf-gold)]">00:00:07:000 - 00:00:12:000</span>
                <span>Active</span>
              </div>
              <p className="text-xs text-gray-200 font-serif italic leading-relaxed">
                "From silence, our voices build cathedrals the world cannot ignore."
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM-RIGHT: Large Layered Mockup Cards ── */}
        <div className="absolute bottom-[2%] right-[-1%] 2xl:right-[2%] pointer-events-auto">
          {/* Back Card: Schedule Window */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, rotate: 2, transition: { duration: 0.3 } }}
            className="relative w-[380px] 2xl:w-[420px] bg-[#111114]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Audacity '26 • Schedule</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md font-mono flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                Live
              </span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="text-[10px] text-gray-400 font-mono">Jun 19</div>
                <div className="text-white font-bold mt-0.5">Prep Day</div>
              </div>
              <div className="p-2 rounded-xl bg-[var(--color-cmf-gold)]/15 border border-[var(--color-cmf-gold)]/40 text-[var(--color-cmf-gold)]">
                <div className="text-[10px] font-mono">Jun 20</div>
                <div className="font-bold mt-0.5">Keynote</div>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="text-[10px] text-gray-400 font-mono">Jun 21</div>
                <div className="text-white font-bold mt-0.5">Symposium</div>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src="/Arise.jpg" alt="Speaker" className="w-8 h-8 rounded-lg object-cover border border-white/20" />
                  <div>
                    <div className="text-xs font-semibold text-gray-200">The Architecture of Vision</div>
                    <div className="text-[10px] text-gray-400">10:00 AM • Main Stage</div>
                  </div>
                </div>
                <span className="text-[10px] text-[var(--color-cmf-gold)] font-mono">Hall A</span>
              </div>
            </div>
          </motion.div>

          {/* Front Overlapping Card */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, y: -4, rotate: -2, transition: { duration: 0.3 } }}
            className="absolute -top-12 -left-8 2xl:-left-12 w-[280px] 2xl:w-[310px] bg-[#18181d] border border-white/20 rounded-3xl p-3.5 shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_25px_rgba(138,43,226,0.1)] cursor-pointer"
            style={{ transform: 'rotate(-4deg)' }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] relative">
              <img src="/Gideon.jpg" alt="Featured Work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-sm border border-white/15">
                Curated Showcase
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400 text-[10px]">Track:</span>
                <span className="font-semibold text-white">Cinematic Poetry</span>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="text-emerald-400 font-semibold">94 Score</span>
              <span>2.8k Reads</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CENTRAL CORE CONTENT (Fully Responsive: Mobile to 4K)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

        {/* ── Top Micro-Pill Marquee on Mobile / Tablet ── */}
        <div className="flex xl:hidden items-center justify-center gap-2 mb-6 flex-wrap px-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-medium text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cmf-gold)]" />
            Literary Arts
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-medium text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Cinematic Media
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-medium text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Vanguard AI
          </span>
        </div>

        {/* Central Logo Node with Concentric Dashed Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-5 sm:mb-6"
        >
          {/* Subtle concentric rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] sm:w-[180px] h-[130px] sm:h-[180px] rounded-full border border-dashed border-white/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full border border-dashed border-white/[0.04] pointer-events-none" />

          {/* Central Logo Box */}
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(255,204,0,0.2),0_8px_20px_rgba(0,0,0,0.8)] border border-white/80 flex items-center justify-center overflow-hidden">
            <img src="/cmf_logo.jpg" alt="Creative Minds' Forum" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Central Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 sm:gap-5 w-full"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-white drop-shadow-2xl leading-[1.12] sm:leading-[1.08] max-w-3xl px-2">
            Your Ideas Will <br />
            <span className="text-white">Change the World.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cmf-gold)] via-[#FFE066] to-[var(--color-cmf-accent)]">
              Start Building.
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide max-w-2xl leading-relaxed text-balance px-4 sm:px-0">
            The global stage and pipeline for visionary writers, spoken word artists, cinematic storytellers, and vanguard tech-creatives.
          </p>

          {/* Overlapping Contributor Avatars / Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3 mt-1"
          >
            <div className="flex -space-x-2 sm:-space-x-2.5">
              <img src="/Arise.jpg" alt="Member" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black object-cover shadow-md" />
              <img src="/Doris.jpg" alt="Member" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black object-cover shadow-md" />
              <img src="/Gideon.jpg" alt="Member" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black object-cover shadow-md" />
              <img src="/RAD.jpg" alt="Member" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black object-cover shadow-md" />
            </div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              <strong className="text-white font-semibold">1,000+</strong> creators worldwide
            </span>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="pt-2 sm:pt-3 w-full flex flex-col items-center gap-2.5"
          >
            <a
              href="/audacity"
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto max-w-xs sm:max-w-none px-6 py-4 sm:px-11 sm:py-5 font-bold text-black transition-all duration-300 bg-[var(--color-cmf-gold)] hover:bg-[#FFE066] rounded-2xl overflow-hidden shadow-[0_12px_35px_rgba(255,204,0,0.35)] hover:shadow-[0_15px_45px_rgba(255,204,0,0.5)] active:scale-95 text-xs sm:text-sm md:text-base tracking-wider uppercase"
            >
              <span>Join the Movement — Audacity '26</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <span className="text-[11px] text-gray-400 font-light tracking-wide">
              Free to join • All creative disciplines welcome
            </span>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════
            CINEMATIC FLOATING SOCIAL ICONS (Mobile-Adaptive Responsive Arc)
            ═══════════════════════════════════════════════════════════════════ */}
        {/* Desktop / Tablet Arc Layout */}
        <div className="relative mt-8 sm:mt-12 h-20 sm:h-24 w-full hidden sm:flex items-center justify-center">
          {SOCIALS.map((social, i) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 30, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute"
              style={{
                left: `calc(50% + ${social.offsetX})`,
                top: social.offsetY,
                transform: `translateX(-50%) rotate(${social.tilt}deg)`,
              }}
            >
              <motion.a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{
                  y: -12,
                  scale: 1.28,
                  rotate: 0,
                  transition: { duration: 0.28, ease: [0.34, 1.56, 0.64, 1] },
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2 + i * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex items-center justify-center p-3 cursor-pointer group/icon"
                style={{
                  filter: `drop-shadow(0 10px 22px ${social.glow})`,
                }}
                aria-label={social.name}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-30 group-hover/icon:opacity-90 blur-xl transition-opacity duration-300 pointer-events-none scale-150"
                  style={{ backgroundColor: social.glow }}
                />
                <span className="relative z-10 transition-transform duration-300 group-hover/icon:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {social.icon}
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Dedicated Arc (Screens < 640px: Perfectly spaced, non-overflowing) */}
        <div className="flex sm:hidden items-center justify-between w-full max-w-[320px] px-3 mt-8 mb-2">
          {SOCIALS.map((social, i) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
              style={{ transform: `rotate(${social.tilt}deg)` }}
            >
              <motion.a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileTap={{ scale: 0.88 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex items-center justify-center p-2 cursor-pointer active:scale-90"
                style={{
                  filter: `drop-shadow(0 6px 14px ${social.glow})`,
                }}
                aria-label={social.name}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-25 blur-lg pointer-events-none scale-125"
                  style={{ backgroundColor: social.glow }}
                />
                <span className="relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {social.icon}
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE/TABLET INTERACTIVE ECOSYSTEM PREVIEW (Screens < 1280px)
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="xl:hidden w-full max-w-md mt-10 px-2 flex flex-col items-center">
          {/* Mobile Tab Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-white/[0.06] border border-white/10 mb-4 w-full max-w-[280px]">
            <button
              onClick={() => setMobileTab('studio')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${mobileTab === 'studio'
                  ? 'bg-[var(--color-cmf-gold)] text-black shadow'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Creative Studio
            </button>
            <button
              onClick={() => setMobileTab('schedule')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${mobileTab === 'schedule'
                  ? 'bg-[var(--color-cmf-gold)] text-black shadow'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Audacity '26
            </button>
          </div>

          {/* Tab 1: Studio & Audio Preview */}
          {mobileTab === 'studio' ? (
            <motion.div
              key="studio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-[#121216]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  <span className="text-[10px] font-mono text-gray-400 ml-1.5">Poetry & Cadence</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--color-cmf-gold)]/15 text-[var(--color-cmf-gold)] font-mono">
                  PACE: 98/100
                </span>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-black/50 border border-white/[0.08]">
                <div className="text-[10px] font-mono text-[var(--color-cmf-gold)] mb-1">
                  00:00:07 - 00:00:12 • Live Audio
                </div>
                <p className="text-xs text-gray-200 font-serif italic leading-relaxed">
                  "From silence, our voices build cathedrals the world cannot ignore."
                </p>
              </div>

              {/* Mobile Waveform */}
              <div className="mt-2.5 p-2 rounded-lg bg-black/30 border border-white/[0.05] flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[var(--color-cmf-gold)] text-black flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                <div className="flex-1 flex items-center gap-1 h-3.5">
                  {[40, 70, 35, 90, 60, 45, 80, 100, 65, 40, 85, 50, 75, 40, 60].map((h, idx) => (
                    <span
                      key={idx}
                      className="flex-1 rounded-full"
                      style={{
                        height: `${h}%`,
                        backgroundColor: idx < 6 ? 'var(--color-cmf-gold)' : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-gray-400">48kHz</span>
              </div>
            </motion.div>
          ) : (
            /* Tab 2: Schedule Line Item */
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-[#121216]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <span className="text-[11px] font-semibold text-white">Audacity '26 Schedule</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                  Live June 20
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src="/Arise.jpg" alt="Speaker" className="w-8 h-8 rounded-lg object-cover border border-white/20" />
                    <div>
                      <div className="text-xs font-semibold text-gray-200">The Architecture of Vision</div>
                      <div className="text-[10px] text-gray-400">10:00 AM • Main Stage</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--color-cmf-gold)] font-mono">Hall A</span>
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src="/Doris.jpg" alt="Speaker" className="w-8 h-8 rounded-lg object-cover border border-white/20" />
                    <div>
                      <div className="text-xs font-semibold text-gray-200">Literary & Spoken Word</div>
                      <div className="text-[10px] text-gray-400">11:30 AM • Masterclass</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-purple-400 font-mono">Hall B</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
