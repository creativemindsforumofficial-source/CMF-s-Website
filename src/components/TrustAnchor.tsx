export default function TrustAnchor() {
  const words = ["WRITTEN.", "SPOKEN.", "EXPRESSED.", "FUTURE-PROOFED."];

  return (
    <section className="w-full bg-white/[0.03] border-y border-white/10 py-8 md:py-10 backdrop-blur-md z-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 text-gray-400 font-sans tracking-[0.25em] uppercase text-xs sm:text-sm font-semibold">
          {words.map((word, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-10 lg:gap-16">
              <span className="text-white drop-shadow-sm hover:text-[var(--color-cmf-accent)] transition-colors duration-500 cursor-default">
                {word}
              </span>
              {index !== words.length - 1 && (
                <span className="text-[var(--color-cmf-accent)]/40 select-none">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
