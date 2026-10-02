import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AnnouncementBannerProps {
  onOpenModal: () => void;
}

export default function AnnouncementBanner({ onOpenModal }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="w-full bg-[#0A0A10]/95 backdrop-blur-md border-b border-orange-500/25 relative z-50 text-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 max-w-7xl mx-auto text-xs sm:text-sm">
          
          {/* Left / Center: Announcement Content */}
          <div className="flex-1 flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 flex-wrap sm:flex-nowrap">
            {/* Pill Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/35 text-orange-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              4D AI Audit
            </span>

            {/* Desktop Headline */}
            <p className="hidden md:inline text-gray-300 font-light truncate">
              Are you a <strong className="text-white font-semibold">Commodity Laborer</strong> or a <strong className="text-[var(--color-cmf-gold)] font-semibold">Systems Architect</strong>? Discover your vulnerability to creative automation.
            </p>

            {/* Mobile / Tablet Headline */}
            <p className="md:hidden text-gray-300 font-light text-xs truncate">
              Discover your vulnerability to creative automation.
            </p>

            {/* Direct Link to Audit Page */}
            <Link
              to="/ai-audit"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-orange-400 hover:text-orange-300 underline underline-offset-4 cursor-pointer transition-colors shrink-0"
            >
              <span>Take Audit</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Right: Dismiss Button */}
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
            aria-label="Dismiss announcement banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Ambient Bottom Edge Glow */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
}
