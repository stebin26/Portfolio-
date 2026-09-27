import { useEffect, useRef, useState } from 'react'
import { CircleHelp, MessageCircle, Send, X } from 'lucide-react'
import { bestMatch, fallbackMessage } from '../lib/resumeSearch'
import { profile } from '../data/content'

type Message = {
  role: 'user' | 'bot'
  text: string
  source?: string
}

const SUGGESTED = [
  'What projects has Stebin done?',
  "What's his experience with Power BI?",
  'What certifications does he have?',
  'How can I contact him?',
]

export default function AskResume() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: `Hi! I'm ${profile.firstName}'s resume assistant. Ask me anything about his projects, skills, education, or how to reach him.`,
      source: 'Built from resume content',
    },
  ])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timersRef = useRef<number[]>([])

  // Scroll to the latest message
  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Focus input when opened
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  // Clear pending stream timers on unmount
  useEffect(() => {
    const timers = timersRef.current
    return () => timers.forEach(clearTimeout)
  }, [])

  function streamAnswer(text: string, source?: string) {
    const words = text.split(/(\s+)/)
    let i = 0
    setMessages((m) => [...m, { role: 'bot', text: '', source }])

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setMessages((m) => {
        const copy = [...m]
        copy[copy.length - 1] = { role: 'bot', text, source }
        return copy
      })
      setIsStreaming(false)
      return
    }

    setIsStreaming(true)
    const step = () => {
      // Reveal 1–2 words per tick for a natural cadence
      const chunk = words.slice(i, i + 2).join('')
      i += 2
      setMessages((m) => {
        const copy = [...m]
        copy[copy.length - 1] = {
          role: 'bot',
          text: (copy[copy.length - 1].text ?? '') + chunk,
          source,
        }
        return copy
      })
      if (i < words.length) {
        timersRef.current.push(window.setTimeout(step, 24))
      } else {
        setIsStreaming(false)
      }
    }
    timersRef.current.push(window.setTimeout(step, 150))
  }

  function ask(question: string) {
    const q = question.trim()
    if (!q || isStreaming) return
    setMessages((m) => [...m, { role: 'user', text: q }])
    setInput('')

    const match = bestMatch(q)
    if (match) {
      streamAnswer(match.text, match.source)
    } else {
      streamAnswer(fallbackMessage(profile.email))
    }
  }

  return (
    <>
      {/* Floating action button — the one intentional dark element on the page */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="ask-resume-panel"
        aria-label="Ask my resume"
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-cream shadow-[0_10px_30px_-8px_rgba(38,40,31,0.5)] transition-all duration-300 hover:scale-[1.03] hover:bg-black ${
          open ? 'pointer-events-none opacity-0' : 'opacity-100'
        } motion-reduce:transition-none motion-reduce:hover:scale-100`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Ask my resume
      </button>

      {/* Chat panel */}
      <div
        id="ask-resume-panel"
        ref={panelRef}
        role="dialog"
        aria-label="Ask my resume — chat"
        aria-hidden={!open}
        className={`fixed bottom-5 right-5 z-50 flex max-h-[min(560px,calc(100dvh-2.5rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_24px_60px_-16px_rgba(38,40,31,0.35)] transition-all duration-300 ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        } motion-reduce:transition-none`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-line bg-cream px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage">
              <CircleHelp className="h-4 w-4 text-cream" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Ask my resume</p>
              <p className="text-[11px] text-muted">Client-side · answers from real content</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-taupe hover:text-ink"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Messages */}
        <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-br-md bg-sage text-cream'
                    : 'rounded-bl-md border border-line bg-cream text-ink'
                }`}
              >
                <p className="whitespace-pre-wrap">{m.text}</p>
                {m.source && m.text && (
                  <p
                    className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      m.role === 'user' ? 'text-cream/70' : 'text-sage'
                    }`}
                  >
                    From: {m.source}
                  </p>
                )}
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTED.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-sage hover:text-sage"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            ask(input)
          }}
          className="flex items-center gap-2 border-t border-line bg-cream px-3 py-3"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, skills, contact…"
            aria-label="Type your question"
            className="min-w-0 flex-1 rounded-full border border-line bg-panel px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-sage focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || isStreaming}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-cream transition-colors hover:bg-sage-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </>
  )
}
