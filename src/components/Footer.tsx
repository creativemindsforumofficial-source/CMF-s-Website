export default function Footer() {
  return (
    <footer className="bg-[var(--color-cmf-black)] border-t border-white/10 pt-16 pb-8 mt-auto z-10 relative">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left: Brand & Mission */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center bg-white rounded-md p-1 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500">
                <img
                  src="/cmf_logo.jpg"
                  alt="CMF Logo"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                />
              </div>
              <span className="font-sans font-bold tracking-tight text-xl text-white">
                Creative Minds' Forum
              </span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Redefining creativity via the God factor. A global pipeline for the excellent.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-col items-start md:items-center gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Explore</h3>
              {['About', 'My Pen Speaks', 'AI Symposium', 'Audacity Conference'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact & Social */}
          <div className="flex flex-col items-start md:items-end gap-4 text-left md:text-right">
            <div className="flex flex-col gap-4 items-start md:items-end">
              <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Connect</h3>
              <a 
                href="mailto:creativemindsforum.official@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                Contact: creativemindsforum.official@gmail.com
              </a>
              <a 
                href="https://x.com/official_cmfglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[var(--color-cmf-accent)] transition-colors text-sm font-medium"
              >
                Follow: @official_cmfglobal
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Legal & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-medium tracking-wider">
            © 2026 Creative Minds' Forum. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
