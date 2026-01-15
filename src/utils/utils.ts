import type {
  TLocale,
  TTermId,
  TTermLocalized,
  TTermsDict,
  TTermsDictLocalized,
  TTermsDictPartial,
  TTermTagId,
  TTermTagLocalized,
  TTermTagsDict,
  TTermTagsDictLocalized,
  TTermTypeId,
  TTermTypeLocalized,
  TTermTypesDict,
  TTermTypesDictLocalized,
} from '@/types'
import { CONFIG, MISC } from '@/common'
import { getTag, getTerm, getType, interpolateValues } from '@/utils'

export const getTermsDict = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TTermsDict | TTermsDictPartial
  locale?: TLocale
  useFallback?: boolean
}): Partial<TTermsDictLocalized> => {
  const terms = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  const localizedTerms: Partial<TTermsDictLocalized> = {}

  for (const [key, term] of Object.entries(terms)) {
    localizedTerms[key as TTermId] = getTerm({ term, locale, useFallback })
  }

  return localizedTerms
}

export const getTerms = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TTermsDict | TTermsDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized[] => {
  return Object.values(getTermsDict({ dict, locale, useFallback }))
}

export const getTypesDict = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TTermsDict | TTermsDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTypesDictLocalized => {
  const terms = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  const typesDict: TTermTypesDict = {}

  Object.values(terms).forEach((term) => {
    term.type.forEach((type) => {
      if (!typesDict[type.id]) {
        typesDict[type.id] = type
      }
    })
  })

  const localizedTypes: TTermTypesDictLocalized = {}

  for (const [key, type] of Object.entries(typesDict)) {
    localizedTypes[key as TTermTypeId] = getType({ type, locale, useFallback })
  }

  return localizedTypes
}

export const getTypes = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TTermsDict | TTermsDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTypeLocalized[] => {
  return Object.values(getTypesDict({ dict, locale, useFallback }))
}

export const getTagsDict = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TTermsDict | TTermsDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTagsDictLocalized => {
  const terms = interpolateValues({ obj: dict, keys: MISC.TERM_INTERPOLATION_KEYS, useFallback })
  const tagsDict: TTermTagsDict = {}

  Object.values(terms).forEach((term) => {
    term.tags.forEach((tag) => {
      if (!tagsDict[tag.id]) {
        tagsDict[tag.id] = tag
      }
    })
  })

  const localizedTags: TTermTagsDictLocalized = {}

  for (const [key, tag] of Object.entries(tagsDict)) {
    localizedTags[key as TTermTagId] = getTag({ tag, locale, useFallback })
  }

  return localizedTags
}

export const getTags = ({
  dict,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  dict: TTermsDict | TTermsDictPartial
  locale?: TLocale
  useFallback?: boolean
}): TTermTagLocalized[] => {
  return Object.values(getTagsDict({ dict, locale, useFallback }))
}
