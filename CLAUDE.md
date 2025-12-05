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

### Development Server
```bash
pnpm dev
```
Starts the Vite dev server serving the `examples/` directory for local testing.

### Generate Documentation
```bash
pnpm docs:generate
```
Builds the library and generates markdown documentation files in `docs/` (TERMS.md, TYPES.md, TAGS.md).

**IMPORTANT**: Documentation generation runs automatically via GitHub Actions when PRs are merged to main. **NEVER** run `pnpm docs:generate` manually or include documentation changes in commits. The `docs/` directory is auto-generated and should not be modified manually.

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

All data lives in the `data/` directory:

- `data/terms/` - Individual term definitions
- `data/types/` - Type definitions (library, language, framework, etc.)
- `data/tags/` - Tag definitions (frontend, backend, open_source)
- `data/locales/` - Locale constants (en-US, en-GB, de-DE)

Each term file exports an object with this structure:
```typescript
{
  id: string,
  name: TLocaleRecord,        // Translated name
  label: TLocaleRecord,       // Short description
  definition: TLocaleRecord,  // Full definition
  type: TTermTypes[],         // Array of type references
  tags: TTermTags[],          // Array of tag references
  links?: TTermLinks          // Optional website/github/npm links
}
```

### Localisation System

The library uses `TLocaleRecord` for all translatable strings:
```typescript
type TLocaleRecord = {
  'en-US': string  // Required - default fallback
} & Partial<Record<'en-GB' | 'de-DE', string>>
```

The interpolation system (in `src/utils/index.ts`) handles missing translations by falling back to en-US when `useFallback: true` (default behaviour).

### Public API

Located in `src/index.ts`, the library exports these functions with dual signatures:

- `getTerm()` - Get a single term by ID
- `getTerms()` - Get all terms
- `getDict()` - Get dictionary object keyed by term ID
- `getTypes()` - Get all types
- `getTags()` - Get all tags

Each function supports:
- `localized: false` - Returns raw `TLocaleRecord` objects
- `localized: true` (default) - Returns localised strings for the specified locale
- `locale` - Target locale (defaults to en-US)
- `useFallback` - Whether to fall back to en-US for missing translations (defaults to true)

### Path Aliases

TypeScript paths are configured in `tsconfig.json` and `vite.config.ts`:
- `@/*` → `src/*`
- `@data` → `data/index.ts`

Always use these aliases when importing within the codebase.

## Adding New Content

### Adding a New Term

1. Create a new file in `data/terms/` named `{term_id}.ts`
2. Import the term in `data/terms/index.ts` and add to `RAW_TERM` object
3. Define translations for at least `en-US` in name, label, and definition
4. Assign appropriate types and tags from existing constants
5. Run `pnpm build` to validate (documentation will be generated automatically on merge)

**IMPORTANT**: Do NOT run `pnpm docs:generate` or commit documentation changes. Documentation is auto-generated on merge to main.

### Adding a New Type or Tag

1. Create a file in `data/types/` or `data/tags/`
2. Import and add to the respective index.ts file
3. Use the new constant in term definitions
4. Run `pnpm build` to validate (documentation will be generated automatically on merge)

**IMPORTANT**: Do NOT run `pnpm docs:generate` or commit documentation changes. Documentation is auto-generated on merge to main.

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

- **Markdown files and comments**: Use British English (e.g., "localised", "behaviour", "organised")
- **Code (variable names, function names, etc.)**: Use American English (e.g., `localized`, `behavior`, `organized`)

## Documentation Generation - CRITICAL

**NEVER** run `pnpm docs:generate` manually or include changes to files in the `docs/` directory in your commits. The documentation is automatically generated by GitHub Actions when changes are merged to the main branch. This includes:

- `docs/TERMS.md`
- `docs/TYPES.md`
- `docs/TAGS.md`

If you are helping a contributor or making changes yourself:
1. Only modify files in `data/` and `src/` directories
2. Run `pnpm build` to validate your changes
3. **DO NOT** run `pnpm docs:generate`
4. **DO NOT** commit any changes to the `docs/` directory
5. The documentation will be automatically updated when the PR is merged
