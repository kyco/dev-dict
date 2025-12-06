import { CONFIG } from '@/common'
import { LOCALE, TAG, TERM, TYPE } from '@data'

export type TLocale = (typeof LOCALE)[keyof typeof LOCALE]

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

export type TSourceMetadata = {
  label?: Partial<Record<TLocale, string>>
  definition?: Partial<Record<TLocale, string>>
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
   * Source attribution metadata for term labels and definitions.
   * The locale keys indicate which translation the source applies to,
   * but the source descriptions themselves should always be in English.
   *
   * @example
   * sources: {
   *   label: {
   *     [LOCALE.EN_US]: 'Inferred from project classification',
   *     [LOCALE.DE_DE]: 'AI translation from en-US',
   *   },
   *   definition: {
   *     [LOCALE.EN_US]: 'https://react.dev',
   *     [LOCALE.DE_DE]: 'AI translation from en-US',
   *   },
   * }
   */
  sources?: TSourceMetadata
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
