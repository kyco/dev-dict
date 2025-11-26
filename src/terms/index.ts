import type { TTerm } from '../typings'

const modules = import.meta.glob<{ default: TTerm }>('./*.ts', { eager: true })

export const TERMS = Object.values(modules)
  .filter((module) => module.default)
  .reduce(
    (acc, module) => ({
      ...acc,
      [module.default.id]: module.default,
    }),
    {} as Record<string, TTerm>,
  )

export type TTerms = (typeof TERMS)[keyof typeof TERMS]
export type TTermId = keyof typeof TERMS
