import { interpolateValues } from '@/utils'

import automation from './automation'
import backend from './backend'
import frontend from './frontend'
import open_source from './open_source'
import qa from './qa'
import testing from './testing'

export const RAW_TAG = {
  [automation.id]: automation,
  [backend.id]: backend,
  [frontend.id]: frontend,
  [open_source.id]: open_source,
  [qa.id]: qa,
  [testing.id]: testing,
} as const

export const TAG = interpolateValues({ obj: RAW_TAG, keys: ['name'], useFallback: false })
