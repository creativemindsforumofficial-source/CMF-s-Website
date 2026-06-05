import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import TrustAnchor from '../components/TrustAnchor';
import CreativeShowcase from '../components/CreativeShowcase';
import AudacityActionBlock from '../components/AudacityActionBlock';
import IgnitionLoader from '../components/IgnitionLoader';

export default function Home() {
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    // Exact same timer as Phase 1 anticipation length (1.5s)
    const hoverTimer = setTimeout(() => {
      setIsLaunched(true);
    }, 1500);

    return () => clearTimeout(hoverTimer);
  }, []);

  return (
    <main className={`flex-1 flex flex-col w-full relative ${isLaunched ? 'overflow-visible' : 'overflow-hidden h-[100dvh]'}`}>
      <IgnitionLoader isLaunched={isLaunched} />
      
      {/* The page layout wrapper sliding up attached to the loader */}
      <motion.div
        initial={{ y: '100vh' }}
        animate={isLaunched ? { y: 0 } : { y: '100vh' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="flex-1 flex flex-col w-full z-10"
      >
        <Hero />
        <TrustAnchor />
        <CreativeShowcase />
        <AudacityActionBlock />
      </motion.div>
    </main>
  );
}
