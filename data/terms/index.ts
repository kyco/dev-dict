import { interpolateValues } from '@/utils'

import node_js from './node_js'
import react from './react'
import typescript from './typescript'

export const RAW_TERM = {
  [node_js.id]: node_js,
  [react.id]: react,
  [typescript.id]: typescript,
} as const

export const TERM = interpolateValues(RAW_TERM, ['label', 'definition'])
