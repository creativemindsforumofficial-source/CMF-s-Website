import { motion } from 'motion/react';
import { PenTool, Mic, Image as ImageIcon } from 'lucide-react';
import CreativeShowcase from '../components/CreativeShowcase';
import { Canvas } from '@react-three/fiber';
import NeuralWeb from '../components/NeuralWeb';
import { useState, useEffect } from 'react';

export default function MyPenSpeaks() {
  const [isLowPower, setIsLowPower] = useState(false);

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
    <main className="flex-1 flex flex-col w-full pt-20 pb-0">
      {/* 1. The Cinematic Hero */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-20 lg:py-32 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
         {/* Subtle Ethereal Background */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0a00] via-black to-black z-0 pointer-events-none" />
         
         {!isLowPower && (
           <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
             <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
               <ambientLight intensity={0.5} />
               <NeuralWeb />
             </Canvas>
           </div>
         )}
         
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-6"
         >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
              <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">Edition 2.0</span>
              <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl uppercase">
              My Pen Speaks
            </h1>
            
            <h2 className="text-xl md:text-3xl font-light tracking-widest text-[#FFE066] uppercase mt-2">
              Ashes - Tales of the Phoenix <br/> <span className="font-bold text-white">| Finals: Wings, Unfolded.</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed text-balance mt-8 bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
              All submissions are strictly anonymous, ensuring art is judged strictly by its sheer weight and excellence.
            </p>
         </motion.div>
      </section>

      {/* 2. The Grading Matrices */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-[#050505] border-t border-white/5 z-10">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Standard</h3>
              <p className="text-[var(--color-cmf-gold)] mt-4 font-mono text-xs tracking-widest uppercase">Grading Matrices</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: 'Written', metric: 'OCEM Metric', icon: PenTool },
                 { title: 'Spoken', metric: 'PACE Metric', icon: Mic },
                 { title: 'Expressed', metric: 'VITA Metric', icon: ImageIcon }
               ].map((matrix, idx) => (
                 <motion.div
                   key={matrix.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6, delay: 0.1 * idx }}
                   className="group relative bg-[#0a0a0a] border border-white/5 border-t-[var(--color-cmf-gold)] border-t-2 p-8 md:p-10 rounded-b-xl rounded-t-sm hover:bg-[#0f0f0f] transition-colors duration-500 shadow-2xl"
                 >
                    <div className="flex flex-col items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                         <matrix.icon className="w-5 h-5 text-[var(--color-cmf-gold)] opacity-80" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white tracking-wide mb-2">{matrix.title}</h4>
                        <p className="text-gray-400 font-mono text-xs tracking-widest uppercase mt-4">
                          Graded by the <span className="text-white font-bold">{matrix.metric}</span>
                        </p>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. The Gallery Engine */}
      <div className="w-full bg-[#050505]">
        <CreativeShowcase />
      </div>
    </main>
  );
}
