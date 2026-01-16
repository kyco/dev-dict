import { Link } from '@tanstack/react-router'
import { Dropdown } from '~/components/Dropdown'
import { LanguageDropdown } from '~/components/LanguageDropdown'
import { SearchBar } from '~/components/SearchBar'
import { TermCard } from '~/components/TermCard'
import { FILTER_OPTIONS, LANGUAGES } from '~/shared/constants'
import { useAppContext } from '~/shared/context/AppContext'
import { filterTerms } from '~/shared/utils/filterUtils'
import { getTermCompleteness } from '~/shared/utils/termUtils'
import { terms } from 'dev-dict'
import { getTags, getTerms, getTypes } from 'dev-dict/utils'
import { BookOpen, CheckCircle, Layers, Plus, Search, Tag } from 'lucide-react'
import { useMemo, useState } from 'react'

interface HomePageProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  completeness: string
  onCompletenessChange: (value: string) => void
}

export function HomePage({ searchQuery, onSearchChange, completeness, onCompletenessChange }: HomePageProps) {
  const { lang, setLang, populateEmpty, setPopulateEmpty } = useAppContext()
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const dictionary = useMemo(() => getTerms({ terms, locale: lang, populateEmpty }), [lang, populateEmpty])
  const types = useMemo(() => getTypes({ terms, locale: lang, populateEmpty }), [lang, populateEmpty])
  const tags = useMemo(() => getTags({ terms, locale: lang, populateEmpty }), [lang, populateEmpty])

  const typesOptions = useMemo(
    () => types.map((t) => ({ id: t.id, label: t.name })).sort((a, b) => a.label.localeCompare(b.label, lang)),
    [types, lang],
  )
  const tagsOptions = useMemo(
    () => tags.map((t) => ({ id: t.id, label: t.name })).sort((a, b) => a.label.localeCompare(b.label, lang)),
    [tags, lang],
  )

  const filteredTerms = useMemo(() => {
    return filterTerms(dictionary, {
      searchQuery,
      selectedTypes,
      selectedTags,
      completeness: completeness as 'all' | 'baseline_incomplete' | 'baseline_complete' | 'fully_complete',
      getCompleteness: (termId: string) => {
        const comp = getTermCompleteness(termId)
        return { baselineComplete: comp.baselineComplete, fullPercentage: comp.fullPercentage }
      },
    })
  }, [dictionary, searchQuery, selectedTypes, selectedTags, completeness])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <img src="/dev-dict/logo.png" alt="dev-dict logo" className="w-16 h-16 rounded-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-1">dev-dict</h1>
              <p className="text-slate-500 text-sm">Developer Dictionary</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              <BookOpen size={16} />
              Docs
            </Link>
            <Link
              to="/status"
              search={{ q: undefined }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              <Plus size={16} />
              Contribute
            </Link>
          </div>
        </div>

        <div className="sticky top-4 z-10 bg-cyan-50 p-4 rounded-2xl shadow-md ring-1 ring-cyan-200/50 mb-6">
          <SearchBar value={searchQuery} onChange={onSearchChange} />

          <div className="flex flex-wrap items-center gap-3">
            <LanguageDropdown
              options={LANGUAGES}
              selected={lang}
              setSelected={setLang}
              populateEmpty={populateEmpty}
              setPopulateEmpty={setPopulateEmpty}
            />
            <Dropdown
              icon={CheckCircle}
              placeholder="Status"
              options={FILTER_OPTIONS}
              selected={completeness}
              setSelected={onCompletenessChange}
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
                  onCompletenessChange('all')
                }}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
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
            <TermCard key={term.id} term={term} searchQuery={searchQuery} populateEmpty={populateEmpty} />
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
