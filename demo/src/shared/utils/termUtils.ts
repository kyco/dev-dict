import type { CompletenessField, TTerm } from 'dev-dict'
import { COMPLETENESS_CONFIG, checkField, terms } from 'dev-dict'

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

const isAltName = (field: string) => field.startsWith('altName.')

function toFieldCompleteness(config: CompletenessField, term: TTerm): FieldCompleteness {
  return {
    field: config.field,
    label: config.label,
    completed: checkField(term, config.field),
    optional: isAltName(config.field),
    category: config.category,
  }
}

function sumCompletedWeight(fields: FieldCompleteness[], configs: CompletenessField[]): number {
  return configs.reduce((sum, config, idx) => sum + (fields[idx].completed ? config.weight : 0), 0)
}

function totalWeight(configs: CompletenessField[]): number {
  return configs.reduce((sum, c) => sum + c.weight, 0)
}

export function getTermCompleteness(termId: string): TermCompleteness {
  const rawTermsMap = terms as unknown as Record<string, TTerm>
  const rawTerm = rawTermsMap[termId]

  if (!rawTerm) {
    return {
      hasType: false,
      hasLabel: false,
      hasDefinition: false,
      hasTags: false,
      hasLinks: false,
      isComplete: false,
      missingCount: 5,
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

  // All fields included for display; altName excluded from weight/count calculations
  const baselineFields = COMPLETENESS_CONFIG.baseline.map((c) => toFieldCompleteness(c, rawTerm))
  const additionalFields = COMPLETENESS_CONFIG.additional.map((c) => toFieldCompleteness(c, rawTerm))

  const weightedBaseline = COMPLETENESS_CONFIG.baseline.filter((c) => !isAltName(c.field))
  const weightedAdditional = COMPLETENESS_CONFIG.additional.filter((c) => !isAltName(c.field))

  const weightedBaselineFields = baselineFields.filter((f) => !isAltName(f.field))
  const weightedAdditionalFields = additionalFields.filter((f) => !isAltName(f.field))

  const baselineCompletedWeight = sumCompletedWeight(weightedBaselineFields, weightedBaseline)
  const additionalCompletedWeight = sumCompletedWeight(weightedAdditionalFields, weightedAdditional)
  const baselineTotalWeight = totalWeight(weightedBaseline)
  const additionalTotalWeight = totalWeight(weightedAdditional)

  const combinedWeight = baselineTotalWeight + additionalTotalWeight
  const combinedCompletedWeight = baselineCompletedWeight + additionalCompletedWeight

  const baselinePercentage = combinedWeight > 0 ? Math.round((baselineCompletedWeight / combinedWeight) * 100) : 0
  const additionalPercentage = combinedWeight > 0 ? Math.round((additionalCompletedWeight / combinedWeight) * 100) : 0
  const fullPercentage = combinedWeight > 0 ? Math.round((combinedCompletedWeight / combinedWeight) * 100) : 0
  const baselineComplete = baselineCompletedWeight === baselineTotalWeight

  // Legacy fields for backwards compatibility
  const hasType = rawTerm.type.length > 0
  const hasLabel = Object.values(rawTerm.label as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasDefinition = Object.values(rawTerm.definition as Record<string, string>).some((v) => v && v.trim() !== '')
  const hasTags = rawTerm.tags.length > 0
  const hasLinks = rawTerm.links ? !!Object.keys(rawTerm.links).length : false

  const legacyFields = [hasType, hasLabel, hasDefinition, hasTags, hasLinks]
  const missingCount = legacyFields.filter((v) => !v).length

  return {
    hasType,
    hasLabel,
    hasDefinition,
    hasTags,
    hasLinks,
    isComplete: missingCount === 0,
    missingCount,
    baselineComplete,
    baselinePercentage,
    additionalPercentage,
    fullPercentage,
    baselineFields,
    additionalFields,
    baselineCount: weightedBaselineFields.filter((f) => f.completed).length,
    baselineTotal: weightedBaselineFields.length,
    additionalCount: weightedAdditionalFields.filter((f) => f.completed).length,
    additionalTotal: weightedAdditionalFields.length,
  }
}

export function isTermComplete(termId: string): boolean {
  return getTermCompleteness(termId).isComplete
}

export function isTermBaselineComplete(termId: string): boolean {
  return getTermCompleteness(termId).baselineComplete
}
