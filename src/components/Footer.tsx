import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const USUAL_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About CMF', path: '/about' },
  { name: 'Our Programs', path: '/programs' },
  { name: 'Editorial Blog', path: '/blog' },
  { name: 'Join Community', path: '/join' },
];

export default function Footer() {
  return (
    <footer className="bg-[#121C22] border-t border-white/10 pt-16 pb-10 mt-auto z-10 relative text-white">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Left: Brand & Mission */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center bg-white rounded-lg p-1 shadow-xs group-hover:scale-105 transition-all duration-300">
                <img
                  src="/cmf_logo.jpg"
                  alt="CMF Logo"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-md"
                />
              </div>
              <span className="font-sans font-extrabold tracking-tight text-xl text-white">
                Creative Minds'<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] ml-1.5">Forum</span>
              </span>
            </Link>
            <p className="text-zinc-400 font-normal leading-relaxed text-sm sm:text-base max-w-sm">
              Redefining creativity via the God factor. A global stage and ecosystem for visionary writers, spoken word artists, cinematic storytellers, and vanguard tech-creatives.
            </p>
            <div className="pt-1">
              <span className="text-[11px] font-mono tracking-widest text-[#FFCC00] uppercase bg-[#FFCC00]/10 border border-[#FFCC00]/25 px-3 py-1 rounded-full">
                Global Creator Pipeline
              </span>
            </div>
          </div>

          {/* Center: Standard Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              {USUAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-zinc-400 hover:text-[#FFCC00] hover:translate-x-1 transition-all duration-200 text-sm font-medium inline-flex items-center gap-1.5 w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]/60" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Connect & Social Media Icons (Lucide React) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-5 text-left md:text-right">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs">
              Connect With Us
            </h3>
            
            {/* Email Contact */}
            <a 
              href="mailto:creativemindsforum.official@gmail.com" 
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#FFCC00] transition-colors text-sm font-medium break-all"
            >
              <Mail className="w-4 h-4 text-[#FFCC00] shrink-0" />
              <span>creativemindsforum.official@gmail.com</span>
            </a>

            {/* Social Media Icons (Lucide React) */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://x.com/cmf_hq" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow CMF on X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-zinc-950 hover:bg-[#FFCC00] hover:border-[#FFCC00] transition-all duration-200 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/creative-minds-forum/?" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Connect with CMF on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-zinc-950 hover:bg-[#FFCC00] hover:border-[#FFCC00] transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/cmf_hq" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow CMF on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-zinc-950 hover:bg-[#FFCC00] hover:border-[#FFCC00] transition-all duration-200 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Join CTA with Yellow Gradient Accent */}
            <div className="pt-2">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 shadow-[0_8px_20px_-6px_rgba(255,204,0,0.35)] active:scale-95 transition-all cursor-pointer"
              >
                <span>Join our Community</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: Legal & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
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
