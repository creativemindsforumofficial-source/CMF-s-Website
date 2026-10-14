import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  HeartHandshake
} from 'lucide-react';

const WHATSAPP_INVITE_URL = 'https://chat.whatsapp.com/CmPHtO4hTzWKtNAaXAN0MR';

const COMMUNITY_PILLARS = [
  {
    title: 'Multi-Disciplinary Collaborations',
    description: 'Connect with writers, directors, spoken word artists, and tech pioneers ready to build high-impact initiatives together.',
    icon: Zap,
  },
  {
    title: 'Priority Flagship Access',
    description: 'Receive first-wave registration and priority access for Audacity, the Global AI Symposium, and private masterclasses.',
    icon: Sparkles,
  },
  {
    title: 'Zero Noise, Curated Growth',
    description: 'Strict anti-spam guidelines ensure every discussion delivers actionable value, inspiration, and genuine collaborative energy.',
    icon: ShieldCheck,
  },
];

export default function Join() {
  return (
    <>
      <Helmet>
        <title>Ready to Find Your Creative Tribe? | Creative Minds' Forum</title>
        <meta
          name="description"
          content="Step inside the official Creative Minds' Forum Community. Connect directly with visionary writers, storytellers, artists, and tech innovators."
        />
        <meta property="og:title" content="Ready to Find Your Creative Tribe? | Creative Minds' Forum" />
        <meta
          property="og:description"
          content="A private circle of visionary storytellers, designers, tech creators, and spoken word artists. Join our official community today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creativemindsforum.com/join" />
      </Helmet>

      <main className="relative min-h-screen bg-[#050505] text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-[#FFCC00]/30 selection:text-white flex flex-col justify-center">
        
        {/* ── Subtle Ambient Background Flares ── */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-[radial-gradient(circle,rgba(255,204,0,0.12)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 blur-[100px] pointer-events-none -z-10" />

        {/* ── Background Grid Accent ── */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">

          {/* Clean Pill Monogram Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">
              Creative Minds' Forum Community
            </span>
          </motion.div>

          {/* Primary Magnetic CTA Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance"
          >
            Ready to find your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] drop-shadow-[0_2px_20px_rgba(255,204,0,0.35)]">
              creative tribe?
            </span>
          </motion.h1>

          {/* Clear, inspiring subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl text-balance"
          >
            Step inside the official Creative Minds' Forum community. Connect with writers, filmmakers, spoken word artists, and tech creators building generational work in an atmosphere of mutual elevation.
          </motion.p>

          {/* Primary Action Button Deck */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 sm:px-11 sm:py-4.5 rounded-full bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 text-zinc-950 font-bold text-base sm:text-lg tracking-tight transition-all duration-300 shadow-[0_10px_30px_rgba(255,204,0,0.45)] hover:shadow-[0_14px_40px_rgba(255,204,0,0.65)] hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Users className="w-5 h-5 text-zinc-950" />
              <span>Join the Community</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Reassurance Points (Zero green, clean gold/white) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="mt-6 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400 font-medium flex-wrap"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFCC00]" />
              100% Free Entry
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFCC00]" />
              Global Creator Network
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFCC00]" />
              Zero Spam Moderation
            </span>
          </motion.div>

          {/* ── 3 Value Pillars ── */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full text-left"
          >
            {COMMUNITY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FFCC00]/40 transition-colors duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#FFCC00]/10 border border-[#FFCC00]/30 flex items-center justify-center text-[#FFCC00] mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Cultural Covenant Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.44, duration: 0.5 }}
            className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-2xl mx-auto flex items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFCC00] shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">The CMF Cultural Covenant</h3>
              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                We believe in creative excellence, mutual respect, and intentional collaboration. When you join, bring your gifts with humility and conviction.
              </p>
            </div>
          </motion.div>

        </div>
      </main>
    </>
  );
}
