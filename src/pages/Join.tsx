import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  MessageSquare,
  Flame,
  Zap,
  Eye,
  X
} from 'lucide-react';

const WHATSAPP_INVITE_URL = 'https://chat.whatsapp.com/CmPHtO4hTzWKtNAaXAN0MR';

interface CommunityCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  altText: string;
  stats: { label: string; value: string }[];
  keyTakeaway: string;
  icon: typeof MessageSquare;
}

const COMMUNITY_CARDS: CommunityCard[] = [
  {
    id: 'welcome',
    badge: 'Founder Direct Line',
    badgeColor: 'from-[#FFE066] to-[#FFB703] text-black',
    title: 'Direct Leadership & Warm Welcome',
    tagline: 'Personal orientation directly from CMF leadership',
    description: 'No distant hierarchies. CMF Founder Samuel Arise and the executive leadership team welcome new members personally, share program updates in real time, and solicit immediate feedback.',
    imageSrc: '/community/chat_welcome.png',
    altText: 'Samuel Arise welcoming new members to the Creative Minds Forum WhatsApp community',
    stats: [
      { label: 'Reactions on Welcome', value: '9+ Active' },
      { label: 'Orientation', value: 'Pinned Form' },
      { label: 'Access Level', value: 'Direct Founder' },
    ],
    keyTakeaway: 'You will never feel like an anonymous number. You are welcomed by name into the creative vanguard.',
    icon: Flame,
  },
  {
    id: 'ecosystem',
    badge: 'The Guild Ecosystem',
    badgeColor: 'from-emerald-400 to-teal-500 text-black',
    title: '6 Specialized Sub-Groups Under 1 Hub',
    tagline: 'Structured pipelines for writers, tech minds, and visual storytellers',
    description: 'CMF is an organized ecosystem of 6 interconnected creative wings. Rather than a chaotic noise chamber, members navigate dedicated guild channels led by active administrators.',
    imageSrc: '/community/group_info.png',
    altText: 'Creative Minds Forum WhatsApp community info showing 6 specialized sub-groups and admin roster',
    stats: [
      { label: 'Specialized Guilds', value: '6 Sub-Groups' },
      { label: 'Core Leaders & Admins', value: '65+ Verified' },
      { label: 'Community Type', value: 'Curated Hub' },
    ],
    keyTakeaway: 'Connect across disciplines: pair your script with our animators, or your tech project with our writers.',
    icon: Layers,
  },
  {
    id: 'culture',
    badge: 'Vibrant Creator Culture',
    badgeColor: 'from-purple-400 to-pink-500 text-white',
    title: 'Unfiltered Banter & Creative Fellowship',
    tagline: 'Late-night debates, spontaneous prompts, and genuine friendships',
    description: 'The best art happens in spaces of psychological safety and shared laughter. From spontaneous zombie apocalypse survival debates to constructive peer critiques, our chat is alive 24/7.',
    imageSrc: '/community/chat_banter.png',
    altText: 'Creators engaging in lively late night banter and thought-provoking creative prompts on WhatsApp',
    stats: [
      { label: 'Chat Energy', value: '24/7 Global' },
      { label: 'Vibe', value: 'Raw & Authentic' },
      { label: 'Peer Feedback', value: 'Constructive' },
    ],
    keyTakeaway: 'A judgment-free crucible to bounce ideas, laugh, test unreleased concepts, and build lifelong creative bonds.',
    icon: Sparkles,
  },
];

const COMMUNITY_PILLARS = [
  {
    title: 'Collaborative Multi-Disciplinary Projects',
    description: 'Meet directors, programmers, poets, visual artists, and music producers ready to team up on high-impact initiatives.',
    icon: Zap,
    accent: '#FFE066',
  },
  {
    title: 'Priority Access to Flagship Programs',
    description: 'Community members receive first-wave registration for Audacity, the Global AI Symposium, and private masterclasses.',
    icon: Sparkles,
    accent: '#25D366',
  },
  {
    title: 'Zero Noise, Curated Creative Growth',
    description: 'Strict anti-spam guidelines ensure every notification delivers value, inspiration, opportunity, or collaborative energy.',
    icon: ShieldCheck,
    accent: '#A78BFA',
  },
];

