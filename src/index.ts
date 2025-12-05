import type {
  TDevDict,
  TDevDictLocalized,
  TLocale,
  TTerm,
  TTermId,
  TTermLocalized,
  TTermTag,
  TTermTagLocalized,
  TTermType,
  TTermTypeLocalized,
} from '@/types'
import { CONFIG } from '@/common'
import { getTermTagLocalized, getTermTypeLocalized, getValueLocalized, interpolateValues } from '@/utils'
import { RAW_TAG, RAW_TERM, RAW_TYPE } from '@data'

/**
 * NB: The `useFallback` param only works when `localized` is `true`. This is by design.
 */

export function getTerm(params: { id: TTermId; localized: false }): TTerm
export function getTerm(params: {
  id: TTermId
  localized?: true
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized
export function getTerm({
  id,
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  id: TTermId
  localized?: boolean
  locale?: TLocale
  useFallback?: boolean
}): TTerm | TTermLocalized {
  // We do not need a null check here because TTermId only allows valid IDs
  const TERM = interpolateValues({ obj: RAW_TERM, keys: ['name', 'label', 'definition'], useFallback })
  const term = TERM[id]

  if (!localized) {
    return term
  }

  return {
    ...term,
    name: getValueLocalized({ obj: term.name, locale, useFallback }),
    label: getValueLocalized({ obj: term.label, locale, useFallback }),
    definition: getValueLocalized({ obj: term.definition, locale, useFallback }),
    type: term.type.map((value) => getTermTypeLocalized({ term: value, locale, useFallback })),
    tags: term.tags.map((value) => getTermTagLocalized({ tag: value, locale, useFallback })),
  }
}

export function getTerms(params?: { localized: false; useFallback?: boolean }): TTerm[]
export function getTerms(params?: { localized?: true; locale?: TLocale; useFallback?: boolean }): TTermLocalized[]
export function getTerms({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  localized?: boolean
  locale?: TLocale
  useFallback?: boolean
} = {}): TTerm[] | TTermLocalized[] {
  const TERM = interpolateValues({ obj: RAW_TERM, keys: ['name', 'label', 'definition'], useFallback })
  const terms = Object.values(TERM)

  if (!localized) {
    return terms
  }

  return terms.map((term) => getTerm({ id: term.id, locale, useFallback }))
}

export function getDict(params?: { localized: false; useFallback?: boolean }): TDevDict
export function getDict(params?: { localized?: true; locale?: TLocale; useFallback?: boolean }): TDevDictLocalized
export function getDict({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  localized?: boolean
  locale?: TLocale
  useFallback?: boolean
} = {}): TDevDict | TDevDictLocalized {
  const TERM = interpolateValues({ obj: RAW_TERM, keys: ['name', 'label', 'definition'], useFallback })

  if (!localized) {
    return TERM as TDevDict
  }

  const dict = {} as TDevDictLocalized

  for (const [key, term] of Object.entries(TERM)) {
    const localizedTerm = getTerm({ id: term.id, locale, useFallback })
    dict[key as TTermId] = localizedTerm
  }

  return dict
}

export function getTypes(params?: { localized: false; useFallback?: boolean }): TTermType[]
export function getTypes(params?: { localized?: true; locale?: TLocale; useFallback?: boolean }): TTermTypeLocalized[]
export function getTypes({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  localized?: boolean
  locale?: TLocale
  useFallback?: boolean
} = {}): TTermType[] | TTermTypeLocalized[] {
  const TYPE = interpolateValues({ obj: RAW_TYPE, keys: ['name'], useFallback })
  const types = Object.values(TYPE)

  if (!localized) {
    return types
  }

  return types.map((type) => getTermTypeLocalized({ term: type, locale, useFallback }))
}

export function getTags(params?: { localized: false; useFallback?: boolean }): TTermTag[]
export function getTags(params?: { localized?: true; locale?: TLocale; useFallback?: boolean }): TTermTagLocalized[]
export function getTags({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  localized?: boolean
  locale?: TLocale
  useFallback?: boolean
} = {}): TTermTag[] | TTermTagLocalized[] {
  const TAG = interpolateValues({ obj: RAW_TAG, keys: ['name'], useFallback })
  const tags = Object.values(TAG)

  if (!localized) {
    return tags
  }

  return tags.map((tag) => getTermTagLocalized({ tag, locale, useFallback }))
}
