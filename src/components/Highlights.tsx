import { Award, BadgeCheck, Layers, type LucideIcon } from 'lucide-react'
import { highlights } from '../data/content'
import Section from './Section'

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  trophy: Award,
  badge: BadgeCheck,
}

export default function Highlights() {
  return (
    <Section id="highlights" eyebrow="KIND WORDS" heading="Highlights">
      <div className="fade-up grid gap-6 lg:grid-cols-3">
        {highlights.map((h) => {
          const Icon = iconMap[h.icon]
          return (
            <figure
              key={h.title}
              className="flex flex-col rounded-2xl border border-line bg-panel p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-tint">
                <Icon className="h-5 w-5 text-sage" aria-hidden="true" />
              </span>
              <blockquote className="mt-5 flex-1">
                <p className="font-display text-lg font-semibold leading-snug text-ink">
                  {h.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {h.description}
                </p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                Stebin P B — verified
              </figcaption>
            </figure>
          )
        })}
      </div>
    </Section>
  )
}
