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

| Export | Description |
|--------|-------------|
| `terms` | Raw terms dictionary |
| `types` | Type constants and definitions |
| `tags` | Tag constants and definitions |
| `locales` | Locale constants |

### Helper Functions

Import from `dev-dict/utils`:

```typescript
import {
  getTerms,
  getTermsDict,
  getTypes,
  getTypesDict,
  getTags,
  getTagsDict,
  getSources,
  getSourcesDict
} from 'dev-dict/utils'
```

**Example usage:**

```typescript
// Get terms as an array
const dictionary = getTerms({
  terms,              // Required: the terms dictionary
  locale: 'en-US',    // Optional: defaults to 'en-US'
  populateEmpty: true // Optional: defaults to true
})
// [{ id: "react", name: "React", ... }, { id: "vue", name: "Vue", ... }]

// Get terms as a dictionary object
const termsDict = getTermsDict({ terms, locale: 'en-US' })
// { react: { id: "react", name: "React", ... }, vue: { id: "vue", name: "Vue", ... } }
```

**Options:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `terms` | `TTermsDict` | Yes | - | The terms dictionary |
| `locale` | `string` | No | `'en-US'` | Target locale |
| `populateEmpty` | `boolean` | No | `true` | Populate empty locale records with en-US values |

**Available functions:**

| Function | Returns | Description |
|----------|---------|-------------|
| `getTermsDict(options)` | `Partial<TTermsDictLocalized>` | Get all terms as a dictionary object |
| `getTerms(options)` | `TTermLocalized[]` | Get all terms as an array |
| `getTypesDict(options)` | Dictionary | Get all term types as a dictionary object |
| `getTypes(options)` | Array | Get all term types as an array |
| `getTagsDict(options)` | Dictionary | Get all term tags as a dictionary object |
| `getTags(options)` | Array | Get all term tags as an array |
| `getSourcesDict(options)` | Dictionary | Get all sources as a dictionary object |
| `getSources(options)` | Array | Get all sources as an array |

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
