import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '../../lib/gsap'
import { useScrollReady } from '../../context/LenisContext'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollReady = useScrollReady()

  useEffect(() => {
    if (!scrollReady || !ref.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [scrollReady, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
