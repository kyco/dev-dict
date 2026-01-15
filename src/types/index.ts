import { CONFIG } from '@/common'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TERMS } from '@/data/terms'
import { TYPES } from '@/data/types'

export type TLocale = (typeof LOCALES)[keyof typeof LOCALES]

export type TLocaleRecord = {
  [CONFIG.DEFAULT_LOCALE]: string
} & Partial<Record<Exclude<TLocale, typeof CONFIG.DEFAULT_LOCALE>, string>>

export type TLinkType = 'website' | 'github' | 'npm' | 'wikipedia'

export type TTermLinks = {
  /**
   * Link to the official website.
   */
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

export type TTermSource = {
  id: string
  name: TLocaleRecord
}

export type TTermSourceLocalized = {
  id: string
  name: string
}

export type TTermSources = (typeof SOURCES)[keyof typeof SOURCES]

export type TSourceMetadata = {
  label?: TTermSources
  definition?: TTermSources
}

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
  /**
   * Source attribution for term labels and definitions.
   * Uses predefined source constants (e.g., SOURCE.official_website, SOURCE.community).
   *
   * IMPORTANT: If no source is specified, all content is assumed to be AI-generated.
   * Only add sources when the content comes from a specific, verifiable origin.
   *
   * @example
   * sources: {
   *   label: SOURCE.community,
   *   definition: SOURCE.official_website,
   * }
   */
  sources?: TSourceMetadata
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
