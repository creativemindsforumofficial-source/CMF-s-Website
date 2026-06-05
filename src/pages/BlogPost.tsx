import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Helmet } from 'react-helmet-async';

// Simple frontmatter parser
function parseMarkdown(mdContent: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = mdContent.match(frontmatterRegex);
  
  if (match) {
    const rawFrontmatter = match[1];
    const content = match[2];
    
    // Parse the YAML-like frontmatter into an object
    const metadata: Record<string, string> = {};
    rawFrontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        let value = valueParts.join(':').trim();
        // Remove surrounding quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        metadata[key.trim()] = value;
      }
    });

    return { metadata, content };
  }
  
  return { metadata: {}, content: mdContent };
}

export function CinematicAudio({ src, title }: { src?: string, title?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="my-10 p-4 rounded-full bg-zinc-900/80 border border-white/10 flex items-center gap-6 max-w-md w-full mx-auto shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl group">
       <button
         onClick={togglePlay}
         className="w-14 h-14 flex-shrink-0 rounded-full bg-black border border-[var(--color-cmf-gold)] flex items-center justify-center text-[var(--color-cmf-gold)] hover:bg-[var(--color-cmf-gold)] hover:text-black transition-colors shadow-[0_0_15px_rgba(255,204,0,0.4)] relative"
       >
         <div className="absolute inset-[-4px] rounded-full border border-[var(--color-cmf-gold)]/40 animate-[spin_4s_linear_infinite]" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
         {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
       </button>
       <div className="flex flex-col flex-1 truncate pr-4">
         <span className="text-xs font-mono text-[var(--color-cmf-gold)] font-bold uppercase tracking-widest leading-none mb-1.5 opacity-80">
           Audio Transmission
         </span>
         <span className="text-white text-base font-bold truncate tracking-tight">{title || 'Spoken Word Session'}</span>
       </div>
       <audio ref={audioRef} src={src || ""} className="hidden" onEnded={() => setIsPlaying(false)} />
    </div>
  );
}

export function CinematicVideo({ src }: { src?: string }) {
  return (
    <div className="my-14 w-full aspect-video rounded-2xl overflow-hidden bg-black border border-[var(--color-cmf-gold)]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex items-center justify-center group relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmf-gold)]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <iframe
         src={src || ""}
         className="w-full h-full relative z-10"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
      />
    </div>
  )
}

export function PoetryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-16 py-12 px-6 sm:px-12 border-l-2 border-r-2 border-[var(--color-cmf-gold)]/30 text-center font-serif text-xl sm:text-2xl leading-[2.5] text-gray-300 max-w-2xl mx-auto bg-gradient-to-b from-transparent via-[var(--color-cmf-gold)]/[0.03] to-transparent italic rounded-[3rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
       {children}
    </div>
  )
}

