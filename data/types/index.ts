import { interpolateValues } from '@/utils'

import cms from './cms'
import concept from './concept'
import framework from './framework'
import language from './language'
import library from './library'
import methodology from './methodology'
import platform from './platform'
import runtime_environment from './runtime_environment'

export const RAW_TYPE = {
  [cms.id]: cms,
  [concept.id]: concept,
  [framework.id]: framework,
  [language.id]: language,
  [library.id]: library,
  [methodology.id]: methodology,
  [runtime_environment.id]: runtime_environment,
  [platform.id]: platform,
} as const

export const TYPE = interpolateValues({ obj: RAW_TYPE, keys: ['name'], useFallback: false })
