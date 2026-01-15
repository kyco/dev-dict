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
