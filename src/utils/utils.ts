import type {
  TDevDict,
  TDevDictLocalized,
  TDevDictPartial,
  TLocale,
  TTermId,
  TTermLocalized,
  TTermTag,
  TTermTagLocalized,
  TTermType,
  TTermTypeLocalized,
} from '@/types'
import { CONFIG, MISC } from '@/common'
import { getTermTagLocalized, getTermTypeLocalized, getValueLocalized, interpolateValues } from '@/utils'

export const getDict = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): Partial<TDevDictLocalized> => {
  const localizedDict: Partial<TDevDictLocalized> = {}
  const TERMS = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })

  for (const [key, term] of Object.entries(TERMS)) {
    const localizedTerm = getTerm({ dict, id: term.id as TTermId, locale, useFallback })
    if (localizedTerm) {
      localizedDict[key as TTermId] = localizedTerm
    }
  }

  return localizedDict
}

export const getTerm = ({
  dict,
  id,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  id: TTermId
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized | undefined => {
  const TERMS = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
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

export const getTerms = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized[] => {
  const TERMS = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  return Object.values(TERMS)
    .map((term) => getTerm({ dict, id: term.id as TTermId, locale, useFallback }))
    .filter((term): term is TTermLocalized => term !== undefined)
}

export const getTypes = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTypeLocalized[] => {
  const TERMS = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
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

export const getTags = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTagLocalized[] => {
  const TERMS = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
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
