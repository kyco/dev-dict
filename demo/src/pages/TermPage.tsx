import { useRouter } from '@tanstack/react-router'
import { terms } from 'dev-dict'
import type { TTermTagLocalized, TTermTypeLocalized } from 'dev-dict'
import { getTerms } from 'dev-dict/utils'
import { ArrowLeft, Book, Check, Copy, ExternalLink, Globe, Layers, Pencil, Tag } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Chip } from '~/components/Chip'
import { getGithubEditUrl } from '~/shared/constants'
import { useAppContext } from '~/shared/context/AppContext'
import { getSourceDisplayName } from '~/shared/utils/termUtils'

interface TermPageProps {
  termId: string
  fromQuery: string
}

export function TermPage({ termId, fromQuery }: TermPageProps) {
  const { lang } = useAppContext()
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const goBack = () => {
    if (window.history.length > 1) {
      router.history.back()
    } else {
      router.navigate({ to: '/', search: { q: fromQuery } })
    }
  }

  const copyId = () => {
    navigator.clipboard.writeText(termId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const dictionary = useMemo(() => getTerms({ terms, locale: lang }), [lang])
  const term = dictionary.find((t) => t.id === termId)

  if (!term) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 font-medium mb-4">Term not found</p>
          <button onClick={goBack} className="text-blue-600 hover:text-blue-700">
            Back to Dictionary
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6 group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Dictionary</span>
        </button>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-10 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Book size={28} />
                  <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Definition</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{term.name}</h1>
                <p className="text-blue-200 text-lg">{term.label}</p>
                <button
                  onClick={copyId}
                  className={`mt-3 inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-all ${
                    copied
                      ? 'bg-emerald-400/30 text-emerald-100 border border-emerald-300/50'
                      : 'bg-white/20 text-blue-100 border border-white/30 hover:bg-white/30'
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
              <a
                href={getGithubEditUrl(term.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-3 py-1.5 text-sm font-medium text-white bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-1.5"
                title="Edit this term on GitHub"
              >
                <Pencil size={14} />
                Edit
              </a>
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Definition</h2>
              <p className="text-slate-700 text-lg leading-relaxed">{term.definition}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <Layers size={14} /> Type
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.type.map((t: TTermTypeLocalized) => (
                    <Chip key={t.id} label={t.name} variant="type" />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <Tag size={14} /> Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.tags.map((t: TTermTagLocalized) => (
                    <Chip key={t.id} label={t.name} variant="tag" />
                  ))}
                </div>
              </div>
            </div>

            {term.links && Object.keys(term.links).length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <ExternalLink size={14} /> Links
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.links.website && (
                    <a
                      href={term.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
                    >
                      <Globe size={14} />
                      Official Website
                    </a>
                  )}
                  {term.links.github && (
                    <a
                      href={term.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
                    >
                      <ExternalLink size={14} />
                      GitHub
                    </a>
                  )}
                  {term.links.npm && (
                    <a
                      href={term.links.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
                    >
                      <ExternalLink size={14} />
                      npm
                    </a>
                  )}
                  {term.links.wikipedia && (
                    <a
                      href={term.links.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Wikipedia
                    </a>
                  )}
                </div>
              </div>
            )}

            {term.sources && (term.sources.label || term.sources.definition) && (
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Sources</h2>
                <div className="text-sm text-slate-500 space-y-1">
                  {term.sources.label && (
                    <p>
                      <span className="text-slate-400">Label:</span>{' '}
                      {getSourceDisplayName(
                        term.sources.label as unknown as { id: string; name: Record<string, string> },
                        lang,
                      )}
                    </p>
                  )}
                  {term.sources.definition && (
                    <p>
                      <span className="text-slate-400">Definition:</span>{' '}
                      {getSourceDisplayName(
                        term.sources.definition as unknown as { id: string; name: Record<string, string> },
                        lang,
                      )}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
