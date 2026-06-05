import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Creative Archive', href: '/my-pen-speaks' },
  { name: 'Blog', href: '/blog' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'AI Symposium', href: '#' },
  { name: 'Sub-Teams', href: '#' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for frosted glass appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <header 
      className={`fixed w-full top-10 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[var(--color-cmf-black)]/80 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Branding - Left */}
        <Link to="/" className="flex items-center gap-4 z-50 relative group">
          <div className="relative flex items-center justify-center bg-white rounded-md p-1 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_var(--color-cmf-accent)] transition-all duration-500">
            <img 
              src="/cmf_logo.jpg" 
              alt="CMF Logo" 
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain" 
            />
          </div>
          <span className="font-sans font-bold tracking-tight text-xl text-white hidden sm:block">
            Creative Minds' Forum
          </span>
        </Link>

        {/* Links - Center (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA - Right (Desktop) */}
        <div className="hidden md:flex items-center gap-6 z-50 relative">
          <Link 
            to="/sub-teams"
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 bg-black border border-[var(--color-cmf-gold)] text-[var(--color-cmf-gold)] text-sm font-bold tracking-widest uppercase hover:bg-[var(--color-cmf-gold)] hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:shadow-[0_0_25px_rgba(255,204,0,0.5)]"
          >
            Join our Community
          </Link>
          <Link 
            to="/audacity"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-black border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Audacity '26
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative p-2 text-white hover:text-[var(--color-cmf-accent)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 h-screen bg-[var(--color-cmf-black)] z-40 flex flex-col items-center justify-center px-6 border-b border-white/10"
          >
            <nav className="flex flex-col items-center gap-10 w-full">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                    className="text-3xl font-medium tracking-tight text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Link
                to="/audacity"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.4, duration: 0.4 }}
                   className="mt-6 px-10 py-4 bg-transparent border-2 border-white text-white text-xl font-bold tracking-widest uppercase w-full text-center hover:bg-white hover:text-black transition-colors"
                 >
                   Audacity '26
                 </motion.div>
              </Link>
              <Link
                to="/sub-teams"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5, duration: 0.4 }}
                   className="mt-4 px-10 py-4 bg-transparent border-2 border-[var(--color-cmf-gold)] text-[var(--color-cmf-gold)] shadow-[0_0_15px_rgba(255,204,0,0.2)] text-xl font-bold tracking-widest uppercase w-full text-center hover:bg-[var(--color-cmf-gold)] hover:text-black hover:shadow-[0_0_25px_rgba(255,204,0,0.5)] transition-all duration-300"
                 >
                   Join our Community
                 </motion.div>
              </Link>
            </nav>
            
            {/* Ambient Background Glow for Mobile Menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-cmf-accent)] opacity-5 blur-[120px] pointer-events-none rounded-full"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
