export default function TrustAnchor() {
  const words = ["WRITTEN.", "SPOKEN.", "EXPRESSED.", "FUTURE-PROOFED."];

  return (
    <section className="w-full bg-[#0A1217] border-y border-white/10 py-6 md:py-8 backdrop-blur-md z-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-12 lg:gap-16 text-zinc-400 tracking-[0.22em] uppercase text-xs sm:text-sm font-semibold">
          {words.map((word, index) => (
            <div key={index} className="flex items-center gap-5 sm:gap-8 md:gap-12 lg:gap-16">
              <span className="text-zinc-200 font-bold tracking-[0.22em] hover:text-[#FFCC00] transition-colors duration-300 cursor-default">
                {word}
              </span>
              {index !== words.length - 1 && (
                <span className="text-[#FFCC00] select-none font-bold">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
