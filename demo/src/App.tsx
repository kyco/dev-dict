import { getTags, getTerms, getTypes } from 'dev-dict'
import type { TLocale } from 'dev-dict'
import { useMemo, useState } from 'react'

import { ContributionDialog } from './components/ContributionDialog'
import { calculateStats, getGithubEditUrl } from './utils/stats'

type Locale = TLocale

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocale, setSelectedLocale] = useState<Locale>('en-US')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isContributionDialogOpen, setIsContributionDialogOpen] = useState(false)

  const terms = getTerms({ locale: selectedLocale })
  const types = getTypes({ locale: selectedLocale })
  const tags = getTags({ locale: selectedLocale })
  const stats = useMemo(() => calculateStats(), [])

  const filteredTerms = useMemo(() => {
    return terms.filter((term) => {
      const matchesSearch =
        !searchQuery ||
        term.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.label.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = selectedTypes.length === 0 || term.type.some((t) => selectedTypes.includes(t.id))

      const matchesTags = selectedTags.length === 0 || term.tags.some((tag) => selectedTags.includes(tag.id))

      return matchesSearch && matchesType && matchesTags
    })
  }, [terms, searchQuery, selectedTypes, selectedTags])

  const toggleType = (typeId: string) => {
    setSelectedTypes((prev) => (prev.includes(typeId) ? prev.filter((t) => t !== typeId) : [...prev, typeId]))
  }

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]))
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedTags([])
    setSearchQuery('')
  }

  const locales: { value: Locale; label: string }[] = [
    { value: 'en-US', label: '🇺🇸 English (US)' },
    { value: 'en-GB', label: '🇬🇧 English (GB)' },
    { value: 'de-DE', label: '🇩🇪 Deutsch' },
  ]

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">dev-dict</h1>
                <p className="text-slate-600 mt-1">Multilingual Software Development Dictionary</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={selectedLocale}
                  onChange={(e) => setSelectedLocale(e.target.value as Locale)}
                  className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {locales.map((locale) => (
                    <option key={locale.value} value={locale.value}>
                      {locale.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setIsContributionDialogOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Help Us Grow
                </button>
                <a
                  href="https://github.com/kyco/dev-dict"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <ContributionDialog
        isOpen={isContributionDialogOpen}
        onClose={() => setIsContributionDialogOpen(false)}
        stats={stats}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sticky top-28">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
                {(selectedTypes.length > 0 || selectedTags.length > 0) && (
                  <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">Types</h3>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <label key={type.id} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type.id)}
                          onChange={() => toggleType(type.id)}
                          className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{type.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">Tags</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {tags.map((tag) => (
                      <label key={tag.id} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedTags.includes(tag.id)}
                          onChange={() => toggleTag(tag.id)}
                          className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{tag.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-slate-600">
                Showing <span className="font-semibold text-slate-900">{filteredTerms.length}</span> of{' '}
                <span className="font-semibold text-slate-900">{terms.length}</span> terms
              </p>
            </div>

            {filteredTerms.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
                <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-slate-900">No terms found</h3>
                <p className="mt-2 text-slate-600">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredTerms.map((term) => (
                  <article
                    key={term.id}
                    className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900">{term.name}</h3>
                        <p className="text-sm text-blue-600 font-medium mt-1">{term.label}</p>
                      </div>
                      <a
                        href={getGithubEditUrl(term.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5"
                        title="Edit this term on GitHub"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z" />
                        </svg>
                        Edit
                      </a>
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-4">{term.definition}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {term.type.map((type) => (
                        <span
                          key={`${term.id}-type-${type.id}`}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {type.name}
                        </span>
                      ))}
                      {term.tags.map((tag) => (
                        <span
                          key={`${term.id}-tag-${tag.id}`}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    {term.links && (
                      <div className="flex gap-3 pt-4 border-t border-slate-100">
                        {term.links.website && (
                          <a
                            href={term.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            Website
                          </a>
                        )}
                        {term.links.github && (
                          <a
                            href={term.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            GitHub
                          </a>
                        )}
                        {term.links.npm && (
                          <a
                            href={term.links.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            npm
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p>
              Built with{' '}
              <a href="https://github.com/kyco/dev-dict" className="text-blue-600 hover:text-blue-700">
                dev-dict
              </a>
              {' • '}
              <a href="https://www.npmjs.com/package/dev-dict" className="text-blue-600 hover:text-blue-700">
                Install via npm
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
