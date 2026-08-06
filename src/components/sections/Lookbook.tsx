import { useEffect, useRef, useState } from 'react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { ScrollReveal } from '../ui/ScrollReveal'
import { LookbookCard } from '../ui/LookbookCard'
import { content, contentStats } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollReady } from '../../context/LenisContext'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { SLOT_LIMITS } from '../../config/slots'

export function Lookbook() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollReady = useScrollReady()
  const [reducedMotion, setReducedMotion] = useState(false)

  const visibleItems = content.lookbook.items.slice(0, SLOT_LIMITS.lookbook.reservedVisible)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(motionQuery.matches)
    apply()
    motionQuery.addEventListener('change', apply)
    return () => motionQuery.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!scrollReady || prefersReducedMotion || reducedMotion || !stageRef.current || !trackRef.current) return

    const stage = stageRef.current
    const track = trackRef.current

    const getScrollAmount = () => Math.max(track.scrollWidth - window.innerWidth + 48, window.innerWidth * 0.5)

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.55,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('resize', refresh)
    track.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', refresh, { once: true })
    })

    return () => {
      window.removeEventListener('resize', refresh)
      ctx.revert()
    }
  }, [scrollReady, reducedMotion])

  return (
    <div ref={sectionRef} className="lookbook-section">
      <SectionWrapper id="work" number="03" label={content.lookbook.sectionLabel}>
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-zinc-100 md:text-5xl lg:text-6xl">
              {t(content.lookbook.heading)}
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-zinc-400">
              {t(content.lookbook.description)}
            </p>
            <p className="mt-4 font-body text-xs uppercase tracking-[0.2em] text-zinc-600">
              {t({ en: 'Portfolio slots', vi: 'Slot portfolio' })}: {contentStats.lookbook.filled}/
              {contentStats.lookbook.max} · {t({ en: 'Reserved', vi: 'Trống' })}:{' '}
              {contentStats.lookbook.reserved}
            </p>
            {!reducedMotion && (
              <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-zinc-600">
                {t({ en: 'Scroll down to browse the gallery', vi: 'Cuộn xuống để xem gallery' })}
              </p>
            )}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {reducedMotion ? (
        <div className="bg-base px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <LookbookCard key={item.id} item={item} index={index} variant="grid" />
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={stageRef}
          className="lookbook-stage relative flex min-h-[100svh] items-center overflow-hidden bg-base md:min-h-[85vh]"
        >
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="lookbook-track flex w-max items-center gap-4 px-4 sm:gap-5 sm:px-6 md:gap-6 md:px-10 lg:px-16"
            >
              {visibleItems.map((item, index) => (
                <LookbookCard key={item.id} item={item} index={index} variant="horizontal" />
              ))}
            </div>
          </div>

          <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            <span className="scroll-hint inline-block">
              {t({ en: 'Scroll to explore', vi: 'Cuộn để khám phá' })}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
