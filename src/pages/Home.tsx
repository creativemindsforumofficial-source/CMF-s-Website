import Hero from '../components/Hero';
import TrustAnchor from '../components/TrustAnchor';
import CreativeShowcase from '../components/CreativeShowcase';
import AudacityActionBlock from '../components/AudacityActionBlock';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <TrustAnchor />
      <CreativeShowcase />
      <AudacityActionBlock />
    </main>
  );
}
