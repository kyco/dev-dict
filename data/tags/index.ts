import backend from './backend'
import frontend from './frontend'
import open_source from './open_source'

export const TAG = {
  [backend.id]: backend,
  [frontend.id]: frontend,
  [open_source.id]: open_source,
} as const
