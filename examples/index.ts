import { getDict, getTerm, getTerms, getTypes } from '../src/index'

const types = getTypes({ localized: false })
console.log('types', types)
const reactDe = getTerm({ id: 'javascript', locale: 'en-GB' })
console.log(reactDe.definition) // "JavaScript-Bibliothek"

const reactRaw = getTerms({ localized: false, useFallback: false })
console.log(reactRaw) // { "en-US": "JavaScript Library", "de-DE": "JavaScript-Bibliothek", ... }
