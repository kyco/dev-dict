import type {
  TLocale,
  TTerm,
  TTermLocalized,
  TTermSource,
  TTermSourceId,
  TTermSourceLocalized,
  TTermSourcesDict,
  TTermSourcesDictLocalized,
  TTermsDict,
  TTermsDictPartial,
  TTermTag,
  TTermTagId,
  TTermTagLocalized,
  TTermTagsDict,
  TTermTagsDictLocalized,
  TTermType,
  TTermTypeId,
  TTermTypeLocalized,
  TTermTypesDict,
  TTermTypesDictLocalized,
} from '@/types'
import { CONFIG, MISC } from '@/common'

import { getValueLocalized, interpolateValues } from './helpers'

// ------------------------ TERMS ------------------------
export const getTerm = ({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  term: TTerm
  locale?: TLocale
  populateEmpty?: boolean
}): TTermLocalized => {
  const sourcesLocalized = term.sources
    ? {
        ...(term.sources.label && {
          label: term.sources.label.map((value) => getSource({ source: value, locale, populateEmpty })),
        }),
        ...(term.sources.definition && {
          definition: term.sources.definition.map((value) => getSource({ source: value, locale, populateEmpty })),
        }),
      }
    : undefined

  return {
    id: term.id,
    name: getValueLocalized({ obj: term.name, locale, populateEmpty }),
    ...('altName' in term && term.altName
      ? { altName: getValueLocalized({ obj: term.altName, locale, populateEmpty }) }
      : {}),
    type: term.type.map((value) => getType({ type: value, locale, populateEmpty })),
    label: getValueLocalized({ obj: term.label, locale, populateEmpty }),
    definition: getValueLocalized({ obj: term.definition, locale, populateEmpty }),
    tags: term.tags.map((value) => getTag({ tag: value, locale, populateEmpty })),
    links: term.links,
    ...(sourcesLocalized && Object.keys(sourcesLocalized).length > 0 ? { sources: sourcesLocalized } : {}),
  } as TTermLocalized
}

export const getTermsDict = <T extends TTermsDict | TTermsDictPartial>({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: T
  locale?: TLocale
  populateEmpty?: boolean
}): { [K in keyof T]: TTermLocalized } => {
  const interpolatedTerms = interpolateValues({ obj: terms, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty })
  const localizedTerms = {} as { [K in keyof T]: TTermLocalized }

  for (const [key, term] of Object.entries(interpolatedTerms)) {
    localizedTerms[key as keyof T] = getTerm({ term, locale, populateEmpty })
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

// ------------------------ TYPES ------------------------
export const getType = ({
  type,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  type: TTermType
  locale?: TLocale
  populateEmpty?: boolean
}): TTermTypeLocalized => {
  return {
    id: type.id,
    name: getValueLocalized({ obj: type.name, locale, populateEmpty }),
  }
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

// ------------------------ TAGS ------------------------
export const getTag = ({
  tag,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  tag: TTermTag
  locale?: TLocale
  populateEmpty?: boolean
}): TTermTagLocalized => {
  return {
    id: tag.id,
    name: getValueLocalized({ obj: tag.name, locale, populateEmpty }),
  }
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

// ------------------------ SOURCES ------------------------
export const getSource = ({
  source,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  source: TTermSource
  locale?: TLocale
  populateEmpty?: boolean
}): TTermSourceLocalized => {
  return {
    id: source.id,
    name: getValueLocalized({ obj: source.name, locale, populateEmpty }),
  }
}

export const getSourcesDict = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermSourcesDictLocalized => {
  const interpolatedTerms = interpolateValues({ obj: terms, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty })
  const sourcesDict: TTermSourcesDict = {}

  Object.values(interpolatedTerms).forEach((term) => {
    if (term.sources?.label) {
      term.sources.label.forEach((source) => {
        if (!sourcesDict[source.id]) {
          sourcesDict[source.id] = source
        }
      })
    }
    if (term.sources?.definition) {
      term.sources.definition.forEach((source) => {
        if (!sourcesDict[source.id]) {
          sourcesDict[source.id] = source
        }
      })
    }
  })

  const localizedSources: TTermSourcesDictLocalized = {}

  for (const [key, source] of Object.entries(sourcesDict)) {
    localizedSources[key as TTermSourceId] = getSource({ source, locale, populateEmpty })
  }

  return localizedSources
}

export const getSources = ({
  terms,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  terms: TTermsDict | TTermsDictPartial
  locale?: TLocale
  populateEmpty?: boolean
}): TTermSourceLocalized[] => {
  return Object.values(getSourcesDict({ terms, locale, populateEmpty }))
}
