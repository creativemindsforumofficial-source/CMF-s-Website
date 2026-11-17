import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CommunityBioForm from '../components/CommunityBioForm';

export default function CommunityOnboarding() {
  return (
    <>
      <Helmet>
        <title>Member Bio-Data Onboarding | Creative Minds' Forum</title>
        <meta
          name="description"
          content="Complete your Creative Minds' Forum member bio-data form to register your creative discipline, chapter profile, and community interests."
        />
        <meta property="og:title" content="Member Bio-Data Onboarding | Creative Minds' Forum" />
        <meta
          property="og:description"
          content="Complete your Creative Minds' Forum member bio-data form to register your creative discipline, chapter profile, and community interests."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creativemindsforum.com/join/bio-data" />
      </Helmet>

      <main className="flex-1 w-full min-h-screen bg-[#050505] text-white overflow-x-clip selection:bg-[#FFCC00]/30 selection:text-white">
        {/* Header Band */}
        <section className="pt-28 sm:pt-36 pb-10 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-zinc-400"
            >
              <Link to="/" className="hover:text-[#FFCC00] transition-colors py-1">
                Home
              </Link>
              <span className="text-zinc-600">/</span>
              <Link to="/join" className="hover:text-[#FFCC00] transition-colors py-1">
                Join Community
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-200 py-1" aria-current="page">
                Member Bio-Data
              </span>
            </nav>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-white">
                  Member Bio-Data &amp; Directory Onboarding
                </h1>
                <p className="mt-3 font-sans text-base sm:text-lg text-zinc-400 leading-relaxed">
                  Share your creative discipline, chapter details, and collaboration interests so we can connect you with the right teams and opportunities across CMF.
                </p>
              </div>

              <Link
                to="/join"
                className="min-h-[44px] inline-flex items-center gap-2 self-start sm:self-end rounded-lg border border-white/15 bg-[#0D0D0D] px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:border-[#FFCC00]/50 hover:text-white shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-[#FFCC00]" />
                <span>Back to Community Links</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Multi-Step Onboarding Form */}
        <section
          aria-label="Member Bio-Data Form"
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        >
          <CommunityBioForm />
        </section>
      </main>
    </>
  );
}
