import { checkField, COMPLETENESS_CONFIG, fieldExists, terms } from 'dev-dict'
import type { TTerm } from 'dev-dict'

export interface FieldCompleteness {
  field: string
  label: string
  completed: boolean
  category?: 'content' | 'metadata' | 'en-US' | 'en-GB' | 'de-DE'
}

export interface TermCompleteness {
  // Legacy fields for backwards compatibility
  hasType: boolean
  hasLabel: boolean
  hasDefinition: boolean
  hasTags: boolean
  hasWebsite: boolean
  isComplete: boolean
  missingCount: number

  // New two-tier completeness
  baselineComplete: boolean
  baselinePercentage: number
  additionalPercentage: number
  fullPercentage: number
  baselineFields: FieldCompleteness[]
  additionalFields: FieldCompleteness[]
}

export function getTermCompleteness(termId: string): TermCompleteness {
  const rawTermsMap = terms as unknown as Record<string, TTerm>
  const rawTerm = rawTermsMap[termId]

  if (!rawTerm) {
    return {
      // Legacy fields
      hasType: false,
      hasLabel: false,
      hasDefinition: false,
      hasTags: false,
      hasWebsite: false,
      isComplete: false,
      missingCount: 5,

      // New fields
      baselineComplete: false,
      baselinePercentage: 0,
      additionalPercentage: 0,
      fullPercentage: 0,
      baselineFields: [],
      additionalFields: [],
    }
  }

  // Calculate baseline completeness (filter out conditional fields that don't exist)
  const applicableBaselineConfigs = COMPLETENESS_CONFIG.baseline.filter((config) => {
    // If field is conditional, only include it if the field exists in the term
    if (config.conditional) {
      return fieldExists(rawTerm, config.field)
    }
    // Always include non-conditional fields
    return true
  })

  const baselineFields: FieldCompleteness[] = applicableBaselineConfigs.map((config) => ({
    field: config.field,
    label: config.label,
    completed: checkField(rawTerm, config.field),
    category: config.category,
  }))

  const baselineCompletedWeight = baselineFields
    .filter((f) => f.completed)
    .reduce((sum: number, _: FieldCompleteness, idx: number) => sum + applicableBaselineConfigs[idx].weight, 0)

  const baselineTotalWeight = applicableBaselineConfigs.reduce((sum: number, f) => sum + f.weight, 0)

  // Baseline is out of 50%
  const baselinePercentage = Math.round((baselineCompletedWeight / baselineTotalWeight) * 50)
  const baselineComplete = baselinePercentage === 50

  // Calculate additional completeness (filter out conditional fields that don't exist)
  const applicableAdditionalConfigs = COMPLETENESS_CONFIG.additional.filter((config) => {
    // If field is conditional, only include it if the field exists in the term
    if (config.conditional) {
      return fieldExists(rawTerm, config.field)
    }
    // Always include non-conditional fields
    return true
  })

  const additionalFields: FieldCompleteness[] = applicableAdditionalConfigs.map((config) => ({
    field: config.field,
    label: config.label,
    completed: checkField(rawTerm, config.field),
    category: config.category,
  }))

  const additionalCompletedWeight = additionalFields
    .filter((f) => f.completed)
    .reduce((sum: number, _: FieldCompleteness, idx: number) => sum + applicableAdditionalConfigs[idx].weight, 0)

  const additionalTotalWeight = applicableAdditionalConfigs.reduce((sum: number, f) => sum + f.weight, 0)

  // Additional is out of 50%
  const additionalPercentage =
    additionalTotalWeight > 0 ? Math.round((additionalCompletedWeight / additionalTotalWeight) * 50) : 0

  // Full percentage is baseline (0-50%) + additional (0-50%) = 0-100%
  const fullPercentage = baselinePercentage + additionalPercentage

  // Legacy fields for backwards compatibility
  const hasType = rawTerm.type.length > 0
  const hasLabel = Object.values(rawTerm.label as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasDefinition = Object.values(rawTerm.definition as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasTags = rawTerm.tags.length > 0
  const hasWebsite = !!rawTerm.links?.website

  const legacyFields = [hasType, hasLabel, hasDefinition, hasTags, hasWebsite]
  const missingCount = legacyFields.filter((v) => !v).length
  const isComplete = missingCount === 0

  return {
    // Legacy fields
    hasType,
    hasLabel,
    hasDefinition,
    hasTags,
    hasWebsite,
    isComplete,
    missingCount,

    // New fields
    baselineComplete,
    baselinePercentage,
    additionalPercentage,
    fullPercentage,
    baselineFields,
    additionalFields,
  }
}

export function isTermComplete(termId: string): boolean {
  return getTermCompleteness(termId).isComplete
}

export function isTermBaselineComplete(termId: string): boolean {
  return getTermCompleteness(termId).baselineComplete
}
