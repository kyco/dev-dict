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
export { SOURCES as sources, TAGS as tags, TERMS, TYPES as types } from '@/data'

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
