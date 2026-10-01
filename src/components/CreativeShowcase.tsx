import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import NeuralWeb from './NeuralWeb';

interface ShowcaseItem {
  id: number;
  title: string;
  tag: string;
  desc: string;
  image: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Architectural Paradigm',
    tag: 'SPATIAL DESIGN',
    desc: 'Exploring structural symmetry and minimalist concrete geometries in modern living spaces.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Digital Logic',
    tag: 'HARDWARE & CODE',
    desc: 'Silicon architectures and cybernetic logic boards driving contemporary computation.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Cinematic Stills',
    tag: 'FILM & CADENCE',
    desc: 'Atmospheric storytelling captured through 35mm lenses, color grading, and anamorphic depth.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Abstract Light',
    tag: 'VISUAL ARTS',
    desc: 'Refracted prisms, neon luminescence, and chromatic dispersion in high dynamic range.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Neural Networks',
    tag: 'AI EXPLORATION',
    desc: 'Synaptic nodes, emergent intelligence, and synthetic imagination visualized in 3D.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Generative Spaces',
    tag: 'CREATIVE TECH',
    desc: 'Procedurally generated virtual landscapes mapped through algorithmic vector spaces.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Industrial Design',
    tag: 'TACTILE OBJECTS',
    desc: 'Ergonomic forms, brushed titanium, and precision manufacturing engineered for human touch.',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Urban Geometry',
    tag: 'MONOLITHIC SCALE',
    desc: 'Glass monoliths, skyscraper grids, and rhythmic verticality across metropolis horizons.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Sonic Waveforms',
    tag: 'AUDIO CADENCE',
    desc: 'Vibrational frequencies, harmonic resonance, and acoustic synthesis sculpted in space.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'Quantum Echoes',
    tag: 'DEEP FRONTIER',
    desc: 'Cosmic observations, particle entanglement, and speculative astrophysics rendered in deep noir.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  }
];

