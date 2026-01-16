import { createFileRoute } from '@tanstack/react-router'
import { StatusPage } from '~/pages/StatusPage'

export const Route = createFileRoute('/status')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string | undefined) || undefined,
  }),
  component: StatusRouteComponent,
})

function StatusRouteComponent() {
  const { q } = Route.useSearch()
  const navigate = Route.useNavigate()

  const setSearch = (value: string) => {
    navigate({ search: { q: value || undefined } })
  }

  return <StatusPage searchQuery={q || ''} onSearchChange={setSearch} />
}
