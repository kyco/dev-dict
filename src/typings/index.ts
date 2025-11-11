import { CONFIG } from '../common'
import type { TLocale } from '../locales'
import type { TTermTags } from '../term-tags'
import type { TTermTypes } from '../term-types'
import type { TTermId } from '../terms'

export type LocaleRecord = {
  [CONFIG.DEFAULT_LOCALE]: string
} & Partial<Record<Exclude<TLocale, typeof CONFIG.DEFAULT_LOCALE>, string>>

export type TLinkType = 'website' | 'github' | 'npm'

export type TTermLinks = {
  website: string
} & Partial<Record<Exclude<TLinkType, 'website'>, string>>

export type TTermLabel = Record<TLocale, string>

export type TTermDefinition = Record<TLocale, string>

export type TTermType = {
  id: string
  name: LocaleRecord
}

export type TTermTypeLocalized = {
  id: string
  name: string
}

export type TTermTag = {
  id: string
  name: LocaleRecord
}

export type TTermTagLocalized = {
  id: string
  name: string
}

export type TTerm = {
  id: string
  term: string
  type: TTermTypes[]
  label: TTermLabel
  definition: TTermDefinition
  tags: TTermTags[]
  links?: TTermLinks
  // Possible future fields:
  // examples?: Record<TLocale, string>[]
  // relatedTerms?: TTerm['term'][]
}

export type TTermLocalized = Omit<TTerm, 'label' | 'definition' | 'type' | 'tags'> & {
  label: string
  definition: string
  type: TTermTypeLocalized[]
  tags: TTermTagLocalized[]
}

export type TDevDict = Record<TTermId, TTermLocalized>
