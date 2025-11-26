import type { TTermType } from '@/types'

const modules = import.meta.glob<{ default: TTermType }>('../../data/types/*.ts', { eager: true })

export const TERM_TYPES = Object.values(modules)
  .filter((module) => module.default)
  .reduce(
    (acc, module) => ({
      ...acc,
      [module.default.id]: module.default,
    }),
    {} as Record<string, TTermType>,
  )

export type TTermTypes = (typeof TERM_TYPES)[keyof typeof TERM_TYPES]
