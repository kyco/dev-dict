export type { CompletenessConfig, CompletenessField } from '@/config/completeness'
export type * from '@/types'
export { COMPLETENESS_CONFIG, checkField, fieldExists } from '@/config/completeness'
export { LOCALES as locales } from '@/data/locales'
export { SOURCES as sources } from '@/data/sources'
export { TAGS as tags } from '@/data/tags'
export { TERMS } from '@/data/terms'
export { TYPES as types } from '@/data/types'

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
