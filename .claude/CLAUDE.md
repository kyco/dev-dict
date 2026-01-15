# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

dev-dict is a TypeScript library that provides a multilingual dictionary of software development terms. It supports multiple languages (en-US, en-GB, de-DE) and offers both localised and raw data access through a clean API.

## Package Manager

This project uses **pnpm** as its package manager. Always use `pnpm` commands, not npm or yarn.

## Development Commands

### Build
```bash
pnpm build
```
Builds the library using Vite. Outputs to the `dist/` directory with ES and UMD formats.

### Demo Site

The `demo/` directory contains a React-based showcase application that demonstrates the library's capabilities.

```bash
pnpm demo:dev
```
Starts the demo development server at http://localhost:5173

```bash
pnpm demo:build
```
Builds the library and then builds the demo site for production.

```bash
pnpm demo:preview
```
Previews the production build of the demo site.

**Auto-deployment**: The demo is automatically deployed to GitHub Pages after a successful npm publish when changes are merged to the `main` branch. The deployment workflow ensures the package is published first before deploying the demo. The live demo is available at https://kyco.github.io/dev-dict/

### Linting
```bash
npx eslint .
```
Runs ESLint on the codebase.

### Formatting
```bash
npx prettier --write .
```
Formats the code with Prettier.

## Architecture

### Core Concepts

The library is built around three main entities:

1. **Terms** - Software development terms (e.g., "React", "TypeScript")
2. **Types** - Categories for terms (e.g., "library", "language", "framework")
3. **Tags** - Additional categorisation (e.g., "frontend", "backend", "open_source")

### Data Structure

All data lives in the `src/data/` directory:

- `src/data/terms/` - Individual term definitions
- `src/data/types/` - Type definitions (library, language, framework, etc.)
- `src/data/tags/` - Tag definitions (frontend, backend, open_source)
- `src/data/locales/` - Locale constants (en-US, en-GB, de-DE)

Each term file exports an object with this structure:
```typescript
{
  id: string,
  name: TLocaleRecord,        // Translated name
  altName?: TLocaleRecord,    // Optional short name/abbreviation
  label: TLocaleRecord,       // Concise, verbose type (e.g., "UI Library", "Frontend Framework")
  definition: TLocaleRecord,  // Full definition
  type: TTermTypes[],         // Array of type references
  tags: TTermTags[],          // Array of tag references
  links?: TTermLinks,         // Optional website/github/npm/wikipedia links
  sources?: TSourceMetadata   // Optional source attribution for label/definition
}
```

**Note**: The `label` field serves as a more descriptive version of the type(s). It should be short, not a full sentence. For example, if a term has type "library", the label might be "UI Library" to provide more context.

**Source Attribution**: The optional `sources` field tracks where content originated (e.g., `SOURCE.official_website`, `SOURCE.community`, `SOURCE.wikipedia`). If no source is specified, content is assumed to be AI-generated. Only add sources when content comes from a specific, verifiable origin.

### Localisation System

The library uses `TLocaleRecord` for all translatable strings:
```typescript
type TLocaleRecord = {
  'en-US': string  // Required - default fallback
} & Partial<Record<'en-GB' | 'de-DE', string>>
```

The interpolation system (in `src/utils/index.ts`) handles missing translations by falling back to en-US when `populateEmpty: true` (default behaviour).

### Public API

The library has two main entry points:

**1. Main Export (`src/index.ts`)** - Exports raw data and types:
- `terms` - Raw terms dictionary
- `types` - Raw types constants
- `tags` - Raw tags constants
- `locales` - Locale constants
- All TypeScript types

**2. Helper Functions (`src/utils/`)** - Provides localisation functions:
- `getTermsDict()` - Get all terms as a dictionary object
- `getTerms()` - Get all terms as an array
- `getTypesDict()` - Get all types as a dictionary object
- `getTypes()` - Get all types as an array
- `getTagsDict()` - Get all tags as a dictionary object
- `getTags()` - Get all tags as an array

Each helper function supports:
- `terms` - The terms dictionary (required)
- `locale` - Target locale (defaults to en-US)
- `populateEmpty` - Populate empty locale records with en-US values (defaults to true)

The helpers are exported from `dev-dict/utils` for use by consuming applications.

### Path Aliases

TypeScript paths are configured in `tsconfig.json` and `vite.config.ts`:
- `@/*` → `src/*` (includes `@/data`, `@/types`, `@/utils`, etc.)

Always use the `@/` alias when importing within the codebase. For example:
- Use `@/data` instead of `./data` or `../data`
- Use `@/types` instead of `./types` or `../types`
- Use `@/utils` instead of `./utils` or `../utils`

## Adding New Content

### Adding a New Term

1. Create a new file in `src/data/terms/` named `{term_id}.ts` with a default export (use lowercase with underscores only, no dashes)
2. Import the term in `src/data/terms/index.ts` and add to `RAW_TERMS` object
3. Define translations for at least `en-US` in name, label, and definition
4. Optionally add `altName` for abbreviations or short names (e.g., "AI" for "Artificial Intelligence")
5. Assign appropriate types and tags from existing constants
6. Optionally add `links` (website is required if links are provided)
7. Optionally add `sources` to attribute where content originated (if not AI-generated)
8. Run `pnpm build` to validate (documentation will be generated automatically on merge)

**ID Naming Convention**:
- All IDs must use lowercase with underscores only (e.g., `node_js`, `open_source`, `react_native`). Never use dashes/hyphens in IDs.
- The filename must match the ID exactly (e.g., if `id: 'node_js'`, the file must be `node_js.ts`) to make it easier to find and modify.

### Adding a New Type or Tag

1. Create a file in `src/data/types/` or `src/data/tags/` with a default export (use lowercase with underscores only, no dashes)
2. Import and add to the respective `RAW_TYPE` or `RAW_TAG` object in the index.ts file
3. Use the new constant in term definitions
4. Run `pnpm build` to validate (documentation will be generated automatically on merge)

**ID Naming Convention**:
- All IDs must use lowercase with underscores only (e.g., `node_js`, `open_source`). Never use dashes/hyphens in IDs.
- The filename must match the ID exactly (e.g., if `id: 'open_source'`, the file must be `open_source.ts`) to make it easier to find and modify.

## Build Output

The build produces:
- `dist/index.js` - ES module (main entry point)
- `dist/dev-dict.min.js` - UMD bundle for CDN usage
- `dist/index.d.ts` - TypeScript definitions

## Semantic Release

This project uses semantic-release for automated versioning and publishing. Commits follow conventional commits format:
- `fix:` - Patch release
- `feat:` - Minor release
- `BREAKING CHANGE:` - Major release

The release process is handled by GitHub Actions on the main branch.

## ESLint Configuration

The project uses TypeScript ESLint with custom rules in `eslint.config.mts`. Most violations are set to "warn" rather than "error" to allow flexibility during development.

## Writing Style

- **Markdown files**: Use British English (e.g., "localised", "behaviour", "organised")
- **Code (variable names, function names, etc.)**: Use American English (e.g., `localized`, `behavior`, `organized`)
- **Code comments**: Avoid unnecessary comments. Code should be self-explanatory
