import { interpolateValues } from '@/utils'

import automation from './automation'
import backend from './backend'
import cryptography from './cryptography'
import e2e from './e2e'
import frontend from './frontend'
import javascript from './javascript'
import kanban from './kanban'
import open_source from './open_source'
import project_management from './project_management'
import qa from './qa'
import scrum from './scrum'
import security from './security'
import software_development from './software_development'
import testing from './testing'
import ui_library from './ui_library'

export const RAW_TAGS = {
  [automation.id]: automation,
  [backend.id]: backend,
  [cryptography.id]: cryptography,
  [e2e.id]: e2e,
  [frontend.id]: frontend,
  [javascript.id]: javascript,
  [kanban.id]: kanban,
  [open_source.id]: open_source,
  [project_management.id]: project_management,
  [qa.id]: qa,
  [scrum.id]: scrum,
  [security.id]: security,
  [software_development.id]: software_development,
  [testing.id]: testing,
  [ui_library.id]: ui_library,
} as const

export const TAGS = interpolateValues({ obj: RAW_TAGS, keys: ['name'], populateEmpty: false })
