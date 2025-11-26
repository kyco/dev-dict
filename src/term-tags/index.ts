import type { TTermTag } from '../typings'

const modules = import.meta.glob<{ default: TTermTag }>('./*.ts', { eager: true })

export const TERM_TAGS = Object.values(modules)
  .filter((module) => module.default)
  .reduce(
    (acc, module) => ({
      ...acc,
      [module.default.id]: module.default,
    }),
    {} as Record<string, TTermTag>,
  )

export type TTermTags = (typeof TERM_TAGS)[keyof typeof TERM_TAGS]
