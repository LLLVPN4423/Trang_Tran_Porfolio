import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollReady } from '../../context/LenisContext'
import { gsap } from '../../lib/gsap'
import { mediaPath } from '../../lib/mediaPath'

export function Hero() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollReady = useScrollReady()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!scrollReady || prefersReducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      }

      gsap.to(imageRef.current, { yPercent: 28, ease: 'none', scrollTrigger: trigger })
      gsap.to(glowRef.current, { yPercent: 12, ease: 'none', scrollTrigger: trigger })
      gsap.to(contentRef.current, {
        y: 100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: trigger,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [scrollReady])

  return (
    <section ref={sectionRef} className="hero relative h-screen min-h-[700px] overflow-hidden bg-base">
      <div ref={glowRef} className="pointer-events-none absolute inset-0 glow-hero will-change-transform" />

      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <img
          src={mediaPath(content.hero.image)}
          alt="Trang Tran — Professional Hair Stylist"
          className="h-full w-full object-cover object-[center_20%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:items-end md:px-12 md:pb-24 lg:px-20"
      >
        <div className="ml-auto max-w-xl text-right md:max-w-2xl">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.35em] text-zinc-400">
            {t(content.hero.subtitle)}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[0.08em] text-zinc-100 md:text-7xl lg:text-8xl">
            {content.brand.name}
          </h1>
          <p className="mt-2 font-display text-lg italic tracking-wide text-zinc-300 md:text-xl">
            {content.brand.studio}
          </p>
          <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-zinc-400 md:ml-auto md:text-base">
            {t(content.hero.tagline)}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500">
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={18} className="scroll-hint" />
        </div>
      </div>
    </section>
  )
}
