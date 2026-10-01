import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import TrustAnchor from '../components/TrustAnchor';
import CreativeShowcase from '../components/CreativeShowcase';
import AudacityActionBlock from '../components/AudacityActionBlock';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full relative">
      <Helmet>
        <title>Creative Minds' Forum | Your Ideas Will Change the World</title>
        <meta 
          name="description" 
          content="The global stage and pipeline for visionary writers, spoken word artists, cinematic storytellers, and vanguard tech-creatives." 
        />
        <meta property="og:title" content="Creative Minds' Forum" />
        <meta property="og:description" content="Redefining creativity by instilling the God factor, inspiring a generation via infallible truths, and equipping global creatives." />
      </Helmet>
      <Hero />
      <TrustAnchor />
      <CreativeShowcase />
      <AudacityActionBlock />
    </main>
  );
}
