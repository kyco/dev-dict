import { Link } from '@tanstack/react-router'
import { useCopyToClipboard } from '~/shared/hooks'
import type { TTermLocalized, TTermTagLocalized, TTermTypeLocalized } from 'dev-dict'
import { Book, Check, Copy } from 'lucide-react'

import { Chip } from './Chip'
import { TermLinks } from './TermLinks'
import { getTermCompleteness } from '~/shared/utils/termUtils'

interface TermCardProps {
  term: TTermLocalized
  searchQuery?: string
  populateEmpty?: boolean
}

export function TermCard({ term, searchQuery, populateEmpty = true }: TermCardProps) {
  const { copied, copy } = useCopyToClipboard()
  const completeness = getTermCompleteness(term.id)

  const copyId = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    copy(term.id)
  }

  return (
    <Link
      to="/term/$termId"
      params={{ termId: term.id }}
      search={{ from: searchQuery || undefined }}
      className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer block"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-0.5">
            {typeof term.name === 'string' && !term.name && !populateEmpty ? `terms[${term.id}].name` : term.name}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-0.5">
            {typeof term.altName === 'string' && !term.altName ? (
              `terms[${term.id}].altName`
            ) : (
              <strong>{term.altName}</strong>
            )}
          </p>

          <p className="text-sm text-slate-500">
            {typeof term.label === 'string' && !term.label && !populateEmpty ? `terms[${term.id}].label` : term.label}
          </p>

          <button
            onClick={copyId}
            className={`inline-flex items-center gap-1 px-2 pt-0.5 mt-2 text-xs rounded transition-all mb-1 ${
              copied
                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                : 'bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200 hover:text-slate-700'
            }`}
            title="Click to copy ID"
          >
            {copied ? (
              <>
                <Check size={12} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={12} />
                <code>{term.id}</code>
              </>
            )}
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Book size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
          <span className="text-xs font-semibold text-slate-400">{completeness.fullPercentage}%</span>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {typeof term.definition === 'string' && !term.definition && !populateEmpty
          ? `terms[${term.id}].definition`
          : term.definition}
      </p>

      {term.type.length || term.tags.length ? (
        <div className="flex flex-wrap items-center gap-1.5">
          {term.type.map((ttype: TTermTypeLocalized) => (
            <Chip
              key={ttype.id}
              label={
                typeof ttype.name === 'string' && !ttype.name && !populateEmpty ? `types[${ttype.id}].name` : ttype.name
              }
              variant="type"
            />
          ))}
          {term.tags.map((ttag: TTermTagLocalized) => (
            <Chip
              key={ttag.id}
              label={
                typeof ttag.name === 'string' && !ttag.name && !populateEmpty ? `tags[${ttag.id}].name` : ttag.name
              }
              variant="tag"
            />
          ))}
        </div>
      ) : null}

      <TermLinks links={term.links} variant="inline" />
    </Link>
  )
}
