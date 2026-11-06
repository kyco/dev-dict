import { MISC } from '@/common'
import { interpolateValues } from '@/utils'

import { RAW_TAGS } from './term-tags'
import { RAW_TYPES } from './term-types'
import { RAW_TERMS } from './terms'

export { RAW_TAGS, RAW_TERMS, RAW_TYPES }

export const TAGS = interpolateValues({ obj: RAW_TAGS, keys: ['name'], populateEmpty: false })
export const TYPES = interpolateValues({ obj: RAW_TYPES, keys: ['name'], populateEmpty: false })
export const TERMS = interpolateValues({ obj: RAW_TERMS, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty: false })
