import { CONFIG } from '@/common'
import type { TLocale } from '@/locales'
import type {
  TTermDefinition,
  TTermLabel,
  TTermTag,
  TTermTagLocalized,
  TTermType,
  TTermTypeLocalized,
} from '@/types'

export const getLabelLocalized = ({
  label,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  label: TTermLabel
  locale?: TLocale
}): string => {
  return label[locale] || label[CONFIG.DEFAULT_LOCALE]
}

export const getDefinitionLocalized = ({
  definition,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  definition: TTermDefinition
  locale?: TLocale
}): string => {
  return definition[locale] || definition[CONFIG.DEFAULT_LOCALE]
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
    name: tag.name[locale] || tag.name[CONFIG.DEFAULT_LOCALE],
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
    name: term.name[locale] || term.name[CONFIG.DEFAULT_LOCALE],
  }
}
