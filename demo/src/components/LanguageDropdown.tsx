import type { TLocale } from 'dev-dict'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useState } from 'react'

interface LanguageOption {
  code: TLocale
  label: string
}

interface LanguageDropdownProps {
  options: LanguageOption[]
  selected: TLocale
  setSelected: (value: TLocale) => void
  populateEmpty: boolean
  setPopulateEmpty: (value: boolean) => void
}

export function LanguageDropdown({
  options,
  selected,
  setSelected,
  populateEmpty,
  setPopulateEmpty,
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find((o) => o.code === selected)
  const displayText = selectedOption?.label || 'Language'

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 px-3 bg-white rounded-lg border ${isOpen ? 'border-blue-300 ring-2 ring-blue-100' : 'border-slate-200 hover:border-slate-300'} flex items-center gap-2 transition-all text-sm min-w-[140px] cursor-pointer`}
      >
        <Globe size={16} className="text-slate-400" />
        <span className="flex-1 text-left truncate text-slate-700">{displayText}</span>
        <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute z-20 w-full mt-1 bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden min-w-[220px]">
            <div className="py-1">
              {options.map((option) => {
                const isSelected = selected === option.code
                return (
                  <button
                    key={option.code}
                    onClick={() => {
                      setSelected(option.code)
                      setIsOpen(false)
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <span className={`truncate ${isSelected ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                      {option.label}
                    </span>
                    {isSelected && <Check size={16} className="text-blue-600 flex-shrink-0" />}
                  </button>
                )
              })}
            </div>

            <div className="border-t border-slate-100 p-1">
              <label className="flex items-center gap-2 cursor-pointer group w-full px-3 py-1.5 hover:bg-slate-50 rounded">
                <button
                  type="button"
                  role="switch"
                  aria-checked={populateEmpty}
                  onClick={(e) => {
                    e.preventDefault()
                    setPopulateEmpty(!populateEmpty)
                  }}
                  className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                    populateEmpty ? 'bg-blue-600 group-hover:bg-blue-700' : 'bg-slate-300 group-hover:bg-slate-400'
                  }`}
                >
                  <span
                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform shadow-sm group-hover:scale-110 ${
                      populateEmpty ? 'translate-x-3.5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
                <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">
                  Populate Empty
                </span>
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
