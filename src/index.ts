export type { CompletenessConfig, CompletenessField } from '@/config/completeness'
export type * from '@/types'
export { LOCALES } from '@/common'
export { COMPLETENESS_CONFIG, checkField, fieldExists } from '@/config/completeness'
export { SOURCES as sources } from '@/data/term-sources'
export { TAGS as tags } from '@/data/term-tags'
export { TYPES as types } from '@/data/term-types'
export { TERMS } from '@/data/terms'

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
