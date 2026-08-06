import { useEffect, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, SCROLL_ROOT } from '../../lib/gsap'
import { LenisProvider } from '../../context/LenisContext'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const [scrollReady, setScrollReady] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setScrollReady(true)
      ScrollTrigger.refresh()
      return
    }

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    })

    instance.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      instance.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.scrollerProxy(SCROLL_ROOT, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          instance.scrollTo(value, { immediate: true })
        }
        return instance.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: SCROLL_ROOT.style.transform ? 'transform' : 'fixed',
    })

    const onRefresh = () => instance.resize()
    ScrollTrigger.addEventListener('refresh', onRefresh)

    setLenis(instance)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        setScrollReady(true)
      })
    })

    return () => {
      setScrollReady(false)
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      ScrollTrigger.scrollerProxy(SCROLL_ROOT, {})
      ScrollTrigger.refresh()
      gsap.ticker.remove(tickerCallback)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <LenisProvider lenis={lenis} scrollReady={scrollReady}>
      {children}
    </LenisProvider>
  )
}
