import { useEffect } from 'react'
import { ScrollTrigger } from '../lib/gsap'
import { useScrollReady } from '../context/LenisContext'

export function useScrollTriggerRefresh() {
  const scrollReady = useScrollReady()

  useEffect(() => {
    if (!scrollReady) return

    const refresh = () => ScrollTrigger.refresh()
    refresh()

    window.addEventListener('resize', refresh)
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('resize', refresh)
      window.removeEventListener('load', refresh)
    }
  }, [scrollReady])
}
