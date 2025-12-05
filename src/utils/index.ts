import type {
  TLocale,
  TTermDefinition,
  TTermLabel,
  TTermTag,
  TTermTagLocalized,
  TTermType,
  TTermTypeLocalized,
} from '@/types'
import { CONFIG } from '@/common'
import { LOCALE } from '@data'

export const getLabelLocalized = ({
  label,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  label: TTermLabel
  locale?: TLocale
}): string => {
  const value = label[locale] || ''
  if (value && Object.values<string>(LOCALE).includes(value)) {
    return label[value as TLocale] || ''
  }
  return value
}

export const getDefinitionLocalized = ({
  definition,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  definition: TTermDefinition
  locale?: TLocale
}): string => {
  const value = definition[locale] || ''
  if (value && Object.values<string>(LOCALE).includes(value)) {
    return definition[value as TLocale] || ''
  }
  return value
}

export const getTermTagLocalized = ({
  tag,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  tag: TTermTag
  locale?: TLocale
}): TTermTagLocalized => {
  let value = tag.name[locale] || ''
  if (value && Object.values<string>(LOCALE).includes(value)) {
    value = tag.name[value as TLocale] || ''
  }

  return {
    id: tag.id,
    name: value,
  }
}

export const getTermTypeLocalized = ({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  term: TTermType
  locale?: TLocale
}): TTermTypeLocalized => {
  let value = term.name[locale] || ''
  if (value && Object.values<string>(LOCALE).includes(value)) {
    value = term.name[value as TLocale] || ''
  }

  return {
    id: term.id,
    name: value,
  }
}
