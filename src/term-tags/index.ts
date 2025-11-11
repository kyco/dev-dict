import backend from './backend'
import frontend from './frontend'
import open_source from './open_source'

export const TERM_TAGS = {
  [backend.id]: backend,
  [frontend.id]: frontend,
  [open_source.id]: open_source,
} as const

export type TTermTags = (typeof TERM_TAGS)[keyof typeof TERM_TAGS]
