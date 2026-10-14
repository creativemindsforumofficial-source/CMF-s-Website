import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/CMF-Hero-1.jpg');

  return (
    <section className="relative w-full overflow-hidden bg-[#0E171D] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 flex flex-col items-center justify-center">
      {/* ── CMF Hero Image Background Overlay (Dark Theme for Maximum Yellow Pop) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={imgSrc}
          onError={() => setImgSrc('/CMF-Hero-1.jpg')}
          alt="Creative Minds' Forum Community"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-35 filter contrast-125 brightness-90 saturate-110"
        />
        {/* Deep rich dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E171D]/90 via-[#0E171D]/80 to-[#0E171D]" />

        {/* Radiant subtle yellow glow at center to make text pop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(255,204,0,0.10),transparent_70%)] pointer-events-none" />

        {/* Subtle grid dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* ── Central Hero Content Container ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
        
        {/* Clean Pill Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">
              Creative Minds' Forum
            </span>
          </div>
        </motion.div>

        {/* Central Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-4xl"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-[4rem] lg:text-[4.75rem] font-extrabold tracking-tight text-white leading-[1.08] sm:leading-[1.04] text-balance">
            Your Ideas Will <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] drop-shadow-[0_2px_16px_rgba(255,204,0,0.35)]">
              Change the World.
            </span>
            <br />
            <span className="text-white/95">Start Building.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-tight max-w-2xl leading-relaxed text-balance px-2">
            The global stage and pipeline for visionary writers, spoken word artists, cinematic storytellers, and vanguard tech-creatives.
          </p>

          {/* Social Proof Creators Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.45 }}
            className="flex items-center gap-2.5 sm:gap-3 mt-1 px-3.5 py-1.5 rounded-full bg-[#16232B]/85 border border-white/15 shadow-sm backdrop-blur-md"
          >
            <div className="flex -space-x-2">
              <img
                src="/Arise.jpg"
                alt="Community Creator"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#16232B] object-cover shadow-xs"
              />
              <img
                src="/Doris.jpg"
                alt="Community Creator"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#16232B] object-cover shadow-xs"
              />
              <img
                src="/Gideon.jpg"
                alt="Community Creator"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#16232B] object-cover shadow-xs"
              />
              <img
                src="/RAD.jpg"
                alt="Community Creator"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#16232B] object-cover shadow-xs"
              />
            </div>
            <span className="text-xs sm:text-sm text-zinc-300 font-medium">
              <strong className="text-white font-bold">1,000+</strong> visionary creators worldwide
            </span>
          </motion.div>

          {/* Primary CTA Buttons with Yellow Gradient Pop */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55 }}
            className="pt-3 sm:pt-4 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none"
          >
            {/* Primary Yellow Gradient Button */}
            <Link
              to="/join"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:px-9 sm:py-3.5 font-bold text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 rounded-full shadow-[0_8px_25px_-4px_rgba(255,204,0,0.45)] hover:shadow-[0_12px_32px_-4px_rgba(255,204,0,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base tracking-tight cursor-pointer"
            >
              <span>Become a part of us</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Secondary Glass Dark Button */}
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-7 py-3.5 sm:px-8 sm:py-3.5 font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#FFCC00]/50 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base cursor-pointer backdrop-blur-sm"
            >
              <span>Our Story & Mission</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <span className="text-xs text-zinc-400 font-medium tracking-normal mt-1">
            Free to join • All creative disciplines welcome • Non-profit movement
          </span>
        </motion.div>
      </div>

      {/* ── Crystal-Clear Community Showcase Card (Full-Clarity View Under Hero Section) ── */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 relative z-10"
      >
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#16232B]/90 p-2 sm:p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden group bg-zinc-900">
            <img
              src={imgSrc}
              onError={() => setImgSrc('/CMF-Hero-1.jpg')}
              alt="Creative Minds' Forum Community Gathering"
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />
            
            {/* Cinematic subtle gradient scrim at bottom for caption clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Live Caption overlay on the crystal-clear photo */}
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2.5">
              <div className="flex flex-col items-start gap-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
                  <span>CMF Community In Action</span>
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg font-bold tracking-tight drop-shadow-md text-balance">
                  Uniting visionary creators, writers, and vanguard innovators worldwide
                </p>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#FFCC00]" />
                <span>Live Gathering • Landmark Edition</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Subtle Divider Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/10" />
    </section>
  );
}
