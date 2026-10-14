import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AudacityActionBlock() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32 bg-zinc-50 border-t border-zinc-200/80 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 text-zinc-900"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFCC00]" />
            <span className="text-xs font-bold tracking-wider uppercase">
              Upcoming Initiative • June 20, 2026
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance"
          >
            Global Vision. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] drop-shadow-xs">
              Localized Impact.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-zinc-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance"
          >
            We believe in transforming our immediate environment before taking the world stage. The Audacity Conference 2026 is our premier localized campus initiative at Landmark University. Forget the typical playbook. No external experts—just raw, homegrown brilliance. Built by students, for students, echoing a global standard of excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-2 w-full sm:w-auto"
          >
            <Link 
              to="/audacity"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#16232B] hover:bg-black text-white font-bold rounded-full text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#FFCC00]" />
              <span>Secure Your Seat (June 20)</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        {/* Right Column: Visual Graphic element */}
        <Link 
          to="/audacity" 
          className="lg:col-span-5 min-h-[280px] sm:min-h-[380px] relative rounded-2xl border border-zinc-200/90 bg-zinc-900 overflow-hidden flex items-center justify-center group block w-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Background Image & Overlay */}
          <img 
            src="/audacity_flyer.png" 
            alt="Audacity 26 Event" 
            className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-out opacity-85" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 group-hover:from-black/75 transition-colors duration-500 z-0" />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 text-center p-6 flex flex-col items-center justify-center"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF5B04] mb-1">Annual Convergence</span>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              AUDACITY '26
            </h3>
            <span className="text-xs text-zinc-300 mt-2 font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              Explore Agenda & Speakers →
            </span>
          </motion.div>
        </Link>
        
      </div>
    </section>
  );
}
