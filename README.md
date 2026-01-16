<p align="center">
  <img src="./demo/public/logo.png" alt="dev-dict" width="125">
</p>

# dev-dict

[![npm version](https://img.shields.io/npm/v/dev-dict.svg)](https://www.npmjs.com/package/dev-dict)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/dev-dict)](https://bundlephobia.com/package/dev-dict)

A community-driven collection of software development terms with explanations in multiple languages. Perfect for building developer tools, documentation sites, educational content and much more.

**[Browse All Terms](https://kyco.github.io/dev-dict/)** · **[Documentation](https://kyco.github.io/dev-dict/docs)**

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

For detailed API documentation, code examples, and more, visit the **[Documentation](https://kyco.github.io/dev-dict/docs)**.

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
