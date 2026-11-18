import { useState } from 'react';
import { ArrowUpRight, Globe, Instagram, Linkedin, Quote, Sparkles } from 'lucide-react';
import type { TeamMember } from '../data/teamMembers';
import { WhatsAppIcon, XIcon } from './SocialIcons';

interface SocialLink {
  key: string;
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

function buildSocials(member: TeamMember): SocialLink[] {
  const links: SocialLink[] = [];
  const { instagram, linkedin, x, whatsapp, portfolio } = member.socials;
  if (linkedin) {
    links.push({ key: 'linkedin', label: `${member.name} on LinkedIn`, href: linkedin, Icon: Linkedin });
  }
  if (portfolio) {
    links.push({
      key: 'portfolio',
      label: `${member.name}'s portfolio`,
      href: /^https?:\/\//i.test(portfolio) ? portfolio : `https://${portfolio}`,
      Icon: Globe,
    });
  }
  if (whatsapp) {
    links.push({
      key: 'whatsapp',
      label: `Message ${member.name} on WhatsApp`,
      href: `https://wa.me/${whatsapp.replace(/\D/g, '')}`,
      Icon: WhatsAppIcon,
    });
  }
  if (instagram) {
    links.push({
      key: 'instagram',
      label: `${member.name} on Instagram`,
      href: `https://instagram.com/${instagram.replace(/^@/, '')}`,
      Icon: Instagram,
    });
  }
  if (x) {
    links.push({
      key: 'x',
      label: `${member.name} on X`,
      href: `https://x.com/${x.replace(/^@/, '')}`,
      Icon: XIcon,
    });
  }
  return links;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function FounderSpotlightCard({ member }: { member: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);
  const socials = buildSocials(member);
  const portfolioLink = socials.find((s) => s.key === 'portfolio');
  const otherSocials = socials.filter((s) => s.key !== 'portfolio');
  const hasQuote = Boolean(member.audacityStatement && member.audacityStatement.trim() !== '--');

  return (
    <article className="group relative mx-auto w-full max-w-4xl">
      {/* Ambient gold radial halo behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 sm:-inset-6 rounded-[2rem] sm:rounded-[2.5rem] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,204,0,0.16),transparent_70%)] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-80"
      />

      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#FFCC00]/40 bg-gradient-to-br from-zinc-900/95 via-[#0B0B0B] to-zinc-950 p-4 sm:p-7 md:p-9 shadow-[0_24px_80px_-20px_rgba(255,204,0,0.25)] ring-1 ring-white/10 transition-all duration-500 hover:border-[#FFCC00]/70">
        {/* Top metallic gold hairline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent"
        />
        {/* Decorative top-right glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FFCC00]/10 blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
          {/* Portrait Column */}
          <div className="md:col-span-5 min-w-0">
            <div className="relative mx-auto max-w-[280px] sm:max-w-[340px] md:max-w-none aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 ring-2 ring-[#FFCC00]/60 shadow-[0_18px_50px_-15px_rgba(255,204,0,0.35)]">
              {imageFailed ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
                  <span className="font-display text-5xl sm:text-6xl font-black text-[#FFCC00]">{getInitials(member.name)}</span>
                </div>
              ) : (
                <img
                  src={member.headshot}
                  alt={`${member.name}, ${member.office}`}
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              {/* Subtle gradient vignette */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating badge on the photo */}
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#FFCC00]/60 bg-black/80 px-2.5 sm:px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#FFCC00] backdrop-blur-md shadow-lg">
                <Sparkles className="h-3 w-3 shrink-0 text-[#FFCC00]" />
                <span>{member.office}</span>
              </div>
            </div>
          </div>

          {/* Editorial Details Column */}
          <div className="md:col-span-7 min-w-0 flex flex-col text-left">
            <div className="inline-flex self-start items-center gap-1.5 sm:gap-2 rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/10 px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#FFCC00] max-w-full">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              <span className="truncate">Founder &amp; Visionary Lead</span>
            </div>

            <h2 className="mt-3 sm:mt-3.5 font-display text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight break-words">
              {member.name}
            </h2>

            {member.nickname && (
              <p className="mt-1 text-sm sm:text-base font-medium italic text-[#FFCC00]/90">
                “{member.nickname}”
              </p>
            )}

            {/* Audacity Statement Pull-Quote */}
            {hasQuote && (
              <blockquote className="relative mt-4 sm:mt-5 rounded-xl sm:rounded-2xl border border-white/10 border-l-4 border-l-[#FFCC00] bg-white/[0.03] p-3.5 sm:p-5">
                <Quote
                  aria-hidden="true"
                  className="pointer-events-none absolute top-3 right-3 h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC00]/20"
                />
                <p className="text-xs sm:text-sm lg:text-[15px] italic leading-relaxed text-zinc-200 pr-5 sm:pr-6">
                  “{member.audacityStatement}”
                </p>
              </blockquote>
            )}

            {/* Core Creative Focus */}
            {member.focus.length > 0 && (
              <div className="mt-4 sm:mt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Core Creative Focus
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2" aria-label="Core creative focus">
                  {member.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#FFCC00]/35 bg-[#FFCC00]/[0.08] px-3 py-1.5 text-xs font-semibold leading-snug text-zinc-100 break-words"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Socials & Portfolio Action Row (Touch-friendly >= 44px) */}
            {socials.length > 0 && (
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                {portfolioLink && (
                  <a
                    href={portfolioLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={portfolioLink.label}
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#FFCC00] px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-950 shadow-[0_10px_25px_-8px_rgba(255,204,0,0.6)] transition-all duration-200 hover:bg-[#FFE066] active:scale-[0.98]"
                  >
                    <Globe className="h-4 w-4 shrink-0" />
                    <span>Portfolio</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                )}

                {otherSocials.map(({ key, label, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-[#141414] text-zinc-200 transition-colors duration-200 hover:border-[#FFCC00] hover:bg-[#FFCC00] hover:text-zinc-950 active:bg-[#FFCC00] active:text-zinc-950"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);
  const socials = buildSocials(member);

  return (
    <article className="group w-full max-w-[380px] sm:max-w-none mx-auto flex flex-col min-w-0">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10 transition-all duration-500 group-hover:ring-[#FFCC00]/60 group-hover:shadow-[0_18px_50px_-18px_rgba(255,204,0,0.35)]">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
            <span className="font-display text-5xl font-black text-[#FFCC00]/80">{getInitials(member.name)}</span>
          </div>
        ) : (
          <img
            src={member.headshot}
            alt={`${member.name}, ${member.office}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-[center_28%] grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 [@media(hover:none)]:grayscale-0"
          />
        )}

        {/* Soft bottom fade for depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Desktop / tablet social rail (reference style) */}
        {socials.length > 0 && (
          <div className="absolute bottom-0 right-0 hidden md:flex flex-col">
            {socials.map(({ key, label, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border-t border-white/10 bg-[#121212]/95 text-zinc-300 backdrop-blur-sm transition-colors duration-200 hover:bg-[#FFCC00] hover:text-zinc-950 focus-visible:bg-[#FFCC00] focus-visible:text-zinc-950 focus:outline-none"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-1 flex-col min-w-0">
        <h2 className="font-display text-base sm:text-lg font-bold leading-snug tracking-tight text-white break-words">
          {member.name}
        </h2>
        {member.nickname && (
          <p className="mt-0.5 text-xs sm:text-sm italic text-zinc-400">“{member.nickname}”</p>
        )}
        <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FFCC00] break-words">{member.office}</p>

        {member.focus.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Core creative focus">
            {member.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[11px] sm:text-xs font-medium leading-snug text-zinc-300 break-words"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Mobile social row (always visible, touch-friendly) */}
        {socials.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 md:hidden">
            {socials.map(({ key, label, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#121212] text-zinc-300 transition-colors duration-200 active:bg-[#FFCC00] active:text-zinc-950 hover:bg-[#FFCC00] hover:text-zinc-950"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
