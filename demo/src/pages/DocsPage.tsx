import { Link } from '@tanstack/react-router'
import { useCopyToClipboard } from '~/shared/hooks'
import { ArrowLeft, BookOpen, Check, ChevronDown, Code, Copy, Github, Globe, Package, Zap } from 'lucide-react'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodeBlock({ code, language = 'typescript' }: { code: string; language?: string }) {
  const { copied, copy } = useCopyToClipboard()

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    copy(code)
  }

  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          border: '1px solid rgb(51 65 85)',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-slate-600 hover:bg-slate-500 rounded-md transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-slate-200" />}
      </button>
    </div>
  )
}

function Accordion({
  title,
  description,
  children,
  defaultOpen = false,
}: {
  title: string
  description?: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-4 px-4 my-2 text-left hover:bg-slate-50 transition-colors rounded-lg cursor-pointer group"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors">
            {title}
          </h3>
          {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-400 group-hover:text-cyan-600 transition-all flex-shrink-0 ml-3 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  )
}

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string
  title: string
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-32">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-cyan-100 rounded-lg">
          <Icon size={20} className="text-cyan-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: Array<Array<{ text: string; code?: boolean }>> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            {headers.map((header, i) => (
              <th key={i} className="text-left py-3 px-4 font-semibold text-slate-700 bg-slate-50">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-slate-600">
                  {cell.code ? (
                    <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded">{cell.text}</code>
                  ) : (
                    cell.text
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function DocsPage() {
  const navItems = [
    { id: 'installation', label: 'Installation' },
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'api-reference', label: 'API Reference' },
    { id: 'helper-functions', label: 'Helper Functions' },
    { id: 'languages', label: 'Supported Languages' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            search={{ q: undefined, status: undefined }}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Dictionary</span>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kyco/dev-dict"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/dev-dict"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <Package size={16} />
              npm
            </a>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Documentation</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A community-driven collection of software development terms with explanations in multiple languages. Perfect
            for building developer tools, documentation sites, educational content and much more.
          </p>
        </div>

        {/* Quick Nav */}
        <nav className="sticky top-4 z-10 mb-12 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Installation */}
        <Section id="installation" title="Installation" icon={Package}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">via Package Manager</h3>
              <CodeBlock code="npm install dev-dict" language="bash" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">via CDN (unpkg)</h3>
              <CodeBlock
                code={`<script src="https://unpkg.com/dev-dict@latest/dist/dev-dict.min.js"></script>
<script>
  // Access the library via the global 'devdict' object
  const { terms, utils } = devdict

  // Translate to specified locale
  const dictionary = utils.getTerms({ terms, locale: 'en-US' })

  console.log(dictionary)
</script>`}
                language="html"
              />
            </div>
          </div>
        </Section>

        {/* Quick Start */}
        <Section id="quick-start" title="Quick Start" icon={Zap}>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Option 1: All Terms</h3>
              <p className="text-slate-600 mb-4">Import all terms at once for full access to the dictionary.</p>
              <CodeBlock
                code={`import { terms } from 'dev-dict'
import { getTerms } from 'dev-dict/utils'

// Translate to specified locale
const dictionary = getTerms({ terms, locale: 'en-US' })

// Display terms
dictionary.forEach(term => {
  console.log(term.name)  // "React"
  console.log(term.label) // "JavaScript Library"
})`}
              />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Option 2: Selected Terms</h3>
              <p className="text-slate-600 mb-4">
                Import only the terms you need for smaller bundle size with tree-shaking.
              </p>
              <CodeBlock
                code={`// Import a selection of terms
import { react, typescript, node_js } from 'dev-dict/terms'
import { getTerms } from 'dev-dict/utils'

// Create a list with only the terms you need
const terms = { react, typescript, node_js }

// Then use the same helper functions as Option 1
const dictionary = getTerms({ terms, locale: 'en-US' })`}
              />
            </div>
          </div>
        </Section>

        {/* API Reference */}
        <Section id="api-reference" title="API Reference" icon={Code}>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Import Data</h3>
              <CodeBlock code={`import { terms, types, tags, sources, locales } from 'dev-dict'`} />
            </div>

            <div className="space-y-0">
              <Accordion title="terms" description="Raw terms dictionary with TLocaleRecord values">
                <CodeBlock
                  code={`{
  react: {
    id: 'react',
    name: { 'en-US': 'React', ... },
    label: { 'en-US': 'JavaScript Library', ... },
    definition: { 'en-US': 'A JavaScript library for ...', ... },
    type: [
      { id: 'library', name: { 'en-US': 'Library', ... } }
    ],
    tags: [
      { id: 'frontend', name: { 'en-US': 'Frontend', ... } },
      ...
    ],
    links: { website: 'https://react.dev', wikipedia: '...', ... },
    sources: {
      label: [ { id: 'community', name: { 'en-US': 'Community', ... } } ],
      ...
    }
  },
  typescript: { id: 'typescript', ... },
  // ... more terms
}`}
                />
              </Accordion>

              <Accordion title="types" description="Type constants with TLocaleRecord values">
                <CodeBlock
                  code={`{
  library: {
    id: 'library',
    name: { 'en-US': 'Library', 'en-GB': 'Library', 'de-DE': 'Bibliothek' }
  },
  framework: {
    id: 'framework',
    name: { 'en-US': 'Framework', 'en-GB': 'Framework', 'de-DE': 'Framework' }
  },
  language: {
    id: 'language',
    name: { 'en-US': 'Language', 'en-GB': 'Language', 'de-DE': 'Sprache' }
  },
  // ... more types
}`}
                />
              </Accordion>

              <Accordion title="tags" description="Tag constants with TLocaleRecord values">
                <CodeBlock
                  code={`{
  frontend: {
    id: 'frontend',
    name: { 'en-US': 'Frontend', 'en-GB': 'Frontend', 'de-DE': 'Frontend' }
  },
  backend: {
    id: 'backend',
    name: { 'en-US': 'Backend', 'en-GB': 'Backend', 'de-DE': 'Backend' }
  },
  open_source: {
    id: 'open_source',
    name: { 'en-US': 'Open Source', 'en-GB': 'Open Source', 'de-DE': 'Open Source' }
  },
  // ... more tags
}`}
                />
              </Accordion>

              <Accordion title="sources" description="Source attribution constants with TLocaleRecord values">
                <CodeBlock
                  code={`{
  official_website: {
    id: 'official_website',
    name: { 'en-US': 'Official Website', 'en-GB': 'Official Website', 'de-DE': 'Offizielle Website' }
  },
  wikipedia: {
    id: 'wikipedia',
    name: { 'en-US': 'Wikipedia', 'en-GB': 'Wikipedia', 'de-DE': 'Wikipedia' }
  },
  community: {
    id: 'community',
    name: { 'en-US': 'Community', 'en-GB': 'Community', 'de-DE': 'Gemeinschaft' }
  },
  ai_generated: {
    id: 'ai_generated',
    name: { 'en-US': 'AI Generated', 'en-GB': 'AI Generated', 'de-DE': 'KI-generiert' }
  }
}`}
                />
              </Accordion>

              <Accordion title="locales" description="Available locale constants">
                <CodeBlock
                  code={`{
  'en-US': 'en-US',
  'en-GB': 'en-GB',
  'de-DE': 'de-DE'
}`}
                />
              </Accordion>
            </div>
          </div>
        </Section>

        {/* Helper Functions */}
        <Section id="helper-functions" title="Helper Functions" icon={BookOpen}>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Import</h3>
              <CodeBlock
                code={`import {
  getTerms,
  getTermsDict,
  getTypes,
  getTypesDict,
  getTags,
  getTagsDict,
  getSources,
  getSourcesDict
} from 'dev-dict/utils'`}
              />
            </div>

            <div className="space-y-0">
              <Accordion title="getTerms()" description="Get all terms as an array">
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getTerms } from 'dev-dict/utils'

const dictionary = getTerms({
  terms,              // Required: the terms dictionary
  locale: 'en-US',    // Optional: defaults to 'en-US'
  populateEmpty: true // Optional: defaults to true
})

// Returns: [
//   { id: "react", name: "React", label: "JavaScript Library", ... },
//   { id: "vue", name: "Vue", label: "JavaScript Framework", ... },
//   ...
// ]`}
                />
              </Accordion>

              <Accordion title="getTermsDict()" description="Get all terms as a dictionary object">
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getTermsDict } from 'dev-dict/utils'

const termsDict = getTermsDict({
  terms,
  locale: 'en-US',
  populateEmpty: true
})

// Returns: {
//   react: { id: "react", name: "React", label: "JavaScript Library", ... },
//   vue: { id: "vue", name: "Vue", label: "JavaScript Framework", ... },
//   ...
// }`}
                />
              </Accordion>

              <Accordion title="getTypes()" description="Get all types as an array (extracted from terms)">
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getTypes } from 'dev-dict/utils'

const typesList = getTypes({
  terms,              // Required: the terms dictionary
  locale: 'en-US',
  populateEmpty: true
})

// Returns: [
//   { id: "library", name: "Library" },
//   { id: "framework", name: "Framework" },
//   ...
// ]`}
                />
              </Accordion>

              <Accordion
                title="getTypesDict()"
                description="Get all types as a dictionary object (extracted from terms)"
              >
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getTypesDict } from 'dev-dict/utils'

const typesDict = getTypesDict({
  terms,              // Required: the terms dictionary
  locale: 'en-US',
  populateEmpty: true
})

// Returns: {
//   library: { id: "library", name: "Library" },
//   framework: { id: "framework", name: "Framework" },
//   ...
// }`}
                />
              </Accordion>

              <Accordion title="getTags()" description="Get all tags as an array (extracted from terms)">
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getTags } from 'dev-dict/utils'

