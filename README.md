<p align="center">
  <img src="./demo/public/logo.png" alt="dev-dict" width="125">
</p>

# dev-dict

A community-driven collection of software development terms with explanations in multiple languages. Perfect for building developer tools, documentation sites, educational content and much more.

**[Docs](https://kyco.github.io/dev-dict/docs)** · **[Browse All Terms](https://kyco.github.io/dev-dict/)**

## Installation

```bash
npm install dev-dict
```

## Quick Start

```typescript
import { terms } from 'dev-dict'
import { getTerms } from 'dev-dict/utils'

// Translate to specified locale
const dictionary = getTerms({ terms, locale: 'en-US' })

// Display terms
dictionary.forEach(term => {
  console.log(term.name) // "React"
  console.log(term.label) // "JavaScript Library"
})
```

For detailed API documentation, code examples, and more, visit the **[documentation](https://kyco.github.io/dev-dict/docs)**.

## Bundle Size & Tree-Shaking

Dev-dict contains 200+ terms. To keep your bundle small, import only the terms you need via sub-path entry points.

**Preferred — import specific terms from `dev-dict/terms`:**

```typescript
// GOOD - Only react and typescript are included in your bundle
import { react, typescript } from 'dev-dict/terms'
```

**Avoid importing from the root entry point** when you only need a subset of terms — it pulls in the entire dictionary at once and cannot be tree-shaken:

```typescript
// BAD - Includes all 200+ terms regardless of what you use
import { terms } from 'dev-dict'
```

The root entry is best suited for server-side or build-time use cases where you need the full dataset (e.g. generating a static glossary page).

## Supported Languages

| Locale | Language | Status |
|--------|----------|--------|
| `en-US` | English (United States) | ✅ Primary |
| `en-GB` | English (Great Britain) | ✅ Supported |
| `de-DE` | German (Germany) | ✅ Supported |

Want to add a language? See [CONTRIBUTING.md](./CONTRIBUTING.md#adding-a-new-language)

## Contributing

Contributions welcome! Add terms, provide translations, fix errors or suggest improvements.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Development

```bash
pnpm install      # Install dependencies
pnpm build        # Build library
pnpm demo:dev     # Run demo site (http://localhost:5173)
pnpm demo:build   # Build demo site
```

See [CLAUDE.md](./.claude/CLAUDE.md) for detailed development guidance.
