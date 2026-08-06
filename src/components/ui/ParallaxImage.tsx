import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { useScrollReady } from '../../context/LenisContext'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  trigger?: HTMLElement | null
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.2,
  trigger,
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const scrollReady = useScrollReady()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!scrollReady || prefersReducedMotion || !imageRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger ?? wrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [scrollReady, speed, trigger])

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="h-full w-full object-cover will-change-transform"
        loading="lazy"
      />
    </div>
  )
}
