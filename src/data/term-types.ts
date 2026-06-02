import cms from './term-types/cms'
import concept from './term-types/concept'
import database from './term-types/database'
import framework from './term-types/framework'
import language from './term-types/language'
import library from './term-types/library'
import methodology from './term-types/methodology'
import operating_system from './term-types/operating_system'
import platform from './term-types/platform'
import protocol from './term-types/protocol'
import runtime_environment from './term-types/runtime_environment'
import service from './term-types/service'
import standard from './term-types/standard'
import tool from './term-types/tool'

export const RAW_TYPES = {
  [cms.id]: cms,
  [concept.id]: concept,
  [database.id]: database,
  [framework.id]: framework,
  [language.id]: language,
  [library.id]: library,
  [methodology.id]: methodology,
  [operating_system.id]: operating_system,
  [platform.id]: platform,
  [protocol.id]: protocol,
  [runtime_environment.id]: runtime_environment,
  [service.id]: service,
  [standard.id]: standard,
  [tool.id]: tool,
} as const
