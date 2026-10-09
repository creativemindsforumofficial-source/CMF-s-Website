import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Our Programs', href: '/programs' },
  { name: 'Creative Archive', href: '/my-pen-speaks' },
  { name: 'Blog', href: '/blog' },
  { name: 'Newsletter', href: '/newsletter' },
  // Unactivated for now (Preserved, do not delete):
  // { name: 'Meet the Team', href: '/team' },
];

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for subtle frosted glass transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile/tablet menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 font-sans tracking-tight transition-all duration-300 flex flex-col ${
        scrolled 
          ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-[var(--color-cmf-gold)]/20 shadow-[0_4px_30px_rgba(0,0,0,0.7)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Main Full-Width Navbar Bar */}
      <div className="w-full">
        <div className={`w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-20 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-3 sm:py-3.5' : 'py-5 sm:py-6'
        }`}>
          
          {/* Brand - Left with CMF Theme Gold Accent & Increased Font */}
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none select-none z-50 shrink-0"
            aria-label="Creative Minds' Forum Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1 ring-[var(--color-cmf-gold)]/40 bg-white/10 flex items-center justify-center p-1 transition-all duration-300 group-hover:ring-[var(--color-cmf-gold)] group-hover:scale-105 shadow-[0_0_15px_rgba(255,204,0,0.2)] group-hover:shadow-[0_0_25px_rgba(255,204,0,0.45)]">
              <img 
                src="/cmf_logo.jpg" 
                alt="CMF Logo" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
            <span className="font-sans font-extrabold tracking-tight text-xl sm:text-2xl text-white transition-colors">
              Creative Minds'<span className="text-[var(--color-cmf-gold)] ml-1.5 group-hover:text-yellow-300 transition-colors">Forum</span>
            </span>
          </Link>

          {/* Desktop Navigation - Right Aligned with Larger Font & Theme Colors */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            <nav className="flex items-center gap-4 xl:gap-5 2xl:gap-7" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className={`font-sans text-[15px] 2xl:text-base tracking-tight transition-colors duration-200 relative py-1.5 ${
                      isActive 
                        ? 'text-[var(--color-cmf-gold)] font-bold drop-shadow-[0_0_12px_rgba(255,204,0,0.4)]' 
                        : 'text-zinc-300 hover:text-[var(--color-cmf-gold)] font-medium'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[var(--color-cmf-gold)] to-[var(--color-cmf-accent)] rounded-full shadow-[0_0_12px_rgba(255,204,0,0.8)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Subtle Divider */}
            <div className="h-5 w-[1px] bg-white/15" aria-hidden="true" />

            {/* Sleek Action Pill Buttons in CMF Theme Colors with Increased Font */}
            <div className="flex items-center gap-3">
              {/* Join Community: CMF Gold Luxury Button */}
              <Link 
                to="/join"
                className="font-sans inline-flex items-center justify-center px-5 py-2 rounded-full text-xs 2xl:text-sm font-extrabold tracking-tight text-black bg-gradient-to-r from-[var(--color-cmf-gold)] via-[#FFD633] to-[var(--color-cmf-gold)] hover:brightness-110 shadow-[0_0_18px_rgba(255,204,0,0.35)] hover:shadow-[0_0_28px_rgba(255,204,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
              >
                Join Community
              </Link>

              {/* 4D AI Audit: CMF Electric Magenta/Accent Button */}
              <Link 
                to="/ai-audit"
                className="font-sans inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs 2xl:text-sm font-bold tracking-tight text-white bg-[#101018]/90 hover:bg-[#181824] border border-[var(--color-cmf-accent)]/60 hover:border-[var(--color-cmf-accent)] shadow-[0_0_18px_rgba(217,0,255,0.25)] hover:shadow-[0_0_28px_rgba(217,0,255,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-cmf-accent)] shadow-[0_0_8px_var(--color-cmf-accent)] animate-pulse" />
                4D AI Audit
              </Link>
            </div>
          </div>

          {/* Tablet & Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-3 z-50">
            {/* Quick action pill in CMF Gold for tablets/larger mobile */}
            <Link 
              to="/ai-audit"
              className="font-sans hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight text-black bg-[var(--color-cmf-gold)] shadow-[0_0_14px_rgba(255,204,0,0.35)] active:scale-95 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>4D Audit</span>
            </Link>

            {/* Hamburger / Close Button - touch target >= 44x44px with Theme Hover */}
            <button 
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[var(--color-cmf-gold)]/60 text-white hover:text-[var(--color-cmf-gold)] transition-all active:scale-95 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Menu Drawer with CMF Theme Colors & Larger Fonts */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-dvh bg-[#07070a]/98 backdrop-blur-2xl z-40 flex flex-col justify-between pt-28 pb-8 px-6 sm:px-10 overflow-y-auto border-b border-[var(--color-cmf-gold)]/20"
          >
            {/* Ambient Background Glow in CMF Theme Colors (Gold + Magenta Accent) */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 bg-[var(--color-cmf-accent)]/15 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[var(--color-cmf-gold)]/10 blur-[140px] pointer-events-none rounded-full" />

            {/* Navigation Links with Significantly Larger Font */}
            <nav className="flex flex-col gap-1.5 w-full max-w-md mx-auto relative z-10 my-auto" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + (i * 0.035), duration: 0.25 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full min-h-[50px] px-4 py-3 rounded-xl flex items-center justify-between text-xl sm:text-2xl font-semibold tracking-tight transition-all active:scale-[0.99] ${
                        isActive
                          ? 'text-[var(--color-cmf-gold)] bg-[var(--color-cmf-gold)]/10 font-bold ring-1 ring-[var(--color-cmf-gold)]/30'
                          : 'text-zinc-200 hover:text-[var(--color-cmf-gold)] hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'text-[var(--color-cmf-gold)] translate-x-1' : 'text-zinc-500'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            {/* Drawer Bottom Actions with Theme Colors */}
            <div className="w-full max-w-md mx-auto pt-6 border-t border-white/10 flex flex-col gap-3 relative z-10">
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <div className="font-sans min-h-[52px] px-6 py-3.5 rounded-full text-center text-base font-extrabold tracking-tight text-black bg-gradient-to-r from-[var(--color-cmf-gold)] to-[#E69D00] shadow-[0_0_22px_rgba(255,204,0,0.4)] active:scale-95 transition-all flex items-center justify-center">
                  Join our Community
                </div>
              </Link>
              
              <Link
                to="/ai-audit"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <div className="font-sans min-h-[52px] px-6 py-3.5 rounded-full text-center text-base font-bold tracking-tight text-white bg-[#12121a] border border-[var(--color-cmf-accent)]/60 hover:border-[var(--color-cmf-accent)] shadow-[0_0_20px_rgba(217,0,255,0.3)] active:scale-95 transition-all flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-[var(--color-cmf-accent)]" />
                  <span>4D AUDIT TEST</span>
                </div>
              </Link>

              <p className="font-sans text-center text-xs text-zinc-400 pt-2 tracking-tight">
                <span className="text-[var(--color-cmf-gold)] font-semibold">Creative Minds' Forum</span> • Global Platform
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
