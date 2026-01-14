import { terms as dict } from 'dev-dict'
import type { TLocale } from 'dev-dict'

export type LocaleStats = {
  locale: TLocale
  missingNames: number
  missingLabels: number
  missingDefinitions: number
  totalTerms: number
}

export type ContributionStats = {
  totalTerms: number
  termsWithoutTags: number
  termsWithoutTypes: number
  localeStats: LocaleStats[]
}

export function calculateStats(): ContributionStats {
  const rawTerms = Object.values(dict)
  const locales: TLocale[] = ['en-US', 'en-GB', 'de-DE']

  const totalTerms = rawTerms.length
  const termsWithoutTags = rawTerms.filter((term) => term.tags.length === 0).length
  const termsWithoutTypes = rawTerms.filter((term) => term.type.length === 0).length

  const localeStats: LocaleStats[] = locales.map((locale) => {
    let missingNames = 0
    let missingLabels = 0
    let missingDefinitions = 0

    rawTerms.forEach((term) => {
      if (!(term.name as Record<string, string>)[locale]) missingNames++
      if (!(term.label as Record<string, string>)[locale]) missingLabels++
      if (!(term.definition as Record<string, string>)[locale]) missingDefinitions++
    })

    return {
      locale,
      missingNames,
      missingLabels,
      missingDefinitions,
      totalTerms,
    }
  })

  return {
    totalTerms,
    termsWithoutTags,
    termsWithoutTypes,
    localeStats,
  }
}

export function getGithubEditUrl(termId: string): string {
  return `https://github.com/kyco/dev-dict/edit/main/src/data/terms/${termId}.ts`
}
