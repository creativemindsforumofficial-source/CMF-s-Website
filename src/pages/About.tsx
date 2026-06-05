import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Users, Network } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import NeuralWeb from '../components/NeuralWeb';

export default function About() {
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
    <main className="flex-1 flex flex-col w-full pt-32 pb-24">
      {/* 1. The Visionary Hero */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-20 lg:py-32 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
         {/* Subtle Ethereal Background */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black z-0 pointer-events-none" />
         
         {!isLowPower && (
           <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
             <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
               <ambientLight intensity={0.5} />
               <NeuralWeb />
             </Canvas>
           </div>
         )}
         
         <motion.div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-cmf-gold)]/[0.04] rounded-full blur-[150px] pointer-events-none"
           animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         />

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-6"
         >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
              ...ideas that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">change the world.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl font-light tracking-wide max-w-3xl leading-relaxed text-balance mt-4">
              Redefining creativity via the God factor. A global pipeline for the excellent.
            </p>
         </motion.div>
      </section>

      {/* 2. The Blueprint (Vision & Mission) */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-[#050505] border-y border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
               <div className="flex items-center gap-4">
                 <span className="w-12 h-[1px] bg-[var(--color-cmf-gold)]" />
                 <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">The Vision</span>
               </div>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                 To inspire and lead a generation of globally relevant creatives.
               </h2>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
               <div className="flex items-center gap-4">
                 <span className="w-12 h-[1px] bg-[var(--color-cmf-gold)]" />
                 <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">The Mission</span>
               </div>
               <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                 Impacting our world with excellent skills, tools, information, and support needed to thrive, while re-aligning mindsets and life patterns to ancient, infallible truths in these contemporary times.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 3. The Pillars (Core Values Grid) */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-black">
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Pillars</h2>
              <p className="text-gray-400 mt-4 text-lg">The foundational values of the Creative Minds' Forum.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
               {[
                 { title: 'Spirituality & Excellence', icon: Target },
                 { title: 'Accountability & Diligence', icon: Lightbulb },
                 { title: 'Integrity & Innovation', icon: Shield },
                 { title: 'Collaboration & Creativity', icon: Users }
               ].map((pillar, idx) => (
                 <motion.div
                   key={pillar.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6, delay: 0.1 * idx }}
                   className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-xl overflow-hidden hover:border-[var(--color-cmf-gold)] transition-colors duration-500"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cmf-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-cmf-gold)]/10 group-hover:border-[var(--color-cmf-gold)]/30 transition-colors duration-500">
                         <pillar.icon className="w-6 h-6 text-gray-400 group-hover:text-[var(--color-cmf-gold)] transition-colors duration-500" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{pillar.title}</h3>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. The Core Philosophy */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-32 bg-[#050505] border-t border-white/5 text-center flex flex-col items-center">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto w-full flex flex-col items-center gap-10 relative z-10"
         >
            <Network className="w-16 h-16 text-[var(--color-cmf-gold)] opacity-80" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase relative">
              <span className="absolute -inset-4 bg-[var(--color-cmf-gold)]/5 blur-3xl rounded-full z-0 pointer-events-none" />
              <span className="relative z-10">Systems Thinking</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-3xl font-light tracking-wide max-w-4xl leading-relaxed text-balance">
              We do not just host events; we build interconnected pipelines. We bridge the gap between artistic expression, emotional resilience, and technological advancement.
            </p>
         </motion.div>
      </section>
    </main>
  );
}
