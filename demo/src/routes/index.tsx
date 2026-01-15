import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '~/pages/HomePage'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || '',
  }),
  component: HomeRouteComponent,
})

function HomeRouteComponent() {
  const { q } = Route.useSearch()
  const navigate = Route.useNavigate()

  const setSearch = (value: string) => {
    navigate({ search: { q: value || '' } })
  }

  return <HomePage searchQuery={q} onSearchChange={setSearch} />
}
