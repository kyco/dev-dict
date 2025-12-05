import { interpolateValues } from '@/utils'

import aws from './aws'
import javascript from './javascript'
import node_js from './node_js'
import react from './react'
import typescript from './typescript'

export const RAW_TERM = {
  [node_js.id]: node_js,
  [react.id]: react,
  [typescript.id]: typescript,
  [javascript.id]: javascript,
  [aws.id]: aws,
} as const

export const TERM = interpolateValues({ obj: RAW_TERM, keys: ['name', 'label', 'definition'], useFallback: false })
