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
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: TLocaleRecord
  value: undefined | string
  useFallback?: boolean
}): string => {
  if (value && Object.values<string>(LOCALES).includes(value)) {
    return obj[value as TLocale] || (useFallback ? obj[LOCALES.EN_US] : '')
  }
  return value || (useFallback ? obj[LOCALES.EN_US] : '')
}

export const interpolateLocaleRecord = ({
  obj,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: TLocaleRecord
  useFallback?: boolean
}): TLocaleRecord => {
  const locales = Object.values<string>(LOCALES) as TLocale[]

  return Object.fromEntries(
    locales.map((locale) => [locale, interpolateValue({ obj, value: obj[locale], useFallback })]),
  ) as TLocaleRecord
}

export const interpolateValues = <T extends Record<string, any>>({
  obj,
  keys,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: T
  keys: string[]
  useFallback?: boolean
}): T => {
  return Object.fromEntries(
    Object.entries(obj).map(([itemKey, item]) => {
      const interpolatedFields = keys
        .filter((key) => key in item && typeof item[key] === 'object')
        .map((key) => [key, interpolateLocaleRecord({ obj: item[key], useFallback })])

      return [itemKey, { ...item, ...Object.fromEntries(interpolatedFields) }]
    }),
  ) as T
}

export const getValueLocalized = ({
  obj,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: TLocaleRecord
  locale?: TLocale
  useFallback?: boolean
}): string => {
  return interpolateValue({ obj, value: obj[locale], useFallback })
}

export const getTerm = ({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  term: TTerm
  locale?: TLocale
  useFallback?: boolean
}): TTermLocalized => {
  return {
    id: term.id,
    name: getValueLocalized({ obj: term.name, locale, useFallback }),
    ...('altName' in term && term.altName
      ? { altName: getValueLocalized({ obj: term.altName, locale, useFallback }) }
      : {}),
    type: term.type.map((value) => getType({ type: value, locale, useFallback })),
    label: getValueLocalized({ obj: term.label, locale, useFallback }),
    definition: getValueLocalized({ obj: term.definition, locale, useFallback }),
    tags: term.tags.map((value) => getTag({ tag: value, locale, useFallback })),
    links: term.links,
    sources: term.sources,
  }
}

export const getTag = ({
  tag,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  tag: TTermTag
  locale?: TLocale
  useFallback?: boolean
}): TTermTagLocalized => {
  return {
    id: tag.id,
    name: getValueLocalized({ obj: tag.name, locale, useFallback }),
  }
}

export const getType = ({
  type,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  type: TTermType
  locale?: TLocale
  useFallback?: boolean
}): TTermTypeLocalized => {
  return {
    id: type.id,
    name: getValueLocalized({ obj: type.name, locale, useFallback }),
  }
}
