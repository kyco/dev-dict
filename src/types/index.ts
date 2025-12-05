import { CONFIG } from '@/common'
import { LOCALE, TAG, TERM, TYPE } from '@data'

export type TLocale = (typeof LOCALE)[keyof typeof LOCALE]

export type TLocaleRecord = {
  [CONFIG.DEFAULT_LOCALE]: string
} & Partial<Record<Exclude<TLocale, typeof CONFIG.DEFAULT_LOCALE>, string>>

export type TLinkType = 'website' | 'github' | 'npm'

export type TTermLinks = {
  website: string
} & Partial<Record<Exclude<TLinkType, 'website'>, string>>

export type TTermType = {
  id: string
  name: TLocaleRecord
}

export type TTermTypeLocalized = {
  id: string
  name: string
}

export type TTermTypes = (typeof TYPE)[keyof typeof TYPE]

export type TTermTag = {
  id: string
  name: TLocaleRecord
}

export type TTermTagLocalized = {
  id: string
  name: string
}

export type TTermTags = (typeof TAG)[keyof typeof TAG]

export type TTerm = {
  id: string
  name: TLocaleRecord
  type: TTermTypes[]
  label: TLocaleRecord
  definition: TLocaleRecord
  tags: TTermTags[]
  links?: TTermLinks
  // Possible future fields:
  // examples?: Record<TLocale, string>[]
  // relatedTerms?: TTerm['name'][]
}

export type TTermLocalized = Omit<TTerm, 'name' | 'label' | 'definition' | 'type' | 'tags'> & {
  name: string
  label: string
  definition: string
  type: TTermTypeLocalized[]
  tags: TTermTagLocalized[]
}

export type TTerms = (typeof TERM)[keyof typeof TERM]

export type TTermId = keyof typeof TERM

export type TDevDict = Record<TTermId, TTerm>

export type TDevDictLocalized = Record<TTermId, TTermLocalized>
