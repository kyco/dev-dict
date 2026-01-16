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
  completeness: 'all' | 'baseline_incomplete' | 'baseline_complete' | 'fully_complete',
  getCompleteness: (termId: string) => { baselineComplete: boolean; fullPercentage: number },
): boolean {
  if (completeness === 'all') return true

  const { baselineComplete, fullPercentage } = getCompleteness(termId)

  if (completeness === 'baseline_incomplete') return !baselineComplete
  if (completeness === 'baseline_complete') return baselineComplete
  if (completeness === 'fully_complete') return fullPercentage === 100

  return true
}

export function filterTerms(
  terms: TTermLocalized[],
  filters: {
    searchQuery?: string
    selectedTypes?: string[]
    selectedTags?: string[]
    completeness?: 'all' | 'baseline_incomplete' | 'baseline_complete' | 'fully_complete'
    getCompleteness?: (termId: string) => { baselineComplete: boolean; fullPercentage: number }
  },
): TTermLocalized[] {
  const {
    searchQuery = '',
    selectedTypes = [],
    selectedTags = [],
    completeness = 'all',
    getCompleteness = () => ({ baselineComplete: true, fullPercentage: 100 }),
  } = filters

  return terms.filter((term) => {
    return (
      matchesSearch(term, searchQuery) &&
      matchesTypes(term, selectedTypes) &&
      matchesTags(term, selectedTags) &&
      matchesCompleteness(term.id, completeness, getCompleteness)
    )
  })
}
