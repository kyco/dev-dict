import { Link } from '@tanstack/react-router'
import { Dropdown } from '~/components/Dropdown'
import { StatusIcon } from '~/components/StatusIcon'
import { FILTER_OPTIONS, getGithubEditUrl, SORT_OPTIONS } from '~/shared/constants'
import { getTermCompleteness } from '~/shared/utils/termUtils'
import { terms } from 'dev-dict'
import { getTerms } from 'dev-dict/utils'
import { ArrowLeft, ArrowUpDown, Filter, Pencil, Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type TermStatus = {
  id: string
  name: string
  hasType: boolean
  hasLabel: boolean
  hasDefinition: boolean
  hasTags: boolean
  hasWebsite: boolean
  missingCount: number
}

interface StatusPageProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function StatusPage({ searchQuery, onSearchChange }: StatusPageProps) {
  const [filter, setFilter] = useState<'all' | 'incomplete' | 'complete'>('all')
  const [sortBy, setSortBy] = useState<'name' | 'missing'>('name')

  const termStatuses = useMemo(() => {
    const localizedTerms = getTerms({ terms, locale: 'en-US' })

    return localizedTerms.map((localizedTerm) => {
      const completeness = getTermCompleteness(localizedTerm.id)

      return {
        id: localizedTerm.id,
        name: localizedTerm.name,
        ...completeness,
      } satisfies TermStatus
    })
  }, [])

  const filteredTerms = useMemo(() => {
    let result = termStatuses

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((t) => t.name.toLowerCase().includes(query) || t.id.toLowerCase().includes(query))
    }

    if (filter === 'incomplete') {
      result = result.filter((t) => t.missingCount > 0)
    } else if (filter === 'complete') {
      result = result.filter((t) => t.missingCount === 0)
    }

    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    } else {
      result = [...result].sort((a, b) => b.missingCount - a.missingCount || a.name.localeCompare(b.name))
    }

    return result
  }, [termStatuses, filter, sortBy, searchQuery])

  const stats = useMemo(() => {
    const total = termStatuses.length
    const complete = termStatuses.filter((t) => t.missingCount === 0).length
    const incomplete = total - complete
    return { total, complete, incomplete }
  }, [termStatuses])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          to="/"
          search={{ q: undefined, status: undefined }}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Dictionary</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Contribute</h1>
          <p className="text-slate-500">
            Help us grow! We have <span className="font-semibold text-slate-700">{stats.total}</span> terms —{' '}
            <span className="font-semibold text-emerald-600">{stats.complete}</span> complete and{' '}
            <span className="font-semibold text-amber-600">{stats.incomplete}</span> need more info.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Dropdown
            icon={Filter}
            placeholder="Filter"
            options={FILTER_OPTIONS}
            selected={filter}
            setSelected={setFilter as (value: string) => void}
          />
          <Dropdown
            icon={ArrowUpDown}
            placeholder="Sort by"
            options={SORT_OPTIONS}
            selected={sortBy}
            setSelected={setSortBy as (value: string) => void}
          />
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search terms..."
              autoFocus
              className="w-full pl-9 pr-8 py-2 text-sm bg-white rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <p className="text-sm text-slate-500">
            Showing {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">Term</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">ID</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-slate-600">Type</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-slate-600">Label</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-slate-600">Definition</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-slate-600">Tags</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-slate-600">Website</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTerms.map((term) => (
                  <tr
                    key={term.id}
                    className={`hover:bg-slate-50 transition-colors ${term.missingCount === 0 ? 'bg-emerald-50/30' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <Link
                        to="/term/$termId"
                        params={{ termId: term.id }}
                        search={{ from: '' }}
                        className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                      >
                        {term.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{term.id}</code>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusIcon has={term.hasType} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusIcon has={term.hasLabel} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusIcon has={term.hasDefinition} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusIcon has={term.hasTags} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusIcon has={term.hasWebsite} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <a
                        href={getGithubEditUrl(term.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                        title="Edit on GitHub"
                      >
                        <Pencil size={12} />
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
