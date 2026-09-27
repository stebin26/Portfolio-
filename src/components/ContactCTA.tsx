import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { contactCta, profile } from '../data/content'

function ContactArt() {
  return (
    <svg viewBox="0 0 300 300" className="h-64 w-64" aria-hidden="true">
      <g stroke="#6E7B5C" strokeWidth="1.2" fill="none" opacity="0.45">
        <path d="M60 80 L130 40 L210 90 L260 60" strokeDasharray="3 5" />
        <path d="M50 200 L120 250 L200 210 L255 245" strokeDasharray="3 5" />
        <path d="M130 40 L120 250" strokeDasharray="2 6" opacity="0.6" />
        <path d="M210 90 L200 210" strokeDasharray="2 6" opacity="0.6" />
      </g>
      <g fill="#6E7B5C" opacity="0.55">
        <circle cx="60" cy="80" r="4" />
        <circle cx="130" cy="40" r="5" />
        <circle cx="210" cy="90" r="4" />
        <circle cx="260" cy="60" r="5" />
        <circle cx="50" cy="200" r="4" />
        <circle cx="120" cy="250" r="5" />
        <circle cx="200" cy="210" r="4" />
        <circle cx="255" cy="245" r="5" />
      </g>
      <text
        x="70"
        y="150"
        fontSize="10"
        fontWeight="600"
        letterSpacing="2"
        fill="#6E6E63"
        opacity="0.8"
      >
        DATA → INSIGHT
      </text>
    </svg>
  )
}

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="fade-up grid items-center gap-10 rounded-3xl border border-line bg-panel p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted">
              {contactCta.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
              {contactCta.heading}
            </h2>

            <ul className="mt-8 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-tint">
                    <Icon className="h-4.5 w-4.5 text-sage" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-ink transition-colors hover:text-sage"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-sage-deep"
            >
              {contactCta.button}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="hidden justify-center lg:flex">
            <ContactArt />
          </div>
        </div>
      </div>
    </section>
  )
}
