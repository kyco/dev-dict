import { getDict, getTags, getTerm, getTerms, getTypes, localizeTerm } from './helpers'
import {
  getTermTagLocalized,
  getTermTypeLocalized,
  getValueLocalized,
  interpolateLocaleRecord,
  interpolateValue,
  interpolateValues,
} from './utils'

export { LOCALES as locales, TAGS as tags, TERMS as terms, TYPES as types } from '@/data'

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