export default function Join() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeCard = COMMUNITY_CARDS[activeCardIndex];

  const handleSelectCard = (index: number) => {
    setActiveCardIndex(index);
    if (carouselRef.current) {
      const scrollPosition = index * (carouselRef.current.offsetWidth * 0.85);
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Become a Part of Us | CMF Official WhatsApp Community</title>
        <meta
          name="description"
          content="Step inside the official Creative Minds' Forum WhatsApp Community. Connect directly with 65+ creative leaders across 6 specialized guilds, collaborate in real time, and accelerate your creative journey."
        />
        <meta property="og:title" content="Become a Part of Us | Creative Minds' Forum WhatsApp Community" />
        <meta
          property="og:description"
          content="A curated collective of visionary storytellers, designers, tech creators, and spoken word artists. Join our official WhatsApp community today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creativemindsforum.com/join" />
      </Helmet>

      <main className="relative min-h-screen bg-[#08080A] text-white pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-[#25D366]/30 selection:text-white">
        
        {/* ── Background Atmospheric Glows ── */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#25D366]/10 via-[#FFE066]/5 to-transparent blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[600px] bg-emerald-500/[0.04] blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-cmf-gold)]/[0.04] blur-[160px] pointer-events-none -z-10" />

        {/* ── Background Grid Accent ── */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        <div className="max-w-6xl mx-auto">

          {/* ═════════════════════════════════════════════════════════════════
              HEADER / HERO STATEMENT
              ═════════════════════════════════════════════════════════════════ */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner text-xs font-mono text-gray-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]" />
              <span className="text-emerald-400 font-semibold">Official WhatsApp Community</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">65+ Leaders • 6 Guilds</span>
            </motion.div>

            {/* Main Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Become a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FFD000] to-[#25D366]">
                part of us.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl"
            >
              A private collective where raw creativity meets purposeful momentum. 
              Step inside our WhatsApp community for unfiltered peer critique, spontaneous collaborations, and real-time updates from leadership.
            </motion.p>

            {/* Top Primary CTA Button Deck */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-[#25D366] hover:bg-[#22c35e] text-black font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_12px_35px_rgba(37,211,102,0.35)] hover:shadow-[0_16px_45px_rgba(37,211,102,0.5)] active:scale-95"
              >
                {/* Authentic WhatsApp Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform group-hover:scale-110">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.489.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Join the WhatsApp Community</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#cards-glimpse"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white font-medium text-sm transition-all duration-300"
              >
                <span>Explore the Cards</span>
                <span className="text-xs font-mono text-gray-500">↓</span>
              </a>
            </motion.div>

            {/* Trust Micro-Pill */}
            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-400 font-light flex-wrap">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                100% Free Entry
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE066]" />
                6 Creative Guilds
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Zero Spam Moderation
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              THE CARDS CONCEPT: INTERACTIVE COMMUNITY GLIMPSE
              ═════════════════════════════════════════════════════════════════ */}
          <section id="cards-glimpse" className="mt-20 sm:mt-28">
            
            {/* Section Subhead */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFE066] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Inside the Circle
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  A glimpse into our WhatsApp ecosystem.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl">
                  Formatted previews captured directly from our community floor. Switch between the cards below to see how we communicate, organize, and create together.
                </p>
              </div>

              {/* Desktop Interactive Pill Selectors */}
              <div className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
                {COMMUNITY_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  const isSelected = activeCardIndex === idx;
                  return (
                    <button
                      key={card.id}
                      onClick={() => setActiveCardIndex(idx)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        isSelected 
                          ? 'bg-white/10 text-white border border-white/20 shadow-lg' 
                          : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#25D366]' : 'text-gray-400'}`} />
                      <span>{card.badge}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet Horizontal Tab Slider */}
            <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none snap-x">
              {COMMUNITY_CARDS.map((card, idx) => {
                const isSelected = activeCardIndex === idx;
                return (
                  <button
                    key={card.id}
                    onClick={() => handleSelectCard(idx)}
                    className={`shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#25D366] text-black shadow-[0_4px_16px_rgba(37,211,102,0.3)]'
                        : 'bg-white/[0.04] text-gray-300 border border-white/10'
                    }`}
                  >
                    <span>{card.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* ── Active Card Spotlight (Bento & Mockup Layout) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F0F14]/70 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Card Ambient Glow Behind Device */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#25D366]/[0.08] blur-[120px] pointer-events-none" />

              {/* Left Column: Device Mockup Framing the Cropped Community Image */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative group w-full max-w-[320px] sm:max-w-[350px]">
                  
                  {/* Phone Bezel Silhouette */}
                  <div className="relative rounded-[2.8rem] p-3.5 bg-gradient-to-b from-[#222228] to-[#111116] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(37,211,102,0.15)] transition-transform duration-500 group-hover:scale-[1.01]">
                    
                    {/* Simulated Dynamic Island / Speaker Notch */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-black/80 border border-white/10 mr-2" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
                    </div>

                    {/* Screenshot Container with Rounded Display Cutout */}
                    <div className={`relative rounded-[2.2rem] overflow-hidden bg-[#0c1317] border border-white/10 ${
                      activeCard.id === 'culture' ? 'aspect-[474/500]' : 'aspect-[449/820]'
                    } flex items-center justify-center transition-all duration-500`}>
                      <img
                        src={activeCard.imageSrc}
                        alt={activeCard.altText}
                        className={`w-full h-full ${
                          activeCard.id === 'culture'
                            ? 'object-contain'
                            : 'object-cover object-top'
                        } transition-transform duration-700 group-hover:scale-[1.02]`}
                      />
                      
                      {/* Subtle gradient overlay for bottom edge on tall cards */}
                      {activeCard.id !== 'culture' && (
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      )}

                      {/* Click to expand hover overlay */}
                      <button
                        onClick={() => setLightboxImage(activeCard.imageSrc)}
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-xs cursor-zoom-in"
                        aria-label="Enlarge card screenshot"
                      >
                        <span className="p-3 rounded-full bg-black/70 border border-white/20 shadow-lg flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#FFE066]" />
                          Inspect Full Card
                        </span>
                      </button>
                    </div>

                    {/* Phone Reflection Glass Sheen */}
                    <div className="absolute inset-0 rounded-[2.8rem] pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
                  </div>

                  {/* Device Caption & Zoom Hint */}
                  <div className="mt-3 flex items-center justify-between px-3 text-[11px] text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                      Authentic Chat Record
                    </span>
                    <button
                      onClick={() => setLightboxImage(activeCard.imageSrc)}
                      className="text-gray-400 hover:text-[#FFE066] transition-colors flex items-center gap-1"
                    >
                      <span>Click to enlarge</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Architectural Card Content & Stats */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
                
                {/* Active Card Pill */}
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${activeCard.badgeColor}`}>
                    {activeCard.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Concept 0{activeCardIndex + 1} of 03
                  </span>
                </div>

                {/* Card Title & Headline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeCard.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-cmf-gold)]">
                    {activeCard.tagline}
                  </p>
                </div>

                {/* In-depth Breakdown */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {activeCard.description}
                </p>

                {/* Key Metrics / Snapshot Points */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                  {activeCard.stats.map((stat, i) => (
                    <div key={i} className="text-left">
                      <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-1">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Takeaway Highlight */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border-l-2 border-[#25D366] text-xs sm:text-sm text-gray-200 leading-relaxed font-serif italic">
                  "{activeCard.keyTakeaway}"
                </div>

                {/* Direct Action for this Card */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={WHATSAPP_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--color-cmf-gold)] hover:bg-[#FFE066] text-black font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_8px_25px_rgba(255,204,0,0.3)] hover:shadow-[0_10px_35px_rgba(255,204,0,0.45)] active:scale-95"
                  >
                    <span>Join This Community Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {/* Cycle Next Card Button */}
                  <button
                    onClick={() => setActiveCardIndex((prev) => (prev + 1) % COMMUNITY_CARDS.length)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-gray-300 hover:text-white font-medium transition-all"
                  >
                    Next Concept: {COMMUNITY_CARDS[(activeCardIndex + 1) % COMMUNITY_CARDS.length].badge} →
                  </button>
                </div>
              </div>
            </div>

            {/* ── 3-Card Miniature Grid Selector ── */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {COMMUNITY_CARDS.map((card, idx) => {
                const isSelected = activeCardIndex === idx;
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white/[0.07] border-white/30 shadow-xl ring-1 ring-white/20'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                          0{idx + 1} // {card.badge}
                        </span>
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#25D366]' : 'text-gray-500'}`} />
                      </div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {card.title}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-semibold">
                      <span className={isSelected ? 'text-[#FFE066]' : 'text-gray-400'}>
                        {isSelected ? '● Currently viewing' : 'View concept →'}
                      </span>
                      <span className="text-gray-400 font-mono text-[10px]">
                        {card.stats[0].value}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              WHY JOIN CMF? 3 VALUE PILLARS
              ═════════════════════════════════════════════════════════════════ */}
          <section className="mt-24 sm:mt-32">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono text-[#25D366] uppercase tracking-wider">
                The Community Standards
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Designed for high-conviction creators.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-400">
                We believe in creative excellence, mutual respect, and intentional collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMMUNITY_PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${pillar.accent}15`, color: pillar.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.accent }} />
                      <span>CMF Community Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              FINAL MAGNETIC CTA BANNER
              ═════════════════════════════════════════════════════════════════ */}
          <section className="mt-24 sm:mt-32 relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#14141A] to-[#0A0A0F] border border-white/15 text-center shadow-2xl">
            
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#25D366]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFE066]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-6 shadow-[0_0_25px_rgba(37,211,102,0.2)]">
                <Users className="w-7 h-7" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Ready to find your creative tribe?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                Click below to join our official WhatsApp Community. Introduce yourself, tell us what you create, and tap into our ecosystem of visionary builders.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={WHATSAPP_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#25D366] hover:bg-[#22c35e] text-black font-bold text-base tracking-wide transition-all duration-300 shadow-[0_15px_45px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_55px_rgba(37,211,102,0.55)] active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform group-hover:scale-110">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.489.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Join the Community Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400 font-mono flex-wrap">
                <span>Free Membership</span>
                <span>•</span>
                <span>Direct Access Link</span>
                <span>•</span>
                <span>WhatsApp Encrypted</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ═════════════════════════════════════════════════════════════════
          LIGHTBOX MODAL FOR FULLSCREEN CARD INSPECTION
          ═════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <img
                  src={lightboxImage}
                  alt="Expanded Community View"
                  className="w-full max-h-[82vh] object-contain"
                />
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs text-gray-400 font-mono">
                  Press anywhere outside or click close to dismiss
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
