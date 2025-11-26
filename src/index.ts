import { CONFIG } from '@/common'
import type { TLocale } from '@/locales'
import { TERMS } from '@/terms'
import type { TTermId } from '@/terms'
import type { TDevDict, TTermLocalized } from '@/types'
import { getDefinitionLocalized, getLabelLocalized, getTermTagLocalized, getTermTypeLocalized } from '@/utils'

export const getTerm = ({
  id,
  locale = CONFIG.DEFAULT_LOCALE,
}: {
  id: TTermId
  locale?: TLocale
}): TTermLocalized | null => {
  const term = TERMS[id]

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
  const dict: TDevDict = {}

  for (const [key, term] of Object.entries(TERMS)) {
    const localizedTerm = getTerm({ id: term.id, locale })
    if (localizedTerm) {
      dict[key as TTermId] = localizedTerm
    }
  }

  return dict
}
