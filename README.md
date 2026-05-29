<p align="center">
  <img src="./demo/public/logo.png" alt="dev-dict" width="125">
</p>

# dev-dict

A collection of software development terms (with multilingual support). Useful for building developer tools, documentation sites, personal portfolios, etc.

**[Docs](https://kyco.github.io/dev-dict/docs)** · **[Browse all terms](https://kyco.github.io/dev-dict/)**

## Installation

```bash
npm install dev-dict
```

## Usage

```typescript
import { terms } from 'dev-dict'
import { getTerms } from 'dev-dict/utils'

// Define dictionary
const dictionary = getTerms({ terms })

// Display terms
dictionary.forEach(term => {
  console.log(term.name) // "React", "TypeScript", etc.
})
```


## Bundle size

Dev-dict contains 220+ terms. To keep your bundle small import only the terms you need.

```typescript
// GOOD
import { react, typescript } from 'dev-dict/terms'

// BAD
import { terms } from 'dev-dict'
```

The root entry is best suited for server-side or build-time use cases where you need the full dataset (e.g. generating a static glossary page).

## Supported languages

| Locale  | Language                            |
|---------|-------------------------------------|
| `en-US` | English (United States) - _Default_ |
| `en-GB` | English (Great Britain)             |
| `de-DE` | German (Germany)                    |

## Contributing

Contributions welcome! Please help add terms, provide translations, fix errors and/or suggest improvements.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Development

```bash
pnpm install      # Install dependencies
pnpm build        # Build library
pnpm test         # Run tests
pnpm demo:dev     # Run demo site (http://localhost:5173/dev-dict)
pnpm demo:build   # Build demo site
```
