import type { TDevDict, TDevDictLocalized, TLocale, TTerm, TTermId, TTermLocalized, TTermType, TTermTypeLocalized, TTermTag, TTermTagLocalized } from '@/types'
import { CONFIG } from '@/common'
import { getDefinitionLocalized, getLabelLocalized, getTermTagLocalized, getTermTypeLocalized } from '@/utils'
import { TAG, TERM, TYPE } from '@data'

export function getTerm(params: { id: TTermId; localized: false }): TTerm
export function getTerm(params: { id: TTermId; localized?: true; locale?: TLocale }): TTermLocalized
export function getTerm({
  id,
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  id: TTermId
  localized?: boolean
  locale?: TLocale
}): TTerm | TTermLocalized {
  // We do not need a null check here because TTermId only allows valid IDs
  const term = TERM[id]

  if (!localized) {
    return term
  }

  return {
    ...term,
    label: getLabelLocalized({ label: term.label, locale }),
    definition: getDefinitionLocalized({ definition: term.definition, locale }),
    type: term.type.map((value) => getTermTypeLocalized({ term: value, locale })),
    tags: term.tags.map((value) => getTermTagLocalized({ tag: value, locale })),
  }
}

export function getTerms(params?: { localized: false }): TTerm[]
export function getTerms(params?: { localized?: true; locale?: TLocale }): TTermLocalized[]
export function getTerms({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  localized?: boolean
  locale?: TLocale
} = {}): TTerm[] | TTermLocalized[] {
  const terms = Object.values(TERM)

  if (!localized) {
    return terms
  }

  return terms.map((term) => getTerm({ id: term.id, locale }))
}

export function getDict(params?: { localized: false }): TDevDict
export function getDict(params?: { localized?: true; locale?: TLocale }): TDevDictLocalized
export function getDict({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  localized?: boolean
  locale?: TLocale
} = {}): TDevDict | TDevDictLocalized {
  if (!localized) {
    return TERM as TDevDict
  }

  const dict = {} as TDevDictLocalized

  for (const [key, term] of Object.entries(TERM)) {
    const localizedTerm = getTerm({ id: term.id, locale })
    dict[key as TTermId] = localizedTerm
  }

  return dict
}

export function getTypes(params?: { localized: false }): TTermType[]
export function getTypes(params?: { localized?: true; locale?: TLocale }): TTermTypeLocalized[]
export function getTypes({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  localized?: boolean
  locale?: TLocale
} = {}): TTermType[] | TTermTypeLocalized[] {
  const types = Object.values(TYPE)

  if (!localized) {
    return types
  }

  return types.map((type) => getTermTypeLocalized({ term: type, locale }))
}

export function getTags(params?: { localized: false }): TTermTag[]
export function getTags(params?: { localized?: true; locale?: TLocale }): TTermTagLocalized[]
export function getTags({
  localized = true,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  localized?: boolean
  locale?: TLocale
} = {}): TTermTag[] | TTermTagLocalized[] {
  const tags = Object.values(TAG)

  if (!localized) {
    return tags
  }

  return tags.map((tag) => getTermTagLocalized({ tag, locale }))
}
