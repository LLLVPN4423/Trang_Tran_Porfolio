import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Locale } from '../types/content'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: <T extends { en: string; vi: string }>(text: T) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  const t = <T extends { en: string; vi: string }>(text: T) => text[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
