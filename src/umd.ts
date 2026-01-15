import {
  getDict,
  getTag,
  getTags,
  getTerm,
  getTerms,
  getType,
  getTypes,
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
  getDict,
  getTerm,
  getTerms,
  getTypes,
  getTags,
  interpolateValue,
  interpolateLocaleRecord,
  interpolateValues,
  getValueLocalized,
  getTag,
  getType,
}
