import {
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

export type * from '@/types'
export { LOCALES } from '@/common'
export { SOURCES as sources } from '@/data/sources'
export { TAGS as tags } from '@/data/term-tags'
export { TYPES as types } from '@/data/term-types'
export { TERMS } from '@/data/terms'

export const utils = {
  getTerm,
  getTerms,
  getTermsDict,
  getType,
  getTypes,
  getTypesDict,
  getTag,
  getTags,
  getTagsDict,
  interpolateValue,
  interpolateLocaleRecord,
  interpolateValues,
  getValueLocalized,
}
