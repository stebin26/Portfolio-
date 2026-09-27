import { knowledgeBase, type KnowledgeDoc } from '../data/knowledge'

const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'did', 'do', 'does',
  'for', 'from', 'had', 'has', 'have', 'he', 'her', 'his', 'how', 'i', 'in',
  'is', 'it', 'its', 'me', 'my', 'of', 'on', 'or', 'our', 's', 'she', 'so',
  'tell', 'than', 'that', 'the', 'their', 'them', 'they', 'this', 'to', 'was',
  'we', 'were', 'what', 'when', 'where', 'which', 'who', 'why', 'will', 'with',
  'you', 'your',
  // question filler
  'any', 'know', 'about', 'like', 'much', 'many', 'kind', 'kinda', 'please',
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#./\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t))
}

/** Pre-computed TF-IDF index over the knowledge base. */
const docTokens: Map<string, number>[] = knowledgeBase.map((doc) => {
  const tokens = tokenize(`${doc.title} ${doc.text} ${doc.keywords.join(' ')}`)
  const tf = new Map<string, number>()
  for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1)
  return tf
})

const docNorms: number[] = docTokens.map((tf) => {
  let sum = 0
  for (const v of tf.values()) sum += v * v
  return Math.sqrt(sum)
})

const df = new Map<string, number>()
for (const tf of docTokens) {
  for (const term of tf.keys()) df.set(term, (df.get(term) ?? 0) + 1)
}

const N = knowledgeBase.length
function idf(term: string): number {
  return Math.log((N + 1) / ((df.get(term) ?? 0) + 1)) + 1
}

export type SearchResult = {
  doc: KnowledgeDoc
  score: number
}

export function search(query: string): SearchResult[] {
  const queryTokens = tokenize(query)
  if (queryTokens.length === 0) return []

  const results: SearchResult[] = knowledgeBase.map((doc, i) => {
    const tf = docTokens[i]
    let dot = 0
    for (const [term, qCount] of queryTermWeights(queryTokens)) {
      const docCount = tf.get(term)
      if (docCount) dot += qCount * docCount * idf(term) * idf(term)
    }
    // Keyword boost: exact keyword/phrase hits are strong signals
    let keywordBonus = 0
    for (const kw of doc.keywords) {
      if (query.toLowerCase().includes(kw) || kw.includes(query.toLowerCase())) {
        keywordBonus += 0.4
      }
    }
    const norm = docNorms[i] || 1
    return { doc, score: dot / (norm * Math.sqrt(queryTokens.length)) + keywordBonus }
  })

  return results
    .filter((r) => r.score > 0.08)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

function* queryTermWeights(tokens: string[]): Generator<[string, number]> {
  const counts = new Map<string, number>()
  for (const t of tokens) counts.set(t, (counts.get(t) ?? 0) + 1)
  yield* counts.entries()
}

/** Best doc for a query, or null if nothing matches confidently. */
export function bestMatch(query: string): KnowledgeDoc | null {
  const results = search(query)
  if (results.length === 0) return null
  const top = results[0]
  // If the runner-up is nearly as strong, the query is ambiguous — still answer
  // with the top hit but this threshold guards against total noise.
  return top.score >= 0.08 ? top.doc : null
}

export function fallbackMessage(email: string): string {
  return `I couldn't find a confident answer for that in the resume. You can ask me about Stebin's projects, skills, education, certifications, or how to reach him — or reach out directly at ${email}.`
}

export type { KnowledgeDoc }
