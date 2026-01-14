import type {
  TDevDict,
  TDevDictLocalized,
  TDevDictPartial,
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

export function getTerm({
  dict,
  id,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  id: TTermId
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized | undefined {
  const TERMS = interpolateValues({ obj: dict, keys: ['name', 'altName', 'label', 'definition'], useFallback })
  const term = TERMS[id]

  if (!term) {
    return undefined
  }

  return {
    ...term,
    name: getValueLocalized({ obj: term.name, locale, useFallback }),
    ...('altName' in term && term.altName
      ? { altName: getValueLocalized({ obj: term.altName, locale, useFallback }) }
      : {}),
    label: getValueLocalized({ obj: term.label, locale, useFallback }),
    definition: getValueLocalized({ obj: term.definition, locale, useFallback }),
    type: term.type.map((value) => getTermTypeLocalized({ term: value, locale, useFallback })),
    tags: term.tags.map((value) => getTermTagLocalized({ tag: value, locale, useFallback })),
  } as TTermLocalized
}

export function getTerms({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized[] {
  const TERMS = interpolateValues({ obj: dict, keys: ['name', 'altName', 'label', 'definition'], useFallback })
  return Object.values(TERMS)
    .map((term) => getTerm({ dict, id: term.id as TTermId, locale, useFallback }))
    .filter((term): term is TTermLocalized => term !== undefined)
}

export function getDict({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): Partial<TDevDictLocalized> {
  const localizedDict: Partial<TDevDictLocalized> = {}
  const TERMS = interpolateValues({ obj: dict, keys: ['name', 'altName', 'label', 'definition'], useFallback })

  for (const [key, term] of Object.entries(TERMS)) {
    const localizedTerm = getTerm({ dict, id: term.id as TTermId, locale, useFallback })
    if (localizedTerm) {
      localizedDict[key as TTermId] = localizedTerm
    }
  }

  return localizedDict
}

export function getTypes({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTypeLocalized[] {
  const TERMS = interpolateValues({ obj: dict, keys: ['name', 'altName', 'label', 'definition'], useFallback })
  const typesMap = new Map<string, TTermType>()

  Object.values(TERMS).forEach((term) => {
    term.type.forEach((type) => {
      if (!typesMap.has(type.id)) {
        typesMap.set(type.id, type)
      }
    })
  })

  const types = Array.from(typesMap.values())
  return types.map((type) => getTermTypeLocalized({ term: type, locale, useFallback }))
}

export function getTags({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTagLocalized[] {
  const TERMS = interpolateValues({ obj: dict, keys: ['name', 'altName', 'label', 'definition'], useFallback })
  const tagsMap = new Map<string, TTermTag>()

  Object.values(TERMS).forEach((term) => {
    term.tags.forEach((tag) => {
      if (!tagsMap.has(tag.id)) {
        tagsMap.set(tag.id, tag)
      }
    })
  })

  const tags = Array.from(tagsMap.values())
  return tags.map((tag) => getTermTagLocalized({ tag, locale, useFallback }))
}

export function localizeTerm({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  term: TTerm
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized {
  const interpolatedTerm = interpolateValues({
    obj: { [term.id]: term },
    keys: ['name', 'altName', 'label', 'definition'],
    useFallback,
  })[term.id]

  return {
    ...interpolatedTerm,
    name: getValueLocalized({ obj: interpolatedTerm.name, locale, useFallback }),
    ...('altName' in interpolatedTerm && interpolatedTerm.altName
      ? { altName: getValueLocalized({ obj: interpolatedTerm.altName, locale, useFallback }) }
      : {}),
    label: getValueLocalized({ obj: interpolatedTerm.label, locale, useFallback }),
    definition: getValueLocalized({ obj: interpolatedTerm.definition, locale, useFallback }),
    type: interpolatedTerm.type.map((value) => getTermTypeLocalized({ term: value, locale, useFallback })),
    tags: interpolatedTerm.tags.map((value) => getTermTagLocalized({ tag: value, locale, useFallback })),
  } as TTermLocalized
}
