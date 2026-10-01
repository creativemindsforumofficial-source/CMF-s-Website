import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Bot, 
  BrainCircuit, 
  Sparkles, 
  Calendar, 
  Clock, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SYMPOSIUM_TRACKS = [
  {
    id: 'track-1',
    number: '01',
    title: 'Generative Aesthetics & Autonomy',
    focus: 'NEURAL IMAGE & 3D SYNTHESIS',
    description: 'Examining the frontier of diffusion models, procedural generation, and how artists retain authentic agency when co-creating with artificial intelligence.',
    icon: Sparkles
  },
  {
    id: 'track-2',
    number: '02',
    title: 'The God Factor in the Machine Age',
    focus: 'THEOLOGY, ETHICS & PURPOSE',
    description: 'A deep philosophical exploration of consciousness, spiritual conviction, and human uniqueness in an era dominated by synthetic cognition.',
    icon: ShieldCheck
  },
  {
    id: 'track-3',
    number: '03',
    title: 'Algorithmic Cadence & Neural Sound',
    focus: 'AUDIO SYNTHESIS & ACOUSTIC AI',
    description: 'Deconstructing modern spectral generation, AI-driven vocal modeling, and the future of sacred and secular sonic architecture.',
    icon: BrainCircuit
  },
  {
    id: 'track-4',
    number: '04',
    title: 'Creative Labor, IP & Sovereign Platforms',
    focus: 'CREATOR ECONOMY & RIGHTS',
    description: 'How independent authors, painters, and filmmakers protect their intellectual sovereignty, copyright, and economic independence against uncredited model scraping.',
    icon: Layers
  }
];

export default function AISymposium() {
  return (
    <main className="flex-1 flex flex-col w-full pt-28 pb-20 sm:pt-32 sm:pb-28 bg-[#050505] text-white">
      <Helmet>
        <title>AI Symposium '26 | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="The CMF AI Symposium: Exploring generative intelligence, human conviction, and the future of synthetic creativity." 
        />
        <meta property="og:title" content="AI Symposium '26 | Creative Minds' Forum" />
        <meta property="og:description" content="Exploring generative intelligence, human conviction, and the future of synthetic creativity." />
      </Helmet>

      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center mb-16 sm:mb-24 relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
          <span className="text-[var(--color-cmf-gold)] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            Global Creative Think-Tank
          </span>
          <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05] text-balance">
          The Synthetic Age & <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--color-cmf-gold)] to-amber-300">
            The Creative Soul.
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8">
          A vanguard international symposium gathering technologists, poets, theologians, and digital artists to interrogate, direct, and master artificial intelligence without surrendering human resonance.
        </p>

        {/* Quick event meta cards - responsive flex wrap */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-gray-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Calendar size={14} className="text-[var(--color-cmf-gold)]" />
            <span>Q3 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Globe2 size={14} className="text-[var(--color-cmf-gold)]" />
            <span>Virtual & Select Physical Hubs</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Clock size={14} className="text-emerald-400" />
            <span>Keynotes • Panels • Demos</span>
          </div>
        </div>
      </section>

      {/* Symposium Tracks Grid */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase block mb-2">
            Curated Themes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Symposium Tracks & Discourse
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SYMPOSIUM_TRACKS.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-white/10 bg-[#0d0d12] p-6 sm:p-10 flex flex-col justify-between hover:border-[var(--color-cmf-gold)]/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-white/20 group-hover:text-[var(--color-cmf-gold)] transition-colors">
                      {track.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-cmf-gold)]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--color-cmf-gold)] uppercase block mb-2">
                    {track.focus}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    {track.title}
                  </h3>

                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>Track Status: Curated</span>
                  <span className="text-white group-hover:text-[var(--color-cmf-gold)] transition-colors flex items-center gap-1">
                    Details <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Registration & Updates CTA */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111118] to-[#07070a] p-8 sm:p-14 text-center flex flex-col items-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[var(--color-cmf-gold)] flex items-center justify-center mb-6">
            <Bot size={28} />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Reserve Your Digital Seat
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-light leading-relaxed mb-8">
            Registration for keynote streams and interactive research salons will open shortly. Register your interest to receive priority access and the official Symposium Whitepaper.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="mailto:creativemindsforum.official@gmail.com?subject=AI%20Symposium%20Pre-Registration%20Interest"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-cmf-gold)] text-black font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] text-center"
            >
              Pre-Register for Keynotes
            </a>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/15 text-white font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-white/10 active:scale-95 transition-all text-center"
            >
              Learn More About CMF
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
