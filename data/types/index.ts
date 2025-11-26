import cms from './cms'
import language from './language'
import library from './library'
import runtime_environment from './runtime_environment'

export const TYPE = {
  [cms.id]: cms,
  [language.id]: language,
  [library.id]: library,
  [runtime_environment.id]: runtime_environment,
} as const
