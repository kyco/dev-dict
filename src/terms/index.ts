import type { TTerm } from '../typings'
import node_js from './node_js'
import react from './react'

export const TERMS: Record<string, TTerm> = {
  [react.id]: react,
  [node_js.id]: node_js,
} as const

export type TTerms = (typeof TERMS)[keyof typeof TERMS]
export type TTermId = keyof typeof TERMS
