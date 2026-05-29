import { interpolateValues } from '@/utils'

import automation from './tags/automation'
import backend from './tags/backend'
import cryptography from './tags/cryptography'
import e2e from './tags/e2e'
import frontend from './tags/frontend'
import javascript from './tags/javascript'
import kanban from './tags/kanban'
import open_source from './tags/open_source'
import project_management from './tags/project_management'
import qa from './tags/qa'
import scrum from './tags/scrum'
import security from './tags/security'
import software_development from './tags/software_development'
import testing from './tags/testing'
import ui_library from './tags/ui_library'

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

export const TERM_TAGS = interpolateValues({ obj: RAW_TAGS, keys: ['name'], populateEmpty: false })
