import { createFileRoute } from '@tanstack/react-router'

import { TermPage } from '~/pages/TermPage'

export const Route = createFileRoute('/term/$termId')({
  validateSearch: (search: Record<string, unknown>) => ({
    from: (search.from as string) || '',
  }),
  component: TermRouteComponent,
})

function TermRouteComponent() {
  const { termId } = Route.useParams()
  const { from } = Route.useSearch()

  return <TermPage termId={termId} fromQuery={from} />
}
