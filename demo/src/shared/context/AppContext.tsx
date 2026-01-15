import type { TLocale } from 'dev-dict'
import { createContext, useContext, useState } from 'react'

interface AppContextType {
  lang: TLocale
  setLang: (lang: TLocale) => void
  populateEmpty: boolean
  setPopulateEmpty: (value: boolean) => void
}

export const AppContext = createContext<AppContextType>({
  lang: 'en-US',
  setLang: () => {},
  populateEmpty: true,
  setPopulateEmpty: () => {},
})

export const useAppContext = () => useContext(AppContext)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<TLocale>('en-US')
  const [populateEmpty, setPopulateEmpty] = useState(true)

  return <AppContext.Provider value={{ lang, setLang, populateEmpty, setPopulateEmpty }}>{children}</AppContext.Provider>
}
