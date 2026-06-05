import { Helmet } from 'react-helmet-async';
import TeamLoader from '../components/TeamLoader';

export default function Team() {
  return (
    <main className="flex-1 w-full bg-white dark:bg-[#050505] min-h-screen pt-24 pb-16 relative selection:bg-[var(--color-cmf-gold)] selection:text-black">
      <Helmet>
        <title>Meet the Team | Creative Minds' Forum</title>
        <meta name="description" content="Meet the team behind the Creative Minds' Forum." />
      </Helmet>
      
      <TeamLoader />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-black dark:text-white mb-6 drop-shadow-xl tracking-tight text-center">
          The Global Roster
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center text-base md:text-lg mb-12 max-w-2xl mx-auto">
          We are the architects, the creatives, and the visionaries.
        </p>
      </div>
    </main>
  );
}
