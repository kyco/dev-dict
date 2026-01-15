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

import { getTag, getTerm, getType, interpolateValues } from './helpers'

export const getTermsDict = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): Partial<TTermsDictLocalized> => {
  const interpolatedTerms = interpolateValues({ obj: terms, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty })
  const localizedTerms: Partial<TTermsDictLocalized> = {}

  for (const [key, term] of Object.entries(interpolatedTerms)) {
    localizedTerms[key as TTermId] = getTerm({ term, locale, populateEmpty })
  }

  return localizedTerms
}

export const getTerms = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermLocalized[] => {
  return Object.values(getTermsDict({ terms, locale, populateEmpty }))
}

export const getTypesDict = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermTypesDictLocalized => {
  const interpolatedTerms = interpolateValues({ obj: terms, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty })
  const typesDict: TTermTypesDict = {}

  Object.values(interpolatedTerms).forEach((term) => {
    term.type.forEach((type) => {
      if (!typesDict[type.id]) {
        typesDict[type.id] = type
      }
    })
  })

  const localizedTypes: TTermTypesDictLocalized = {}

  for (const [key, type] of Object.entries(typesDict)) {
    localizedTypes[key as TTermTypeId] = getType({ type, locale, populateEmpty })
  }

  return localizedTypes
}

export const getTypes = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermTypeLocalized[] => {
  return Object.values(getTypesDict({ terms, locale, populateEmpty }))
}

export const getTagsDict = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermTagsDictLocalized => {
  const interpolatedTerms = interpolateValues({ obj: terms, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty })
  const tagsDict: TTermTagsDict = {}

  Object.values(interpolatedTerms).forEach((term) => {
    term.tags.forEach((tag) => {
      if (!tagsDict[tag.id]) {
        tagsDict[tag.id] = tag
      }
    })
  })

  const localizedTags: TTermTagsDictLocalized = {}

  for (const [key, tag] of Object.entries(tagsDict)) {
    localizedTags[key as TTermTagId] = getTag({ tag, locale, populateEmpty })
  }

  return localizedTags
}

export const getTags = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermTagLocalized[] => {
  return Object.values(getTagsDict({ terms, locale, populateEmpty }))
}
