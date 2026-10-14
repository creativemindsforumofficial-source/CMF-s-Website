import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Users, Network, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LEADERSHIP_AND_AWARDEES = [
  {
    name: "Arise O.",
    role: "Visionary & Strategy Lead",
    image: "/Arise.jpg",
    bio: "Driving the foundational vision and interdisciplinary growth across global creative chapters."
  },
  {
    name: "Doris M.",
    role: "Editorial & Literary Director",
    image: "/Doris.jpg",
    bio: "Curator of 'My Pen Speaks' archive and vanguard spoken-word poetry initiatives."
  },
  {
    name: "Gideon A.",
    role: "Creative Tech & Innovation Lead",
    image: "/Gideon.jpg",
    bio: "Pioneering creative intelligence frameworks and 4D media fluency across community pipelines."
  },
  {
    name: "RAD (Creative Fellow)",
    role: "Visual & Cinematic Arts Fellow",
    image: "/RAD.jpg",
    bio: "Awardee in cinematic visual storytelling and vanguard community mentorship."
  }
];

export default function About() {
  return (
    <main className="flex-1 flex flex-col w-full bg-white text-zinc-900 pt-28 pb-20 sm:pt-36 sm:pb-24">
      <Helmet>
        <title>About CMF | Creative Minds' Forum</title>
        <meta 
          name="description" 
          content="Learn about the origin, visionary pillars, past awardees, and transformative mission behind the Creative Minds' Forum." 
        />
        <meta property="og:title" content="About CMF | Creative Minds' Forum" />
      </Helmet>

      {/* 1. Visionary Hero */}
      <section className="w-full relative px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden border-b border-zinc-200/80">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <img
            src="/CMF-Hero-1.jpg"
            alt="CMF Heritage"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cmf-gold)] animate-pulse" />
            Our Assignment & Story
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.08] text-balance">
            Ideas that <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] drop-shadow-xs">
              Change the World.
            </span>
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance">
            Redefining creativity via the God factor. A global stage, incubation pipeline, and catalyst for visionary writers, spoken word artists, cinematic storytellers, and vanguard tech-creatives.
          </p>
        </div>
      </section>

      {/* 2. The Blueprint (Vision & Mission) */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#FFE066] to-[#E69D00]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#E69D00] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                The Vision
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              To inspire, equip, and lead a generation of globally relevant creatives.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We envision a world where creative talent from every corner of the African continent and diaspora is recognized at the apex of culture, industry, and spiritual significance.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#FFE066] to-[#E69D00]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#E69D00] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                The Core Assignment
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Impacting our world with excellent skills, tools, and spiritual depth.
            </p>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We provide the mentorship, publishing channels, and technical infrastructure required to thrive, while re-aligning mindsets and creative craftsmanship with ancient, infallible truths.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Past Awardees & Community Fellows */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/30 text-zinc-950 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#FFCC00]" />
              Fellows & Voices
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Past Awardees & Key Leaders
            </h2>
            <p className="text-zinc-600 mt-3 text-base sm:text-lg">
              Honoring the brilliant minds that embody our commitment to artistic rigor and eternal truth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_AND_AWARDEES.map((fellow) => (
              <div 
                key={fellow.name}
                className="group p-6 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-zinc-200/80 hover:border-[#FFCC00] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#FFCC00]/25 mb-5 bg-zinc-200 shrink-0">
                  <img
                    src={fellow.image}
                    alt={fellow.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  {fellow.name}
                </h3>
                <span className="text-xs font-semibold text-amber-700 tracking-wide uppercase mt-1 mb-3">
                  {fellow.role}
                </span>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {fellow.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Pillars (Core Values) */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-28 bg-zinc-50 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
              The Four Pillars
            </h2>
            <p className="text-zinc-600 mt-3 text-base sm:text-lg">
              The non-negotiable architectural anchors of the Creative Minds' Forum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Spirituality & Excellence', icon: Target, desc: 'Rooted in divine truth and uncompromising craft quality.' },
              { title: 'Accountability & Diligence', icon: Lightbulb, desc: 'Faithful stewarding of vision through relentless execution.' },
              { title: 'Integrity & Innovation', icon: Shield, desc: 'Moral uprightness paired with boundary-pushing technological exploration.' },
              { title: 'Collaboration & Creativity', icon: Users, desc: 'Catalyzing community power over isolated individualism.' }
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-5 hover:border-[#FFCC00] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFCC00]/10 border border-[#FFCC00]/30 flex items-center justify-center shrink-0">
                  <pillar.icon className="w-6 h-6 text-[#FFCC00]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Systems Thinking & CTA */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-20 text-center flex flex-col items-center bg-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#FFCC00]/10 flex items-center justify-center text-[#FFCC00] border border-[#FFCC00]/30">
            <Network className="w-7 h-7 text-[#FFCC00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Systems Thinking in Action
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed text-balance">
            We do not just host one-off events; we build interconnected pipelines. We bridge the gap between artistic expression, emotional resilience, and vanguard technology.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 text-zinc-950 font-bold text-base rounded-full shadow-[0_8px_20px_-6px_rgba(255,204,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto cursor-pointer"
            >
              <span>Join the Movement</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#075056] hover:bg-[#043C40] text-white font-medium text-base rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto cursor-pointer"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
