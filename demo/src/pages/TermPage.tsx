import { useRouter } from '@tanstack/react-router'
import { Chip } from '~/components/Chip'
import { CompletenessChart } from '~/components/CompletenessChart'
import { LanguageDropdown } from '~/components/LanguageDropdown'
import { TermLinks } from '~/components/TermLinks'
import { getGithubEditUrl, LANGUAGES } from '~/shared/constants'
import { useAppContext } from '~/shared/context/AppContext'
import { useCopyToClipboard } from '~/shared/hooks'
import { getTermCompleteness } from '~/shared/utils/termUtils'
import { terms } from 'dev-dict'
import type { TTerm, TTermSourceLocalized, TTermTagLocalized, TTermTypeLocalized } from 'dev-dict'
import { getSources, getTerms } from 'dev-dict/utils'
import { ArrowLeft, Book, Check, ChevronDown, ChevronUp, Copy, ExternalLink, Layers, Pencil, Tag } from 'lucide-react'
import { useMemo, useState } from 'react'

interface TermPageProps {
  termId: string
  fromQuery: string
}

export function TermPage({ termId, fromQuery }: TermPageProps) {
  const { lang, setLang, populateEmpty, setPopulateEmpty } = useAppContext()
  const router = useRouter()
  const { copied, copy } = useCopyToClipboard()
  const [showCompleteness, setShowCompleteness] = useState(false)

  const goBack = () => {
    if (window.history.length > 1) {
      router.history.back()
    } else {
      router.navigate({ to: '/', search: { q: fromQuery, status: undefined } })
    }
  }

  const copyId = () => copy(termId)

  const dictionary = useMemo(() => getTerms({ terms, locale: lang, populateEmpty }), [lang, populateEmpty])
  const sources = useMemo(() => getSources({ terms, locale: lang, populateEmpty }), [lang, populateEmpty])
  const term = dictionary.find((t) => t.id === termId)
  const completeness = useMemo(() => getTermCompleteness(termId), [termId])

  if (!term) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 font-medium mb-4">Term not found!</p>
          <button onClick={goBack} className="text-blue-600 hover:text-blue-700 cursor-pointer">
            Back to Dictionary
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group cursor-pointer"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Dictionary</span>
          </button>
          <LanguageDropdown
            options={LANGUAGES}
            selected={lang}
            setSelected={setLang}
            populateEmpty={populateEmpty}
            setPopulateEmpty={setPopulateEmpty}
          />
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-10 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Book size={28} />
                  <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Definition</span>
                </div>

                <h1 className="text-3xl font-bold mb-2">
                  {typeof term.name === 'string' && !term.name && !populateEmpty ? `terms[${term.id}].name` : term.name}
                </h1>

                <p className="text-xl leading-relaxed mb-1">
                  {typeof term.altName === 'string' && !term.altName ? (
                    `terms[${term.id}].altName`
                  ) : (
                    <strong>{term.altName}</strong>
                  )}
                </p>

                <p className="text-lg text-blue-200">
                  {typeof term.label === 'string' && !term.label && !populateEmpty
                    ? `terms[${term.id}].label`
                    : term.label}
                </p>

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
              <p className={`leading-relaxed ${term.definition ? 'text-lg text-slate-700' : 'text-base text-slate-400 italic'}`}>
                {typeof term.definition === 'string' && !term.definition && !populateEmpty
                  ? `terms[${term.id}].definition`
                  : term.definition || 'No definition provided yet. Help us by contributing!'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <Layers size={14} /> Type
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.type.length > 0 ? (
                    term.type.map((ttype: TTermTypeLocalized) => (
                      <Chip
                        key={ttype.id}
                        label={
                          typeof ttype.name === 'string' && !ttype.name && !populateEmpty
                            ? `types[${ttype.id}].name`
                            : ttype.name
                        }
                        variant="type"
                      />
                    ))
                  ) : (
                    <span className="text-sm text-slate-400 italic">No type specified</span>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <Tag size={14} /> Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.tags.length > 0 ? (
                    term.tags.map((ttag: TTermTagLocalized) => (
                      <Chip
                        key={ttag.id}
                        label={
                          typeof ttag.name === 'string' && !ttag.name && !populateEmpty
                            ? `tags[${ttag.id}].name`
                            : ttag.name
                        }
                        variant="tag"
                      />
                    ))
                  ) : (
                    <span className="text-sm text-slate-400 italic">No tags specified</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                <ExternalLink size={14} /> Links
              </h2>
              <TermLinks links={term.links} variant="button" showEmpty />
            </div>

            {term.sources && (term.sources.label?.length || term.sources.definition?.length) && (
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Sources</h2>
                <div className="text-sm text-slate-500 space-y-1">
                  {term.sources.label && term.sources.label.length > 0 && (
                    <p>
                      <span className="text-slate-400">Label:</span>{' '}
                      {term.sources.label
                        .map(
                          (source) => sources.find((s: TTermSourceLocalized) => s.id === source.id)?.name || source.id,
                        )
                        .join(', ')}
                    </p>
                  )}
                  {term.sources.definition && term.sources.definition.length > 0 && (
                    <p>
                      <span className="text-slate-400">Definition:</span>{' '}
                      {term.sources.definition
                        .map(
                          (source) => sources.find((s: TTermSourceLocalized) => s.id === source.id)?.name || source.id,
                        )
                        .join(', ')}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="pt-8 mt-6 border-t border-slate-200">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Completeness
                      </span>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      {completeness.fullPercentage}%
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                        <span className="text-xs text-slate-600">Baseline {completeness.baselinePercentage}%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                        <span className="text-xs text-slate-600">Additional {completeness.additionalPercentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowCompleteness(!showCompleteness)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                >
                  {showCompleteness ? (
                    <>
                      <ChevronUp size={16} />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show Details
                    </>
                  )}
                </button>
              </div>

              {showCompleteness && (
                <div className="mt-4">
                  <CompletenessChart
                    baselineFields={completeness.baselineFields}
                    additionalFields={completeness.additionalFields}
                    baselinePercentage={completeness.baselinePercentage}
                    additionalPercentage={completeness.additionalPercentage}
                    fullPercentage={completeness.fullPercentage}
                    term={(terms as unknown as Record<string, TTerm>)[termId]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
