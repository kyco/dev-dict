# dev-dict

A dictionary of software related terms.

This package aims to provide an exhaustive list of software industry related terms with simple explanations - and in multiple languages.

A list of available terms can be found here:
- [Terms](./docs/TERMS.md)

Supported languages:
- [Languages](./data/locales/index.ts)


## Installation

```bash
npm i dev-dict
```


## Usage

By default the dictionary is localised and defaults to "en-US".

```typescript
import { getTerm, getTerms, getDict } from 'dev-dict'

/**
 * Get dictionary
 */
const dd = getDict({ locale: 'en-US' })
console.log(dd.react.label) // "JavaScript Library"

/**
 * Get dictionary (raw)
 */
const ddRaw = getDict({ localized: false })
console.log(ddRaw.react.label) // { "en-US": "JavaScript Library", "de-DE": "JavaScript-Bibliothek", ... }

/**
 * Get a single term
 */
const reactEn = getTerm({ id: 'react', locale: 'en-US' })
const reactDe = getTerm({ id: 'react', locale: 'de-DE' })
console.log(reactEn.label) // "JavaScript Library"
console.log(reactDe.label) // "JavaScript-Bibliothek"

/**
 * Get a single term (raw)
 */
const reactRaw = getTerm({ id: 'react', localized: false })
console.log(reactRaw.label) // { "en-US": "JavaScript Library", "de-DE": "JavaScript-Bibliothek", ... }

/**
 * Get all terms
 */
const terms = getTerms({ locale: 'en-US' })
console.log(terms) // [{ id: "react", label: "JavaScript Library" }, ... ]

/**
 * Get all terms (raw)
 */
const termsRaw = getTerms({ localized: false })
console.log(termsRaw) // [{ id: "react", label: { "en-US": "JavaScript Library", "de-DE": "JavaScript-Bibliothek", ... } }, ... ]
```
