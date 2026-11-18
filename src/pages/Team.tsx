import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import TeamCard, { FounderSpotlightCard } from '../components/TeamCard';
import { teamMembers } from '../data/teamMembers';

export default function Team() {
  const founder = teamMembers.find(
    (m) => m.isFounder || m.office.trim().toUpperCase() === 'FOUNDER'
  );
  const coreTeam = founder
    ? teamMembers.filter((m) => m.slug !== founder.slug)
    : teamMembers;

  return (
    <main className="flex-1 w-full bg-[#050505] text-white min-h-screen relative overflow-x-clip selection:bg-[#FFCC00] selection:text-zinc-950">
      <Helmet>
        <title>Meet the Team | Creative Minds' Forum</title>
        <meta
          name="description"
          content="Meet the team behind the Creative Minds' Forum: the leads, creatives and builders driving our programmes and initiatives."
        />
        <meta property="og:title" content="Meet the Team | Creative Minds' Forum" />
        <meta
          property="og:description"
          content="Meet the team behind the Creative Minds' Forum: the leads, creatives and builders driving our programmes and initiatives."
        />
      </Helmet>

      {/* Hero band */}
      <section className="relative pt-24 sm:pt-36 md:pt-40 pb-10 sm:pb-16 md:pb-20 px-4 sm:px-8 text-center border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,204,0,0.16),transparent_60%)]"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">
              Team
            </span>
          </h1>
          <nav aria-label="Breadcrumb" className="mt-4 sm:mt-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            <Link to="/" className="hover:text-[#FFCC00] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-zinc-200" aria-current="page">
              Meet the Team
            </span>
          </nav>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            The architects, the creatives and the visionaries behind every programme we run.
          </p>
        </div>
      </section>

      {/* Founder Spotlight (Top-Center) */}
      {founder && (
        <section
          aria-label="Founder Spotlight"
          className="relative px-3.5 sm:px-8 lg:px-12 pt-8 sm:pt-16 pb-4 sm:pb-10"
        >
          <FounderSpotlightCard member={founder} />
        </section>
      )}

      {/* Core Team Grid */}
      <section className="relative px-3.5 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Faint column guides, echoing the reference layout */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden xl:block bg-[linear-gradient(to_right,transparent_calc(25%-1px),rgba(255,255,255,0.05)_25%,transparent_calc(25%+1px),transparent_calc(50%-1px),rgba(255,255,255,0.05)_50%,transparent_calc(50%+1px),transparent_calc(75%-1px),rgba(255,255,255,0.05)_75%,transparent_calc(75%+1px))]"
        />

        {founder && (
          <div className="relative mx-auto max-w-7xl mb-8 sm:mb-14 flex items-center gap-2.5 sm:gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#FFCC00]/90 text-center">
              Core Leadership &amp; Team
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
          </div>
        )}

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-14">
          {coreTeam.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
