import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import NeuralWeb from './NeuralWeb';

export default function AudacityActionBlock() {
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
    <section className="w-full py-24 md:py-32 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-cmf-gold)]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      {!isLowPower && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <NeuralWeb />
          </Canvas>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
            <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Upcoming Initiative
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Global Vision. <br className="hidden sm:block" />
            <span className="text-gray-500">Localized Impact.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl text-balance"
          >
            We believe in transforming our immediate environment before taking the world stage. The Audacity Conference 2026 is our premier localized campus initiative at Landmark University. Forget the typical playbook. No external experts—just raw, homegrown brilliance. Built by students, for students, but echoing a global standard of excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/audacity"
              className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm transition-colors hover:bg-gray-200"
            >
              Secure Your Seat (June 20)
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        {/* Right Column: Visual/Graphic element */}
        <Link 
          to="/audacity" 
          className="lg:col-span-5 h-full min-h-[300px] sm:min-h-[400px] relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group block w-full"
        >
          {/* Background Image & Overlay */}
          <img 
            src="/audacity_flyer.png" 
            alt="Audacity 26 Event" 
            className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/40 z-0" />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
             <h3 className="text-8xl sm:text-9xl font-bold text-white/20 tracking-tighter select-none mix-blend-overlay">
               '26
             </h3>
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_25px_var(--color-cmf-accent)] transition-all duration-500">Audacity</span>
             </div>
          </motion.div>
        </Link>
        
      </div>
    </section>
  );
}
