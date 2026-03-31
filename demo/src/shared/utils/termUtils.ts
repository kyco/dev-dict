import { checkField, COMPLETENESS_CONFIG, terms } from 'dev-dict'
import type { TTerm } from 'dev-dict'

export interface FieldCompleteness {
  field: string
  label: string
  completed: boolean
  optional?: boolean
  category?: 'content' | 'metadata' | 'en-US' | 'en-GB' | 'de-DE'
}

export interface TermCompleteness {
  // Legacy fields for backwards compatibility
  hasType: boolean
  hasLabel: boolean
  hasDefinition: boolean
  hasTags: boolean
  hasLinks: boolean
  isComplete: boolean
  missingCount: number

  // New two-tier completeness
  baselineComplete: boolean
  baselinePercentage: number
  additionalPercentage: number
  fullPercentage: number
  baselineFields: FieldCompleteness[]
  additionalFields: FieldCompleteness[]
  baselineCount: number
  baselineTotal: number
  additionalCount: number
  additionalTotal: number
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
      hasLinks: false,
      isComplete: false,
      missingCount: 5,

      // New fields
      baselineComplete: false,
      baselinePercentage: 0,
      additionalPercentage: 0,
      fullPercentage: 0,
      baselineFields: [],
      additionalFields: [],
      baselineCount: 0,
      baselineTotal: 0,
      additionalCount: 0,
      additionalTotal: 0,
    }
  }

  // All baseline fields are always included for display; altName fields are never counted in totals/weights
  const baselineFields: FieldCompleteness[] = COMPLETENESS_CONFIG.baseline.map((config) => ({
    field: config.field,
    label: config.label,
    completed: checkField(rawTerm, config.field),
    optional: config.field.startsWith('altName.'),
    category: config.category,
  }))

  const weightedBaselineConfigs = COMPLETENESS_CONFIG.baseline.filter((config) => !config.field.startsWith('altName.'))

  const baselineCompletedWeight = baselineFields
    .filter((f) => !f.field.startsWith('altName.') && f.completed)
    .reduce((sum: number, _: FieldCompleteness, idx: number) => sum + weightedBaselineConfigs[idx].weight, 0)

  const baselineTotalWeight = weightedBaselineConfigs.reduce((sum: number, f) => sum + f.weight, 0)

  // All additional fields are always included for display; altName fields are never counted in totals/weights
  const weightedAdditionalConfigs = COMPLETENESS_CONFIG.additional.filter(
    (config) => !config.field.startsWith('altName.'),
  )

  const additionalFields: FieldCompleteness[] = COMPLETENESS_CONFIG.additional.map((config) => ({
    field: config.field,
    label: config.label,
    completed: checkField(rawTerm, config.field),
    optional: config.field.startsWith('altName.'),
    category: config.category,
  }))

  const additionalCompletedWeight = additionalFields
    .filter((f) => !f.field.startsWith('altName.') && f.completed)
    .reduce((sum: number, _: FieldCompleteness, idx: number) => sum + weightedAdditionalConfigs[idx]?.weight || 0, 0)

  const additionalTotalWeight = weightedAdditionalConfigs.reduce((sum: number, f) => sum + f.weight, 0)

  // Calculate percentages based on actual weights (not forced 50/50 split)
  const totalWeight = baselineTotalWeight + additionalTotalWeight
  const totalCompletedWeight = baselineCompletedWeight + additionalCompletedWeight

  const baselinePercentage = baselineTotalWeight > 0 ? Math.round((baselineCompletedWeight / totalWeight) * 100) : 0
  const baselineComplete = baselineCompletedWeight === baselineTotalWeight

  const additionalPercentage =
    additionalTotalWeight > 0 ? Math.round((additionalCompletedWeight / totalWeight) * 100) : 0

  // Full percentage is the combined completed weight out of total weight
  const fullPercentage = totalWeight > 0 ? Math.round((totalCompletedWeight / totalWeight) * 100) : 0

  // Legacy fields for backwards compatibility
  const hasType = rawTerm.type.length > 0
  const hasLabel = Object.values(rawTerm.label as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasDefinition = Object.values(rawTerm.definition as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasTags = rawTerm.tags.length > 0
  const hasLinks = rawTerm.links ? !!Object.keys(rawTerm.links).length : false

  const legacyFields = [hasType, hasLabel, hasDefinition, hasTags, hasLinks]
  const missingCount = legacyFields.filter((v) => !v).length
  const isComplete = missingCount === 0

  return {
    // Legacy fields
    hasType,
    hasLabel,
    hasDefinition,
    hasTags,
    hasLinks,
    isComplete,
    missingCount,

    // New fields
    baselineComplete,
    baselinePercentage,
    additionalPercentage,
    fullPercentage,
    baselineFields,
    additionalFields,
    baselineCount: baselineFields.filter((f) => !f.field.startsWith('altName.') && f.completed).length,
    baselineTotal: baselineFields.filter((f) => !f.field.startsWith('altName.')).length,
    additionalCount: additionalFields.filter((f) => !f.field.startsWith('altName.') && f.completed).length,
    additionalTotal: additionalFields.filter((f) => !f.field.startsWith('altName.')).length,
  }
}

export function isTermComplete(termId: string): boolean {
  return getTermCompleteness(termId).isComplete
}

export function isTermBaselineComplete(termId: string): boolean {
  return getTermCompleteness(termId).baselineComplete
}
