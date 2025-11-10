import cms from './cms'
import library from './library'

export const TERM_TYPES = {
  [cms.id]: cms,
  [library.id]: library,
} as const

export type TTermTypes = (typeof TERM_TYPES)[keyof typeof TERM_TYPES]
