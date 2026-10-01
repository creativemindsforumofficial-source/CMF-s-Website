import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[75vh] px-6 py-24 text-center relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Creative Minds' Forum</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
      </Helmet>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[var(--color-cmf-gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-lg mx-auto flex flex-col items-center"
      >
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--color-cmf-gold)] uppercase mb-4 px-3 py-1 rounded-full border border-[var(--color-cmf-gold)]/30 bg-[var(--color-cmf-gold)]/10">
          Error 404
        </span>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white mb-4">
          4<span className="text-[var(--color-cmf-gold)]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
          Lost in Creative Space
        </h2>

        <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-md mb-8">
          The coordinate or page you are attempting to reach does not exist, has shifted orbits, or is currently in development.
        </p>

        {/* Action buttons - full width on mobile, inline on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-cmf-gold)] text-black font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)]"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 border border-white/15 text-white font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-white/10 active:scale-95 transition-all"
          >
            <Compass size={18} />
            <span>Explore CMF</span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
