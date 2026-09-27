import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { navLinks, profile } from '../data/content'

function Monogram({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 4 55 15v20c0 13.5-9.6 22.4-23 25C18.6 57.4 9 48.5 9 35V15Z" fill="#6E7B5C" />
      <path d="M32 10 49 18.4V35c0 10.2-7 16.9-17 19.2C22 51.9 15 45.2 15 35V18.4Z" fill="#FBFAF7" />
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-cream/95 shadow-[0_1px_0_0_rgba(38,40,31,0.02)] backdrop-blur'
          : 'border-b border-transparent bg-cream'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-sage"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-sage-deep"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Let's Talk
        </a>
      </div>
    </header>
  )
}
