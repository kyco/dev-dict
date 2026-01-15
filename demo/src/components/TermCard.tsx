import { Link } from '@tanstack/react-router'
import { useAppContext } from '~/shared/context/AppContext'
import { hasTermFieldInLocale } from '~/shared/utils/termUtils'
import type { TTermLocalized, TTermTagLocalized, TTermTypeLocalized } from 'dev-dict'
import { Book, Check, Copy, ExternalLink, Globe } from 'lucide-react'
import { useState } from 'react'

import { Chip } from './Chip'

interface TermCardProps {
  term: TTermLocalized
  searchQuery?: string
  populateEmpty?: boolean
}

export function TermCard({ term, searchQuery, populateEmpty = true }: TermCardProps) {
  const { lang } = useAppContext()
  const [copied, setCopied] = useState(false)

  const hasName = hasTermFieldInLocale(term.id, 'name', lang)
  const hasLabel = hasTermFieldInLocale(term.id, 'label', lang)
  const hasDefinition = hasTermFieldInLocale(term.id, 'definition', lang)

  const copyId = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(term.id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
          {!hasName && !populateEmpty ? (
            <h3 className="text-lg font-bold text-slate-400 italic group-hover:text-blue-600 transition-colors">
              Not provided in selected language
            </h3>
          ) : (
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {term.name}
            </h3>
          )}
          {!hasLabel && !populateEmpty ? (
            <p className="text-sm text-slate-400 italic">Not provided in selected language</p>
          ) : term.label ? (
            <p className="text-sm text-slate-500">{term.label}</p>
          ) : null}
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
        <Book size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
      </div>
      {!hasDefinition && !populateEmpty ? (
        <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">Not provided in selected language</p>
      ) : term.definition ? (
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{term.definition}</p>
      ) : null}

      {term.type.length || term.tags.length ? (
        <div className="flex flex-wrap items-center gap-1.5">
          {term.type.map((t: TTermTypeLocalized) => (
            <Chip key={t.id} label={t.name || 'Not provided in selected language'} variant="type" />
          ))}
          {term.tags.map((t: TTermTagLocalized) => (
            <Chip key={t.id} label={t.name || 'Not provided in selected language'} variant="tag" />
          ))}
        </div>
      ) : null}

      {term.links && Object.keys(term.links).length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
          {term.links.website && (
            <a
              href={term.links.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
            >
              <Globe size={10} />
              Official Website
            </a>
          )}
          {term.links.github && (
            <>
              {term.links.website && <span>·</span>}
              <a
                href={term.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={10} />
                GitHub
              </a>
            </>
          )}
          {term.links.npm && (
            <>
              {(term.links.website || term.links.github) && <span>·</span>}
              <a
                href={term.links.npm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={10} />
                npm
              </a>
            </>
          )}
          {term.links.wikipedia && (
            <>
              {(term.links.website || term.links.github || term.links.npm) && <span>·</span>}
              <a
                href={term.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={10} />
                Wikipedia
              </a>
            </>
          )}
        </div>
      )}
    </Link>
  )
}
