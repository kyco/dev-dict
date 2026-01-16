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

#### Demo Architecture

The demo follows a clean, domain-driven architecture:

**Directory Structure:**
```
demo/src/
├── components/          # Reusable UI components
│   ├── Chip.tsx        # Tag/type chip component
│   ├── Dropdown.tsx    # Dropdown selector
│   ├── SearchBar.tsx   # Search input
│   ├── StatusIcon.tsx  # Status indicator
│   ├── TermCard.tsx    # Term card display
│   ├── index.ts        # Component exports
│   └── ui.tsx          # Legacy compatibility exports
├── pages/              # Page-level components
│   ├── HomePage.tsx    # Main dictionary page
│   ├── StatusPage.tsx  # Contribution status page
│   └── TermPage.tsx    # Individual term details
├── routes/             # TanStack Router route definitions (minimal)
│   ├── __root.tsx      # Root layout with AppProvider
│   ├── index.tsx       # Home route (delegates to HomePage)
│   ├── status.tsx      # Status route (delegates to StatusPage)
│   └── term.$termId.tsx # Term detail route (delegates to TermPage)
├── shared/             # Shared utilities and configuration
│   ├── constants.ts    # Common constants (languages, options, URLs)
│   ├── context/
│   │   └── AppContext.tsx # Global app context (language state)
│   └── utils/
│       └── termUtils.ts # Term-related utility functions
├── main.tsx            # Application entry point
└── routeTree.gen.ts    # Auto-generated TanStack Router tree
```

**Path Aliases (Demo):**
- `~/` → `demo/src/` (use this for all imports within the demo)
- Examples: `~/components/Chip`, `~/pages/HomePage`, `~/shared/constants`

**Key Principles:**
1. **Route files are minimal** - They only define routes and delegate to page components
2. **Pages contain business logic** - All state management and data fetching happens in page components
3. **Components are atomic** - Each component is in its own file
4. **Shared code is centralised** - Constants, utils, and context are in `~/shared`
5. **Domain-driven organisation** - Code is organised by feature/domain, not by technical layer

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

### Testing
```bash
pnpm test
```
Runs the data integrity test suite using Vitest. These tests validate:
- All term/tag/type files are properly imported and exported
- All entries have required fields (id, name, label, definition, etc.)
- All entries have en-US name (label and definition can be empty for stub terms)
- All locale records use valid locale codes
- Entry files maintain alphabetical order
- ID naming conventions are followed (lowercase with underscores)
- Filenames match the IDs exactly (e.g., `backbone_js.ts` must have `id: 'backbone_js'`)

```bash
pnpm test:watch
```
Runs tests in watch mode for development.

```bash
pnpm test:ui
```
Opens the Vitest UI for interactive test debugging.

**IMPORTANT**: Always run `pnpm test` before committing changes. The tests will catch common mistakes like:
- Forgetting to add exports to entry files
- Using incorrect ID naming conventions
- Missing required fields
- Empty name (label and definition can be empty for stub terms)

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
- `getSourcesDict()` - Get all sources as a dictionary object
- `getSources()` - Get all sources as an array

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
3. **IMPORTANT**: Add an export in `src/terms-entry.ts` in alphabetical order (e.g., `export { default as term_name } from '@/data/terms/term_name'`)
4. Define translations for at least `en-US` in name, label, and definition
5. Optionally add `altName` for abbreviations or short names (e.g., "AI" for "Artificial Intelligence")
6. Assign appropriate types and tags from existing constants
7. Optionally add `links` (website is required if links are provided)
8. Optionally add `sources` to attribute where content originated (if not AI-generated)
9. Run `pnpm test` to validate all changes (tests will catch missing exports, invalid IDs, etc.)
10. Run `pnpm build` to ensure the build succeeds (documentation will be generated automatically on merge)

**ID Naming Convention**:
- All IDs must use lowercase with underscores only (e.g., `node_js`, `open_source`, `react_native`). Never use dashes/hyphens in IDs.
- The filename must match the ID exactly (e.g., if `id: 'node_js'`, the file must be `node_js.ts`) to make it easier to find and modify.

### Adding a New Type

1. Create a file in `src/data/types/` named `{type_id}.ts` with a default export (use lowercase with underscores only, no dashes)
2. Import and add to the `RAW_TYPES` object in `src/data/types/index.ts`
3. **IMPORTANT**: Add an export in `src/types-entry.ts` in alphabetical order (e.g., `export { default as type_name } from '@/data/types/type_name'`)
4. Use the new type in term definitions
5. Run `pnpm test` to validate all changes
6. Run `pnpm build` to ensure the build succeeds (documentation will be generated automatically on merge)

**ID Naming Convention**:
- All IDs must use lowercase with underscores only (e.g., `runtime_environment`, `cms`). Never use dashes/hyphens in IDs.
- The filename must match the ID exactly (e.g., if `id: 'runtime_environment'`, the file must be `runtime_environment.ts`) to make it easier to find and modify.

### Adding a New Tag

1. Create a file in `src/data/tags/` named `{tag_id}.ts` with a default export (use lowercase with underscores only, no dashes)
2. Import and add to the `RAW_TAGS` object in `src/data/tags/index.ts`
3. **IMPORTANT**: Add an export in `src/tags-entry.ts` in alphabetical order (e.g., `export { default as tag_name } from '@/data/tags/tag_name'`)
4. Use the new tag in term definitions
5. Run `pnpm test` to validate all changes
6. Run `pnpm build` to ensure the build succeeds (documentation will be generated automatically on merge)

**ID Naming Convention**:
- All IDs must use lowercase with underscores only (e.g., `open_source`, `project_management`). Never use dashes/hyphens in IDs.
- The filename must match the ID exactly (e.g., if `id: 'open_source'`, the file must be `open_source.ts`) to make it easier to find and modify.

### Entry Files

The library uses dedicated entry files for tree-shakeable exports. When adding new content, you **must** update the corresponding entry file:

- **Terms**: `src/terms-entry.ts` - Individual term exports for `dev-dict/terms`
- **Types**: `src/types-entry.ts` - Individual type exports for `dev-dict/types`
- **Tags**: `src/tags-entry.ts` - Individual tag exports for `dev-dict/tags`

These entry files enable consumers to import only what they need:
```typescript
// Import specific terms
import { react, typescript, node_js } from 'dev-dict/terms'

// Import specific tags
import { frontend, backend, open_source } from 'dev-dict/tags'

// Import specific types
import { library, framework, language } from 'dev-dict/types'
```

**Always maintain alphabetical order** in these entry files for consistency and ease of maintenance.

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
