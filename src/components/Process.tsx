import { Code, Pencil, Rocket, Search, type LucideIcon } from 'lucide-react'
import { processSteps } from '../data/content'
import Section from './Section'

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  pencil: Pencil,
  code: Code,
  rocket: Rocket,
}

export default function Process() {
  return (
    <Section id="process" eyebrow="MY PROCESS" heading="How I Work">
      <div className="fade-up relative">
        {/* Horizontal dotted connector (desktop) */}
        <div
          className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-sage/40 lg:block"
          aria-hidden="true"
        />
        {/* Vertical dotted connector (mobile/tablet) */}
        <div
          className="absolute bottom-6 left-10 top-6 hidden border-l-2 border-dashed border-sage/40 sm:block lg:hidden"
          aria-hidden="true"
        />

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <li key={step.number} className="relative">
                <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-line bg-cream">
                  <Icon className="h-7 w-7 text-sage" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[0.2em] text-sage">
                  {step.number}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
