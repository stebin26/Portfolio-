import {
  allProjects,
  profile,
  services,
  skillGroups,
  stats,
} from './content'

export type KnowledgeDoc = {
  id: string
  /** Section shown in the answer's source tag */
  source: string
  title: string
  text: string
  keywords: string[]
}

/* ---------- Derived straight from content.ts — single source of truth ---------- */

const projectDocs: KnowledgeDoc[] = allProjects.map((p) => ({
  id: `project:${p.title}`,
  source: `Projects — ${p.title}`,
  title: p.title,
  text: `${p.title}. ${p.category}. ${p.hook}`,
  keywords: [...p.category.toLowerCase().split(/,\s*/), p.title.toLowerCase()],
}))

const skillDocs: KnowledgeDoc[] = skillGroups.map((g) => ({
  id: `skills:${g.title}`,
  source: `Skills — ${g.title}`,
  title: g.title,
  text: `${g.title}: ${g.skills.join(', ')}.`,
  keywords: [g.title.toLowerCase(), ...g.skills.map((s) => s.toLowerCase())],
}))

const serviceDocs: KnowledgeDoc[] = services.map((s) => ({
  id: `service:${s.title}`,
  source: `Services — ${s.title}`,
  title: s.title,
  text: `${s.title}. ${s.description}`,
  keywords: [s.title.toLowerCase()],
}))

const statDocs: KnowledgeDoc[] = stats.map((s) => ({
  id: `stat:${s.label}`,
  source: `Stats — ${s.label}`,
  title: s.label,
  text: `${s.value} — ${s.label}.`,
  keywords: [s.label.toLowerCase()],
}))

const profileDocs: KnowledgeDoc[] = [
  {
    id: 'profile:who',
    source: 'About — Stebin P B',
    title: 'Who is Stebin P B?',
    text: `${profile.name} is a ${profile.tagline} based in ${profile.location}. ${profile.heroSubtext}`,
    keywords: ['who', 'about', 'stebin', 'bio', 'introduction', 'data scientist', 'ml engineer'],
  },
  {
    id: 'profile:education',
    source: 'About — Education',
    title: 'Education & training',
    text: profile.aboutBio,
    keywords: ['education', 'college', 'btech', 'b.tech', 'degree', 'computer engineering', 'ies', 'thrissur', 'brototype', 'training', 'study', 'studied'],
  },
  {
    id: 'profile:certifications',
    source: 'About — Certifications & Awards',
    title: 'Certifications & awards',
    text: 'HackerRank SQL Advanced Certification. Best Performer Award at Brototype. Won 1st Prize at a hackathon for the final-year engineering project.',
    keywords: ['certification', 'certificate', 'hackerrank', 'sql advanced', 'award', 'best performer', 'hackathon', 'prize', 'won', 'achievement'],
  },
  {
    id: 'profile:contact',
    source: 'Contact',
    title: 'Contact information',
    text: `Email: ${profile.email}. Phone: ${profile.phone}. Location: ${profile.location}. Open to Data Science / ML roles.`,
    keywords: ['contact', 'email', 'phone', 'call', 'reach', 'hire', 'location', 'kerala', 'based', 'where'],
  },
  {
    id: 'profile:links',
    source: 'Footer — Links',
    title: 'GitHub, LinkedIn & resume',
    text: `GitHub: ${profile.github}. LinkedIn: ${profile.linkedin}. Resume PDF is available for download in the footer.`,
    keywords: ['github', 'linkedin', 'resume', 'cv', 'download', 'profile', 'link'],
  },
]

export const knowledgeBase: KnowledgeDoc[] = [
  ...projectDocs,
  ...skillDocs,
  ...serviceDocs,
  ...statDocs,
  ...profileDocs,
]
