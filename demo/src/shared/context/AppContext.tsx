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

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<TLocale>('en-US')

  return <AppContext.Provider value={{ lang, setLang }}>{children}</AppContext.Provider>
}
