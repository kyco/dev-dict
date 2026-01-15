import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface DropdownOption {
  id?: string
  code?: string
  label: string
}

interface DropdownProps<T extends string | string[]> {
  icon: React.ComponentType<{ size: number; className?: string }>
  placeholder: string
  options: DropdownOption[]
  selected: T
  setSelected: T extends string[] ? React.Dispatch<React.SetStateAction<string[]>> : (value: T) => void
  multi?: boolean
}

export function Dropdown<T extends string | string[]>({
  icon: Icon,
  placeholder,
  options,
  selected,
  setSelected,
  multi = false,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedItems = multi
    ? options.filter((o) => (selected as string[]).includes(o.id || o.code || ''))
    : options.find((o) => (o.id || o.code) === selected)
  const displayText = multi
    ? Array.isArray(selectedItems) && selectedItems.length
      ? `${selectedItems.length} selected`
      : placeholder
    : (selectedItems as DropdownOption | undefined)?.label || placeholder

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 px-3 bg-white rounded-lg border ${isOpen ? 'border-blue-300 ring-2 ring-blue-100' : 'border-slate-200 hover:border-slate-300'} flex items-center gap-2 transition-all text-sm min-w-[140px]`}
      >
        <Icon size={16} className="text-slate-400" />
        <span
          className={`flex-1 text-left truncate ${(Array.isArray(selectedItems) ? selectedItems.length : selectedItems) ? 'text-slate-700' : 'text-slate-400'}`}
        >
          {displayText}
        </span>
        <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute z-20 w-full mt-1 bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden min-w-[180px]">
            <div className="max-h-60 overflow-y-auto py-1">
              {options.map((option) => {
                const key = option.id || option.code || ''
                const isSelected = multi ? (selected as string[]).includes(key) : selected === key
                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (multi) {
                        ;(setSelected as React.Dispatch<React.SetStateAction<string[]>>)((prev: string[]) =>
                          isSelected ? prev.filter((id) => id !== key) : [...prev, key],
                        )
                      } else {
                        ;(setSelected as (value: string) => void)(key)
                        setIsOpen(false)
                      }
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 flex items-center justify-between gap-2"
                  >
                    <span
                      className={`truncate whitespace-nowrap ${isSelected ? 'text-slate-800 font-medium' : 'text-slate-600'}`}
                    >
                      {option.label}
                    </span>
                    {isSelected && <Check size={16} className="text-blue-600 flex-shrink-0" />}
                  </button>
                )
              })}
            </div>
            {multi && (selected as string[]).length > 0 && (
              <div className="border-t border-slate-100 p-1">
                <button
                  onClick={() => (setSelected as React.Dispatch<React.SetStateAction<string[]>>)([])}
                  className="w-full px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-50 rounded"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
