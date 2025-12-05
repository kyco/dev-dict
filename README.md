# dev-dict

> A multilingual dictionary of software development terms

[![npm version](https://img.shields.io/npm/v/dev-dict.svg)](https://www.npmjs.com/package/dev-dict)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**dev-dict** provides an exhaustive, community-driven collection of software industry terms with clear explanations in multiple languages. Perfect for developers, technical writers, educators, and anyone building multilingual developer tools.


## Features

- **Multilingual Support** - Terms available in English (US/GB), German, and more
- **Type-Safe** - Built with TypeScript for excellent IDE support
- **Flexible API** - Access localised strings or raw translation objects
- **Comprehensive** - Covering frameworks, libraries, languages, tools, and concepts
- **Lightweight** - Tree-shakeable ESM and UMD builds
- **Extensible** - Easy to contribute new terms and translations


## Quick Start

### Installation

```bash
npm install dev-dict
# or
pnpm add dev-dict
# or
yarn add dev-dict
```

### Basic Usage

```typescript
import { getTerm, getTerms, getDict } from 'dev-dict'

// Get a single term
const react = getTerm({ id: 'react', locale: 'en-US' })
console.log(react.label)      // "JavaScript Library"
console.log(react.definition) // "A JavaScript library for building user interfaces..."

// Get all terms as an array
const terms = getTerms({ locale: 'en-US' })
console.log(terms) // [{ id: "react", name: "React", ... }, ...]

// Get dictionary object (keyed by ID)
const dict = getDict({ locale: 'en-US' })
console.log(dict.react.label) // "JavaScript Library"
console.log(dict.typescript.label) // "Programming Language"
```


## API Reference

### `getTerm(options)`

Get a single term by ID.

```typescript
// Localised (default)
const reactEn = getTerm({ id: 'react', locale: 'en-US' })
console.log(reactEn.label) // "JavaScript Library"

const reactDe = getTerm({ id: 'react', locale: 'de-DE' })
console.log(reactDe.label) // "JavaScript-Bibliothek"

// Raw (all translations)
const reactRaw = getTerm({ id: 'react', localized: false })
console.log(reactRaw.label)
// { "en-US": "JavaScript Library", "de-DE": "JavaScript-Bibliothek", ... }
```

**Options:**
- `id: string` - Term identifier (required)
- `locale?: string` - Target locale (default: `'en-US'`)
- `localized?: boolean` - Return localised strings (default: `true`)
- `useFallback?: boolean` - Fall back to en-US for missing translations (default: `true`)

### `getTerms(options)`

Get all terms as an array.

```typescript
// Localised
const terms = getTerms({ locale: 'en-US' })
console.log(terms) // [{ id: "react", label: "JavaScript Library" }, ...]

// Raw
const termsRaw = getTerms({ localized: false })
console.log(termsRaw)
// [{ id: "react", label: { "en-US": "...", "de-DE": "..." } }, ...]
```

**Options:**
- `locale?: string` - Target locale (default: `'en-US'`)
- `localized?: boolean` - Return localised strings (default: `true`)
- `useFallback?: boolean` - Fall back to en-US for missing translations (default: `true`)

### `getDict(options)`

Get dictionary as an object keyed by term ID.

```typescript
// Localised
const dict = getDict({ locale: 'en-US' })
console.log(dict.react.label) // "JavaScript Library"

// Raw
const dictRaw = getDict({ localized: false })
console.log(dictRaw.react.label)
// { "en-US": "JavaScript Library", "de-DE": "JavaScript-Bibliothek", ... }
```

**Options:**
- `locale?: string` - Target locale (default: `'en-US'`)
- `localized?: boolean` - Return localised strings (default: `true`)
- `useFallback?: boolean` - Fall back to en-US for missing translations (default: `true`)

### `getTypes(options)`

Get all term types (e.g., library, framework, language).

```typescript
const types = getTypes({ locale: 'en-US' })
console.log(types)
// [{ id: "library", name: "Library" }, { id: "framework", name: "Framework" }, ...]
```

### `getTags(options)`

Get all term tags (e.g., frontend, backend, open_source).

```typescript
const tags = getTags({ locale: 'en-US' })
console.log(tags)
// [{ id: "frontend", name: "Frontend" }, { id: "backend", name: "Backend" }, ...]
```


## Supported Languages

| Locale | Language | Status |
|--------|----------|--------|
| `en-US` | English (United States) | ✅ Primary (all terms) |
| `en-GB` | English (Great Britain) | ✅ Supported |
| `de-DE` | German (Germany) | ✅ Supported |

Want to add a new language? Check out the [Contributing Guide](./CONTRIBUTING.md#adding-a-new-language).


## Browse Available Terms

Explore the full catalogue of terms, types, and tags:

- **[Terms](./docs/TERMS.md)** - All software development terms
- **[Types](./docs/TYPES.md)** - Term categories (library, framework, etc.)
- **[Tags](./docs/TAGS.md)** - Additional classifications (frontend, backend, etc.)


## Contributing

We welcome contributions! Whether you want to:
- Add a new term
- Provide translations
- Fix errors or typos
- Suggest improvements

Please read our [Contributing Guide](./CONTRIBUTING.md) to get started.


## Development

```bash
# Install dependencies
pnpm install

# Start dev server (serves examples/)
pnpm dev

# Build library
pnpm build

# Lint code
npx eslint .

# Format code
npx prettier --write .
```

For detailed development guidance, see [CLAUDE.md](./CLAUDE.md).


## Use Cases

- **Documentation Sites** - Display term definitions with automatic localisation
- **Educational Platforms** - Teach developers in their native language
- **Developer Tools** - Add contextual help for technical terms
- **Content Management** - Maintain consistent terminology across translations
- **IDE Extensions** - Provide inline term explanations
