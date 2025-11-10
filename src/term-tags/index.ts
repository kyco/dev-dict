import backend from './backend'
import frontend from './frontend'
import opensource from './opensource'

export const TERM_TAGS = {
  [backend.id]: backend,
  [frontend.id]: frontend,
  [opensource.id]: opensource,
} as const

export type TTermTags = (typeof TERM_TAGS)[keyof typeof TERM_TAGS]
