import type { LOCALES } from '@/common'
import type { TAGS, TERMS, TYPES } from '@/data'
import { CONFIG } from '@/common'

type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<T>
}[keyof T]

export type TLocale = (typeof LOCALES)[keyof typeof LOCALES]

export type TLocaleRecord = {
  [CONFIG.DEFAULT_LOCALE]: string
} & Partial<Record<Exclude<TLocale, typeof CONFIG.DEFAULT_LOCALE>, string>>

export type TLinkType = 'official_website' | 'github' | 'npm' | 'wikipedia'

export type TTermLinks = AtLeastOne<Record<TLinkType, string>>

export type TTermType = {
  id: string
  name: TLocaleRecord
}

export type TTermTypeLocalized = {
  id: string
  name: string
}

export type TTermTypes = (typeof TYPES)[keyof typeof TYPES]

export type TTermTag = {
  id: string
  name: TLocaleRecord
}

export type TTermTagLocalized = {
  id: string
  name: string
}

export type TTermTags = (typeof TAGS)[keyof typeof TAGS]

export type TTerm = {
  /**
   * Unique identifier for the term.
   * Must be lowercase with underscores only (e.g., 'react', 'node_js', 'open_source').
   * The filename must match the ID exactly.
   */
  id: string
  /**
   * The proper name of the term as it should be displayed.
   * Typically matches the official capitalisation (e.g., 'React', 'JavaScript', 'Node.js').
   */
  name: TLocaleRecord
  /**
   * An optional short name or abbreviation for the term.
   */
  altName?: TLocaleRecord
  /**
   * The type(s) of the term (e.g., library, framework, language, tool).
   * Multiple types can be assigned if applicable.
   */
  type: TTermTypes[]
  /**
   * A concise, descriptive classification of the term.
   * Should be short and not a full sentence (e.g., 'UI Library', 'Frontend Framework', 'Programming Language').
   * Provides more context than the type field alone.
   */
  label: TLocaleRecord
  /**
   * Full definition or description of the term.
   * Should clearly explain what the term is and its purpose.
   */
  definition: TLocaleRecord
  /**
   * Additional categorisation tags for the term.
   * Used for filtering and grouping (e.g., frontend, backend, javascript, open_source).
   */
  tags: TTermTags[]
  /**
   * Optional external links related to the term.
   * Can include website, github, npm, wikipedia URLs.
   * The 'website' field is required if links are provided.
   */
  links?: TTermLinks
  // Possible future fields:
  // examples?: Record<TLocale, string>[]
  // relatedTerms?: TTerm['name'][]
}

export type TTermLocalized = Omit<TTerm, 'name' | 'altName' | 'label' | 'definition' | 'type' | 'tags'> & {
  name: string
  altName?: string
  label: string
  definition: string
  type: TTermTypeLocalized[]
  tags: TTermTagLocalized[]
}

export type TTerms = (typeof TERMS)[keyof typeof TERMS]

export type TTermId = keyof typeof TERMS

export type TTermsDict = Record<TTermId, TTerm>

export type TTermsDictPartial = Partial<TTermsDict>

export type TTermsDictLocalized = Record<TTermId, TTermLocalized>

export type TTermTypeId = TTermType['id']

export type TTermTypesDict = Record<TTermTypeId, TTermType>

export type TTermTypesDictLocalized = Record<TTermTypeId, TTermTypeLocalized>

export type TTermTagId = TTermTag['id']

export type TTermTagsDict = Record<TTermTagId, TTermTag>

export type TTermTagsDictLocalized = Record<TTermTagId, TTermTagLocalized>
