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
  TTermTypeLocalized,
} from '@/types'
import { CONFIG, MISC } from '@/common'
import { getTag, getTerm, getType, interpolateValues } from '@/utils'

export const getDict = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TDevDict | TDevDictPartial
  locale?: TLocale
  useFallback?: boolean
}): Partial<TDevDictLocalized> => {
  const terms = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  const localizedDict: Partial<TDevDictLocalized> = {}

  for (const [key, term] of Object.entries(terms)) {
    localizedDict[key as TTermId] = getTerm({ term, locale, useFallback })
  }

  return localizedDict
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
  return Object.values(getDict({ dict, locale, useFallback }))
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
  const terms = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  const typesMap = new Map<string, TTerm['type'][number]>()

  Object.values(terms).forEach((term) => {
    term.type.forEach((type) => {
      if (!typesMap.has(type.id)) {
        typesMap.set(type.id, type)
      }
    })
  })

  const types = Array.from(typesMap.values())
  return types.map((type) => getType({ type, locale, useFallback }))
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
  const terms = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  const tagsMap = new Map<string, TTermTag>()

  Object.values(terms).forEach((term) => {
    term.tags.forEach((tag) => {
      if (!tagsMap.has(tag.id)) {
        tagsMap.set(tag.id, tag)
      }
    })
  })

  const tags = Array.from(tagsMap.values())
  return tags.map((tag) => getTag({ tag, locale, useFallback }))
}
