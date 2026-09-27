import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow: string
  heading: string
  children: ReactNode
  className?: string
  headerRight?: ReactNode
}

export default function Section({
  id,
  eyebrow,
  heading,
  children,
  className = '',
  headerRight,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="fade-up mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-muted">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {heading}
            </h2>
          </div>
          {headerRight}
        </div>
        {children}
      </div>
    </section>
  )
}
