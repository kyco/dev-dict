import type { FieldCompleteness } from '~/shared/utils/termUtils'
import type { TTerm } from 'dev-dict'

interface CompletenessChartProps {
  baselineFields: FieldCompleteness[]
  additionalFields: FieldCompleteness[]
  baselinePercentage: number
  additionalPercentage: number
  fullPercentage: number
  term: TTerm
}

export function CompletenessChart({
  baselineFields,
  additionalFields,
  baselinePercentage,
  additionalPercentage,
  fullPercentage,
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

  const renderFieldList = (fields: FieldCompleteness[]) => {
    if (fields.length === 0) return null

    return (
      <ul className="space-y-1">
        {fields.map((field) => (
          <li key={field.field} className="flex items-center gap-2 text-sm">
            <span className={field.completed ? 'text-green-600' : 'text-gray-400'}>{field.completed ? '✓' : '○'}</span>
            <span className={field.completed ? 'text-gray-700' : 'text-gray-500'}>{field.label}</span>
          </li>
        ))}
      </ul>
    )
  }

  const renderCategory = (title: string, fields: FieldCompleteness[]) => {
    if (fields.length === 0) return null

    return (
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">{title}</h4>
        {renderFieldList(fields)}
      </div>
    )
  }

  const renderLinksBreakdown = (linksField: FieldCompleteness | undefined) => {
    if (!linksField) return null

    const links = term.links
    const linkStatuses = [
      { name: 'Website', completed: !!links?.website },
      { name: 'Wikipedia', completed: !!links?.wikipedia },
      { name: 'GitHub', completed: !!links?.github },
      { name: 'NPM', completed: !!links?.npm },
    ]

    return (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="text-sm font-semibold text-gray-700">Links (at least one)</h4>
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
              <span className="text-sm text-gray-600">Baseline: {baselinePercentage}%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-600">Additional: {additionalPercentage}%</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-900">{fullPercentage}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden flex">
          <div
            className="bg-blue-600 h-3 transition-all"
            style={{ width: `${baselinePercentage}%` }}
            title={`Baseline: ${baselinePercentage}% (out of 50%)`}
          />
          <div
            className="bg-green-600 h-3 transition-all"
            style={{ width: `${additionalPercentage}%` }}
            title={`Additional: ${additionalPercentage}% (out of 50%)`}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-md font-semibold mb-3">Baseline Requirements</h3>
        {renderCategory('Content', baselineGroups.content)}
        {renderCategory(
          'Metadata',
          baselineGroups.metadata.filter((f) => f.field !== 'links'),
        )}
        {renderLinksBreakdown(baselineGroups.metadata.find((f) => f.field === 'links'))}
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-md font-semibold mb-3">Additional Fields</h3>
        {renderCategory('en-US', additionalGroups['en-US'])}
        {renderCategory('Metadata', additionalGroups.metadata)}
        {renderCategory('en-GB Translation', additionalGroups['en-GB'])}
        {renderCategory('de-DE Translation', additionalGroups['de-DE'])}
      </div>
    </div>
  )
}
