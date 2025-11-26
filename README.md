# dev-dict

A dictionary of software related terms.

This package aims to provide an exhaustive list of software industry related terms with simple explanations.

Currently supported languages:
- English (US)
- English (GB)
- German (DE)

## Installation

```bash
npm i dev-dict
```

## Usage

```typescript
import { getTerm, getDict } from 'dev-dict'

// Get a single term
const reactEn = getTerm({ id: 'react', locale: 'en-US' })
const reactDe = getTerm({ id: 'react', locale: 'de-DE' })
console.log(reactEn.label) // "JavaScript Library"
console.log(reactDe.label) // "JavaScript-Bibliothek"


// Get entire dictionary
const dd = getDict({ locale: 'en-US' })
console.log(dd.react.name) // "React"
```
