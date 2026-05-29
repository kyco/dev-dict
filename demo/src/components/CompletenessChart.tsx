import type { TTerm } from 'dev-dict'

import type { FieldCompleteness } from '~/shared/utils/termUtils'

interface CompletenessChartProps {
  baselineFields: FieldCompleteness[]
  additionalFields: FieldCompleteness[]
  baselinePercentage: number
  additionalPercentage: number
  fullPercentage: number
  baselineCount: number
  baselineTotal: number
  additionalCount: number
  additionalTotal: number
  term: TTerm
}

export function CompletenessChart({
  baselineFields,
  additionalFields,
  baselinePercentage,
  additionalPercentage,
  fullPercentage,
  baselineCount,
  baselineTotal,
  additionalCount,
  additionalTotal,
  term,
}: CompletenessChartProps) {
  const groupByCategory = (fields: FieldCompleteness[]) => {
    const groups: Record<string, FieldCompleteness[]> = {
      content: [],
      metadata: [],
      'en-US': [],
      'en-GB': [],
      'de-DE': [],
    }

    fields.forEach((field) => {
      const category = field.category || 'metadata'
      if (!groups[category]) groups[category] = []
      groups[category].push(field)
    })

    return groups
  }

  const baselineGroups = groupByCategory(baselineFields)
  const additionalGroups = groupByCategory(additionalFields)

  const renderCount = (completed: number, total: number) => {
    const allDone = completed === total
    return (
      <span
        className={`text-xs font-medium px-1.5 py-0.5 rounded ${allDone ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}
      >
        {completed}/{total}
      </span>
    )
  }

  const renderFieldList = (fields: FieldCompleteness[]) => {
    if (fields.length === 0) return null

    return (
      <ul className="space-y-1">
        {fields.map((field) => (
          <li key={field.field} className="flex items-center gap-2 text-sm">
            <span className={field.completed ? 'text-green-600' : 'text-gray-400'}>{field.completed ? '✓' : '○'}</span>
            <span className={field.completed ? 'text-gray-700' : 'text-gray-500'}>{field.label}</span>
            {field.optional && <span className="text-gray-400 text-xs">(Optional)</span>}
          </li>
        ))}
      </ul>
    )
  }

  const renderCategory = (title: string, fields: FieldCompleteness[]) => {
    if (fields.length === 0) return null

    const countableFields = fields.filter((f) => !f.optional)
    const completed = countableFields.filter((f) => f.completed).length
    const total = countableFields.length

    return (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
          {total > 0 && renderCount(completed, total)}
        </div>
        {renderFieldList(fields)}
      </div>
    )
  }

  const renderLinksBreakdown = (linksField: FieldCompleteness | undefined) => {
    if (!linksField) return null

    const links = term.links
    const linkStatuses = [
      { name: 'Official Website', completed: !!links?.official_website },
      { name: 'Wikipedia', completed: !!links?.wikipedia },
      { name: 'GitHub', completed: !!links?.github },
      { name: 'npm', completed: !!links?.npm },
    ]
    const hasAny = linkStatuses.some((l) => l.completed)

    return (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="text-sm font-semibold text-gray-700">Links (at least one)</h4>
          {renderCount(hasAny ? 1 : 0, 1)}
        </div>
        <ul className="space-y-1">
          {linkStatuses.map((link) => (
            <li key={link.name} className="flex items-center gap-2 text-sm">
              <span className={link.completed ? 'text-green-600' : 'text-gray-400'}>{link.completed ? '✓' : '○'}</span>
              <span className={link.completed ? 'text-gray-700' : 'text-gray-500'}>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Term Completeness</h3>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-600">
                Core fields: {baselineCount}/{baselineTotal}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-600">
                Translations: {additionalCount}/{additionalTotal}
              </span>
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-900">{fullPercentage}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden flex">
          <div
            className="bg-blue-600 h-3 transition-all"
            style={{ width: `${baselinePercentage}%` }}
            title={`Core fields: ${baselinePercentage}%`}
          />
          <div
            className="bg-green-600 h-3 transition-all"
            style={{ width: `${additionalPercentage}%` }}
            title={`Translations: ${additionalPercentage}%`}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-md font-semibold mb-3">Core Fields</h3>
        {renderCategory('Content', baselineGroups.content)}
        {renderCategory(
          'Metadata',
          baselineGroups.metadata.filter((f) => f.field !== 'links'),
        )}
        {renderLinksBreakdown(baselineGroups.metadata.find((f) => f.field === 'links'))}
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-md font-semibold mb-3">Translations</h3>
        {renderCategory('en-US', additionalGroups['en-US'])}
        {renderCategory('en-GB Translation', additionalGroups['en-GB'])}
        {renderCategory('de-DE Translation', additionalGroups['de-DE'])}
      </div>
    </div>
  )
}
