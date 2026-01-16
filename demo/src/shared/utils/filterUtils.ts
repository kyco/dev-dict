import type { TTermLocalized } from 'dev-dict'

export function matchesSearch(term: TTermLocalized, query: string): boolean {
  if (!query) return true

  const searchFields = [term.name, term.definition, term.label, term.altName].filter(Boolean).join(' ').toLowerCase()

  return searchFields.includes(query.toLowerCase())
}

export function matchesTypes(term: TTermLocalized, selectedTypes: string[]): boolean {
  if (selectedTypes.length === 0) return true
  return term.type.some((t) => selectedTypes.includes(t.id))
}

export function matchesTags(term: TTermLocalized, selectedTags: string[]): boolean {
  if (selectedTags.length === 0) return true
  return term.tags.some((t) => selectedTags.includes(t.id))
}

export function matchesCompleteness(
  termId: string,
  completeness: 'all' | 'complete' | 'incomplete',
  isComplete: (termId: string) => boolean,
): boolean {
  if (completeness === 'all') return true
  if (completeness === 'complete') return isComplete(termId)
  return !isComplete(termId)
}

export function filterTerms(
  terms: TTermLocalized[],
  filters: {
    searchQuery?: string
    selectedTypes?: string[]
    selectedTags?: string[]
    completeness?: 'all' | 'complete' | 'incomplete'
    isComplete?: (termId: string) => boolean
  },
): TTermLocalized[] {
  const {
    searchQuery = '',
    selectedTypes = [],
    selectedTags = [],
    completeness = 'all',
    isComplete = () => true,
  } = filters

  return terms.filter((term) => {
    return (
      matchesSearch(term, searchQuery) &&
      matchesTypes(term, selectedTypes) &&
      matchesTags(term, selectedTags) &&
      matchesCompleteness(term.id, completeness, isComplete)
    )
  })
}
