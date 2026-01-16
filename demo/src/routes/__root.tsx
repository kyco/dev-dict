import { createRootRoute, Outlet, useRouter } from '@tanstack/react-router'
import { AppProvider } from '~/shared/context/AppContext'

const RootLayout = () => {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  )
}

const Global404 = () => {
  const router = useRouter()

  const goBack = () => {
    router.navigate({ to: '/', search: { q: undefined, status: undefined } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-600 font-medium mb-4">Term not found!</p>
        <button onClick={goBack} className="text-blue-600 hover:text-blue-700 cursor-pointer">
          Back to Dictionary
        </button>
      </div>
    </div>
  )
}

const GlobalError = () => {
  const router = useRouter()

  const goBack = () => {
    router.navigate({ to: '/', search: { q: undefined, status: undefined } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-600 font-medium mb-4">An unknown error occured!</p>
        <button onClick={goBack} className="text-blue-600 hover:text-blue-700 cursor-pointer">
          Back to Dictionary
        </button>
      </div>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: Global404,
  errorComponent: GlobalError,
})
