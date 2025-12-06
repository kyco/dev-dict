import type { TLocale } from 'dev-dict'
import { useEffect } from 'react'

import type { ContributionStats } from '../utils/stats'
import { StatsCard } from './StatsCard'

type ContributionDialogProps = {
  isOpen: boolean
  onClose: () => void
  stats: ContributionStats
}

type LocaleConfig = {
  name: string
  color: 'green' | 'blue' | 'purple' | 'orange'
}

const localeConfig: Record<TLocale, LocaleConfig> = {
  'en-US': { name: '🇺🇸 English (US)', color: 'green' },
  'en-GB': { name: '🇬🇧 English (GB)', color: 'blue' },
  'de-DE': { name: '🇩🇪 Deutsch', color: 'blue' },
}

export function ContributionDialog({ isOpen, onClose, stats }: ContributionDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle escape key to close dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />

        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Help Us Grow</h2>
              <p className="text-sm text-slate-600 mt-1">
                Contribute by adding missing translations, tags, and definitions
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Translation Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.localeStats.map((ls) => {
                  const config = localeConfig[ls.locale]
                  const totalMissing = ls.missingNames + ls.missingLabels + ls.missingDefinitions
                  const totalPossible = ls.totalTerms * 3

                  return (
                    <StatsCard
                      key={ls.locale}
                      title={config.name}
                      value={totalPossible - totalMissing}
                      total={totalPossible}
                      description={`${ls.missingDefinitions} definitions, ${ls.missingLabels} labels, ${ls.missingNames} names`}
                      color={config.color}
                    />
                  )
                })}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Categorisation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatsCard
                  title="Terms with Tags"
                  value={stats.totalTerms - stats.termsWithoutTags}
                  total={stats.totalTerms}
                  description="Help categorise terms with relevant tags"
                  color="orange"
                />
                <StatsCard
                  title="Terms with Types"
                  value={stats.totalTerms - stats.termsWithoutTypes}
                  total={stats.totalTerms}
                  description="Classify terms as libraries, frameworks, etc."
                  color="purple"
                />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How to Contribute</h3>
              <p className="text-slate-600 mb-4">
                Click the "Edit" button on any term card to contribute directly on GitHub. You can add missing
                translations, improve definitions, or add tags and types.
              </p>
              <a
                href="https://github.com/kyco/dev-dict/blob/main/CLAUDE.md#adding-new-content"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View Contribution Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
