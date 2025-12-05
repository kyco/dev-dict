import type {
  TLocale,
  TLocaleRecord,
  TTermDefinition,
  TTermLabel,
  TTermTag,
  TTermTagLocalized,
  TTermType,
  TTermTypeLocalized,
} from '@/types'
import { CONFIG } from '@/common'
import { LOCALE } from '@data'

export const interpolateValue = ({ obj, value }: { obj: TLocaleRecord; value: undefined | string }): string => {
  if (value && Object.values<string>(LOCALE).includes(value)) {
    return obj[value as TLocale] || ''
  }
  return value || ''
}

export const interpolateLocaleRecord = (lRecord: TLocaleRecord): TLocaleRecord => {
  return Object.fromEntries(
    Object.entries(lRecord).map(([locale, value]) => [
      locale,
      interpolateValue({ obj: lRecord, value: value as string | undefined }),
    ]),
  ) as TLocaleRecord
}

export const interpolateValues = <T extends Record<string, any>>(obj: T, keys: string[]): T => {
  return Object.fromEntries(
    Object.entries(obj).map(([itemKey, item]) => {
      const interpolatedFields = keys
        .filter((key) => key in item && typeof item[key] === 'object')
        .map((key) => [key, interpolateLocaleRecord(item[key])])

      return [itemKey, { ...item, ...Object.fromEntries(interpolatedFields) }]
    }),
  ) as T
}

export const getValueLocalized = ({
  obj,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  obj: TLocaleRecord
  locale?: TLocale
}): string => {
  return interpolateValue({ obj, value: obj[locale] })
}

export const getLabelLocalized = ({
  label,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  label: TTermLabel
  locale?: TLocale
}): string => {
  return getValueLocalized({ obj: label, locale })
}

export const getDefinitionLocalized = ({
  definition,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  definition: TTermDefinition
  locale?: TLocale
}): string => {
  return getValueLocalized({ obj: definition, locale })
}

export const getTermTagLocalized = ({
  tag,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  tag: TTermTag
  locale?: TLocale
}): TTermTagLocalized => {
  return {
    id: tag.id,
    name: getValueLocalized({ obj: tag.name, locale }),
  }
}

export const getTermTypeLocalized = ({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  term: TTermType
  locale?: TLocale
}): TTermTypeLocalized => {
  return {
    id: term.id,
    name: getValueLocalized({ obj: term.name, locale }),
  }
}
