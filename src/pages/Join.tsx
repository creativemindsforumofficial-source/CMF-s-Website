import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { TelegramIcon, WhatsAppIcon } from '../components/SocialIcons';
import { TELEGRAM_INVITE_URL, WHATSAPP_INVITE_URL } from '../data/communityFormOptions';

const COMMUNITY_CHANNELS = [
  {
    id: 'whatsapp',
    label: 'Join on WhatsApp',
    ariaLabel: "Join Creative Minds' Forum Community on WhatsApp",
    href: WHATSAPP_INVITE_URL,
    Icon: WhatsAppIcon,
  },
  {
    id: 'telegram',
    label: 'Join on Telegram',
    ariaLabel: "Join Creative Minds' Forum Community on Telegram",
    href: TELEGRAM_INVITE_URL,
    Icon: TelegramIcon,
  },
] as const;

const COMMUNITY_PILLARS = [
  {
    title: 'Multi-Disciplinary Collaborations',
    description:
      'Connect with writers, directors, spoken word artists, and tech pioneers ready to build high-impact initiatives together.',
    icon: Zap,
  },
  {
    title: 'Priority Flagship Access',
    description:
      'Receive first-wave registration and priority access for Audacity, the Global AI Symposium, and private masterclasses.',
    icon: Compass,
  },
  {
    title: 'Zero Noise, Curated Growth',
    description:
      'Strict anti-spam guidelines ensure every discussion delivers actionable value, inspiration, and genuine collaborative energy.',
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

      <main className="relative min-h-screen bg-[#050505] text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-x-clip selection:bg-[#FFCC00]/30 selection:text-white flex flex-col justify-center">
        {/* Subtle Architectural Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">
              Creative Minds' Forum Community
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance"
          >
            Ready to find your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">
              creative tribe?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl text-balance"
          >
            Step inside the official Creative Minds' Forum community. Connect with writers, filmmakers, spoken word artists, and tech creators building generational work in an atmosphere of mutual elevation.
          </motion.p>

          {/* Paired WhatsApp & Telegram Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none sm:w-auto"
          >
            {COMMUNITY_CHANNELS.map(({ id, label, ariaLabel, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto sm:min-w-[240px] min-h-[52px] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 text-zinc-950 font-bold text-base sm:text-lg tracking-tight transition-all duration-300 shadow-[0_10px_30px_rgba(255,204,0,0.35)] hover:shadow-[0_14px_40px_rgba(255,204,0,0.55)] hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE066] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] cursor-pointer"
              >
                <Icon className="w-5 h-5 shrink-0 text-zinc-950" />
                <span>{label}</span>
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </motion.div>

          {/* Dedicated Bio-Data Onboarding Page CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-4 w-full max-w-md sm:max-w-none flex justify-center"
          >
            <Link
              to="/join/bio-data"
              className="group min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-[#0D0D0D] px-7 py-3 text-sm sm:text-base font-semibold text-zinc-200 transition-colors hover:border-[#FFCC00]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00]"
            >
              <ClipboardList className="w-4 h-4 text-[#FFCC00] shrink-0" />
              <span>Complete Member Bio-Data</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Reassurance Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.5 }}
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

          {/* 3 Value Pillars */}
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
                  className="p-6 sm:p-7 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-[#FFCC00]/40 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#FFCC00]/10 border border-[#FFCC00]/25 flex items-center justify-center text-[#FFCC00] mb-5">
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
            className="mt-12 p-6 rounded-xl bg-[#0A0A0A] border border-white/10 max-w-2xl mx-auto flex items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFCC00] shrink-0">
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
