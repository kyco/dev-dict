import { createFileRoute, Link } from '@tanstack/react-router'
import { Dropdown, SearchBar, TermCard } from '~/components/ui'
import { terms } from 'dev-dict'
import type { TLocale, TTerm } from 'dev-dict'
import { getTags, getTerms, getTypes } from 'dev-dict/utils'
import { CheckCircle, Globe, Layers, Plus, Search, Tag } from 'lucide-react'
import { useMemo, useState } from 'react'

import { useAppContext } from './__root'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || '',
  }),
  component: HomePage,
})

const languages = [
  { code: 'en-US' as TLocale, label: '🇺🇸 English (US)' },
  { code: 'en-GB' as TLocale, label: '🇬🇧 English (GB)' },
  { code: 'de-DE' as TLocale, label: '🇩🇪 Deutsch' },
]

const completenessOptions = [
  { id: 'all', label: 'All terms' },
  { id: 'complete', label: 'Complete only' },
  { id: 'incomplete', label: 'Incomplete only' },
]

function isTermComplete(termId: string): boolean {
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

function HomePage() {
  const { q } = Route.useSearch()
  const navigate = Route.useNavigate()
  const { lang, setLang } = useAppContext()
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [completeness, setCompleteness] = useState<string>('all')

  const dictionary = useMemo(() => getTerms({ terms, locale: lang }), [lang])
  const types = useMemo(() => getTypes({ terms, locale: lang }), [lang])
  const tags = useMemo(() => getTags({ terms, locale: lang }), [lang])

  const typesOptions = useMemo(
    () => types.map((t) => ({ id: t.id, label: t.name })).sort((a, b) => a.label.localeCompare(b.label, lang)),
    [types, lang],
  )
  const tagsOptions = useMemo(
    () => tags.map((t) => ({ id: t.id, label: t.name })).sort((a, b) => a.label.localeCompare(b.label, lang)),
    [tags, lang],
  )

  const setSearch = (value: string) => {
    navigate({ search: { q: value || '' } })
  }

  const filteredTerms = useMemo(() => {
    return dictionary.filter((term) => {
      const searchFields = [term.name, term.definition, term.label, term.altName]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      const matchesSearch = !q || searchFields.includes(q.toLowerCase())
      const matchesType = selectedTypes.length === 0 || term.type.some((t) => selectedTypes.includes(t.id))
      const matchesTags = selectedTags.length === 0 || term.tags.some((t) => selectedTags.includes(t.id))

      let matchesCompleteness = true
      if (completeness === 'complete') {
        matchesCompleteness = isTermComplete(term.id)
      } else if (completeness === 'incomplete') {
        matchesCompleteness = !isTermComplete(term.id)
      }

      return matchesSearch && matchesType && matchesTags && matchesCompleteness
    })
  }, [dictionary, q, selectedTypes, selectedTags, completeness])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <img src="/dev-dict/logo.png" alt="dev-dict logo" className="w-16 h-16 rounded-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-1">dev-dict</h1>
              <p className="text-slate-500 text-sm">Multilingual Software Development Dictionary</p>
            </div>
          </div>
          <Link
            to="/status"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            <Plus size={16} />
            Contribute
          </Link>
        </div>

        <div className="sticky top-4 z-10 bg-cyan-50 p-4 rounded-2xl shadow-md ring-1 ring-cyan-200/50 mb-6">
          <SearchBar value={q} onChange={setSearch} />

          <div className="flex flex-wrap items-center gap-3">
            <Dropdown icon={Globe} placeholder="Language" options={languages} selected={lang} setSelected={setLang} />
            <Dropdown
              icon={CheckCircle}
              placeholder="Status"
              options={completenessOptions}
              selected={completeness}
              setSelected={setCompleteness as (value: string) => void}
            />
            <div className="w-px h-6 bg-slate-200 hidden sm:block" />
            <Dropdown
              icon={Layers}
              placeholder="Types"
              options={typesOptions}
              selected={selectedTypes}
              setSelected={setSelectedTypes}
              multi
            />
            <Dropdown
              icon={Tag}
              placeholder="Tags"
              options={tagsOptions}
              selected={selectedTags}
              setSelected={setSelectedTags}
              multi
            />
            {(selectedTypes.length > 0 || selectedTags.length > 0 || completeness !== 'all') && (
              <button
                onClick={() => {
                  setSelectedTypes([])
                  setSelectedTags([])
                  setCompleteness('all')
                }}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-slate-500">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} searchQuery={q} />
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
              <Search size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-600 font-medium">No terms found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
