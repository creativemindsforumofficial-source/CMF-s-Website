import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  PenTool, 
  Mic, 
  Film, 
  Cpu, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Users,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SUB_TEAMS = [
  {
    id: 'writers',
    title: 'Writers Guild',
    badge: 'LITERATURE & PROSE',
    icon: PenTool,
    color: 'from-amber-500/20 to-orange-500/5',
    accentColor: '#f59e0b',
    description: 'The narrative core of CMF. Architects of long-form thought, profound essays, poetic cadence, and cinematic world-building scripts.',
    responsibilities: [
      'Editorial curation for CMF publications and anthology',
      'Scripting immersive audio and cinematic visual projects',
      'Publishing cutting-edge philosophical and cultural essays'
    ],
    status: 'Applications Open'
  },
  {
    id: 'spoken-word',
    title: 'Spoken Word & Cadence',
    badge: 'VOICE & PERFORMANCE',
    icon: Mic,
    color: 'from-purple-500/20 to-pink-500/5',
    accentColor: '#a855f7',
    description: 'Vocal visionaries delivering transformative live performances, rhythmic declarations, spoken poetry, and masterfully paced audio pieces.',
    responsibilities: [
      'Live stage performances at Audacity and global showcases',
      'Audio mastering and acoustic storytelling series',
      'Vocal coaching and rhythm cadence workshops'
    ],
    status: 'Applications Open'
  },
  {
    id: 'visual-arts',
    title: 'Cinematic & Visual Arts',
    badge: 'DIRECTION & AESTHETICS',
    icon: Film,
    color: 'from-blue-500/20 to-indigo-500/5',
    accentColor: '#3b82f6',
    description: 'Visual directors, 3D animators, photographers, and cinematographers sculpting arresting aesthetics across physical and digital mediums.',
    responsibilities: [
      'Directing brand docuseries and event filmography',
      'High-dynamic visual curation for CMF galleries',
      'Editorial photography and visual branding suites'
    ],
    status: 'Recruiting'
  },
  {
    id: 'creative-tech',
    title: 'Creative Tech & AI',
    badge: 'SYNTHESIS & CODE',
    icon: Cpu,
    color: 'from-emerald-500/20 to-teal-500/5',
    accentColor: '#10b981',
    description: 'Pioneers exploring the intersection of synthetic intelligence, algorithmic art, interactive WebGL, and generative creativity.',
    responsibilities: [
      'Building interactive digital experiences and tools',
      'Researching ethics and creative applications of generative AI',
      'Leading technical demos at the AI Symposium'
    ],
    status: 'High Demand'
  },
  {
    id: 'operations',
    title: 'Global Operations',
    badge: 'SYSTEMS & STRATEGY',
    icon: Globe,
    color: 'from-amber-400/20 to-yellow-600/5',
    accentColor: '#FFCC00',
    description: 'The organizational backbone orchestrating international events, partnerships, creator pipelines, and community ecosystem health.',
    responsibilities: [
      'International summit and venue operations',
      'Strategic partnership outreach with tech & creative brands',
      'Community cohort management and creator onboarding'
    ],
    status: 'Applications Open'
  }
];

export default function SubTeams() {
  return (
    <main className="flex-1 flex flex-col w-full pt-28 pb-20 sm:pt-32 sm:pb-28 bg-[#050505] text-white">
      <Helmet>
        <title>Sub-Teams & Guilds | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="Explore the specialized sub-teams and creator guilds powering Creative Minds' Forum worldwide. Find your pipeline and join the movement." 
        />
        <meta property="og:title" content="Sub-Teams & Guilds | Creative Minds' Forum" />
        <meta property="og:description" content="Explore the specialized sub-teams and creator guilds powering Creative Minds' Forum worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center mb-16 sm:mb-24 relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
          <span className="text-[var(--color-cmf-gold)] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            Specialized Guilds
          </span>
          <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] text-balance">
          Find Your Tribe in the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--color-cmf-gold)] to-yellow-400">
            Global Ecosystem.
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          CMF operates through specialized sub-teams—focused creative guilds where visionary thinkers, artists, and builders collaborate to produce generational work.
        </p>
      </section>

      {/* Sub-Teams Grid: 1 col on mobile, 2 col on tablet, 3 col on large desktop */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SUB_TEAMS.map((team, idx) => {
            const Icon = team.icon;
            return (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#0d0d12] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative group overflow-hidden"
              >
                {/* Subtle card ambient highlight */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${team.color} rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[var(--color-cmf-gold)]/50 group-hover:text-[var(--color-cmf-gold)] transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 uppercase">
                      {team.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    {team.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    {team.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 mb-8">
                    {team.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 size={14} className="text-[var(--color-cmf-gold)] shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Status & Apply CTA */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {team.status}
                  </span>
                  <a
                    href="mailto:creativemindsforum.official@gmail.com?subject=Application%20for%20CMF%20Sub-Team:%20"
                    className="text-xs font-semibold text-[var(--color-cmf-gold)] hover:text-white flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>Apply to Guild</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Community Callout Banner */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-[var(--color-cmf-gold)]/30 bg-gradient-to-br from-[#181814] via-[#0d0d10] to-[#08080a] p-8 sm:p-12 text-center flex flex-col items-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(255,204,0,0.15)]">
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-cmf-gold)]/10 border border-[var(--color-cmf-gold)]/30 text-[var(--color-cmf-gold)] flex items-center justify-center mb-6">
            <Sparkles size={28} />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Build With Us?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-light leading-relaxed mb-8">
            Whether your medium is ink, vocal frequency, camera sensor, or code logic, CMF provides the pipeline to amplify your gift to global scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="mailto:creativemindsforum.official@gmail.com?subject=Joining%20CMF%20Global%20Community"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-cmf-gold)] text-black font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] text-center"
            >
              Join the Community
            </a>
            <Link
              to="/audacity"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/15 text-white font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-white/10 active:scale-95 transition-all text-center"
            >
              Explore Audacity '26
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
