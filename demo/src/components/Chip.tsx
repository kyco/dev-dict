import { Layers, Tag, X } from 'lucide-react'

interface ChipProps {
  label: string
  variant?: 'type' | 'tag'
  onRemove?: () => void
}

export function Chip({ label, variant = 'type', onRemove }: ChipProps) {
  const colors =
    variant === 'type'
      ? 'bg-blue-100 text-blue-700 border-blue-200'
      : 'bg-emerald-100 text-emerald-700 border-emerald-200'
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${colors}`}>
      {variant === 'type' ? <Layers size={10} /> : <Tag size={10} />}
      {label}
      {onRemove && (
        <X
          size={10}
          className="cursor-pointer hover:opacity-70"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
        />
      )}
    </span>
  )
}
