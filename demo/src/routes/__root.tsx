import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { AppProvider } from '~/shared/context/AppContext'

function RootComponent() {
  return (
    <AppProvider>
      <ScrollRestoration />
      <Outlet />
    </AppProvider>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
