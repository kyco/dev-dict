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

export function filterTerms(
  terms: TTermLocalized[],
  filters: {
    searchQuery?: string
    selectedTypes?: string[]
    selectedTags?: string[]
  },
): TTermLocalized[] {
  const { searchQuery = '', selectedTypes = [], selectedTags = [] } = filters

  return terms.filter((term) => {
    return matchesSearch(term, searchQuery) && matchesTypes(term, selectedTypes) && matchesTags(term, selectedTags)
  })
}
