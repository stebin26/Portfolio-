import { FileText, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

function Monogram({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 4 55 15v20c0 13.5-9.6 22.4-23 25C18.6 57.4 9 48.5 9 35V15Z" fill="#6E7B5C" />
      <path d="M32 10 49 18.4V35c0 10.2-7 16.9-17 19.2C22 51.9 15 45.2 15 35V18.4Z" fill="#F5F3EC" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="22"
        fill="#26281F"
      >
        S
      </text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <Monogram />
              <span className="leading-tight">
                <span className="block font-display text-base font-bold tracking-wide">
                  STEBIN P B
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.18em] text-muted">
                  {profile.taglineCaps}
                </span>
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-bold tracking-[0.18em] text-ink uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-sage"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-ink uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-sage"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-sage"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-sage"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Stay in touch */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-ink uppercase">
              Stay in touch
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Open to Data Science / ML roles.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-sage hover:text-sage"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="text-xs text-muted">
            © 2026 Stebin P B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
