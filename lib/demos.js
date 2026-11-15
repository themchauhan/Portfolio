// Per-business AI receptionist demos, made with the local builder (/demo/builder) and saved in
// data/demos.json. Each one is a pitch for that business, shown at /demo/<slug> (not indexed).
import demos from '@/data/demos.json'
import { typeOf } from '@/lib/demoTypes'

export const RESERVED_SLUGS = ['builder', 'clinic-assistant']
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export const demoSlugs = () => Object.keys(demos)
export const getDemo = (slug) => (Object.hasOwn(demos, slug) ? demos[slug] : null)

export function greetingFor(demo) {
  const t = typeOf(demo.type)
  return `Hello! I'm the AI receptionist at ${demo.name}. Ask me about ${t.noun}, in English or Hindi.`
}

export function suggestionsFor(demo) {
  return demo.suggestions?.length ? demo.suggestions : typeOf(demo.type).suggestions
}
