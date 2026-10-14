import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PenTool, Mic, Image as ImageIcon } from 'lucide-react';
import CreativeShowcase from '../components/CreativeShowcase';

export default function MyPenSpeaks() {
  return (
    <main className="flex-1 flex flex-col w-full pt-20 pb-0">
      <Helmet>
        <title>Creative Archive (My Pen Speaks) | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="The anonymous archive and showcase of literary weight, spoken cadence, and visual excellence from CMF creators." 
        />
        <meta property="og:title" content="Creative Archive | Creative Minds' Forum" />
      </Helmet>

      {/* 1. The Visionary Hero */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-20 lg:py-32 flex flex-col items-center justify-center min-h-[55vh] overflow-hidden bg-[#FAFAFA] border-b border-[#D2D1CF]/60">
         {/* Subtle Ethereal Ambient Wash */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFF0E8] via-[#FAFAFA] to-[#FAFAFA] z-0 pointer-events-none opacity-80" />
         
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-6"
         >
            <div className="flex items-center gap-4 mb-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#FFCC00]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] font-mono text-xs font-bold tracking-[0.2em] uppercase">Edition 2.0 • Curated Archive</span>
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#FFCC00] to-transparent" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-[#0A0A0A] uppercase">
              My Pen Speaks
            </h1>
            
            <h2 className="text-xl md:text-3xl font-bold tracking-wide text-zinc-950 uppercase mt-2">
              Ashes - Tales of the Phoenix <br/> <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">| Finals: Wings, Unfolded.</span>
            </h2>

            <p className="text-[#60625F] text-base md:text-lg font-normal tracking-normal max-w-2xl leading-relaxed text-balance mt-4 bg-white p-6 rounded-2xl border border-[#D2D1CF]/70 shadow-[0_10px_30px_rgba(22,35,43,0.06)]">
              All submissions are strictly anonymous, ensuring art is judged strictly by its sheer weight and excellence.
            </p>
         </motion.div>
      </section>

      {/* 2. The Grading Matrices */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-20 bg-white border-b border-[#D2D1CF]/60 z-10">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">The Standard</h3>
              <p className="text-[#FFCC00] mt-3 font-mono text-xs font-bold tracking-widest uppercase">Grading Matrices</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: 'Written', metric: 'OCEM Metric', icon: PenTool, desc: 'Originality, Cadence, Emotional Depth, and Message Resonance.' },
                 { title: 'Spoken', metric: 'PACE Metric', icon: Mic, desc: 'Pacing, Articulation, Control, and Expressive Delivery.' },
                 { title: 'Expressed', metric: 'VITA Metric', icon: ImageIcon, desc: 'Visual Integrity, Thematic Alignment, and Artistic Fluency.' }
               ].map((matrix, idx) => (
                 <motion.div
                   key={matrix.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6, delay: 0.1 * idx }}
                   className="group relative bg-[#FAFAFA] border border-[#D2D1CF]/70 border-t-[#FFCC00] border-t-4 p-8 md:p-10 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_rgba(22,35,43,0.09)] transition-all duration-300"
                 >
                    <div className="flex flex-col items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 flex items-center justify-center">
                         <matrix.icon className="w-5 h-5 text-[#FFCC00]" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[#0A0A0A] tracking-tight mb-2">{matrix.title}</h4>
                        <p className="text-[#60625F] text-sm leading-relaxed mb-4">{matrix.desc}</p>
                        <p className="text-[#60625F] font-mono text-xs tracking-wider uppercase">
                          Graded by the <span className="text-[#075056] font-bold">{matrix.metric}</span>
                        </p>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. The Gallery Engine */}
      <div className="w-full bg-[#FAFAFA]">
        <CreativeShowcase />
      </div>
    </main>
  );
}
