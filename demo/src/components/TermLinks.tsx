import type { TTermLinks } from 'dev-dict'
import { ExternalLink, Globe } from 'lucide-react'
import { Fragment } from 'react'

interface TermLinksProps {
  links?: TTermLinks
  variant?: 'button' | 'inline'
  onLinkClick?: (e: React.MouseEvent) => void
  showEmpty?: boolean
}

const linkData = [
  { key: 'website' as const, label: 'Official Website', icon: Globe },
  { key: 'github' as const, label: 'GitHub', icon: ExternalLink },
  { key: 'npm' as const, label: 'npm', icon: ExternalLink },
  { key: 'wikipedia' as const, label: 'Wikipedia', icon: ExternalLink },
]

export function TermLinks({ links, variant = 'button', onLinkClick, showEmpty = false }: TermLinksProps) {
  if (!links || !Object.keys(links).length) {
    return showEmpty ? <p className="text-sm text-slate-400 italic">No links specified</p> : null
  }

  const availableLinks = linkData.filter((link) => links[link.key])

  if (variant === 'button') {
    return (
      <div className="flex flex-wrap gap-2">
        {availableLinks.map(({ key, label, icon: Icon }) => (
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
      {availableLinks.map(({ key, label, icon: Icon }, index) => (
        <Fragment key={key}>
          {index > 0 && <span>·</span>}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(links[key], '_blank', 'noopener,noreferrer')
              onLinkClick?.(e)
            }}
            className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit"
          >
            <Icon size={10} />
            {label}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
