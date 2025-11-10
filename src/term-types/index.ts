import cms from './cms'
import library from './library'
import runtime_environment from './runtime_environment'

export const TERM_TYPES = {
  [cms.id]: cms,
  [library.id]: library,
  [runtime_environment.id]: runtime_environment,
} as const

export type TTermTypes = (typeof TERM_TYPES)[keyof typeof TERM_TYPES]
