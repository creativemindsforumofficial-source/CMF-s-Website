import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ["All", "Systems Thinking", "Creative Resilience", "My Pen Speaks", "Announcements", "Tech & AI"];

const POSTS = [
  {
    slug: 'the-architecture-of-vision',
    title: 'The Architecture of Vision',
    excerpt: 'The digital age demands more than just output—it requires deliberate, systemic thinking. We are building a global pipeline for creatives not to conform to the noise, but to architect new frequencies.',
    author: 'Samuel Arise',
    authorRole: "Founder | Creative Minds' Forum",
    date: '2026-06-05',
    category: 'Systems Thinking',
    coverImage: '/Arise.jpg',
    isFeatured: true,
  },
  {
    slug: 'the-train-chapter-1',
    title: 'The Train: A Serialized Fiction',
    excerpt: 'The journey begins in the silence of the waiting room. A meditation on patience, timing, and the ultimate arrival of destiny.',
    author: 'CMF Editorial',
    authorRole: "Content Team | Story Writers",
    date: '2026-06-02',
    category: 'My Pen Speaks',
    coverImage: '/Arise.jpg',
  },
  {
    slug: 'resilience-in-the-echo-chamber',
    title: 'Resilience in the Echo Chamber',
    excerpt: 'Finding your voice when the room is loud. Why creative resilience is the only required currency for longevity.',
    author: 'Doris',
    authorRole: "Content Team",
    date: '2026-05-28',
    category: 'Creative Resilience',
    coverImage: '/Doris.jpg',
  },
  {
    slug: 'tech-and-the-god-factor',
    title: 'Tech and the God Factor',
    excerpt: 'Bridging the gap between divine inspiration and technological execution. How to code with empathy and architect with purpose.',
    author: 'Gideon',
    authorRole: "Lead Developer",
    date: '2026-05-20',
    category: 'Tech & AI',
    coverImage: '/Gideon.jpg',
  },
  {
    slug: 'the-audacity-recap',
    title: 'The Audacity Challenge Recap',
    excerpt: 'A look back at the radical transformations and submissions from the 2026 Audacity Challenge.',
    author: 'CMF Core',
    authorRole: "Operations",
    date: '2026-05-15',
    category: 'Announcements',
    coverImage: '/audacity_flyer.png',
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const featuredPost = POSTS.find(p => p.isFeatured) || POSTS[0];
  const gridPosts = POSTS.filter(p => !p.isFeatured && (activeCategory === "All" || p.category === activeCategory));

  return (
    <main className="flex-1 w-full bg-white dark:bg-[#050505] min-h-screen pt-24 pb-16 relative selection:bg-[var(--color-cmf-gold)] selection:text-black">
      <Helmet>
        <title>Thought-Leadership | Creative Minds' Forum</title>
        <meta name="description" content="The permanent active engine for thought-leadership, creative storytelling, and technological integration." />
      </Helmet>

      {/* Global Background Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-[var(--color-cmf-gold)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 w-full max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-black text-black dark:text-white mb-6 drop-shadow-xl tracking-tight">The CMF Vanguard</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Where systems thinking meets creative resilience. Do not conform to the noise; architect new frequencies.
          </p>
        </motion.div>

        {/* The Draggable Pill Slider */}
        <div className="w-full mb-16 overflow-hidden relative" ref={sliderRef}>
          {/* Subtle gradient edges to hint at scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />

          <motion.div 
            drag="x"
            dragConstraints={sliderRef}
            dragElastic={0.2}
            className="flex gap-4 items-center px-4 w-max cursor-grab active:cursor-grabbing mx-auto"
          >
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 backdrop-blur-md whitespace-nowrap
                  ${activeCategory === category 
                    ? 'bg-[var(--color-cmf-gold)] text-black shadow-[0_0_20px_rgba(255,204,0,0.4)]' 
                    : 'bg-zinc-100 dark:bg-zinc-900/60 text-black dark:text-white border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'}
                `}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* The Visionary Hero Feature */}
        {activeCategory === "All" && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between xl:w-[85%] mb-20 border-b border-black/10 dark:border-white/10 pb-16"
          >
            {/* Visual Asset (35% on desktop) */}
            <Link to={`/blog/${featuredPost.slug}`} className="w-full lg:w-[40%] aspect-square md:aspect-[4/5] max-h-[65vh] md:max-h-[70vh] overflow-hidden rounded-[2rem] relative group shadow-2xl block">
              <div className="absolute inset-0 bg-[var(--color-cmf-gold)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <img 
                src={featuredPost.coverImage} 
                alt={featuredPost.title}
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0"
              />
            </Link>

            {/* Typography (60% on desktop) */}
            <div className="w-full lg:w-[60%] flex flex-col justify-center items-start text-left">
              <span className="text-[var(--color-cmf-gold)] font-mono text-sm uppercase tracking-[0.2em] font-bold mb-6 block">
                Featured • {featuredPost.category}
              </span>
              <Link to={`/blog/${featuredPost.slug}`} className="group relative block">
                 <h2 className="text-3xl md:text-5xl font-serif font-black text-black dark:text-white leading-[1.1] mb-6 tracking-tight group-hover:text-[var(--color-cmf-gold)] transition-colors duration-500">
                   {featuredPost.title}
                 </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center w-full mt-auto">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full overflow-hidden border border-black/20 dark:border-white/20">
                      <img src={featuredPost.coverImage} alt={featuredPost.author} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-black dark:text-white font-bold text-sm">{featuredPost.author}</span>
                     <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">{featuredPost.date}</span>
                   </div>
                 </div>
                 <Link 
                   to={`/blog/${featuredPost.slug}`}
                   className="mt-4 sm:mt-0 sm:ml-auto inline-flex items-center gap-2 group text-black dark:text-white font-bold uppercase tracking-widest text-sm border-b border-black/30 dark:border-white/30 pb-1 hover:border-[var(--color-cmf-gold)] transition-colors"
                 >
                   Read Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[var(--color-cmf-gold)] transition-transform" />
                 </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* The Cinematic Grid */}
        <div className="w-full relative">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 w-full"
            >
              {gridPosts.map((post, i) => (
                <motion.div
                  layout
                  key={post.slug}
                  initial={{ opacity: 0, y: 80, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0.2 }}
                  className="group flex flex-col"
                >
                  <Link to={`/blog/${post.slug}`} className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative block shadow-xl border border-black/5 dark:border-white/5">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s]"
                    />
                  </Link>

                  <div className="flex flex-col flex-1">
                    <span className="text-[var(--color-cmf-gold)] font-mono text-xs uppercase tracking-[0.15em] font-bold mb-3 block">
                      {post.category}
                    </span>
                    <Link to={`/blog/${post.slug}`} className="min-h-[4rem]">
                      <h3 className="text-2xl font-serif font-bold text-black dark:text-white leading-tight mb-4 group-hover:text-[var(--color-cmf-gold)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-4">
                       <span className="text-black dark:text-gray-300 text-xs font-bold">{post.author}</span>
                       <span className="text-gray-500 text-xs font-mono">{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The Pacing Mechanism: Glowing "Load More" */}
        {gridPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center mt-24"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-transparent border border-[var(--color-cmf-gold)] text-[var(--color-cmf-gold)] font-bold tracking-widest uppercase text-xs rounded-full hover:bg-[var(--color-cmf-gold)] hover:text-black shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] transition-all duration-300"
            >
              Load More Transmissions
            </motion.button>
          </motion.div>
        )}

      </div>
    </main>
  );
}
