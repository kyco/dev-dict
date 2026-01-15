import type {
  TLocale,
  TLocaleRecord,
  TTerm,
  TTermLocalized,
  TTermTag,
  TTermTagLocalized,
  TTermType,
  TTermTypeLocalized,
} from '@/types'
import { CONFIG } from '@/common'
import { LOCALES } from '@/data/locales'

/**
 * This method will convert e.g. `[LOCALES.EN_GB]: LOCALES.EN_US` to the actual value
 * of the specified locale, in this case the value of `LOCALES.EN_US`.
 */
export const interpolateValue = ({
  obj,
  value,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: TLocaleRecord
  value: undefined | string
  populateEmpty?: boolean
}): string => {
  if (value && Object.values<string>(LOCALES).includes(value)) {
    return obj[value as TLocale] || (populateEmpty ? obj[LOCALES.EN_US] : '')
  }
  return value || (populateEmpty ? obj[LOCALES.EN_US] : '')
}

export const interpolateLocaleRecord = ({
  obj,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: TLocaleRecord
  populateEmpty?: boolean
}): TLocaleRecord => {
  const locales = Object.values<string>(LOCALES) as TLocale[]

  return Object.fromEntries(
    locales.map((locale) => [locale, interpolateValue({ obj, value: obj[locale], populateEmpty })]),
  ) as TLocaleRecord
}

export const interpolateValues = <T extends Record<string, any>>({
  obj,
  keys,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: T
  keys: string[]
  populateEmpty?: boolean
}): T => {
  return Object.fromEntries(
    Object.entries(obj).map(([itemKey, item]) => {
      const interpolatedFields = keys
        .filter((key) => key in item && typeof item[key] === 'object')
        .map((key) => [key, interpolateLocaleRecord({ obj: item[key], populateEmpty })])

      return [itemKey, { ...item, ...Object.fromEntries(interpolatedFields) }]
    }),
  ) as T
}

export const getValueLocalized = ({
  obj,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: TLocaleRecord
  locale?: TLocale
  populateEmpty?: boolean
}): string => {
  return interpolateValue({ obj, value: obj[locale], populateEmpty })
}

export const getTerm = ({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  term: TTerm
  locale?: TLocale
  populateEmpty?: boolean
}): TTermLocalized => {
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
    sources: term.sources,
  }
}

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
