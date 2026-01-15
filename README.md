<p align="center">
  <img src="./demo/public/logo.png" alt="dev-dict" width="125">
</p>

# dev-dict

[![npm version](https://img.shields.io/npm/v/dev-dict.svg)](https://www.npmjs.com/package/dev-dict)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/dev-dict)](https://bundlephobia.com/package/dev-dict)

A community-driven collection of software development terms with explanations in multiple languages. Perfect for building multilingual developer tools, documentation sites, and educational platforms.

**[Browse All Terms](https://kyco.github.io/dev-dict/)**

## Features

- **Type-Safe** - Full TypeScript support
- **Multilingual** - English (US/GB), German, and growing
- **Flexible** - Access localised strings or raw translation objects
- **Lightweight** - Tree-shakeable ESM and UMD builds

## Installation

### via Package Manager

```bash
npm install dev-dict
# or
pnpm add dev-dict
# or
yarn add dev-dict
```

### via CDN (unpkg)

```html
<script src="https://unpkg.com/dev-dict@latest/dist/dev-dict.min.js"></script>
<script>
  // Access the library via the global 'devdict' object
  const { terms, types, tags, locales, utils } = devdict

  // Get all terms for a locale
  const dictionary = utils.getTerms({ terms, locale: 'en-US' })

  console.log(dictionary)
</script>
```

## Quick Start

### Option 1: Full Dictionary

Import the complete dictionary to access all terms.

```typescript
import { terms } from 'dev-dict'
import { getTerms, getTags, getTypes } from 'dev-dict/utils'

// Get all terms for a locale
const dictionary = getTerms({ terms, locale: 'en-US' })

// Get types and tags
const types = getTypes({ terms, locale: 'en-US' })
const tags = getTags({ terms, locale: 'en-US' })

// Display terms
dictionary.forEach(term => {
  console.log(term.name) // "React"
  console.log(term.label) // "JavaScript Library"
})
```

### Option 2: Selected Terms Only

Import only the specific terms you need for better tree-shaking and smaller bundle size.

```typescript
import { react, typescript, node_js } from 'dev-dict/terms'
import { getTerms } from 'dev-dict/utils'

// Create a custom dictionary with only the terms you need
const terms = { react, typescript, node_js }

// Then use the same helper functions as Option 1
const dictionary = getTerms({ terms, locale: 'en-US' })
```

## API Reference

### Import Data

```typescript
import { terms, types, tags, locales } from 'dev-dict'
```

- `terms` - Raw terms dictionary
- `types` - Type constants and definitions
- `tags` - Tag constants and definitions
- `locales` - Locale constants

### Helper Functions

Import from `dev-dict/utils`:

```typescript
import { getTerms, getTermsDict, getTypes, getTypesDict, getTags, getTagsDict } from 'dev-dict/utils'
```

#### `getTermsDict(options)`

Get all terms as a dictionary object.

```typescript
const termsDict = getTermsDict({
  terms,
  locale: 'en-US',
  populateEmpty: true
})
// { react: { id: "react", name: "React", ... }, vue: { id: "vue", name: "Vue", ... } }
```

**Options:**
- `terms: TTermsDict` - The terms dictionary (required)
- `locale?: string` - Target locale (default: `'en-US'`)
- `populateEmpty?: boolean` - Populate empty locale records with en-US values (default: `true`)

**Returns:** `Partial<TTermsDictLocalized>` - Dictionary of localised terms

#### `getTerms(options)`

Get all terms as an array.

```typescript
const dictionary = getTerms({
  terms,
  locale: 'en-US',
  populateEmpty: true
})
```

**Options:**
- `terms: TTermsDict` - The terms dictionary (required)
- `locale?: string` - Target locale (default: `'en-US'`)
- `populateEmpty?: boolean` - Populate empty locale records with en-US values (default: `true`)

**Returns:** `TTermLocalized[]` - Array of localised terms

#### `getTypesDict(options)`

Get all term types as a dictionary object.

```typescript
const typesDict = getTypesDict({
  terms,
  locale: 'en-US'
})
// { library: { id: "library", name: "Library" }, framework: { id: "framework", name: "Framework" }, ... }
```

#### `getTypes(options)`

Get all term types as an array.

```typescript
const types = getTypes({
  terms,
  locale: 'en-US'
})
// [{ id: "library", name: "Library" }, { id: "framework", name: "Framework" }, ...]
```

#### `getTagsDict(options)`

Get all term tags as a dictionary object.

```typescript
const tagsDict = getTagsDict({
  terms,
  locale: 'en-US'
})
// { frontend: { id: "frontend", name: "Frontend" }, backend: { id: "backend", name: "Backend" }, ... }
```

#### `getTags(options)`

Get all term tags as an array.

```typescript
const tags = getTags({
  terms,
  locale: 'en-US'
})
// [{ id: "frontend", name: "Frontend" }, { id: "backend", name: "Backend" }, ...]
```

### Term Structure

```typescript
{
  id: string              // Unique identifier
  name: string            // Display name
  altName?: string        // Optional abbreviation/short name
  label: string           // Descriptive type (e.g., "UI Library")
  definition: string      // Full explanation
  type: Array<{           // Categories
    id: string
    name: string
  }>
  tags: Array<{           // Additional classifications
    id: string
    name: string
  }>
  links?: {               // Optional external links
    website: string
    github?: string
    npm?: string
    wikipedia?: string
  }
}
```

## Supported Languages

| Locale | Language | Status |
|--------|----------|--------|
| `en-US` | English (United States) | ✅ Primary |
| `en-GB` | English (Great Britain) | ✅ Supported |
| `de-DE` | German (Germany) | ✅ Supported |

Want to add a language? See [CONTRIBUTING.md](./CONTRIBUTING.md#adding-a-new-language)

## Browse Terms

- **[Terms](./docs/TERMS.md)** - All software development terms
- **[Types](./docs/TYPES.md)** - Term categories
- **[Tags](./docs/TAGS.md)** - Additional classifications

## Contributing

Contributions welcome! Add terms, provide translations, fix errors, or suggest improvements.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Development

```bash
pnpm install      # Install dependencies
pnpm build        # Build library
pnpm demo:dev     # Run demo site (http://localhost:5173)
pnpm demo:build   # Build demo site
```

See [CLAUDE.md](./.claude/CLAUDE.md) for detailed development guidance.

## License

MIT
