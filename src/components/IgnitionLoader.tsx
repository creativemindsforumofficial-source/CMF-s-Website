import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function IgnitionLoader({ isLaunched }: { isLaunched?: boolean }) {
  const [internalLaunched, setInternalLaunched] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const activeLaunched = isLaunched !== undefined ? isLaunched : internalLaunched;

  useEffect(() => {
    if (isLaunched === undefined) {
      const hoverTimer = setTimeout(() => {
        setInternalLaunched(true);
      }, 1500);

      return () => clearTimeout(hoverTimer);
    }
  }, [isLaunched]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="ignition-wrapper"
          initial={{ y: 0 }}
          animate={activeLaunched ? { y: '-100vh' } : { y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (activeLaunched) setIsVisible(false);
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white dark:bg-[#050505] overflow-hidden pointer-events-none"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={activeLaunched ? { y: '-40vh' } : { y: [0, -15, 0, -15, 0] }}
            transition={
              activeLaunched 
                ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                : { duration: 1.5, ease: "easeInOut" }
            }
            className="relative flex flex-col items-center"
          >
            {/* Phase 2: The Tech-Chassis (Pure CSS/SVG) */}
            <svg width="120" height="180" viewBox="0 0 100 150" className="relative z-10 drop-shadow-[0_0_20px_rgba(255,204,0,0.15)]">
              {/* Obsidian Hull */}
              <polygon points="50,10 20,80 30,120 70,120 80,80" fill="#0f0f11" stroke="#27272a" strokeWidth="2" strokeLinejoin="round" />
              {/* Aerodynamic Center Line / Accents */}
              <polygon points="50,10 40,80 50,110 60,80" fill="#18181b" />
              <line x1="50" y1="10" x2="50" y2="110" stroke="var(--color-cmf-gold)" strokeWidth="1.5" opacity="0.8" />
              
              {/* Sharp Wings */}
              <polygon points="30,120 15,140 40,115" fill="#0f0f11" stroke="var(--color-cmf-gold)" strokeWidth="1" strokeLinejoin="round" />
              <polygon points="70,120 85,140 60,115" fill="#0f0f11" stroke="var(--color-cmf-gold)" strokeWidth="1" strokeLinejoin="round" />
              
              {/* Neon Engine Core */}
              <circle cx="50" cy="70" r="12" fill="#000" stroke="#3f3f46" strokeWidth="2" />
              <circle cx="50" cy="70" r="6" fill="#000" stroke="var(--color-cmf-gold)" strokeWidth="1.5" />
              <circle cx="50" cy="70" r="3" fill="var(--color-cmf-gold)" className="animate-pulse" />
            </svg>

            {/* Phase 3: The Data Propulsion */}
            <div className="absolute top-[140px] w-32 h-64 flex justify-center overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, opacity: 1, scale: 1 }}
                  animate={{ 
                    y: activeLaunched ? 400 + Math.random() * 100 : 200 + Math.random() * 50, 
                    opacity: 0,
                    scale: activeLaunched ? 0.1 : 0.2,
                    x: (Math.random() - 0.5) * (activeLaunched ? 80 : 60)
                  }}
                  transition={{
                    duration: activeLaunched ? 0.15 + Math.random() * 0.15 : 0.3 + Math.random() * 0.4,
                    repeat: Infinity,
                    delay: Math.random() * 0.5,
                    ease: "linear"
                  }}
                  className={`absolute top-0 w-2 h-2 rounded-sm shadow-[0_0_15px_rgba(255,204,0,0.8)] ${Math.random() > 0.5 ? 'bg-[var(--color-cmf-gold)]' : 'bg-white'}`}
                />
               ))}
               {/* Ambient Thrust Glow */}
               <div className="absolute top-0 w-6 h-[80%] bg-gradient-to-b from-[var(--color-cmf-gold)]/60 via-[var(--color-cmf-gold)]/10 to-transparent blur-xl" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