export function ArticleConversion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mt-24 bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-8 md:p-14 rounded-[2rem] flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
    >
       <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cmf-gold)]/5 to-transparent pointer-events-none" />

       <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-lg">Join the CMF Global Pipeline</h3>
       <p className="text-gray-400 font-light mb-12 max-w-xl text-lg leading-relaxed">
         This is more than an audience; it's an architecture. Receive the latest thought-leadership and cinematic updates directly into your ecosystem.
       </p>

       <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mb-12">
         <input
           type="email"
           placeholder="Enter your email frequency..."
           className="flex-1 bg-black/60 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-cmf-gold)]/50 transition-colors shadow-inner text-lg"
         />
         <button className="px-10 py-4 bg-[var(--color-cmf-gold)] text-black font-bold tracking-widest uppercase text-sm rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,204,0,0.4)] whitespace-nowrap active:scale-95">
           Subscribe
         </button>
       </div>

       <div className="w-full h-px bg-white/10 mb-12 max-w-md" />

       <Link
         to="/sub-teams"
         className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-[var(--color-cmf-gold)] text-[var(--color-cmf-gold)] text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[var(--color-cmf-gold)] hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,204,0,0.2)] hover:shadow-[0_0_40px_rgba(255,204,0,0.6)] rounded-xl"
       >
         Join our Global Community
       </Link>
    </motion.div>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const effectiveSlug = slug || 'the-architecture-of-vision';
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call or proper dynamic import
    // For now, we fetch the markdown file from the public directory
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/content/blog/${effectiveSlug}.md`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const mdText = await response.text();
        const parsed = parseMarkdown(mdText);
        setMetadata(parsed.metadata);
        setContent(parsed.content);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#050505]">
        <div className="w-10 h-10 border-t-2 border-[var(--color-cmf-gold)] border-solid rounded-full animate-spin"></div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 font-serif">404 - Article Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">The thought-leadership piece you are looking for has been archived or does not exist.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-cmf-gold)] text-black font-bold tracking-widest uppercase hover:brightness-110 transition-all rounded shadow-[0_0_15px_rgba(255,204,0,0.3)]"
        >
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full bg-white dark:bg-[#050505] min-h-screen pt-24 pb-16 relative selection:bg-[var(--color-cmf-gold)] selection:text-black">
      <Helmet>
        <title>{metadata.title ? `${metadata.title} | CMF` : 'Loading | CMF'}</title>
        <meta name="description" content={metadata.excerpt || metadata.bio || 'Creative Minds Forum Thought Leadership.'} />
        <meta property="og:title" content={metadata.title || 'Creative Minds Forum'} />
        <meta property="og:description" content={metadata.excerpt || metadata.bio || 'Read the latest from CMF.'} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={metadata.author || 'CMF Contributor'} />
        <meta property="article:published_time" content={metadata.date} />
        <meta property="og:image" content="/cmf_logo.jpg" />
        {/* Note on Vercel OG: Since this is a client-side Vite application, 
        we simulate the metadata injection using React Helmet. Real social crawler indexing 
        (which often does not run JS) would require a custom Express server endpoint or SSR. */}
      </Helmet>

      {/* Background glow top right */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-[var(--color-cmf-gold)]/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col">
        {/* Ecosystem Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[var(--color-cmf-gold)] dark:hover:text-[var(--color-cmf-gold)] transition-colors font-mono tracking-widest uppercase text-xs font-bold"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
        </motion.div>

        {/* Article Metadata/Title Wrapper */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="mb-16 border-b border-black/10 dark:border-white/10 pb-12"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-black text-black dark:text-white leading-tight mb-8 drop-shadow-lg">
            {metadata.title || "Untitled Article"}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-mono text-sm tracking-wide">
            {metadata.date && <span>{metadata.date}</span>}
            {metadata.date && <span className="text-[var(--color-cmf-gold)]">•</span>}
            <span className="uppercase tracking-widest text-[var(--color-cmf-gold)]">{metadata.author || "CMF Editorial"}</span>
          </div>
        </motion.div>

        {/* Distraction-Free Reader Canvas */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-lg prose-zinc dark:prose-invert prose-a:text-[var(--color-cmf-gold)] hover:prose-a:text-[var(--color-cmf-gold)]/80 prose-headings:font-serif prose-p:leading-relaxed prose-p:font-light prose-blockquote:border-l-[var(--color-cmf-gold)] prose-blockquote:font-serif prose-blockquote:italic max-w-none w-full"
        >
          <Markdown
            rehypePlugins={[rehypeRaw]}
            components={{
              cinematicaudio: ({node, ...props}: any) => <CinematicAudio {...props} />,
              cinematicvideo: ({node, ...props}: any) => <CinematicVideo {...props} />,
              poetrywrapper: ({node, ...props}: any) => <PoetryWrapper {...props} />,
              p: ({node, children, ...props}: any) => {
                const hasBlockItem = node?.children?.some((child: any) => 
                  child.type === 'element' && ['cinematicaudio', 'cinematicvideo', 'poetrywrapper'].includes(child.tagName)
                );
                if (hasBlockItem) {
                  return <div className="my-6" {...props}>{children}</div>;
                }
                return <p {...props}>{children}</p>;
              }
            }}
          >
            {content}
          </Markdown>
        </motion.article>

        {/* Cinematic Author Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mt-24 w-full relative group cursor-pointer"
        >
          {/* Subtle gold glow behind box */}
          <div className="absolute inset-0 bg-[var(--color-cmf-gold)]/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/5 group-hover:border-[var(--color-cmf-gold)]/30 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start overflow-hidden transition-colors duration-500 shadow-2xl">
            {/* Top right architectural accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-cmf-gold)]/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--color-cmf-gold)]/50 pointer-events-none" />

            {/* Avatar */}
            <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-[var(--color-cmf-gold)] transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
               <img 
                 src={metadata.avatar || "/cmf_logo.jpg"} 
                 alt={metadata.author || "Author"} 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               />
            </div>

            {/* Author Details */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">{metadata.author || "CMF Contributor"}</h4>
              <p className="text-[var(--color-cmf-gold)] font-mono text-xs uppercase tracking-[0.2em] font-bold mb-4">
                {metadata.authorRole || "Global Pipeline Member"}
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                {metadata.bio || "A creative mind actively shaping the future through impactful storytelling and technological integration."}
              </p>
              <Link to="/blog" className="text-white text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[var(--color-cmf-gold)] pb-1 transition-all">
                More by this Author →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Global Conversion Block */}
        <ArticleConversion />
      </div>
    </main>
  );
}
