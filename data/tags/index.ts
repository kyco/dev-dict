import { interpolateValues } from '@/utils'

import automation from './automation'
import backend from './backend'
import frontend from './frontend'
import javascript from './javascript'
import open_source from './open_source'
import qa from './qa'
import testing from './testing'
import ui_library from './ui_library'

export const RAW_TAG = {
  [automation.id]: automation,
  [backend.id]: backend,
  [frontend.id]: frontend,
  [javascript.id]: javascript,
  [open_source.id]: open_source,
  [qa.id]: qa,
  [testing.id]: testing,
  [ui_library.id]: ui_library,
} as const

export const TAG = interpolateValues({ obj: RAW_TAG, keys: ['name'], useFallback: false })
