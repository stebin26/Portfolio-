import { skillGroups } from '../data/content'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="MY TOOLKIT" heading="Skills">
      <div className="fade-up grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-line bg-panel p-6"
          >
            <h3 className="font-display text-base font-semibold text-ink">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
