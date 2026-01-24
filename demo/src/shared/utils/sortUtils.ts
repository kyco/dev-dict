/**
 * Custom sort function that ensures terms starting with special characters
 * (like ".NET") appear first in their alphabetical group.
 *
 * For example, ".NET" will appear first under "N", before "NestJS".
 */
export function sortTermsByName(a: { name: string }, b: { name: string }, locale = 'en-US'): number {
  const aHasSpecialPrefix = /^[^a-zA-Z0-9]/.test(a.name)
  const bHasSpecialPrefix = /^[^a-zA-Z0-9]/.test(b.name)

  // Remove leading non-alphanumeric characters for primary comparison
  const aClean = a.name.replace(/^[^a-zA-Z0-9]+/, '')
  const bClean = b.name.replace(/^[^a-zA-Z0-9]+/, '')

  // Get first letter (case-insensitive) for grouping
  const aFirstLetter = aClean.charAt(0).toLowerCase()
  const bFirstLetter = bClean.charAt(0).toLowerCase()

  // If they're in different letter groups, sort by letter
  if (aFirstLetter !== bFirstLetter) {
    return aClean.localeCompare(bClean, locale)
  }

  // Same letter group: items with special prefixes come first
  if (aHasSpecialPrefix && !bHasSpecialPrefix) {
    return -1
  }
  if (!aHasSpecialPrefix && bHasSpecialPrefix) {
    return 1
  }

  // Both have or both don't have special prefixes: sort normally
  return a.name.localeCompare(b.name, locale)
}
