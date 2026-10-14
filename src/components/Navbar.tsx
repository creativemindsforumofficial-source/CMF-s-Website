import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Programs', href: '/programs' },
  { name: 'Creative Archive', href: '/my-pen-speaks' },
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
      className="fixed inset-x-0 top-3 sm:top-5 z-50 font-sans tracking-tight pointer-events-none transition-all duration-300 flex justify-center px-3 sm:px-6 md:px-8"
    >
      {/* Main Suspended Navbar Bar */}
      <div className="w-full max-w-7xl mx-auto flex justify-center pointer-events-none">
        <div className={`w-full pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between border ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.7)] py-2 sm:py-2.5 px-4 sm:px-6 md:px-7' 
            : 'bg-[#050505]/90 backdrop-blur-xl border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2.5 sm:py-3 px-4 sm:px-6 md:px-7'
        }`}>
          
          {/* Brand - Left with High-Contrast Typography */}
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none select-none z-50 shrink-0"
            aria-label="Creative Minds' Forum Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1 ring-white/15 bg-white/10 flex items-center justify-center p-1 transition-all duration-300 group-hover:ring-[#FFCC00] group-hover:scale-105 shadow-xs">
              <img 
                src="/cmf_logo.jpg" 
                alt="CMF Logo" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
            <span className="font-sans font-extrabold tracking-tight text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] transition-colors">
              CMF
            </span>
          </Link>

          {/* Desktop Navigation - Right Aligned with Clean Typography */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            <nav className="flex items-center gap-4 xl:gap-5 2xl:gap-7" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className={`font-sans text-[15px] 2xl:text-base tracking-tight transition-colors duration-200 relative py-1.5 ${
                      isActive 
                        ? 'text-white font-bold' 
                        : 'text-zinc-300 hover:text-white font-medium'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] rounded-full shadow-[0_0_8px_#FFCC00]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Subtle Divider */}
            <div className="h-5 w-[1px] bg-white/15" aria-hidden="true" />

            {/* Action Buttons styled with Yellow Gradient Accent */}
            <div className="flex items-center gap-3">
              {/* Join Community: Yellow Gradient Primary Button */}
              <Link 
                to="/join"
                className="font-sans inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs 2xl:text-sm font-bold tracking-tight text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 shadow-[0_8px_20px_-6px_rgba(255,204,0,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(255,204,0,0.55)] hover:scale-[1.02] active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
              >
                <span>Join Community</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              {/* 4D AI Audit: Subtle Glass Accent Button */}
              <Link 
                to="/ai-audit"
                className="font-sans inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs 2xl:text-sm font-medium tracking-tight text-zinc-200 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#FFCC00]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 shrink-0 cursor-pointer backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
                <span>4D AI Audit</span>
              </Link>
            </div>
          </div>

          {/* Tablet & Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-2.5 sm:gap-3 z-50">
            {/* Quick action pill for tablets/larger mobile */}
            <Link 
              to="/ai-audit"
              className="font-sans hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 shadow-xs active:scale-95 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
              <span>4D Audit</span>
            </Link>

            {/* Hamburger / Exit Button - High-visibility Exit state with icon & text */}
            <button 
              className={`min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center gap-1.5 rounded-full border transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer ${
                isOpen 
                  ? 'bg-zinc-900 hover:bg-black text-white border-white/20 shadow-md ring-2 ring-[#FFCC00]/40' 
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/15 shadow-xs'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Exit navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  <X size={20} className="text-[#FFCC00]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white pr-0.5">Exit</span>
                </>
              ) : (
                <Menu size={22} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Menu Drawer in Dark Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-dvh bg-black/98 backdrop-blur-2xl z-40 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 overflow-y-auto border-b border-white/10 pointer-events-auto text-white"
          >
            {/* Ambient Yellow Background Glow */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 bg-[#FFCC00]/10 blur-[120px] pointer-events-none rounded-full" />

            {/* Dedicated Top Drawer Exit Header Bar for Mobile Accessibility */}
            <div className="w-full max-w-md mx-auto flex items-center justify-between pb-5 border-b border-white/10 relative z-10 shrink-0">
              <div className="flex items-center gap-2.5">
                <img src="/cmf_logo.jpg" alt="CMF Logo" className="w-8 h-8 rounded-lg object-contain border border-white/15" />
                <span className="font-sans font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00]">
                  CMF
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer"
                aria-label="Exit navigation menu"
              >
                <X size={16} className="text-[#FFCC00]" />
                <span>Exit</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1.5 w-full max-w-md mx-auto relative z-10 my-auto py-4" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, i) => {
                const isActive = link.href === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + (i * 0.03), duration: 0.22 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full min-h-[50px] px-4 py-3 rounded-xl flex items-center justify-between text-xl sm:text-2xl font-semibold tracking-tight transition-all active:scale-[0.99] ${
                        isActive
                          ? 'text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] font-bold shadow-md'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'text-zinc-950 translate-x-1' : 'text-zinc-500'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            {/* Drawer Bottom Actions: Yellow Gradient CTA Buttons */}
            <div className="w-full max-w-md mx-auto pt-6 border-t border-white/10 flex flex-col gap-3 relative z-10 shrink-0">
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="w-full group"
              >
                <div className="font-sans min-h-[52px] px-6 py-3.5 rounded-full text-center text-base font-bold tracking-tight text-zinc-950 bg-gradient-to-r from-[#FFE066] via-[#FFCC00] to-[#E69D00] hover:brightness-110 shadow-[0_8px_20px_-6px_rgba(255,204,0,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>Join our Community</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              
              <Link
                to="/ai-audit"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <div className="font-sans min-h-[52px] px-6 py-3.5 rounded-full text-center text-base font-medium tracking-tight text-white bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Sparkles className="w-5 h-5 text-[#FFCC00]" />
                  <span>4D AUDIT TEST</span>
                </div>
              </Link>

              <p className="font-sans text-center text-xs text-zinc-400 pt-2 tracking-tight">
                <span className="text-[#FFCC00] font-semibold">Creative Minds' Forum</span> • Global Platform
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
