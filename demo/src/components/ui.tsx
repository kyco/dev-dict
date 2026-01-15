import { Link } from '@tanstack/react-router'
import type { TTermLocalized, TTermTagLocalized, TTermTypeLocalized } from 'dev-dict'
import { Book, Check, ChevronDown, Copy, ExternalLink, Globe, Layers, Search, Tag, X } from 'lucide-react'
import { useState } from 'react'

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

interface DropdownOption {
  id?: string
  code?: string
  label: string
}

interface DropdownProps<T extends string | string[]> {
  icon: typeof Globe
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

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search terms..."
        className="w-full pl-12 pr-12 py-3 bg-white rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          <X size={20} />
        </button>
      )}
    </div>
  )
}

interface TermCardProps {
  term: TTermLocalized
  searchQuery?: string
}

export function TermCard({ term, searchQuery }: TermCardProps) {
  const [copied, setCopied] = useState(false)

  const copyId = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(term.id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Link
      to="/term/$termId"
      params={{ termId: term.id }}
      search={{ from: searchQuery || '' }}
      className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer block"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{term.name}</h3>
          {term.label ? <p className="text-sm text-slate-500">{term.label}</p> : null}
          <button
            onClick={copyId}
            className={`inline-flex items-center gap-1 px-2 pt-0.5 mt-2 text-xs rounded transition-all mb-1 ${
              copied
                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                : 'bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200 hover:text-slate-700'
            }`}
            title="Click to copy ID"
          >
            {copied ? (
              <>
                <Check size={12} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={12} />
                <code>{term.id}</code>
              </>
            )}
          </button>
        </div>
        <Book size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
      </div>
      {term.definition ? (
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{term.definition}</p>
      ) : null}

      {term.type.length || term.tags.length ? (
        <div className="flex flex-wrap items-center gap-1.5">
          {term.type.map((t: TTermTypeLocalized) => (
            <Chip key={t.id} label={t.name} variant="type" />
          ))}
          {term.tags.map((t: TTermTagLocalized) => (
            <Chip key={t.id} label={t.name} variant="tag" />
          ))}
        </div>
      ) : null}

      {term.links && Object.keys(term.links).length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
          {term.links.website && (
            <a
              href={term.links.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
            >
              <Globe size={10} />
              Official Website
            </a>
          )}
          {term.links.github && (
            <>
              {term.links.website && <span>·</span>}
              <a
                href={term.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={10} />
                GitHub
              </a>
            </>
          )}
          {term.links.npm && (
            <>
              {(term.links.website || term.links.github) && <span>·</span>}
              <a
                href={term.links.npm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={10} />
                npm
              </a>
            </>
          )}
          {term.links.wikipedia && (
            <>
              {(term.links.website || term.links.github || term.links.npm) && <span>·</span>}
              <a
                href={term.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={10} />
                Wikipedia
              </a>
            </>
          )}
        </div>
      )}
    </Link>
  )
}
