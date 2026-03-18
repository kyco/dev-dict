import type { TLocale } from 'dev-dict'

export const LANGUAGES = [
  { code: 'en-US' as TLocale, label: '🇺🇸 English (US)' },
  { code: 'en-GB' as TLocale, label: '🇬🇧 English (GB)' },
  { code: 'de-DE' as TLocale, label: '🇩🇪 Deutsch' },
]

export const FILTER_OPTIONS = [
  { id: 'all', label: 'All terms' },
  { id: 'baseline_incomplete', label: 'Needs work' },
  { id: 'baseline_complete', label: 'Ready' },
  { id: 'fully_complete', label: 'Fully translated' },
]

export const SORT_OPTIONS = [
  { id: 'name', label: 'Name' },
  { id: 'missing', label: 'Most missing' },
]

export const GITHUB_REPO_URL = 'https://github.com/kyco/dev-dict'
export const GITHUB_EDIT_BASE_URL = `${GITHUB_REPO_URL}/edit/main/src/data/terms`

export function getGithubEditUrl(termId: string): string {
  return `${GITHUB_EDIT_BASE_URL}/${termId}.ts`
}
