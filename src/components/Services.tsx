import { Brain, ChartPie, Database, Rocket, type LucideIcon } from 'lucide-react'
import { services } from '../data/content'
import Section from './Section'

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  'chart-pie': ChartPie,
  rocket: Rocket,
  database: Database,
}

export default function Services() {
  return (
    <Section id="services" eyebrow="WHAT I DO" heading="Services">
      <div className="fade-up grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = iconMap[s.icon]
          return (
            <div
              key={s.title}
              className="rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(38,40,31,0.25)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage">
                <Icon className="h-5 w-5 text-cream" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
