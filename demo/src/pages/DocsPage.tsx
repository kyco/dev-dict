import { Link } from '@tanstack/react-router'
import { ArrowLeft, BookOpen, Check, Code, Copy, Github, Globe, Package, Zap } from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ code, language = 'typescript' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-slate-300" />}
      </button>
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
    <section id={id} className="mb-12 scroll-mt-8">
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
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
                  <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded">{cell}</code>
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/dev-dict"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
            >
              <Package size={18} />
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
        <nav className="mb-12 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
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
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Import Data</h3>
              <CodeBlock code={`import { terms, types, tags, locales } from 'dev-dict'`} />

              <div className="mt-6">
                <Table
                  headers={['Export', 'Description']}
                  rows={[
                    ['terms', 'Raw terms dictionary'],
                    ['types', 'Type constants and definitions'],
                    ['tags', 'Tag constants and definitions'],
                    ['locales', 'Locale constants'],
                  ]}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Helper Functions */}
        <Section id="helper-functions" title="Helper Functions" icon={BookOpen}>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
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

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Example Usage</h3>
              <CodeBlock
                code={`// Get terms as an array
const dictionary = getTerms({
  terms,              // Required: the terms dictionary
  locale: 'en-US',    // Optional: defaults to 'en-US'
  populateEmpty: true // Optional: defaults to true
})
// [{ id: "react", name: "React", ... }, { id: "vue", name: "Vue", ... }]

// Get terms as a dictionary object
const termsDict = getTermsDict({ terms, locale: 'en-US' })
// { react: { id: "react", name: "React", ... }, vue: { id: "vue", name: "Vue", ... } }`}
              />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Options</h3>
              <Table
                headers={['Parameter', 'Type', 'Required', 'Default', 'Description']}
                rows={[
                  ['terms', 'TTermsDict', 'Yes', '-', 'The terms dictionary'],
                  ['locale', 'string', 'No', "'en-US'", 'Target locale'],
                  ['populateEmpty', 'boolean', 'No', 'true', 'Populate empty locale records with en-US values'],
                ]}
              />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Available Functions</h3>
              <Table
                headers={['Function', 'Returns', 'Description']}
                rows={[
                  ['getTermsDict(options)', 'Dictionary', 'Get all terms as a dictionary object'],
                  ['getTerms(options)', 'Array', 'Get all terms as an array'],
                  ['getTypesDict(options)', 'Dictionary', 'Get all term types as a dictionary object'],
                  ['getTypes(options)', 'Array', 'Get all term types as an array'],
                  ['getTagsDict(options)', 'Dictionary', 'Get all term tags as a dictionary object'],
                  ['getTags(options)', 'Array', 'Get all term tags as an array'],
                  ['getSourcesDict(options)', 'Dictionary', 'Get all sources as a dictionary object'],
                  ['getSources(options)', 'Array', 'Get all sources as an array'],
                ]}
              />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Types</h3>
              <p className="text-slate-600">
                See{' '}
                <a
                  href="https://github.com/kyco/dev-dict/blob/main/src/types/index.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-700 underline"
                >
                  src/types/index.ts
                </a>{' '}
                for all type definitions.
              </p>
            </div>
          </div>
        </Section>

        {/* Supported Languages */}
        <Section id="languages" title="Supported Languages" icon={Globe}>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Table
              headers={['Locale', 'Language', 'Status']}
              rows={[
                ['en-US', 'English (United States)', '✅ Primary'],
                ['en-GB', 'English (Great Britain)', '✅ Supported'],
                ['de-DE', 'German (Germany)', '✅ Supported'],
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
