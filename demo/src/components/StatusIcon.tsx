import { Check, X } from 'lucide-react'

interface StatusIconProps {
  has: boolean
}

export function StatusIcon({ has }: StatusIconProps) {
  return has ? <Check size={16} className="text-emerald-500" /> : <X size={16} className="text-red-400" />
}
