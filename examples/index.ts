import { getDict, getTerm } from '../src/index'

// Get a single term
const reactEn = getTerm({ id: 'react', locale: 'en-US' })
const reactDe = getTerm({ id: 'react', locale: 'de-DE' })
console.log(reactEn.label) // "JavaScript Library"
console.log(reactDe.label) // "JavaScript-Bibliothek"

// Get entire dictionary
const dd = getDict({ locale: 'en-US' })
console.log(dd.react.name) // "React"
