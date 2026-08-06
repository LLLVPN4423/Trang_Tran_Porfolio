import { createContext, useContext, type ReactNode } from 'react'
import type Lenis from 'lenis'

const LenisContext = createContext<Lenis | null>(null)
const ScrollReadyContext = createContext(false)

export function LenisProvider({
  lenis,
  scrollReady,
  children,
}: {
  lenis: Lenis | null
  scrollReady: boolean
  children: ReactNode
}) {
  return (
    <ScrollReadyContext.Provider value={scrollReady}>
      <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
    </ScrollReadyContext.Provider>
  )
}

export function useLenisInstance() {
  return useContext(LenisContext)
}

export function useScrollReady() {
  return useContext(ScrollReadyContext)
}

export function scrollToSection(id: string, lenis: Lenis | null) {
  const target = document.getElementById(id)
  if (!target) return

  if (lenis) {
    lenis.scrollTo(target, { offset: -80, duration: 1.4 })
  } else {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
