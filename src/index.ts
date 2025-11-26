import type { TDevDict, TLocale, TTermId, TTermLocalized } from '@/types'
import { CONFIG } from '@/common'
import { getDefinitionLocalized, getLabelLocalized, getTermTagLocalized, getTermTypeLocalized } from '@/utils'
import { TERM } from '@data'

export const getTerm = ({
  id,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  id: TTermId
  locale?: TLocale
}): TTermLocalized | null => {
  const term = TERM[id]

  if (!term) {
    return null
  }

  return {
    ...term,
    label: getLabelLocalized({ label: term.label, locale }),
    definition: getDefinitionLocalized({ definition: term.definition, locale }),
    type: term.type.map((value) => getTermTypeLocalized({ term: value, locale })),
    tags: term.tags.map((value) => getTermTagLocalized({ tag: value, locale })),
  }
}

export const getDict = (
  {
    locale = CONFIG.DEFAULT_LOCALE,
  }: {
    locale?: TLocale
  } = { locale: CONFIG.DEFAULT_LOCALE },
): TDevDict => {
  const dict = {} as TDevDict

  for (const [key, term] of Object.entries(TERM)) {
    const localizedTerm = getTerm({ id: term.id, locale })
    if (localizedTerm) {
      dict[key as TTermId] = localizedTerm
    }
  }

  return dict
}