const tagsList = getTags({
  terms,              // Required: the terms dictionary
  locale: 'en-US',
  populateEmpty: true
})

// Returns: [
//   { id: "frontend", name: "Frontend" },
//   { id: "backend", name: "Backend" },
//   ...
// ]`}
                />
              </Accordion>

              <Accordion title="getTagsDict()" description="Get all tags as a dictionary object (extracted from terms)">
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getTagsDict } from 'dev-dict/utils'

const tagsDict = getTagsDict({
  terms,              // Required: the terms dictionary
  locale: 'en-US',
  populateEmpty: true
})

// Returns: {
//   frontend: { id: "frontend", name: "Frontend" },
//   backend: { id: "backend", name: "Backend" },
//   ...
// }`}
                />
              </Accordion>

              <Accordion title="getSources()" description="Get all sources as an array (extracted from terms)">
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getSources } from 'dev-dict/utils'

const sourcesList = getSources({
  terms,              // Required: the terms dictionary
  locale: 'en-US',
  populateEmpty: true
})

// Returns: [
//   { id: "official_website", name: "Official Website" },
//   { id: "wikipedia", name: "Wikipedia" },
//   ...
// ]`}
                />
              </Accordion>

              <Accordion
                title="getSourcesDict()"
                description="Get all sources as a dictionary object (extracted from terms)"
              >
                <CodeBlock
                  code={`import { terms } from 'dev-dict'
import { getSourcesDict } from 'dev-dict/utils'

const sourcesDict = getSourcesDict({
  terms,              // Required: the terms dictionary
  locale: 'en-US',
  populateEmpty: true
})

// Returns: {
//   official_website: { id: "official_website", name: "Official Website" },
//   wikipedia: { id: "wikipedia", name: "Wikipedia" },
//   ...
// }`}
                />
              </Accordion>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Options</h3>
              <p className="text-slate-600 mb-4">
                All helper functions accept the same options. Note that all functions take{' '}
                <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded">terms</code> as input, even when extracting
                types, tags or sources.
              </p>
              <Table
                headers={['Parameter', 'Type', 'Required', 'Default', 'Description']}
                rows={[
                  [
                    { text: 'terms', code: true },
                    { text: 'TTermsDict', code: true },
                    { text: 'Yes', code: false },
                    { text: '-', code: false },
                    { text: 'The terms dictionary (all functions use terms as input)', code: false },
                  ],
                  [
                    { text: 'locale', code: true },
                    { text: 'string', code: true },
                    { text: 'No', code: false },
                    { text: "'en-US'", code: true },
                    { text: 'Target locale (en-US, en-GB, de-DE)', code: false },
                  ],
                  [
                    { text: 'populateEmpty', code: true },
                    { text: 'boolean', code: true },
                    { text: 'No', code: false },
                    { text: 'true', code: true },
                    { text: 'Populate empty locale records with en-US values', code: false },
                  ],
                ]}
              />
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">TypeScript Types</h3>
              <p className="text-slate-600 mb-4">
                All TypeScript type definitions are available in the package. See{' '}
                <a
                  href="https://github.com/kyco/dev-dict/blob/main/src/types/index.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-700 underline"
                >
                  src/types/index.ts
                </a>{' '}
                for complete type definitions.
              </p>
              <CodeBlock
                code={`import type {
  TTermsDict,
  TTermEntry,
  TLocaleRecord,
  // ... more types
} from 'dev-dict'`}
              />
            </div>
          </div>
        </Section>

        {/* Supported Languages */}
        <Section id="languages" title="Supported Languages" icon={Globe}>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Table
              headers={['Locale', 'Language', 'Status']}
              rows={[
                [
                  { text: 'en-US', code: true },
                  { text: 'English (United States)', code: false },
                  { text: '✅ Primary', code: false },
                ],
                [
                  { text: 'en-GB', code: true },
                  { text: 'English (Great Britain)', code: false },
                  { text: '✅ Supported', code: false },
                ],
                [
                  { text: 'de-DE', code: true },
                  { text: 'German (Germany)', code: false },
                  { text: '✅ Supported', code: false },
                ],
              ]}
            />
            <p className="mt-4 text-slate-600">
              Want to add a language? See{' '}
              <a
                href="https://github.com/kyco/dev-dict/blob/main/CONTRIBUTING.md#adding-a-new-language"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 underline"
              >
                CONTRIBUTING.md
              </a>
            </p>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500">
            Contributions welcome!{' '}
            <a
              href="https://github.com/kyco/dev-dict/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 underline"
            >
              Learn how to contribute
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
