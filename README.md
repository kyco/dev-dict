<p align="center">
  <img src="./demo/public/logo.png" alt="dev-dict" width="125">
</p>

# dev-dict



A community-driven collection of software development terms with explanations in multiple languages. Perfect for building multilingual developer tools, documentation sites, and educational platforms.

[![npm version](https://img.shields.io/npm/v/dev-dict.svg)](https://www.npmjs.com/package/dev-dict)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/dev-dict)](https://bundlephobia.com/package/dev-dict)

**[Browse All Terms](https://kyco.github.io/dev-dict/)**

## Features

- **Multilingual** - English (US/GB), German, and growing
- **Type-Safe** - Full TypeScript support
- **Flexible** - Access localised strings or raw translation objects
- **Lightweight** - Tree-shakeable ESM and UMD builds
- **Comprehensive** - Frameworks, libraries, languages, tools, and concepts

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
  const { terms: dict, types, tags, locales, utils } = devdict

  // Get all terms for a locale
  const allTerms = utils.getTerms({ dict, locale: 'en-US' })

  console.log(allTerms)
</script>
```

## Quick Start

### Option 1: Use All Terms

Import the complete dictionary to access all available terms.

```typescript
import { terms as dict } from 'dev-dict'
import { getTerms, getTags, getTypes } from 'dev-dict/utils'

// Get all terms for a locale
const allTerms = getTerms({ dict, locale: 'en-US' })

// Get types and tags
const types = getTypes({ dict, locale: 'en-US' })
const tags = getTags({ dict, locale: 'en-US' })

// Display a term
allTerms.forEach(term => {
  console.log(term.name)       // "React"
  console.log(term.label)      // "JavaScript Library"
  console.log(term.definition) // "A JavaScript library for..."
  console.log(term.type)       // [{ id: "library", name: "Library" }]
  console.log(term.tags)       // [{ id: "frontend", name: "Frontend" }, ...]
})
```

### Option 2: Use Custom Terms

Import only the specific terms you need for better tree-shaking and smaller bundle size.

```typescript
import { react, typescript, node_js } from 'dev-dict/terms'

// Create a custom dictionary with only the terms you need
const dict = { react, typescript, node_js }

// Then use the same helper functions as Option 1
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
import { getTerms, getTypes, getTags } from 'dev-dict/utils'
```

#### `getTerms(options)`

Get all terms as an array.

```typescript
const terms = getTerms({
  dict,
  locale: 'en-US',
  useFallback: true
})
```

**Options:**
- `dict: TDevDict` - The terms dictionary (required)
- `locale?: string` - Target locale (default: `'en-US'`)
- `useFallback?: boolean` - Fall back to en-US for missing translations (default: `true`)

**Returns:** `TTermLocalized[]` - Array of localised terms

#### `getTypes(options)`

Get all term types.

```typescript
const types = getTypes({
  dict,
  locale: 'en-US'
})
// [{ id: "library", name: "Library" }, { id: "framework", name: "Framework" }, ...]
```

#### `getTags(options)`

Get all term tags.

```typescript
const tags = getTags({
  dict,
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
