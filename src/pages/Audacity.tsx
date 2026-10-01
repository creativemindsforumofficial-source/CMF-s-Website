import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Zap, MapPin } from 'lucide-react';
import { FormEvent, useState } from 'react';


const SPEAKERS = [
  {
    name: 'Doris Ohana',
    bio: 'Visionary strategist reshaping creative ecosystems.',
    image: '/Doris.jpg'
  },
  {
    name: 'Ayodeji Rad',
    bio: 'Tech innovator building the next generation of global impact.',
    image: '/RAD.jpg'
  },
  {
    name: 'Yusuf Gideon',
    bio: 'Storyteller and architect of immersive digital experiences.',
    image: '/Gideon.jpg'
  },
  {
    name: 'Samuel Arise',
    bio: 'Pioneer of community-driven leadership and excellence.',
    image: '/Arise.jpg'
  }
];

const SPONSORS = ['PremiumTrust Bank', 'Providus Bank', 'Wema Bank (ALAT)'];

export default function Audacity() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1 flex flex-col w-full pt-32 pb-24">
      <Helmet>
        <title>Audacity '26 | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="The flagship annual conference celebrating bold ideas, revolutionary art, and generational creators worldwide." 
        />
        <meta property="og:title" content="Audacity '26 | Creative Minds' Forum" />
      </Helmet>
      
      {/* 1. Event Hero */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cmf-accent)]/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-white/20 bg-white/5 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cmf-accent)] animate-pulse shadow-[0_0_8px_var(--color-cmf-accent)]"></span>
            <span className="text-white text-xs font-mono tracking-widest uppercase font-bold">June 20, 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl uppercase">
            The Audacity <br /> Conference 2026
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light tracking-wide max-w-3xl leading-relaxed text-balance mt-4">
            By Students, For Students. Echoing a global standard of excellence at Landmark University.
          </p>
          <a
            href="#rsvp-engine"
            className="mt-10 group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black bg-white transition-all hover:bg-gray-200 overflow-hidden text-center hover:scale-105 duration-300 ease-out"
          >
            <span className="relative z-10 tracking-[0.2em] uppercase text-sm flex items-center gap-3">
              RSVP Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </section>

      {/* The Event Manifesto */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-l-4 border-[var(--color-cmf-gold)] pl-6 md:pl-10 py-2"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Forget the typical playbook. No external experts—just raw, homegrown brilliance. Join the Creative Minds' Forum (CMF) for a pioneering, high-energy collision of art, resilience, and tech. By Students, For Students.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-3"
            >
              <Zap size={24} className="text-[var(--color-cmf-gold)]" /> 
              Why You Need to Be Here
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '100% Peer-to-Peer', desc: "Motivation from Landmark's brightest minds who walk the same campus and face the same challenges." },
                { title: 'The Blueprint', desc: 'Master your unique creative fingerprint and conquer the fear of being seen.' },
                { title: 'Win Tech Gadgets', desc: 'Participate in our "Story of Audacity" IG Reel challenge right from your phone!' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                  className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform group"
                >
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-cmf-gold)] transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Vanguard (Speaker Grid) */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Vanguard</h2>
            <p className="text-gray-400 mt-4 text-lg">Leading the charge at Audacity '26.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPEAKERS.map((speaker, idx) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-white/5">
                  <div className="absolute inset-0 flex items-center justify-center z-0 text-white/10">Image missing</div>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="absolute inset-0 w-full h-full object-cover z-10 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                </div>
                <div className="p-6 relative z-20 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{speaker.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Catalyst Pipeline (Features & Sponsors) */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Catalyst Pipeline</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Join the <strong className="text-white">"Story of Audacity Challenge"</strong> on Instagram Reels. Show us your vision for a localized impact and stand a chance to win exclusive gadget prizes fully sponsored by <span className="text-[var(--color-cmf-gold)] font-bold">OG Tech</span>.
            </p>
            <a href="#" className="inline-block mt-4 text-white border-b border-white hover:text-[var(--color-cmf-gold)] hover:border-[var(--color-cmf-gold)] transition-colors pb-1 uppercase tracking-widest text-xs font-bold">
              View Challenge Rules
            </a>
          </div>

          <div className="flex-1 w-full bg-white/5 border border-white/10 p-10 rounded-xl">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 text-center">Powered By</h3>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 opacity-70 grayscale">
              {SPONSORS.map((sponsor) => (
                <div key={sponsor} className="text-xl md:text-2xl font-bold text-white tracking-tighter hover:text-[var(--color-cmf-gold)] hover:grayscale-0 transition-all duration-500">
                  {sponsor}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* The Cinematic Location Node */}
      <section className="w-full relative px-6 md:px-12 lg:px-16 py-24 bg-black border-b border-white/5 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="max-w-5xl mx-auto w-full flex flex-col items-center gap-10"
        >
          <div className="flex flex-col items-center gap-4">
             <MapPin size={32} className="text-[var(--color-cmf-gold)]" />
             <h2 className="text-xl md:text-3xl font-bold text-white tracking-widest uppercase mt-2">
               Landmark University
             </h2>
             <p className="text-gray-400 text-sm md:text-base font-mono tracking-wide opacity-80">
               43FP+3V8, Road, Omu-Aran 251103, Kwara, Nigeria
             </p>
          </div>
          
          <div className="w-full aspect-square sm:aspect-video lg:aspect-[21/9] rounded-2xl overflow-hidden bg-[#0a0a0a] p-3 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative group">
             <div className="w-full h-full rounded-xl overflow-hidden relative">
               {/* Map Filter & Overlay */}
               <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 transition-colors duration-500 group-hover:bg-transparent" />
               <div className="absolute inset-0 ring-1 ring-inset ring-white/5 z-20 pointer-events-none rounded-xl" />
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.315582381289!2d5.048924299999999!3d8.106673899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478a5734898141%3A0xcadc820d655ba6db!2sLandmark%20University!5e0!3m2!1sen!2sng!4v1714571939023!5m2!1sen!2sng" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) contrast(1.1) brightness(0.8)' }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 object-cover"
               ></iframe>
             </div>
          </div>
        </motion.div>
      </section>

      {/* 4. The RSVP Engine (Conversion Form) */}
      <section id="rsvp-engine" className="w-full relative px-6 md:px-12 lg:px-16 py-32 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">Secure Your Seat</h2>
            <p className="text-gray-400 text-lg">Reserve your spot for The Audacity Conference 2026.</p>
          </div>

          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl backdrop-blur-xl flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-black/50 border border-white/20 rounded-md p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-cmf-gold)] transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-black/50 border border-white/20 rounded-md p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-cmf-gold)] transition-colors"
                  placeholder="name@university.edu"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="department" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Department</label>
                <input 
                  type="text" 
                  id="department" 
                  required
                  className="bg-black/50 border border-white/20 rounded-md p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-cmf-gold)] transition-colors"
                  placeholder="E.g. Computer Science"
                />
              </div>
              
              <div className="flex items-start gap-4 mt-2">
                <div className="flex items-center h-6">
                  <input 
                    type="checkbox" 
                    id="pipeline" 
                    className="w-5 h-5 rounded border-white/20 bg-black/50 text-[var(--color-cmf-gold)] focus:ring-[var(--color-cmf-gold)] focus:ring-offset-0 transition-colors"
                  />
                </div>
                <label htmlFor="pipeline" className="text-sm text-gray-300 leading-relaxed pt-0.5 cursor-pointer select-none font-medium">
                  Join the CMF Global Community (Keep me updated on future initiatives and sub-team recruitment).
                </label>
              </div>

              <button 
                type="submit"
                className="mt-6 w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-black bg-[var(--color-cmf-gold)] transition-all hover:brightness-110 overflow-hidden text-center rounded-md shadow-[0_0_15px_rgba(255,204,0,0.4)] duration-300"
              >
                <span className="tracking-[0.2em] uppercase text-sm flex items-center gap-3">
                  Lock In My Seat <Check size={18} className="group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black border border-[var(--color-cmf-gold)] p-12 rounded-xl text-center flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-cmf-gold)]/20 flex items-center justify-center mb-2">
                <Check size={32} className="text-[var(--color-cmf-gold)]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Seat Locked In</h3>
              <p className="text-gray-400">Welcome to the vanguard. We'll be in touch soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-gray-500 hover:text-white transition-colors"
              >
                Submit another response
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </main>
  );
}
