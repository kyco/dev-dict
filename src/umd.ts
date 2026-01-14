import { getDict, getTags, getTerm, getTerms, getTypes, localizeTerm } from './helpers'
import {
  getTermTagLocalized,
  getTermTypeLocalized,
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
  getDict,
  getTypes,
  getTags,
  localizeTerm,
  getValueLocalized,
  getTermTagLocalized,
  getTermTypeLocalized,
  interpolateValue,
  interpolateLocaleRecord,
  interpolateValues,
}
