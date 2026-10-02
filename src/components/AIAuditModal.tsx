import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight, CheckCircle2, Shield, Cpu, Compass, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AIAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DIMENSIONS = [
  { name: 'Delegation', desc: 'Labor Architecture', icon: Cpu },
  { name: 'Description', desc: 'Context Engineering', icon: Compass },
  { name: 'Discernment', desc: 'The Human Defense', icon: Shield },
  { name: 'Diligence', desc: 'Accountability & IP', icon: Lock },
];

export default function AIAuditModal({ isOpen, onClose }: AIAuditModalProps) {
  const navigate = useNavigate();
  const [isRevealed, setIsRevealed] = useState(false);
  const [showStatusNotice, setShowStatusNotice] = useState(false);

  const handleClose = () => {
    sessionStorage.setItem('cmf_ai_audit_dismissed', 'true');
    onClose();
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCardCta = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
    navigate('/ai-audit');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={handleClose}
        >
          {/* Main Container */}
          <div
            className="relative w-full max-w-[440px] sm:max-w-[480px] my-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (Floating above envelope) */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/[0.08] hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-colors z-50 cursor-pointer"
              aria-label="Close Invitation"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ── Ambient Volumetric Backlight (Mimicking reference glowing glow) ── */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-b from-[#FF5722]/50 via-[#FF9800]/30 to-transparent blur-[85px] pointer-events-none -z-10" />

            {/* Floating Spark Dust Particles */}
            <div className="absolute top-8 left-6 w-1.5 h-1.5 rounded-full bg-amber-300/80 blur-[0.5px] animate-pulse" />
            <div className="absolute top-16 right-8 w-1 h-1 rounded-full bg-orange-300/70 blur-[0.5px] animate-ping" />
            <div className="absolute top-32 left-10 w-2 h-2 rounded-full bg-yellow-200/50 blur-[1px] animate-pulse" />

            {/* Envelope Back Flap (Interior Dark Liner) */}
            <div className="w-[90%] sm:w-[92%] h-40 bg-[#0F0F14] rounded-t-3xl border-t border-x border-white/10 shadow-2xl relative -mb-28 z-0">
              {/* Back Flap Triangular Peak */}
              <div 
                className="absolute inset-x-0 -top-8 h-12 bg-[#0B0B10] border-t border-white/[0.08] shadow-inner"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                THE GLOWING RISING CARD (Freestyled with CMF & AI Audit copy)
                ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ y: 90, scale: 0.94, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 60, scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative z-10 w-[92%] sm:w-[94%] rounded-3xl p-6 sm:p-7 text-center shadow-[0_25px_70px_rgba(234,88,12,0.5),0_0_50px_rgba(255,152,0,0.3)] overflow-hidden cursor-default transition-all"
              style={{
                background: 'linear-gradient(155deg, #FF6A00 0%, #EA580C 30%, #F59E0B 75%, #EAB308 100%)',
              }}
            >
              {/* Delicate Corner Photo-Mount Brackets (matching reference) */}
              <span className="absolute top-3.5 left-4 text-white/50 font-mono text-sm leading-none select-none">⌜</span>
              <span className="absolute top-3.5 right-4 text-white/50 font-mono text-sm leading-none select-none">⌝</span>
              <span className="absolute bottom-3.5 left-4 text-white/50 font-mono text-sm leading-none select-none">⌞</span>
              <span className="absolute bottom-3.5 right-4 text-white/50 font-mono text-sm leading-none select-none">⌟</span>

              {/* Inner Card Subtle Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 pointer-events-none" />

              {/* Top Brand Tag */}
              <div className="relative z-10 flex items-center justify-center gap-1.5 text-white/95 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                <span>Creative Minds' Forum</span>
              </div>

              {/* Headline (Freestyled matching the reference tone) */}
              <h3 className="relative z-10 text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                The wait is over.<br />
                <span className="text-yellow-100 font-extrabold">Your 4D AI Audit is here.</span>
              </h3>

              {/* Subtext Body */}
              <p className="relative z-10 mt-3 text-xs sm:text-sm text-white/95 font-light leading-relaxed max-w-xs mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                Discover your vulnerability to the creative gig economy. Answer 20 questions to find out if you are a <strong className="font-semibold text-white">Commodity Laborer</strong> or a <strong className="font-semibold text-white">Systems Architect</strong>.
              </p>

              {/* 4D Mini-Pill Badges */}
              <div className="relative z-10 mt-4 flex items-center justify-center gap-1.5 flex-wrap">
                {DIMENSIONS.map((dim) => (
                  <span
                    key={dim.name}
                    className="px-2.5 py-0.5 rounded-full bg-black/25 backdrop-blur-xs border border-white/25 text-[10px] font-mono text-white/95 shadow-xs"
                  >
                    {dim.name}
                  </span>
                ))}
              </div>

              {/* Expandable Framework Drawer (No redirect) */}
              <AnimatePresence>
                {isRevealed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 mt-3.5 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-left space-y-1.5 text-[11px] text-white overflow-hidden"
                  >
                    <div className="font-mono text-[10px] text-yellow-200 font-bold uppercase tracking-wider mb-1">
                      The 4 Pillars of AI Fluency:
                    </div>
                    {DIMENSIONS.map((d, i) => (
                      <div key={d.name} className="flex items-center justify-between">
                        <span className="font-semibold text-white">0{i+1}. {d.name}</span>
                        <span className="text-yellow-200/90 text-[10px] font-mono">{d.desc}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── CTA Button on the Glowing Card (Strictly NO REDIRECT) ── */}
              <div className="relative z-10 mt-5 flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleCardCta}
                  className="w-full py-3.5 px-6 rounded-2xl bg-black/90 hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.65)] active:scale-95 flex items-center justify-center gap-2 group cursor-pointer border border-white/25 hover:border-white/40"
                >
                  <span>{isRevealed ? 'Hide Framework' : 'Claim Your Diagnosis'}</span>
                  <ArrowRight className="w-4 h-4 text-yellow-300 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Status Notice Indicator */}
                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-mono text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>
                    {showStatusNotice 
                      ? 'Preview active • Official diagnostic launch arriving shortly' 
                      : '20 Questions • 3 Minutes • Interactive Preview'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════
                FRONT ENVELOPE POUCH (Geometric folds with realistic shadows)
                ═══════════════════════════════════════════════════════════════ */}
            <div className="relative z-20 w-full -mt-24 sm:-mt-28 pointer-events-none">
              <svg
                viewBox="0 0 460 270"
                className="w-full h-auto drop-shadow-[0_-20px_40px_rgba(0,0,0,0.95)]"
              >
                <defs>
                  {/* Left flap shadow gradient */}
                  <linearGradient id="envelopeFlapLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22222B" />
                    <stop offset="50%" stopColor="#17171F" />
                    <stop offset="100%" stopColor="#0E0E14" />
                  </linearGradient>

                  {/* Right flap shadow gradient */}
                  <linearGradient id="envelopeFlapRight" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E1E26" />
                    <stop offset="50%" stopColor="#14141B" />
                    <stop offset="100%" stopColor="#0A0A0F" />
                  </linearGradient>

                  {/* Bottom triangle gradient */}
                  <linearGradient id="envelopeFlapBottom" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#16161D" />
                    <stop offset="60%" stopColor="#101015" />
                    <stop offset="100%" stopColor="#0A0A0E" />
                  </linearGradient>
                </defs>

                {/* Base Envelope Rectangle */}
                <rect x="0" y="45" width="460" height="225" rx="20" fill="#0C0C12" />

                {/* Left Triangle Flap */}
                <polygon
                  points="0,45 230,175 0,270"
                  fill="url(#envelopeFlapLeft)"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />

                {/* Right Triangle Flap */}
                <polygon
                  points="460,45 230,175 460,270"
                  fill="url(#envelopeFlapRight)"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />

                {/* Bottom Triangle Flap */}
                <polygon
                  points="0,270 230,145 460,270"
                  fill="url(#envelopeFlapBottom)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />

                {/* Envelope V-Opening Glow Highlight */}
                <polyline
                  points="0,45 230,150 460,45"
                  fill="none"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Bottom Dismiss Text */}
            <div className="mt-2 text-center">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer font-medium underline underline-offset-4"
              >
                Continue to website →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
