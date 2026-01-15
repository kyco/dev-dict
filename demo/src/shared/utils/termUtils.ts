import { locales, terms } from 'dev-dict'
import type { TLocale, TLocaleRecord, TTerm } from 'dev-dict'

export function isTermComplete(termId: string): boolean {
  const rawTermsMap = terms as unknown as Record<string, TTerm>
  const rawTerm = rawTermsMap[termId]
  if (!rawTerm) return false

  const hasType = rawTerm.type.length > 0
  const hasLabel = Object.values(rawTerm.label as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasDefinition = Object.values(rawTerm.definition as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasTags = rawTerm.tags.length > 0
  const hasWebsite = !!rawTerm.links?.website

  return hasType && hasLabel && hasDefinition && hasTags && hasWebsite
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
