import automation from './term-tags/automation'
import backend from './term-tags/backend'
import cryptography from './term-tags/cryptography'
import e2e from './term-tags/e2e'
import frontend from './term-tags/frontend'
import javascript from './term-tags/javascript'
import kanban from './term-tags/kanban'
import open_source from './term-tags/open_source'
import project_management from './term-tags/project_management'
import qa from './term-tags/qa'
import scrum from './term-tags/scrum'
import security from './term-tags/security'
import software_development from './term-tags/software_development'
import testing from './term-tags/testing'
import ui_library from './term-tags/ui_library'

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