export default function CreativeShowcase() {
  // Desktop state
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cardSpread, setCardSpread] = useState(320);
  const [isLowPower, setIsLowPower] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef(0);

  // Mobile state & refs
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const handleResizeOrCheck = () => {
      setCardSpread(window.innerWidth < 1024 ? window.innerWidth * 0.55 : window.innerWidth * 0.65);
      
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isLowCores = (navigator.hardwareConcurrency || 4) < 4;
      setIsLowPower(isMobile || prefersReducedMotion || isLowCores);
    };
    handleResizeOrCheck();
    window.addEventListener('resize', handleResizeOrCheck);
    return () => window.removeEventListener('resize', handleResizeOrCheck);
  }, []);

  // Desktop Prev / Next
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  // Keyboard navigation for desktop/tablet
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Desktop Mouse Movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
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

  // Tablet Touch gestures for 3D track
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
  };

  // Mobile Scroll Detection
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cards = container.children;
    if (!cards.length) return;
    
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeMobileIndex) {
      setActiveMobileIndex(closestIndex);
    }
  };

  // Mobile scrollTo helper
  const scrollMobileTo = (index: number) => {
    if (!mobileScrollRef.current) return;
    const targetIndex = Math.max(0, Math.min(index, SHOWCASE_ITEMS.length - 1));
    const container = mobileScrollRef.current;
    const cards = container.children;
    if (cards[targetIndex]) {
      const card = cards[targetIndex] as HTMLElement;
      const scrollTarget = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
      container.scrollTo({
        left: scrollTarget,
        behavior: 'smooth'
      });
      setActiveMobileIndex(targetIndex);
    }
  };

  // Mobile Mouse Drag support (for testing or desktop mouse drag)
  const handleMobileMouseDown = (e: React.MouseEvent) => {
    if (!mobileScrollRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - mobileScrollRef.current.offsetLeft;
    scrollLeftRef.current = mobileScrollRef.current.scrollLeft;
  };

  const handleMobileMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !mobileScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - mobileScrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    mobileScrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMobileMouseUp = () => {
    isDraggingRef.current = false;
  };

  const isLeftHalf = containerRef.current 
    ? mousePosition.x < containerRef.current.getBoundingClientRect().width / 2 
    : false;

  return (
    <section className="w-full py-20 md:py-32 bg-[#050505] border-t border-white/5 relative flex flex-col items-center overflow-hidden">
      {!isLowPower && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <NeuralWeb />
          </Canvas>
        </div>
      )}

      {/* Header Badge */}
      <div className="flex items-center gap-4 mb-10 md:mb-16 relative z-20">
        <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
        <span className="text-[var(--color-cmf-gold)] font-mono text-xs font-bold tracking-[0.2em] uppercase">
          curated expressions
        </span>
        <span className="w-8 h-[1px] bg-[var(--color-cmf-gold)]" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE / TABLET: Native Smooth Horizontal Scroll Carousel
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="w-full lg:hidden flex flex-col items-center relative z-20">
        {/* Horizontal Scroll Track */}
        <div 
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          onMouseDown={handleMobileMouseDown}
          onMouseMove={handleMobileMouseMove}
          onMouseUp={handleMobileMouseUp}
          onMouseLeave={handleMobileMouseUp}
          className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 sm:px-8 py-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x pan-y'
          }}
        >
          {SHOWCASE_ITEMS.map((item, index) => {
            const isCardActive = index === activeMobileIndex;
            return (
              <div
                key={item.id}
                onClick={() => scrollMobileTo(index)}
                className={`shrink-0 snap-center w-[85vw] max-w-[340px] rounded-3xl overflow-hidden bg-[#0d0d12] border transition-all duration-300 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.85)] ${
                  isCardActive
                    ? 'border-[var(--color-cmf-gold)]/70 ring-1 ring-[var(--color-cmf-gold)]/30 scale-[1.01]'
                    : 'border-white/10 opacity-75'
                }`}
                style={{ height: '460px' }}
              >
                {/* Image Top (56%) */}
                <div className="w-full h-[56%] relative overflow-hidden bg-black">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover select-none pointer-events-none" 
                    loading="lazy"
                  />
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-sm uppercase">
                      {item.tag}
                    </span>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-[var(--color-cmf-gold)] text-black shadow-sm">
                      #{item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-black/30 pointer-events-none" />
                </div>

                {/* Typography Bottom (44%) */}
                <div className="w-full h-[44%] p-5 sm:p-6 bg-[#0a0a0d] flex flex-col justify-between border-t border-white/5 relative z-10">
                  <div>
                    <span className="text-[var(--color-cmf-gold)] font-mono text-[11px] font-bold tracking-[0.2em] uppercase block mb-1">
                      NO. {item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cmf-gold)] animate-pulse" />
                      Curated Piece
                    </span>
                    <span className="text-[var(--color-cmf-gold)] font-medium text-xs font-mono">
                      {index + 1} / {SHOWCASE_ITEMS.length}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Controls & Dots */}
        <div className="w-full max-w-sm px-6 mt-6 flex items-center justify-between">
          <button
            onClick={() => scrollMobileTo(activeMobileIndex - 1)}
            disabled={activeMobileIndex === 0}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
              activeMobileIndex === 0
                ? 'border-white/5 text-white/20 cursor-not-allowed bg-black/20'
                : 'border-white/20 bg-white/5 text-white active:scale-90 active:border-[var(--color-cmf-gold)] active:text-[var(--color-cmf-gold)] hover:bg-white/10'
            }`}
            aria-label="Previous expression"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 max-w-[200px] overflow-hidden px-1 py-1">
            {SHOWCASE_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollMobileTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeMobileIndex 
                    ? 'w-6 bg-[var(--color-cmf-gold)] shadow-[0_0_10px_rgba(255,204,0,0.6)]' 
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to expression ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollMobileTo(activeMobileIndex + 1)}
            disabled={activeMobileIndex === SHOWCASE_ITEMS.length - 1}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
              activeMobileIndex === SHOWCASE_ITEMS.length - 1
                ? 'border-white/5 text-white/20 cursor-not-allowed bg-black/20'
                : 'border-white/20 bg-white/5 text-white active:scale-90 active:border-[var(--color-cmf-gold)] active:text-[var(--color-cmf-gold)] hover:bg-white/10'
            }`}
            aria-label="Next expression"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-3 text-[11px] font-mono text-gray-500 tracking-wider uppercase select-none">
          <Compass size={12} className="text-[var(--color-cmf-gold)] animate-spin" style={{ animationDuration: '8s' }} />
          <span>Swipe left or right to explore</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP / TABLET: 3D Perspective Coverflow Gallery
          ══════════════════════════════════════════════════════════════════════ */}
      <div 
        ref={containerRef}
        className="hidden lg:block w-full max-w-[100vw] h-[60vh] min-h-[480px] max-h-[720px] relative group lg:cursor-none select-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleDesktopClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Gallery 3D Track */}
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
                  y: isCenter ? 0 : 35,
                  scale: isCenter ? 1 : 0.9,
                  opacity: isCenter ? 1 : 0.55,
                  zIndex: isCenter ? 50 : 40 - distance,
                  rotateY: isCenter ? 0 : (offset > 0 ? -14 : 14),
                  z: isCenter ? 0 : -60
                }}
                transition={{
                  type: 'tween',
                  duration: 0.8,
                  ease: [0.25, 1, 0.5, 1]
                }}
                className="absolute w-[62vw] max-w-[1020px] aspect-video rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.95)] bg-[#0d0d12] border border-white/10 flex flex-row"
              >
                {/* Typography Half */}
                <div className="w-[45%] h-full p-8 lg:p-12 flex flex-col justify-between bg-[#0a0a0d] relative z-10 border-r border-white/5">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[var(--color-cmf-gold)] font-mono text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                        NO. {item.id < 10 ? `0${item.id}` : item.id}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-white/50 font-mono text-xs tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.08] text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-cmf-gold)] animate-pulse" />
                      Curated Showcase
                    </span>
                    <span className="text-white font-semibold">
                      {index + 1} / {ITEM_COUNT}
                    </span>
                  </div>
                </div>

                {/* Image Half */}
                <div className="w-[55%] h-full relative overflow-hidden bg-black">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    draggable={false}
                  />
                  {/* Subtle overlay */}
                  <div className={`absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-700 ${isCenter ? 'opacity-0' : 'opacity-100'}`} />
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
                x: mousePosition.x - 60,
                y: mousePosition.y - 30
              }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 500, 
                damping: 30, 
                mass: 0.5 
              }}
              className="absolute top-0 left-0 w-[120px] h-[60px] bg-black/50 backdrop-blur-xl border border-[var(--color-cmf-gold)]/40 rounded-full flex items-center justify-center pointer-events-none z-50 text-[var(--color-cmf-gold)] shadow-[0_0_25px_rgba(255,204,0,0.3)] gap-2 select-none"
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

      {/* Desktop Bottom Controls & Dots */}
      <div className="hidden lg:flex items-center gap-6 mt-8 relative z-20">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:border-[var(--color-cmf-gold)] hover:text-[var(--color-cmf-gold)] active:scale-95 transition-all shadow-sm"
          aria-label="Previous card"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {SHOWCASE_ITEMS.map((_, i) => {
            const ITEM_COUNT = SHOWCASE_ITEMS.length;
            const currentIndex = ((activeIndex % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT;
            const isCurrent = i === currentIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCurrent 
                    ? 'w-8 bg-[var(--color-cmf-gold)] shadow-[0_0_12px_rgba(255,204,0,0.7)]' 
                    : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
                aria-label={`Jump to item ${i + 1}`}
              />
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:border-[var(--color-cmf-gold)] hover:text-[var(--color-cmf-gold)] active:scale-95 transition-all shadow-sm"
          aria-label="Next card"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
