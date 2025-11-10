import { CONFIG } from '../common'
import type { TLocale } from '../locales'
import type { TTermTags } from '../term-tags'
import type { TTermTypes } from '../term-types'
import type { TTermId } from '../terms'

export type LocaleRecord = {
  [CONFIG.DEFAULT_LOCALE]: string
} & Partial<Record<Exclude<TLocale, typeof CONFIG.DEFAULT_LOCALE>, string>>

export type TLinkType = 'website' | 'github' | 'npm'

export type LinksRecord = {
  website: string
} & Partial<Record<Exclude<TLinkType, 'website'>, string>>

export type TTermLabel = Record<TLocale, string>

export type TTermDescription = Record<TLocale, string>

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
  name: string
  type: TTermTypes[]
  label: TTermLabel
  description: TTermDescription
  tags: TTermTags[]
  links?: LinksRecord
}

export type TTermLocalized = Omit<TTerm, 'label' | 'description' | 'type' | 'tags'> & {
  label: string
  description: string
  type: TTermTypeLocalized[]
  tags: TTermTagLocalized[]
}

export type TDevDict = Record<TTermId, TTermLocalized>
