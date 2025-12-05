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

const getValueLocalized = ({
  obj,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  obj: TLocaleRecord
  locale?: TLocale
}): string => {
  let value = obj[locale] || ''
  if (value && Object.values<string>(LOCALE).includes(value)) {
    value = obj[value as TLocale] || ''
  }
  return value
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
