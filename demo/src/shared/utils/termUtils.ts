import { locales, terms } from 'dev-dict'
import type { TLocale, TLocaleRecord, TTerm } from 'dev-dict'

export interface TermCompleteness {
  hasType: boolean
  hasLabel: boolean
  hasDefinition: boolean
  hasTags: boolean
  hasWebsite: boolean
  isComplete: boolean
  missingCount: number
}

export function getTermCompleteness(termId: string): TermCompleteness {
  const rawTermsMap = terms as unknown as Record<string, TTerm>
  const rawTerm = rawTermsMap[termId]

  if (!rawTerm) {
    return {
      hasType: false,
      hasLabel: false,
      hasDefinition: false,
      hasTags: false,
      hasWebsite: false,
      isComplete: false,
      missingCount: 5,
    }
  }

  const hasType = rawTerm.type.length > 0
  const hasLabel = Object.values(rawTerm.label as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasDefinition = Object.values(rawTerm.definition as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasTags = rawTerm.tags.length > 0
  const hasWebsite = !!rawTerm.links?.website

  const fields = [hasType, hasLabel, hasDefinition, hasTags, hasWebsite]
  const missingCount = fields.filter((v) => !v).length
  const isComplete = missingCount === 0

  return {
    hasType,
    hasLabel,
    hasDefinition,
    hasTags,
    hasWebsite,
    isComplete,
    missingCount,
  }
}

export function isTermComplete(termId: string): boolean {
  return getTermCompleteness(termId).isComplete
}

export function hasTermFieldInLocale(
  termId: string,
  field: 'name' | 'altName' | 'label' | 'definition',
  locale: TLocale,
): boolean {
  const rawTermsMap = terms as unknown as Record<string, TTerm>
  const rawTerm = rawTermsMap[termId]

  if (!rawTerm) return false

  const localeRecord = rawTerm[field] as TLocaleRecord | undefined
  if (!localeRecord) return false

  const value = localeRecord[locale]

  // Check if the value exists and is not a reference to another locale
  if (!value) return false

  // Check if it's a reference to another locale (like 'en-US')
  if (Object.values(locales).includes(value as TLocale)) {
    return false
  }

  return true
}
