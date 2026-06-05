import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'motion/react';
import NeuralWeb from './NeuralWeb';

export default function Hero() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      // Check for mobile or reduced motion preferences
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // Hardware concurrency check as a naive proxy for low power
      const isLowCores = (navigator.hardwareConcurrency || 4) < 4;
      
      setIsLowPower(isMobile || prefersReducedMotion || isLowCores);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas or Fallback */}
      <div className="absolute inset-0 z-0 bg-[var(--color-cmf-black)]">
        {!isLowPower ? (
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <NeuralWeb />
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cmf-black)] via-[#3a2a00] to-[#4d3300] opacity-90" />
        )}
        
        {/* Gradients to blend canvas with page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmf-black)] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-cmf-black)]/90 via-[var(--color-cmf-black)]/40 to-transparent pointer-events-none" />
        
        {/* Noise overlay for cinematic texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center mt-20 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white drop-shadow-2xl leading-[1.05] max-w-5xl">
            Your Ideas Will <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Change the World.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cmf-gold)] to-[var(--color-cmf-accent)]">Start Building.</span>
          </h1>
          
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-3xl leading-relaxed text-balance">
            Welcome to the Creative Minds' Forum. We are a global pipeline of innovators, storytellers, and tech-creatives anchored in undeniable excellence and infallible truths.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="pt-8"
          >
            <a 
              href="#audacity-26"
              className="group relative inline-flex items-center justify-center px-8 py-5 md:px-12 md:py-6 font-bold text-black transition-all duration-500 bg-[var(--color-cmf-gold)] border border-[var(--color-cmf-gold)] hover:border-white rounded-sm overflow-hidden text-center shadow-[0_0_15px_rgba(255,204,0,0.4)]"
            >
              <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
              <span className="relative z-10 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase">Join the Movement — Audacity '26</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
