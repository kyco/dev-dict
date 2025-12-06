type StatsCardProps = {
  title: string
  value: number
  total: number
  description: string
  color: 'blue' | 'green' | 'purple' | 'orange'
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
}

export function StatsCard({ title, value, total, description, color }: StatsCardProps) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0
  const missing = total - value

  return (
    <div className={`rounded-lg border p-6 ${colorClasses[color]}`}>
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-3xl font-bold">{missing}</span>
        <span className="text-sm opacity-75">missing</span>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>{percentage}% complete</span>
          <span>
            {value}/{total}
          </span>
        </div>
        <div className="w-full bg-white/50 rounded-full h-2">
          <div
            className="bg-current h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <p className="text-xs opacity-75">{description}</p>
    </div>
  )
}
