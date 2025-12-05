import { interpolateValues } from '@/utils'

import cms from './cms'
import framework from './framework'
import language from './language'
import library from './library'
import runtime_environment from './runtime_environment'

export const RAW_TYPE = {
  [cms.id]: cms,
  [framework.id]: framework,
  [language.id]: language,
  [library.id]: library,
  [runtime_environment.id]: runtime_environment,
} as const

export const TYPE = interpolateValues({ obj: RAW_TYPE, keys: ['name'], useFallback: false })
