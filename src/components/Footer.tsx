import { Link } from 'react-router-dom';

const EXPLORE_LINKS = [
  { name: 'About CMF', path: '/about' },
  { name: 'Creative Archive', path: '/my-pen-speaks' },
  { name: 'AI Symposium', path: '/ai-symposium' },
  { name: 'Audacity Conference', path: '/audacity' },
  { name: 'Sub-Teams & Guilds', path: '/sub-teams' },
  { name: 'Editorial Blog', path: '/blog' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'CMF Dispatch', path: '/newsletter' },
  { name: 'Join WhatsApp', path: '/join' }
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-cmf-black)] border-t border-white/10 pt-16 pb-10 mt-auto z-10 relative">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Left: Brand & Mission */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center bg-white rounded-md p-1 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_var(--color-cmf-accent)] transition-all duration-500">
                <img
                  src="/cmf_logo.jpg"
                  alt="CMF Logo"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                />
              </div>
              <span className="font-sans font-bold tracking-tight text-xl text-white">
                Creative Minds' Forum
              </span>
            </Link>
            <p className="text-gray-400 font-normal leading-relaxed text-sm sm:text-base max-w-sm">
              Redefining creativity via the God factor. A global stage and ecosystem for visionary writers, spoken word artists, cinematic storytellers, and vanguard tech-creatives.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-widest text-[var(--color-cmf-gold)] uppercase bg-[var(--color-cmf-gold)]/10 border border-[var(--color-cmf-gold)]/20 px-3 py-1 rounded-full">
                Global Creator Pipeline
              </span>
            </div>
          </div>

          {/* Center: Multi-Page Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs">
              Explore CMF
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Connect & Community */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4 text-left md:text-right">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs">
              Connect
            </h3>
            <a 
              href="mailto:creativemindsforum.official@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium break-all"
            >
              creativemindsforum.official@gmail.com
            </a>
            <a 
              href="https://x.com/official_cmfglobal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[var(--color-cmf-accent)] transition-colors text-sm font-medium"
            >
              Follow: @official_cmfglobal
            </a>
            <div className="pt-2">
              <Link
                to="/sub-teams"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--color-cmf-gold)] hover:text-white transition-colors"
              >
                <span>Join our Community</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: Legal & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>
            © {new Date().getFullYear()} Creative Minds' Forum. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Infallible Truths</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-default">Creative Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
