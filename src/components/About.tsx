import { GraduationCap, Award, BadgeCheck } from 'lucide-react'
import { profile } from '../data/content'
import Section from './Section'

const credentials = [
  { label: 'HackerRank SQL Advanced Certification', icon: BadgeCheck },
  { label: 'Best Performer Award — Brototype', icon: Award },
]

export default function About() {
  return (
    <Section id="about" eyebrow="ABOUT ME" heading="A quick introduction">
      <div className="fade-up grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
            {profile.aboutBio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {credentials.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-ink"
              >
                <Icon className="h-4 w-4 text-sage" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-panel p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-tint">
              <GraduationCap className="h-5 w-5 text-sage" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-ink">
                B.Tech, Computer Engineering
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                IES College of Engineering, Thrissur — 2021 to 2024. Currently
                training as a Data Scientist at Brototype, Kochi
                (Aug 2024 – present).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
