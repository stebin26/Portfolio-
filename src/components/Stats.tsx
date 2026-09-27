import { ChartPie, Cpu, FolderKanban, Trophy, type LucideIcon } from 'lucide-react'
import { stats } from '../data/content'

const iconMap: Record<string, LucideIcon> = {
  folder: FolderKanban,
  trophy: Trophy,
  cpu: Cpu,
  monitor: ChartPie,
}

export default function Stats() {
  return (
    <section className="bg-taupe py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="fade-up grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.label} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                  <Icon className="h-5 w-5 text-sage" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-muted">{s.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
