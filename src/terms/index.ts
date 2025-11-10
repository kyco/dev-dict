import type { TTerm } from '../typings'
import react from './react'

export const TERMS: Record<string, TTerm> = {
  [react.id]: react,
} as const

export type TTerms = (typeof TERMS)[keyof typeof TERMS]
export type TTermId = keyof typeof TERMS
