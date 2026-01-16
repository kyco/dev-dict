import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '~/pages/HomePage'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string | undefined) || undefined,
    status: (search.status as string | undefined) || undefined,
  }),
  component: HomeRouteComponent,
})

function HomeRouteComponent() {
  const { q, status } = Route.useSearch()
  const navigate = Route.useNavigate()

  const setSearch = (value: string) => {
    navigate({ search: (prev) => ({ ...prev, q: value || undefined }) })
  }

  const setStatus = (value: string) => {
    navigate({ search: (prev) => ({ ...prev, status: value === 'all' ? undefined : value }) })
  }

  return (
    <HomePage
      searchQuery={q || ''}
      onSearchChange={setSearch}
      completeness={status || 'all'}
      onCompletenessChange={setStatus}
    />
  )
}
