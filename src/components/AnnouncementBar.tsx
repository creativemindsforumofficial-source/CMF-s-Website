import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <Link 
      to="/audacity"
      className="fixed top-0 left-0 w-full z-[60] bg-[var(--color-cmf-gold)] text-[var(--color-cmf-black)] h-10 flex items-center justify-center group hover:brightness-110 transition-all duration-300 border-b border-white/10"
    >
      <div className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.15em] uppercase flex items-center gap-2 md:gap-3">
        <Zap size={14} className="text-[var(--color-cmf-accent)] fill-[var(--color-cmf-accent)] opacity-90 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">The Audacity Conference</span>
        <span className="sm:hidden">Audacity '26</span>
        <span className="opacity-30">|</span>
        <span>June 20, 2026</span>
        <span className="opacity-30">|</span>
        <span className="group-hover:text-[var(--color-cmf-accent)] transition-colors underline decoration-black/20 group-hover:decoration-[var(--color-cmf-accent)] underline-offset-[3px]">Secure Your Seat</span>
      </div>
    </Link>
  );
}
