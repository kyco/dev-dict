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

export { LOCALES as locales } from '@/data/locales'
export { TAGS as tags } from '@/data/tags'
export { TERMS as terms } from '@/data/terms'
export { TYPES as types } from '@/data/types'

export type * from '@/types'

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
