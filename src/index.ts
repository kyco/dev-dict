export type { CompletenessConfig, CompletenessField } from '@/config/completeness'
export type * from '@/types'
export { LOCALES } from '@/common'
export { COMPLETENESS_CONFIG, checkField, fieldExists } from '@/config/completeness'
export * from '@/data'

export {
  getSource,
  getSources,
  getSourcesDict,
  getTag,
  getTags,
  getTagsDict,
  getTerm,
  getTerms,
  getTermsDict,
  getType,
  getTypes,
  getTypesDict,
  getValueLocalized,
  interpolateLocaleRecord,
  interpolateValue,
  interpolateValues,
} from './utils'
