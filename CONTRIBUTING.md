# Contributing to dev-dict

Thank you for your interest in contributing! This guide will help you add terms, types, tags, or translations.

## Quick Start

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Create a new branch: `git checkout -b feat/add-vue-term`
4. Make your changes (see sections below)
5. Validate: `pnpm build`
6. Commit and push (follow [commit guidelines](#commit-guidelines))
7. Open a pull request

## Adding a New Term

### 1. Create the term file

Create `src/data/terms/{term_id}.ts` (lowercase with underscores only):

```typescript
import type { TTerm } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: 'vue',

  name: {
    [LOCALES.EN_US]: 'Vue',
  },

  label: {
    [LOCALES.EN_US]: 'Progressive Framework',
    [LOCALES.EN_GB]: LOCALES.EN_US, // Alias to en-US
    [LOCALES.DE_DE]: 'Progressives Framework',
  },

  definition: {
    [LOCALES.EN_US]: 'A progressive JavaScript framework for building user interfaces.',
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: 'Ein progressives JavaScript-Framework...',
  },

  type: [TYPES.framework],
  tags: [TAGS.frontend, TAGS.open_source],

  links: {
    website: 'https://vuejs.org',
    github: 'https://github.com/vuejs/core',
    npm: 'https://www.npmjs.com/package/vue',
  },

  sources: {
    label: SOURCES.community,
    definition: SOURCES.official_website,
  },
} as const satisfies TTerm
```

### 2. Register the term

Add to `src/data/terms/index.ts`:

```typescript
import vue from './vue'

export const RAW_TERMS = {
  // ... existing terms
  [vue.id]: vue,
} as const
```

### 3. Validate

```bash
pnpm build
```

### Tips

- **Labels**: Keep short (e.g., "UI Library", "Frontend Framework"), not full sentences
- **Definitions**: Explain what it is and why it matters
- **IDs**: Use lowercase with underscores (e.g., `node_js`, `react_native`), never dashes
- **Filenames**: Must match ID exactly (`node_js.ts` for `id: 'node_js'`)
- **Locales**: Provide at least `en-US`, use `LOCALES.EN_US` for aliasing
- **Sources**: Only add if content comes from a verifiable source (omit for AI-generated)

## Adding a New Type or Tag

### 1. Create the file

Create `src/data/types/{type_id}.ts` or `src/data/tags/{tag_id}.ts`:

```typescript
import type { TType } from '@/types'
import { LOCALES } from '@/data/locales'

export default {
  id: 'database',
  name: {
    [LOCALES.EN_US]: 'Database',
    [LOCALES.DE_DE]: 'Datenbank',
  },
} as const satisfies TType
```

### 2. Register

Add to `src/data/types/index.ts` or `src/data/tags/index.ts`:

```typescript
import database from './database'

export const TYPE = {
  // ... existing
  database: database.id,
} as const

export const RAW_TYPE = {
  // ... existing
  [database.id]: database,
} as const
```

## Adding Translations

Find the term file in `src/data/terms/`, `src/data/types/`, or `src/data/tags/` and add translations:

```typescript
label: {
  [LOCALES.EN_US]: 'JavaScript Library',
  [LOCALES.EN_GB]: LOCALES.EN_US, // Same as en-US
  [LOCALES.DE_DE]: 'JavaScript-Bibliothek',
},
```

**Supported locales**: `en-US` (required), `en-GB`, `de-DE`

## Adding a New Language

1. Add locale to `src/data/locales/index.ts`:
```typescript
export const LOCALES = {
  EN_US: 'en-US',
  EN_GB: 'en-GB',
  DE_DE: 'de-DE',
  FR_FR: 'fr-FR', // New locale
} as const
```

2. Update `TLocaleRecord` in `src/types/index.ts`:
```typescript
export type TLocaleRecord = {
  'en-US': string
} & Partial<Record<'en-GB' | 'de-DE' | 'fr-FR', string>>
```

3. Add translations to term/type/tag files using `[LOCALES.FR_FR]: '...'`

4. Validate: `pnpm build`

## Code Style

- **Markdown files**: British English (e.g., "localised", "behaviour")
- **Code**: American English (e.g., `localized`, `behavior`)
- **TypeScript**: Use `as const satisfies TTerm/TType/TTag`
- **Imports**: Use path aliases (`@/types`, `@/utils`, `@/data`)
- **Constants**: Use `LOCALES.EN_US`, `TYPES.framework`, `TAGS.frontend`

## Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning:

- `feat:` - New feature (minor version bump)
- `fix:` - Bug fix (patch version bump)
- `docs:` - Documentation (no version bump)
- `chore:` - Maintenance (no version bump)

### Examples

```bash
git commit -m "feat: add Vue term with translations"
git commit -m "fix: correct German translation for React"
git commit -m "feat: add French (fr-FR) locale support"
```

### Breaking Changes

Add `BREAKING CHANGE:` in footer for major version bump:

```
feat: change term ID format to kebab-case

BREAKING CHANGE: All term IDs now use kebab-case instead of snake_case
```

## Testing Changes

1. **Build**: `pnpm build` (validates types)
2. **Demo**: `pnpm demo:dev` (test at http://localhost:5173)
3. **Lint**: `npx eslint .`
4. **Format**: `npx prettier --write .`

## Need Help?

- Questions: [GitHub Discussions](https://github.com/kyco/dev-dict/discussions)
- Bugs: [GitHub Issues](https://github.com/kyco/dev-dict/issues)
- Proposals: Open an [Issue](https://github.com/kyco/dev-dict/issues) first

Thank you for contributing!
