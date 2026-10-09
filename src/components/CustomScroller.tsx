import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/**
 * CustomScroller
 * Provides a branded scroll progress indicator across the top of the viewport
 * and a floating, circular scroll-to-top button with a live radial progress ring.
 */
export default function CustomScroller() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular progress calculation
  const circleRadius = 18;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* ── Top Ambient Scroll Progress Bar ────────────────────────────── */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[var(--color-cmf-gold)] via-[#FFE066] to-[var(--color-cmf-accent)] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,204,0,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Floating Brand Scroll-to-Top Button with Radial Progress ──── */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={scrollToTop}
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#121217]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(255,204,0,0.15)] hover:border-[var(--color-cmf-gold)] hover:shadow-[0_10px_35px_rgba(255,204,0,0.4)] transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Scroll to top of page"
              title="Scroll to top"
            >
              {/* Radial Progress Ring SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
                {/* Background Ring */}
                <circle
                  cx="22"
                  cy="22"
                  r={circleRadius}
                  className="stroke-white/10"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Animated Progress Ring */}
                <circle
                  cx="22"
                  cy="22"
                  r={circleRadius}
                  stroke="url(#scrollerGoldGradient)"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-150 ease-out"
                />
                <defs>
                  <linearGradient id="scrollerGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFCC00" />
                    <stop offset="100%" stopColor="#FF9900" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner Icon */}
              <ArrowUp className="w-4 h-4 text-gray-200 group-hover:text-[var(--color-cmf-gold)] group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
