import type { TTerm } from '@/types'

export type CompletenessField = {
  field: string
  label: string
  weight: number
  category?: 'content' | 'metadata' | 'en-US' | 'en-GB' | 'de-DE'
  conditional?: boolean // Only count if field exists in term
}

export type CompletenessConfig = {
  baseline: CompletenessField[]
  additional: CompletenessField[]
}

// Base weights for en-US fields
const WEIGHT_NAME = 5
const WEIGHT_LABEL = 10
const WEIGHT_DEFINITION = 20
const WEIGHT_TYPE = 7
const WEIGHT_TAGS = 7
const WEIGHT_LINKS_BASE = 1

// Additional locale count (en-GB and de-DE)
const ADDITIONAL_LOCALES = 2

// Calculate translation weights (split equally among additional locales)
const WEIGHT_NAME_TRANSLATION = WEIGHT_NAME / ADDITIONAL_LOCALES
const WEIGHT_LABEL_TRANSLATION = WEIGHT_LABEL / ADDITIONAL_LOCALES
const WEIGHT_DEFINITION_TRANSLATION = WEIGHT_DEFINITION / ADDITIONAL_LOCALES

// Additional field weights
const WEIGHT_SOURCES = 1

export const COMPLETENESS_CONFIG: CompletenessConfig = {
  // Baseline fields - worth 50% of total completion
  baseline: [
    { field: 'name.en-US', label: 'Name (en-US)', weight: WEIGHT_NAME, category: 'content' },
    { field: 'altName.en-US', label: 'Alternative Name (en-US)', weight: 0, category: 'content', conditional: true },
    { field: 'label.en-US', label: 'Label (en-US)', weight: WEIGHT_LABEL, category: 'content' },
    { field: 'definition.en-US', label: 'Definition (en-US)', weight: WEIGHT_DEFINITION, category: 'content' },
    { field: 'type', label: 'Type', weight: WEIGHT_TYPE, category: 'metadata' },
    { field: 'tags', label: 'Tags', weight: WEIGHT_TAGS, category: 'metadata' },
    {
      field: 'links',
      label: 'At least one link (website/github/npm/wikipedia)',
      weight: WEIGHT_LINKS_BASE,
      category: 'metadata',
    },
  ],

  // Additional fields - worth 50% of total completion
  // Note: Translation weights are proportional to baseline (divided equally among additional locales)
  additional: [
    // Sources
    {
      field: 'sources.label',
      label: 'Label Sources',
      weight: WEIGHT_SOURCES,
      category: 'metadata',
      conditional: false,
    },
    {
      field: 'sources.definition',
      label: 'Definition Sources',
      weight: WEIGHT_SOURCES,
      category: 'metadata',
      conditional: false,
    },

    // en-GB translations (proportional: 1/ADDITIONAL_LOCALES of baseline weights)
    { field: 'name.en-GB', label: 'Name', weight: WEIGHT_NAME_TRANSLATION, category: 'en-GB' },
    { field: 'altName.en-GB', label: 'Alternative Name', weight: 0, category: 'en-GB', conditional: true },
    { field: 'label.en-GB', label: 'Label', weight: WEIGHT_LABEL_TRANSLATION, category: 'en-GB' },
    { field: 'definition.en-GB', label: 'Definition', weight: WEIGHT_DEFINITION_TRANSLATION, category: 'en-GB' },

    // de-DE translations (proportional: 1/ADDITIONAL_LOCALES of baseline weights)
    { field: 'name.de-DE', label: 'Name', weight: WEIGHT_NAME_TRANSLATION, category: 'de-DE' },
    { field: 'altName.de-DE', label: 'Alternative Name', weight: 0, category: 'de-DE', conditional: true },
    { field: 'label.de-DE', label: 'Label', weight: WEIGHT_LABEL_TRANSLATION, category: 'de-DE' },
    { field: 'definition.de-DE', label: 'Definition', weight: WEIGHT_DEFINITION_TRANSLATION, category: 'de-DE' },
  ],
}

export function fieldExists(term: TTerm, fieldPath: string): boolean {
  const parts = fieldPath.split('.')
  let value: any = term

  for (const part of parts) {
    if (value === undefined || value === null) return false
    value = value[part]
  }

  return value !== undefined && value !== null
}

export function checkField(term: TTerm, fieldPath: string): boolean {
  // Special case: "links" means "at least one link exists"
  if (fieldPath === 'links') {
    if (!term.links) return false
    const { links } = term
    return !!(links.website || links.github || links.npm || links.wikipedia)
  }

  const parts = fieldPath.split('.')
  let value: any = term

  for (const part of parts) {
    value = value?.[part]
    if (value === undefined || value === null) return false
  }

  // Check if value is meaningful (not empty string, not empty array, not empty object)
  if (typeof value === 'string') {
    // Check if it's a reference to another locale (like 'en-US' string)
    if (value === 'en-US' || value === 'en-GB' || value === 'de-DE') return false
    return value.trim() !== ''
  }

  if (Array.isArray(value)) return value.length > 0

  if (typeof value === 'object') {
    return (
      Object.keys(value).length > 0 &&
      Object.values(value).some((v) => {
        if (typeof v === 'string') {
          // Check if it's a reference to another locale
          if (v === 'en-US' || v === 'en-GB' || v === 'de-DE') return false
          return v.trim() !== ''
        }
        return v !== null && v !== undefined
      })
    )
  }

  return true
}
