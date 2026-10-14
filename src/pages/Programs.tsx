import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ArrowUpRight, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Users, 
  Zap, 
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

interface ProgramCardProps {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  meta: { icon: typeof Calendar; text: string }[];
  highlights: string[];
  primaryLink: { text: string; href: string };
  secondaryLink?: { text: string; href: string };
  accentColor: string;
  gradient: string;
  image?: string;
  reverse?: boolean;
}

const PROGRAMS_DATA: ProgramCardProps[] = [
  {
    badge: "Flagship Annual Conference",
    badgeColor: "text-[var(--color-cmf-gold)] border-[var(--color-cmf-gold)]/30 bg-[var(--color-cmf-gold)]/10",
    title: "Audacity '26 Conference",
    subtitle: "The Premier Creative & Vanguard Tech Collision",
    description: "By Students, For Students. Echoing a global standard of excellence at Landmark University. A high-energy, pioneering gathering uniting writers, spoken word masters, cinematic filmmakers, and vanguard technologists.",
    meta: [
      { icon: Calendar, text: "June 20, 2026" },
      { icon: MapPin, text: "Landmark University & Worldwide" },
      { icon: Users, text: "1,000+ Creators Expected" }
    ],
    highlights: [
      "Keynotes by Doris Ohana, Ayodeji Rad, Yusuf Gideon & Samuel Arise",
      "Live Creative Showcase & Studio Exhibition",
      "Audacity Action Awards & Direct Mentorship Pipelines",
      "Official Corporate Sponsorships with Providus & Wema Bank"
    ],
    primaryLink: {
      text: "Explore Full Conference",
      href: "/audacity"
    },
    secondaryLink: {
      text: "RSVP Seat",
      href: "/audacity#rsvp-engine"
    },
    accentColor: "var(--color-cmf-gold)",
    gradient: "from-[var(--color-cmf-gold)]/20 via-yellow-500/5 to-transparent",
    image: "/audacity_flyer.png",
    reverse: false
  },
  {
    badge: "Vanguard Think-Tank",
    badgeColor: "text-[var(--color-cmf-accent)] border-[var(--color-cmf-accent)]/30 bg-[var(--color-cmf-accent)]/10",
    title: "AI Symposium '26",
    subtitle: "The Synthetic Age & The Creative Soul",
    description: "A deep architectural and philosophical exploration of generative intelligence, human conviction, and intellectual sovereignty. Where vanguard technologists and artists redefine what it means to create.",
    meta: [
      { icon: Calendar, text: "Annual Technical Track • Summer 2026" },
      { icon: MapPin, text: "Hybrid Digital Auditorium" },
      { icon: BrainCircuit, text: "4 Dedicated Neural & Ethical Tracks" }
    ],
    highlights: [
      "Track 01: Generative Aesthetics & Autonomy (Diffusion & 3D)",
      "Track 02: The God Factor in the Machine Age (Theology & Purpose)",
      "Track 03: Algorithmic Cadence & Neural Sound (Acoustic AI)",
      "Track 04: Creative Labor, IP & Sovereign Platforms (Creator Rights)"
    ],
    primaryLink: {
      text: "Explore AI Symposium",
      href: "/ai-symposium"
    },
    secondaryLink: {
      text: "Take 4D AI Audit",
      href: "/ai-audit"
    },
    accentColor: "var(--color-cmf-accent)",
    gradient: "from-[var(--color-cmf-accent)]/20 via-purple-500/5 to-transparent",
    reverse: true
  }
];

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'audacity' | 'symposium'>('all');

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    if (activeFilter === 'audacity') return p.title.includes('Audacity');
    if (activeFilter === 'symposium') return p.title.includes('Symposium');
    return true;
  });

  return (
    <main className="flex-1 flex flex-col w-full pt-32 pb-24 sm:pt-36 sm:pb-32 bg-[#050505] text-white">
      <Helmet>
        <title>Our Programs | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="Explore the signature programs of Creative Minds' Forum: The Audacity '26 Conference and the AI Symposium '26. Where visionary art collides with vanguard technology." 
        />
        <meta property="og:title" content="Our Programs | Creative Minds' Forum" />
        <meta property="og:description" content="Explore Audacity '26 and AI Symposium '26 — high-impact initiatives empowering generational creators." />
      </Helmet>

      {/* Hero Section */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center mb-16 sm:mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-cmf-gold)]/30 bg-[var(--color-cmf-gold)]/10 text-[var(--color-cmf-gold)] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,204,0,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-cmf-gold)] animate-pulse" />
            <span>Signature Initiatives & Stages</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.08] text-balance">
            Where Visionary Art Collides With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cmf-gold)] via-[#FFE066] to-[var(--color-cmf-accent)]">
              Vanguard Tech.
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-3xl leading-relaxed text-balance">
            We architect high-impact, transformative platforms designed to equip, inspire, and elevate generational creatives across literature, cinematic media, artificial intelligence, and spiritual conviction.
          </p>

          {/* Filter Bar */}
          <div className="mt-10 flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer min-h-[44px] ${
                activeFilter === 'all'
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              All Programs (2)
            </button>
            <button
              onClick={() => setActiveFilter('audacity')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer min-h-[44px] ${
                activeFilter === 'audacity'
                  ? 'bg-[var(--color-cmf-gold)] text-black shadow-lg shadow-[var(--color-cmf-gold)]/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Audacity '26
            </button>
            <button
              onClick={() => setActiveFilter('symposium')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer min-h-[44px] ${
                activeFilter === 'symposium'
                  ? 'bg-[var(--color-cmf-accent)] text-white shadow-lg shadow-[var(--color-cmf-accent)]/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              AI Symposium
            </button>
          </div>
        </motion.div>
      </section>

      {/* Programs Showcase Cards */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {filteredPrograms.map((program, idx) => {
          const isGold = program.accentColor.includes('gold');
          return (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c10]/80 backdrop-blur-2xl p-8 sm:p-10 lg:p-12 transition-all hover:border-white/20 group`}
            >
              {/* Ambient Radial Lighting in Program Accent Color */}
              <div 
                className={`absolute top-0 ${program.reverse ? 'left-0' : 'right-0'} w-96 h-96 bg-gradient-to-br ${program.gradient} blur-[120px] pointer-events-none rounded-full`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Content Block */}
                <div className={`lg:col-span-7 flex flex-col items-start ${program.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Badge */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-5 ${program.badgeColor}`}>
                    <Zap className="w-3 h-3" />
                    {program.badge}
                  </span>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
                    {program.title}
                  </h2>
                  <p className={`text-base sm:text-lg font-semibold tracking-tight mb-4 ${isGold ? 'text-[var(--color-cmf-gold)]' : 'text-purple-300'}`}>
                    {program.subtitle}
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-white/10">
                    {program.meta.map((m, i) => {
                      const Icon = m.icon;
                      return (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <Icon className={`w-4 h-4 shrink-0 ${isGold ? 'text-[var(--color-cmf-gold)]' : 'text-[var(--color-cmf-accent)]'}`} />
                          <span className="truncate">{m.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Highlights List */}
                  <div className="w-full mb-8 space-y-2.5">
                    <p className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                      Core Highlights & Structure
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {program.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isGold ? 'text-[var(--color-cmf-gold)]' : 'text-[var(--color-cmf-accent)]'}`} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      to={program.primaryLink.href}
                      className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-extrabold tracking-tight transition-all duration-300 min-h-[44px] ${
                        isGold
                          ? 'bg-[var(--color-cmf-gold)] hover:bg-yellow-300 text-black shadow-[0_0_20px_rgba(255,204,0,0.35)] hover:scale-105 active:scale-95'
                          : 'bg-[var(--color-cmf-accent)] hover:bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(217,0,255,0.35)] hover:scale-105 active:scale-95'
                      }`}
                    >
                      <span>{program.primaryLink.text}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {program.secondaryLink && (
                      <Link
                        to={program.secondaryLink.href}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold tracking-tight text-zinc-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 transition-all duration-300 min-h-[44px] active:scale-95"
                      >
                        <span>{program.secondaryLink.text}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Visual Feature Block / Graphic */}
                <div className={`lg:col-span-5 ${program.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[380px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    {/* Background Pattern */}
                    <div 
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Top pill inside graphic */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${isGold ? 'bg-[var(--color-cmf-gold)]' : 'bg-[var(--color-cmf-accent)]'} animate-pulse`} />
                        <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold">
                          {isGold ? "Live June 2026" : "Neural Track 2026"}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">CMF_PLATFORM_V3</span>
                    </div>

                    {/* Center graphic message */}
                    <div className="my-auto py-8 text-center relative z-10 flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-4 ${isGold ? 'border-[var(--color-cmf-gold)]/30 bg-[var(--color-cmf-gold)]/10 text-[var(--color-cmf-gold)]' : 'border-[var(--color-cmf-accent)]/30 bg-[var(--color-cmf-accent)]/10 text-[var(--color-cmf-accent)]'}`}>
                        {isGold ? <Sparkles className="w-8 h-8" /> : <BrainCircuit className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                        {isGold ? "Audacity Conference" : "AI Symposium"}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-xs font-light">
                        {isGold 
                          ? "Keynotes, masterclasses, and generational student showcases."
                          : "Generative intelligence, creator rights, and philosophical conviction."}
                      </p>
                    </div>

                    {/* Bottom Quick Link Bar */}
                    <Link 
                      to={program.primaryLink.href}
                      className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold text-zinc-300 hover:text-white transition-colors relative z-10 group/link"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-[var(--color-cmf-gold)]' : 'bg-[var(--color-cmf-accent)]'}`} />
                        View Full Initiative
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom Global Community Callout */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto mt-20 sm:mt-24">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#111116] to-[#07070a] p-8 sm:p-12 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-cmf-gold)]/10 border border-[var(--color-cmf-gold)]/30 flex items-center justify-center text-[var(--color-cmf-gold)] mb-5">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Want to Present, Sponsor, or Collaborate?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl leading-relaxed mb-8">
            Whether you are submitting an original manuscript, proposing a keynote track, or partnering as an institution, our doors are open to visionary minds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold tracking-tight text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 shadow-[0_8px_20px_-6px_rgba(255,204,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all min-h-[48px] cursor-pointer"
            >
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
            <Link
              to="/my-pen-speaks"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-medium tracking-tight text-white bg-[#075056] hover:bg-[#043C40] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all min-h-[48px] cursor-pointer"
            >
              <span>Explore Creative Archive</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
