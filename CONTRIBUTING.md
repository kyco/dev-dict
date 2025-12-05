# Contributing to dev-dict

Thank you for your interest in contributing to dev-dict! This guide will help you add new terms, types, tags, or translations as easily as possible.

## Table of Contents

- [Quick Start](#quick-start)
- [Adding a New Term](#adding-a-new-term)
- [Adding a New Type or Tag](#adding-a-new-type-or-tag)
- [Adding Translations](#adding-translations)
- [Adding a New Language](#adding-a-new-language)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Commit Guidelines](#commit-guidelines)
- [Need Help?](#need-help)

## Quick Start

1. **Fork and clone** the repository
2. **Install dependencies**: `pnpm install`
3. **Create a new branch**: `git checkout -b feat/add-vue-term`
4. **Make your changes** (see sections below)
5. **Build and validate**: `pnpm build`
6. **Commit and push**: Follow [commit guidelines](#commit-guidelines)
7. **Open a pull request**

**Note**: Documentation is automatically generated when your PR is merged to main. Do not run `pnpm docs:generate` manually.

## Adding a New Term

Let's add a new software development term to the dictionary.

### Step 1: Create the Term File

Create a new file in `data/terms/` named `{term_id}.ts` (use lowercase with underscores only, no dashes):

```typescript
import type { TTerm } from '@/types'
import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  // Unique identifier (lowercase with underscores only, no dashes)
  id: 'vue',

  // Term name (usually the same across all locales)
  name: {
    [LOCALE.EN_US]: 'Vue',
  },

  // Label: A concise, more verbose type (e.g., "UI Library", "Frontend Framework")
  // This combines or elaborates on the type(s) - keep it short
  label: {
    [LOCALE.EN_US]: 'Progressive Framework',
    [LOCALE.EN_GB]: LOCALE.EN_US, // Alias: use same as en-US
    [LOCALE.DE_DE]: 'Progressives Framework',
  },

  // Full definition (detailed explanation)
  definition: {
    [LOCALE.EN_US]: 'Vue is a progressive JavaScript framework designed for building web user interfaces. It features a component-based architecture and a reactive data system.',
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: 'Vue ist ein progressives JavaScript-Framework für die Erstellung von Webbenutzeroberflächen...',
  },

  // Array of type references (choose from data/types/)
  type: [TYPE.framework],

  // Array of tag references (choose from data/tags/)
  tags: [TAG.frontend, TAG.open_source],

  // Optional: relevant links
  links: {
    website: 'https://vuejs.org',
    github: 'https://github.com/vuejs/core',
    npm: 'https://www.npmjs.com/package/vue',
  },
} as const satisfies TTerm
```

### Step 2: Register the Term

Open `data/terms/index.ts` and add your term:

```typescript
import vue from './vue' // Add import

export const RAW_TERM = {
  [node_js.id]: node_js,
  [react.id]: react,
  [typescript.id]: typescript,
  [javascript.id]: javascript,
  [aws.id]: aws,
  [vue.id]: vue, // Add to object
} as const
```

### Step 3: Validate and Build

```bash
# Build the project (this validates TypeScript types)
pnpm build
```

If the build succeeds, your term is correctly configured! Documentation will be automatically generated when your changes are merged to main.

### Tips for Adding Terms

- **Keep labels short**: The label is essentially a more verbose type (e.g., if type is "library", label might be "UI Library" or "Testing Library"). It should not be a full sentence.
- **Write comprehensive definitions**: Explain what the term is and why it matters
- **Provide at least en-US translations**: Other locales are optional but encouraged
- **Use locale aliasing**: Set `[LOCALE.EN_GB]: LOCALE.EN_US` if translations are identical
- **Include relevant links**: Website, GitHub, npm (if applicable)
- **Choose appropriate types and tags**: Browse `data/types/` and `data/tags/` for options

## Adding a New Type or Tag

Types categorise terms (e.g., library, framework, language). Tags provide additional context (e.g., frontend, backend, open-source).

### Adding a Type

1. Create `data/types/{type_id}.ts`:

```typescript
import type { TType } from '@/types'
import { LOCALE } from '../locales'

export default {
  id: 'database',
  name: {
    [LOCALE.EN_US]: 'Database',
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: 'Datenbank',
  },
} as const satisfies TType
```

2. Register in `data/types/index.ts`:

```typescript
import database from './database'

export const TYPE = {
  framework: framework.id,
  language: language.id,
  database: database.id, // Add here
  // ...
} as const

export const RAW_TYPE = {
  [framework.id]: framework,
  [language.id]: language,
  [database.id]: database, // And here
  // ...
} as const
```

### Adding a Tag

Same process, but in `data/tags/` directory. Tags follow the same structure as types.

## Adding Translations

You can add translations to existing terms, types, or tags in any supported language.

### Current Supported Languages

- `en-US` (English - United States) - **Required**
- `en-GB` (English - Great Britain) - Optional
- `de-DE` (German - Germany) - Optional

### How to Add a Translation

1. **Find the term file** in `data/terms/`, `data/types/`, or `data/tags/`
2. **Add your translation** to the relevant fields:

```typescript
label: {
  [LOCALE.EN_US]: 'A JavaScript runtime built on Chrome\'s V8 engine',
  [LOCALE.EN_GB]: LOCALE.EN_US,
  [LOCALE.DE_DE]: 'Eine JavaScript-Laufzeitumgebung basierend auf Chromes V8-Engine',
},
```

3. **Use locale aliasing** if the translation is identical to en-US:

```typescript
label: {
  [LOCALE.EN_US]: 'Open Source',
  [LOCALE.EN_GB]: LOCALE.EN_US, // Same as en-US
  [LOCALE.DE_DE]: 'Open Source', // Could also use LOCALE.EN_US
},
```

4. **Rebuild to validate**: `pnpm build`

## Adding a New Language

Want to add French, Spanish, or another language? Here's how:

### Step 1: Add the Locale Constant

Edit `data/locales/index.ts`:

```typescript
export const LOCALE = {
  EN_US: 'en-US',
  EN_GB: 'en-GB',
  DE_DE: 'de-DE',
  FR_FR: 'fr-FR', // Add your locale
} as const
```

### Step 2: Update the Type System

Edit `src/types/index.ts` to add the locale to `TLocaleRecord`:

```typescript
export type TLocaleRecord = {
  'en-US': string // Required
} & Partial<Record<'en-GB' | 'de-DE' | 'fr-FR', string>> // Add here
```

### Step 3: Update Documentation Generator

Edit `scripts/generate-docs.ts` to include the new locale in generated tables:

```typescript
const LOCALE = {
  EN_US: 'en-US',
  EN_GB: 'en-GB',
  DE_DE: 'de-DE',
  FR_FR: 'fr-FR', // Add here
} as const
```

Update the table headers (lines 60 and 78):

```typescript
// For types
[`Type (${DEFAULT_LOCALE})`, 'ID', LOCALE.EN_GB, LOCALE.DE_DE, LOCALE.FR_FR],

// For tags
[`Tag (${DEFAULT_LOCALE})`, 'ID', LOCALE.EN_GB, LOCALE.DE_DE, LOCALE.FR_FR],
```

Update the row generators to add columns (lines 63 and 81):

```typescript
// For types
return `| [...] | ${value.name[LOCALE.FR_FR] ? '✔' : '✘'} |\n`

// For tags
return `| [...] | ${value.name[LOCALE.FR_FR] ? '✔' : '✘'} |\n`
```

### Step 4: Add Translations

Now you can add `[LOCALE.FR_FR]: '...'` translations to any term, type, or tag file!

### Step 5: Validate Your Changes

```bash
pnpm build
```

**Note**: Documentation will be automatically generated when your PR is merged to main. You do not need to run `pnpm docs:generate` manually.

## Project Structure

```
dev-dict/
├── data/                    # All dictionary data
│   ├── locales/            # Locale constants (en-US, en-GB, de-DE)
│   │   └── index.ts
│   ├── terms/              # Individual term definitions
│   │   ├── react.ts
│   │   ├── typescript.ts
│   │   └── index.ts        # Term registry
│   ├── types/              # Type definitions (library, framework, etc.)
│   │   ├── framework.ts
│   │   └── index.ts        # Type registry
│   ├── tags/               # Tag definitions (frontend, backend, etc.)
│   │   ├── frontend.ts
│   │   └── index.ts        # Tag registry
│   └── index.ts            # Main data export
├── src/                    # Source code
│   ├── index.ts           # Public API
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Localisation utilities
├── scripts/
│   └── generate-docs.ts   # Documentation generator
├── docs/                  # Auto-generated documentation
│   ├── TERMS.md
│   ├── TYPES.md
│   └── TAGS.md
└── examples/              # Usage examples
```

### Key Concepts

- **Locale Records** (`TLocaleRecord`): Objects with translations for each supported language
- **Type Safety**: All data uses `as const satisfies TTerm/TType/TTag` for strict validation
- **Fallback System**: Missing translations automatically fall back to en-US
- **Locale Aliasing**: Use `[LOCALE.EN_GB]: LOCALE.EN_US` to reference another locale

## Development Workflow

### Available Commands

```bash
# Install dependencies
pnpm install

# Start development server (serves examples/ directory)
pnpm dev

# Build the library
pnpm build

# Lint code
npx eslint .

# Format code
npx prettier --write .
```

### Testing Your Changes

1. **Build the project**: `pnpm build`
   - Validates TypeScript types
   - Compiles to `dist/` directory
   - Catches type errors and missing imports

2. **Test locally**:
   - Run `pnpm dev`
   - Open the examples in your browser
   - Import and use your term to verify it works

**Note**: Documentation in `docs/` is auto-generated on merge to main. You don't need to generate or commit documentation changes.

## Code Style

### Writing Style

- **Markdown files and comments**: Use British English (e.g., "localised", "behaviour", "organised")
- **Code (variables, functions, etc.)**: Use American English (e.g., `localized`, `behavior`, `organized`)

### TypeScript Conventions

- Use `as const satisfies TTerm/TType/TTag` for all data files
- Import from path aliases: `@/types`, `@/utils`, `@data`
- Use the locale constants: `LOCALE.EN_US`, never hardcode `'en-US'`
- Use type/tag constants: `TYPE.framework`, `TAG.frontend`

### File Naming

- **IDs**: Always use lowercase with underscores only, no dashes (e.g., `node_js`, `open_source`, `react_native`)
- **File names**: Must match the `id` field exactly (e.g., if `id: 'node_js'`, the file must be `node_js.ts`)
- This makes it easier to find and modify terms, types, and tags

## Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) and [semantic-release](https://semantic-release.gitbook.io/) for automated versioning.

### Commit Message Format

```
<type>: <description>

[optional body]

[optional footer]
```

### Commit Types

- `feat:` - New feature (triggers **minor** version bump)
  - Example: `feat: add Vue term`
  - Example: `feat: add French locale support`

- `fix:` - Bug fix (triggers **patch** version bump)
  - Example: `fix: correct TypeScript definition`
  - Example: `fix: add missing translation for React`

- `docs:` - Documentation changes (no version bump)
  - Example: `docs: update CONTRIBUTING.md`

- `chore:` - Maintenance tasks (no version bump)
  - Example: `chore: update dependencies`

- `refactor:` - Code refactoring (no version bump unless breaking)
  - Example: `refactor: simplify interpolation logic`

### Breaking Changes

Add `BREAKING CHANGE:` in the footer for breaking changes (triggers **major** version bump):

```
feat: change term ID format to kebab-case

BREAKING CHANGE: All term IDs now use kebab-case instead of snake_case
```

### Examples

```bash
# Adding a new term
git commit -m "feat: add Vue.js term with translations"

# Fixing a translation
git commit -m "fix: correct German translation for React"

# Adding a new locale
git commit -m "feat: add French (fr-FR) locale support"

# Updating documentation
git commit -m "docs: add examples for adding terms"
```

## Need Help?

- **Questions?** Open a [GitHub Discussion](https://github.com/kyco/dev-dict/discussions)
- **Found a bug?** Open an [Issue](https://github.com/kyco/dev-dict/issues)
- **Want to propose a change?** Open an [Issue](https://github.com/kyco/dev-dict/issues) first to discuss

We appreciate your contributions very much!
