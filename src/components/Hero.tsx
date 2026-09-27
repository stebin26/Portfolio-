import { ArrowRight, MousePointerClick } from 'lucide-react'
import { profile } from '../data/content'

function NetworkArt() {
  return (
    <svg
      viewBox="0 0 460 460"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <g stroke="#6E7B5C" strokeWidth="1.2" fill="none" opacity="0.45">
        <path d="M40 120 L110 70 L200 110 L290 60 L400 130" strokeDasharray="3 5" />
        <path d="M60 340 L130 390 L230 360 L330 400 L420 330" strokeDasharray="3 5" />
        <path d="M110 70 L130 390" strokeDasharray="2 6" opacity="0.6" />
        <path d="M290 60 L330 400" strokeDasharray="2 6" opacity="0.6" />
        <path d="M200 110 L230 360" strokeDasharray="2 6" opacity="0.6" />
      </g>
      <g fill="#6E7B5C" opacity="0.55">
        <circle cx="40" cy="120" r="4" />
        <circle cx="110" cy="70" r="5" />
        <circle cx="200" cy="110" r="4" />
        <circle cx="290" cy="60" r="5" />
        <circle cx="400" cy="130" r="4" />
        <circle cx="60" cy="340" r="4" />
        <circle cx="130" cy="390" r="5" />
        <circle cx="230" cy="360" r="4" />
        <circle cx="330" cy="400" r="5" />
        <circle cx="420" cy="330" r="4" />
      </g>
      <g
        fontSize="11"
        fontWeight="600"
        letterSpacing="2"
        fill="#6E6E63"
        opacity="0.8"
      >
        <text x="60" y="52">
          DATA → INSIGHT
        </text>
        <text x="300" y="440">
          ML → IMPACT
        </text>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 overflow-hidden py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Copy */}
        <div className="fade-up">
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="text-sage">.</span>
          </h1>
          <p className="mb-5 mt-6 text-xs font-semibold tracking-[0.2em] text-muted">
            DATA SCIENCE THAT DELIVERS RESULTS
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem]">
            I build machine learning systems that are accurate, scalable, and
            production-ready.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.heroSubtext}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-sage-deep"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-sage hover:text-sage"
            >
              Let's Work Together
            </a>
          </div>
        </div>

        {/* Portrait with network line-art — stacked above the copy on mobile */}
        <div className="fade-up relative order-first mx-auto aspect-square w-full max-w-[420px] lg:order-none">
          <NetworkArt />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[78%] w-[78%]">
              <div className="absolute -inset-3 rounded-full border border-line" />
              <img
                src={profile.photo}
                alt="Stebin P B — Data Scientist & ML Engineer"
                width={800}
                height={800}
                loading="eager"
                className="h-full w-full rounded-full object-cover shadow-[0_24px_60px_-24px_rgba(38,40,31,0.35)]"
              />
            </div>
            <MousePointerClick className="absolute bottom-4 right-6 h-5 w-5 text-sage/70" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
