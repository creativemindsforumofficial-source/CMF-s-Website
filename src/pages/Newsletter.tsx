import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, User, Check, Flame, Trophy, Mic, PenTool, ImageIcon, Award, Quote } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import NeuralWeb from '../components/NeuralWeb';
import { useState, useEffect } from 'react';

export default function Newsletter() {
  const [isLowPower, setIsLowPower] = useState(false);
  const [showRocket, setShowRocket] = useState(true);

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
    <main className="flex-1 flex flex-col w-full pt-20 pb-0 bg-[#050505]">
      <Helmet>
        <title>CMF Dispatch (Newsletter) | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="The official weekly publication exploring creative resilience, emerging tech, theology, and visionary art." 
        />
        <meta property="og:title" content="CMF Dispatch | Creative Minds' Forum" />
      </Helmet>

      {/* Cinematic 3D Rocket Load Sequence */}
      <AnimatePresence>
        {showRocket && (
          <motion.div
            key="rocket-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] pointer-events-none overflow-hidden"
          >
            <motion.div
              animate={{ 
                x: ['-100vw', '0vw', '-2vw', '3vw', '-1vw', '4vw', '0vw', '-40vw'],
                y: ['100vh', '0vh', '2vh', '-3vh', '2vh', '-1vh', '0vh', '-150vh'],
                scale: [0.5, 4, 4, 4, 4, 4, 4, 4],
                rotateZ: [45, 0, -5, 7, -3, 5, 0, -35]
              }}
              transition={{ 
                duration: 3, 
                times: [0, 0.333, 0.433, 0.533, 0.633, 0.733, 0.833, 1],
                ease: "easeInOut" 
              }}
              onAnimationComplete={() => setShowRocket(false)}
              className="absolute flex items-center justify-center w-32 h-32"
            >
              {/* Detailed Cartoon Rocket SVG */}
              <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,100,0,0.6)] z-20 relative">
                {/* Glowing Thrust */}
                <g className="animate-[pulse_0.1s_ease-in-out_infinite]">
                  <path d="M 40 115 Q 30 140 50 150 Q 70 140 60 115 Z" fill="#FF9800" />
                  <path d="M 45 115 Q 40 130 50 140 Q 60 130 55 115 Z" fill="#FFF59D" />
                </g>
                {/* Right Fin */}
                <path d="M 65 90 L 85 130 L 65 115 Z" fill="#d84315" />
                {/* Left Fin */}
                <path d="M 35 90 L 15 130 L 35 115 Z" fill="#d84315" />
                {/* Center Fin */}
                <path d="M 47 100 L 50 135 L 53 100 Z" fill="#bf360c" />
                {/* Fuselage Main Body */}
                <path d="M 35 40 Q 25 75 35 110 Q 50 120 65 110 Q 75 75 65 40 Z" fill="#1e88e5" />
                {/* Nose Cone */}
                <path d="M 35 40 Q 50 0 65 40 Z" fill="#ff5252" />
                {/* Window */}
                <circle cx="50" cy="65" r="10" fill="#90caf9" stroke="#0d47a1" strokeWidth="2" />
                <path d="M 46 61 Q 50 58 54 61" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
              
              {/* CMF Gold Particle Trail (Amplified for Thrust) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-64 pointer-events-none z-10 flex justify-center">
                 {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      initial={{ opacity: 1, scale: 1.5, x: 0, y: -20 }}
                      animate={{ 
                        opacity: 0, 
                        scale: 0, 
                        x: ((i % 5) - 2) * (15 + (i % 3) * 5), 
                        y: 40 + (i % 8) * 15 
                      }}
                      transition={{ 
                        duration: 0.3 + (i % 4) * 0.1, 
                        repeat: Infinity, 
                        repeatDelay: (i % 3) * 0.05 
                      }}
                      className={`absolute top-0 w-3 h-3 rounded-full shadow-[0_0_20px_rgba(255,204,0,1)] ${i % 2 === 0 ? 'bg-[#FF9800]' : 'bg-[var(--color-cmf-gold)]'}`}
                    />
                 ))}
                 <div className="absolute top-0 w-8 h-[200px] bg-gradient-to-b from-[#FF9800] via-[var(--color-cmf-gold)] to-transparent blur-xl mix-blend-screen opacity-80" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. The Hero Section */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-32 lg:py-48 flex flex-col items-center justify-center min-h-[70vh] overflow-hidden border-b border-white/5 bg-black">
         {/* Atmospheric Background */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-cmf-gold)]/[0.05] via-black to-black z-0 pointer-events-none" />
         
         {!isLowPower && (
           <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
             <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
               <ambientLight intensity={0.5} />
               <NeuralWeb />
             </Canvas>
           </div>
         )}

         {/* 3D Rocket / Ascension Animation Sequence */}
         <motion.div
           initial={{ opacity: 0, y: 150, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1.5, delay: 1.5, type: 'spring', bounce: 0.2 }}
           className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8"
         >
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-[1px] bg-[var(--color-cmf-gold)]" />
              <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">CMF Chronicles | Issue #01 | January 2026</span>
              <span className="w-12 h-[1px] bg-[var(--color-cmf-gold)]" />
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl uppercase relative">
              <span className="absolute -inset-10 bg-[var(--color-cmf-gold)]/10 blur-3xl rounded-full z-0 pointer-events-none" />
              <span className="relative z-10">THE SPARK</span>
            </h1>
            
            {/* Email Capture */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 2.3, duration: 0.8 }}
               className="mt-12 w-full max-w-md bg-black/60 p-2 rounded-lg border border-white/10 backdrop-blur-md flex flex-col md:flex-row gap-2 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              <input 
                type="email" 
                placeholder="Secure your digital issue..." 
                className="flex-1 bg-transparent border-none text-white focus:ring-0 placeholder:text-gray-600 px-4 py-3 outline-none"
              />
              <button className="bg-[var(--color-cmf-gold)] text-black px-6 py-3 rounded-md font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,204,0,0.3)]">
                Subscribe
              </button>
            </motion.div>
         </motion.div>
      </section>

      {/* 2. The Reporting Desk (Manifesto) */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none relative">
              <span className="absolute -left-6 top-0 text-8xl text-white/5 select-none font-serif">"</span>
              The<br/>Reporting<br/><span className="text-[var(--color-cmf-gold)] glow-text drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]">Desk.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8 text-gray-300 text-lg md:text-xl font-light leading-relaxed whitespace-pre-line"
          >
            <p>
              Welcome to the very first edition of The Spark... A spark refers to a small, glowing particle of fire. It represents the birth of ideas, inspiration, growth, and connection.
            </p>
            <p>
              CMF represents the Creative Minds' Forum; active at the Landmark Chapter and driven by a dogged determination to inspect hope and architect the future.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[var(--color-cmf-gold)] font-mono text-sm tracking-widest uppercase font-bold">
                — Hannah, Reporting Officer, CMF
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Infographics & Visual Data Blocks */}
      <section className="w-full py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="w-[1000px] h-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-cmf-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="mb-16">
            <h2 className="text-sm text-[var(--color-cmf-gold)] font-mono font-bold tracking-[0.3em] uppercase mb-4">January Highlights</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Data & Strategic Protocol</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="bg-[#0a0a0a] border border-white/10 p-10 lg:p-12 rounded-2xl hover:border-[var(--color-cmf-gold)]/50 transition-colors duration-500 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cmf-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-6">
                <Target size={32} className="text-[var(--color-cmf-gold)]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">The Mission Pause</h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  Vision and Membership Class — A reiteration of the forum's vision to <strong className="text-white font-normal">"inspire a generation"</strong> and mission to <strong className="text-white font-normal">"impact our world"</strong>.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
              className="bg-[#0a0a0a] border border-white/10 p-10 lg:p-12 rounded-2xl hover:border-[var(--color-cmf-gold)]/50 transition-colors duration-500 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cmf-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-6">
                <Lightbulb size={32} className="text-[var(--color-cmf-gold)]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">Strategic Planning</h4>
                <p className="text-gray-400 font-light mb-2">Led by Founder, <strong className="text-[var(--color-cmf-gold)]">Samuel Arise</strong>. 3 core steps for growth:</p>
                <ol className="text-gray-300 font-light space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-cmf-gold)] font-mono text-sm mt-1">01.</span>
                    <span>Draft a trimester plan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-cmf-gold)] font-mono text-sm mt-1">02.</span>
                    <span>Target specific life areas and contextual books.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-cmf-gold)] font-mono text-sm mt-1">03.</span>
                    <span>Share exclusively for rigorous accountability.</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The Centerpiece: Award Night */}
      <section className="w-full py-32 bg-[#020202] relative overflow-hidden flex flex-col items-center">
         {/* Flame Glow */}
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-cmf-gold)]/10 rounded-[100%] blur-[120px] mix-blend-screen pointer-events-none" />
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center relative z-10 px-6 max-w-5xl mx-auto"
         >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-cmf-gold)]/30 rounded-full mb-8 bg-[var(--color-cmf-gold)]/5">
              <Flame size={16} className="text-[var(--color-cmf-gold)]" />
              <span className="text-[var(--color-cmf-gold)] text-xs font-bold font-mono tracking-widest uppercase">January 31, 2026</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] glow-text drop-shadow-[0_0_30px_rgba(255,204,0,0.2)]">
              ASHES: Tales<br/>of the Phoenix
            </h2>
            <p className="text-gray-400 mt-8 text-xl font-light tracking-wide">The My Pen Speaks 2.0 Award Night Core Sequence.</p>
         </motion.div>

         <div className="max-w-4xl mx-auto w-full px-6 md:px-12 mt-24 relative z-10">
            {/* Timeline Line */}
            <div className="absolute left-[39px] md:left-[67px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            <div className="space-y-12 md:space-y-16">
              {[
                { time: "Opening", title: "The CMF Affirmations", desc: "Led forcefully by the PRO to align the architectural vision." },
                { time: "Session 1", title: "I Failed, So What?", by: "Dr. Igbekele Emmanuel", desc: "Emphasizing that we are the sole architects of our future. Failure is data, not destiny." },
                { time: "Session 2", title: "Lessons from Failure", by: "Dr. Nweke-Love Henry", desc: "The necessity of Disciplined Patience, Self-Awareness, Self-Conviction, and Absolute Dependence on God." },
                { time: "Audio", title: "Musical Ministrations", desc: "Vera delivering 'Rise Up' and Mercy executing 'You Say', altering the room's frequency." },
                { time: "Sponsor", title: "Litenote Endowment", desc: "$30 giveaway aggressively awarded to Modesola Aedebor." }
              ].map((event, idx) => (
                <motion.div 
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="relative pl-16 md:pl-24"
                >
                  <div className="absolute left-0 lg:-left-2 top-1.5 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-[var(--color-cmf-gold)] rounded-full animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_10px_rgba(255,204,0,0.8)]" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-widest uppercase block mb-1">
                      {event.time}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{event.title}</h3>
                    {event.by && <p className="text-gray-300 font-medium mt-1 text-base">{event.by}</p>}
                    <p className="text-gray-500 font-light mt-3 leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* 5. The Creative Corner */}
      <section className="w-full py-32 bg-black relative">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center text-center"
           >
             <Quote size={48} className="text-white/10 mb-8" />
             <h3 className="text-[var(--color-cmf-gold)] font-mono text-sm tracking-widest uppercase mb-4 font-bold">The Creative Corner</h3>
             <h4 className="text-3xl md:text-5xl font-serif text-white italic mb-12">"Your Pen Speaks Now"</h4>
             
             <div className="text-gray-300 font-serif text-lg md:text-xl leading-loose space-y-6 max-w-2xl text-left border-l border-white/10 pl-6 md:pl-10">
               <p>The call to rise. Do not let your craft sleep in the shadows.<br/>Be bold about your architecture. The world requires your frequency.</p>
               <p className="text-sm font-sans tracking-widest font-bold uppercase text-[var(--color-cmf-gold)] mt-8">
                 — Jemima the Muse
               </p>
             </div>
           </motion.div>
         </div>
      </section>

      {/* 6. The Vanguard Grid (Winners Roster) */}
      <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The Vanguard Grid</h2>
              <p className="text-gray-400 mt-4 text-lg font-light">My Pen Speaks 2.0 — Final Roster.</p>
            </div>
            <Trophy size={48} className="text-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Written',
                icon: PenTool,
                winners: [
                  { pos: '1st', name: 'Amanda Ajiboye' },
                  { pos: '2nd', name: 'Chukwuka Ugochukwu' },
                  { pos: '3rd', name: 'Ugwu Chinenye Lilian' }
                ]
              },
              {
                title: 'Spoken',
                icon: Mic,
                winners: [
                  { pos: '1st', name: 'Abiodun Gold' },
                  { pos: '2nd', name: 'Chinedu Uzochi' },
                  { pos: '3rd', name: 'Offorjama Promise' }
                ]
              },
              {
                title: 'Expressed',
                icon: ImageIcon,
                winners: [
                  { pos: '1st', name: 'David Jacob' },
                  { pos: '2nd', name: 'Oladipo John Zoe' },
                  { pos: '3rd', name: 'Divine Utiome' }
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="bg-black border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
                  <category.icon className="text-[var(--color-cmf-gold)] w-6 h-6" />
                  <h3 className="text-xl font-bold text-white tracking-wide">{category.title} Category</h3>
                </div>
                <div className="p-6 space-y-4">
                  {category.winners.map((winner, i) => (
                    <div key={winner.pos} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs font-bold tracking-widest uppercase ${i === 0 ? 'text-[var(--color-cmf-gold)]' : 'text-gray-500'}`}>
                          {winner.pos}
                        </span>
                        <span className={`text-base font-medium transition-colors ${i === 0 ? 'text-white font-bold' : 'text-gray-300 group-hover:text-white'}`}>
                          {winner.name}
                        </span>
                      </div>
                      {i === 0 && <Award size={16} className="text-[var(--color-cmf-gold)]/50" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialty Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full bg-[#0a0a0a] border border-white/5 border-l-[var(--color-cmf-gold)] border-l-2 p-8 md:p-10 rounded-r-xl"
          >
            <h4 className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-widest uppercase mb-8">Specialty Awards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { title: 'Best Qualifier', name: 'Akpan Andibok' },
                { title: 'Most Insightful', name: 'Uchechukwu Elyon' },
                { title: 'Narrative Architect', name: 'Akpeji Rejoice' },
                { title: 'Most Poetic', name: 'Akarue Esther' }
              ].map(award => (
                <div key={award.title} className="flex flex-col gap-2 border-l border-white/10 pl-4">
                  <span className="text-gray-500 font-light text-sm">{award.title}</span>
                  <span className="text-white font-bold">{award.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
