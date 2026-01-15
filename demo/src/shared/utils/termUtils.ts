import { terms } from 'dev-dict'
import type { TTerm } from 'dev-dict'

export function isTermComplete(termId: string): boolean {
  const rawTermsMap = terms as Record<string, TTerm>
  const rawTerm = rawTermsMap[termId]
  if (!rawTerm) return false

  const hasType = rawTerm.type.length > 0
  const hasLabel = Object.values(rawTerm.label as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasDefinition = Object.values(rawTerm.definition as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasTags = rawTerm.tags.length > 0
  const hasWebsite = !!rawTerm.links?.website

  return hasType && hasLabel && hasDefinition && hasTags && hasWebsite
}

export function formatSourceName(sourceId: string): string {
  return sourceId.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getSourceDisplayName(source: { id: string; name: Record<string, string> }, locale: string): string {
  const name = source.name[locale] || source.name['en-US'] || source.id
  // If the name is a locale reference, use the referenced locale
  if (name === 'en-US' || name === 'en-GB' || name === 'de-DE') {
    return source.name[name] || formatSourceName(source.id)
  }
  return name
}
