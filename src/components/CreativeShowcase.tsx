import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import NeuralWeb from './NeuralWeb';

const SHOWCASE_ITEMS = [
  { id: 1, title: 'Architectural Paradigm', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop' },
  { id: 2, title: 'Digital Logic', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Cinematic Stills', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop' },
  { id: 4, title: 'Abstract Light', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Neural Networks', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop' },
  { id: 6, title: 'Generative Spaces', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
  { id: 7, title: 'Industrial Design', image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, title: 'Urban Geometry', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
  { id: 9, title: 'Sonic Waveforms', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop' },
  { id: 10, title: 'Quantum Echoes', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' }
];

export default function CreativeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cardSpread, setCardSpread] = useState(300);
  const [isLowPower, setIsLowPower] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResizeOrCheck = () => {
      setCardSpread(window.innerWidth < 768 ? window.innerWidth * 0.95 : window.innerWidth * 0.65);
      
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isLowCores = (navigator.hardwareConcurrency || 4) < 4;
      setIsLowPower(isMobile || prefersReducedMotion || isLowCores);
    };
    handleResizeOrCheck();
    window.addEventListener('resize', handleResizeOrCheck);
    return () => window.removeEventListener('resize', handleResizeOrCheck);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isLeftHalf = x < rect.width / 2;
    
    if (isLeftHalf) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const isLeftHalf = containerRef.current 
    ? mousePosition.x < containerRef.current.getBoundingClientRect().width / 2 
    : false;

  return (
    <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-white/5 relative flex flex-col items-center overflow-hidden">
      {!isLowPower && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <NeuralWeb />
          </Canvas>
        </div>
      )}

      <div className="flex items-center gap-4 mb-16 relative z-20">
        <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
        <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">
          curated expressions
        </span>
      </div>

      <div 
        ref={containerRef}
        className="w-full max-w-[100vw] h-[60vh] min-h-[450px] max-h-[700px] relative group cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
      >
        {/* Gallery Track */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center"
          style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
        >
          {SHOWCASE_ITEMS.map((item, index) => {
            const ITEM_COUNT = SHOWCASE_ITEMS.length;
            const currentIndex = ((activeIndex % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT;
            
            let offset = index - currentIndex;
            if (offset > Math.floor(ITEM_COUNT / 2)) offset -= ITEM_COUNT;
            if (offset < -Math.floor(ITEM_COUNT / 2)) offset += ITEM_COUNT;

            const isCenter = offset === 0;
            const distance = Math.abs(offset);
            
            if (distance > 2) return null;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: offset * cardSpread,
                  y: isCenter ? 0 : 40,
                  scale: isCenter ? 1 : 0.9,
                  opacity: isCenter ? 1 : 0.6,
                  zIndex: isCenter ? 50 : 40 - distance,
                  rotateY: isCenter ? 0 : (offset > 0 ? -15 : 15),
                  z: isCenter ? 0 : -50
                }}
                transition={{
                  type: 'tween',
                  duration: 1,
                  ease: [0.25, 1, 0.5, 1]
                }}
                className="absolute w-[90vw] md:w-[60vw] max-w-[1000px] aspect-video rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] bg-black border border-white/5 flex flex-col md:flex-row"
              >
                {/* Typography Half */}
                <div className="w-full md:w-[45%] h-[40%] md:h-full p-6 md:p-12 flex flex-col justify-center gap-4 md:gap-6 bg-[#0a0a0a] relative z-10">
                  <span className="text-[var(--color-cmf-gold)] font-mono text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    NO. {item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.1] text-balance">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-sm hidden sm:block text-sm md:text-base">
                    Discover an immersive journey through conceptual spaces and bleeding-edge digital artistry.
                  </p>
                </div>
                {/* Image Half */}
                <div className="w-full md:w-[55%] h-[60%] md:h-full relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                    draggable={false}
                  />
                  {/* Subtle overlay */}
                  <div className={`absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-1000 ${isCenter ? 'opacity-0' : 'opacity-100'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Navigation Bubble */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: mousePosition.x - 60, // Center bubble on cursor
                y: mousePosition.y - 30
              }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 500, 
                damping: 30, 
                mass: 0.5 
              }}
              className="absolute top-0 left-0 w-[120px] h-[60px] bg-black/40 backdrop-blur-xl border border-[var(--color-cmf-gold)]/40 rounded-full flex items-center justify-center pointer-events-none z-50 text-[var(--color-cmf-gold)] shadow-[0_0_25px_rgba(255,204,0,0.3)] gap-2"
              style={{
                position: 'absolute'
              }}
            >
              {isLeftHalf ? (
                <>
                  <ChevronLeft size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Prev</span>
                </>
              ) : (
                <>
                  <span className="text-xs font-bold tracking-widest uppercase">Next</span>
                  <ChevronRight size={18} />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
