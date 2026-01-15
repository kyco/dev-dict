import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import type { TLocale } from 'dev-dict'
import { createContext, useContext, useState } from 'react'

interface AppContextType {
  lang: TLocale
  setLang: (lang: TLocale) => void
}

export const AppContext = createContext<AppContextType>({
  lang: 'en-US',
  setLang: () => {},
})

export const useAppContext = () => useContext(AppContext)

function RootComponent() {
  const [lang, setLang] = useState<TLocale>('en-US')

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      <ScrollRestoration />
      <Outlet />
    </AppContext.Provider>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
