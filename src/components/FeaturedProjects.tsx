import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  BarChart3,
  ChevronDown,
  Factory,
  GraduationCap,
  Receipt,
  ScanFace,
  ShoppingCart,
  TrendingUp,
  Users,
} from 'lucide-react'
import { featuredProjects, otherProjects, type Project } from '../data/content'
import Section from './Section'

const iconMap = {
  factory: Factory,
  chart: BarChart3,
  users: Users,
  scan: ScanFace,
  cart: ShoppingCart,
  graduation: GraduationCap,
  receipt: Receipt,
  activity: Activity,
  trending: TrendingUp,
} as const

const cardTints = [
  'bg-sage-tint',
  'bg-taupe',
  'bg-sage-tint',
  'bg-taupe',
  'bg-sage-tint',
  'bg-taupe',
  'bg-sage-tint',
  'bg-taupe',
  'bg-sage-tint',
] as const

function ProjectCard({ project, index, small }: { project: Project; index: number; small?: boolean }) {
  const Icon = iconMap[project.icon]
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(38,40,31,0.25)] ${
        small ? '' : ''
      }`}
    >
      {/* Flat graphic header block — no stock photos */}
      <div
        className={`flex items-center justify-center ${cardTints[index % cardTints.length]} ${
          small ? 'h-28' : 'h-44'
        }`}
      >
        <Icon
          className={`${small ? 'h-10 w-10' : 'h-14 w-14'} text-sage transition-transform duration-300 group-hover:scale-110`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <div className={`flex flex-1 flex-col ${small ? 'p-5' : 'p-6'}`}>
        <p className="text-xs font-semibold tracking-[0.14em] text-sage uppercase">
          {project.category}
        </p>
        <h3
          className={`mt-2 font-display font-semibold text-ink ${
            small ? 'text-base' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.hook}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sage transition-colors hover:text-sage-deep"
          aria-label={`${project.title} — view on GitHub`}
        >
          View on GitHub
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false)

  return (
    <Section
      id="work"
      eyebrow="SELECTED WORK"
      heading="Featured Projects"
      headerRight={
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="all-projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage transition-colors hover:text-sage-deep"
        >
          {showAll ? 'Show fewer projects' : 'View all projects'}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      }
    >
      {/* Three top picks */}
      <div className="fade-up grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.github} project={p} index={i} />
        ))}
      </div>

      {/* Remaining six, revealed by the accordion */}
      <div
        id="all-projects"
        hidden={!showAll}
        className="fade-up mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {otherProjects.map((p, i) => (
          <ProjectCard key={p.github} project={p} index={i + 3} small />
        ))}
      </div>

      {showAll && (
        <p className="fade-up mt-8 text-center text-sm text-muted">
          All nine repositories live on{' '}
          <a
            href="https://github.com/stebin26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-sage hover:text-sage-deep"
          >
            GitHub
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      )}
    </Section>
  )
}
