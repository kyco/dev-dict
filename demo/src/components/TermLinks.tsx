import type { TTermLinks } from 'dev-dict'
import { ExternalLink, Globe } from 'lucide-react'

interface TermLinksProps {
  links?: TTermLinks
  variant?: 'button' | 'inline'
  onLinkClick?: (e: React.MouseEvent) => void
}

export function TermLinks({ links, variant = 'button', onLinkClick }: TermLinksProps) {
  if (!links || Object.keys(links).length === 0) {
    return variant === 'button' ? <p className="text-sm text-slate-400 italic">No links available</p> : null
  }

  const linkData = [
    { key: 'website' as const, label: 'Official Website', icon: Globe },
    { key: 'github' as const, label: 'GitHub', icon: ExternalLink },
    { key: 'npm' as const, label: 'npm', icon: ExternalLink },
    { key: 'wikipedia' as const, label: 'Wikipedia', icon: ExternalLink },
  ]

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
        <>
          {index > 0 && <span>·</span>}
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
          >
            <Icon size={10} />
            {label}
          </a>
        </>
      ))}
    </div>
  )
}
