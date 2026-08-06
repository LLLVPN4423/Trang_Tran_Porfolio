import { useEffect, useRef, useState } from 'react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { ScrollReveal } from '../ui/ScrollReveal'
import { TourPanel } from '../ui/TourPanel'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollReady } from '../../context/LenisContext'
import { gsap, ScrollTrigger } from '../../lib/gsap'

function getScrollDistance(slideCount: number) {
  const vh = window.innerHeight
  const perSlide = window.innerWidth < 768 ? 0.9 : 0.8
  return vh * Math.max(slideCount - 1, 1) * perSlide
}

export function SalonTour() {
  const { t } = useLanguage()
  const scrollReady = useScrollReady()
  const sectionRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const playbackRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const { stops } = content.salonTour

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyMotionPreference = () => setReducedMotion(motionQuery.matches)
    applyMotionPreference()
    motionQuery.addEventListener('change', applyMotionPreference)
    return () => motionQuery.removeEventListener('change', applyMotionPreference)
  }, [])

  useEffect(() => {
    if (!scrollReady || reducedMotion || !stageRef.current || !frameRef.current) return

    const stage = stageRef.current
    const frame = frameRef.current
    const slideCount = stops.length

    const panels = gsap.utils.toArray<HTMLElement>('.tour-slide', frame)
    if (panels.length === 0) return

    const inners = panels.map((panel) => panel.querySelector<HTMLElement>('.tour-slide-inner'))
    const medias = panels.map((panel) => panel.querySelector<HTMLElement>('.tour-slide-media'))
    const counters = panels.map((panel) => panel.querySelector<HTMLElement>('.tour-slide-counter'))
    const titles = panels.map((panel) => panel.querySelector<HTMLElement>('.tour-slide-title'))
    const descs = panels.map((panel) => panel.querySelector<HTMLElement>('.tour-slide-desc'))

    const updateUi = (progress: number) => {
      const index = Math.min(slideCount - 1, Math.round(progress * (slideCount - 1)))
      if (index !== activeIndexRef.current) {
        activeIndexRef.current = index
        setActiveIndex(index)
        panels.forEach((panel, i) => {
          panel.setAttribute('aria-hidden', i === index ? 'false' : 'true')
        })
      }
      if (playbackRef.current) {
        playbackRef.current.style.width = `${Math.min(100, progress * 100)}%`
      }
    }

    const ctx = gsap.context(() => {
      gsap.set(panels, { opacity: 0, zIndex: 1 })
      gsap.set(inners, { scale: 1, y: 0 })
      gsap.set(panels[0], { opacity: 1, zIndex: 2 })
      panels[0]?.setAttribute('aria-hidden', 'false')

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${getScrollDistance(slideCount)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateUi(self.progress),
        },
      })

      if (backdropRef.current) {
        tl.fromTo(backdropRef.current, { opacity: 0.4 }, { opacity: 0.9, duration: 0.4, ease: 'power2.out' }, 0)
      }

      tl.fromTo(frame, { scale: 0.95, y: 20 }, { scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0)

      for (let i = 0; i < slideCount; i++) {
        const speed = stops[i]?.speed ?? 0.12
        const media = medias[i]

        if (media) {
          tl.fromTo(
            media,
            { scale: 1.015, yPercent: -speed * 3 },
            { scale: 1, yPercent: speed * 3, ease: 'none', duration: 1 },
            i,
          )
        }

        if (i === slideCount - 1) continue

        const at = i + 1

        tl.set(panels[i], { zIndex: 2 }, at)
        tl.set(panels[i + 1], { zIndex: 3 }, at)

        tl.to(panels[i], { opacity: 0, duration: 0.8 }, at)
        tl.fromTo(panels[i + 1], { opacity: 0 }, { opacity: 1, duration: 0.8 }, at)

        if (inners[i]) {
          tl.to(inners[i], { scale: 0.98, y: -10, duration: 0.8, ease: 'power2.in' }, at)
        }
        if (inners[i + 1]) {
          tl.fromTo(
            inners[i + 1],
            { scale: 1.02, y: 12 },
            { scale: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            at,
          )
        }

        const outgoing = [counters[i], titles[i], descs[i]].filter(Boolean)
        const incoming = [counters[i + 1], titles[i + 1], descs[i + 1]].filter(Boolean)

        if (outgoing.length) {
          tl.to(outgoing, { y: -12, opacity: 0, duration: 0.4, stagger: 0.04 }, at)
        }
        if (incoming.length) {
          tl.fromTo(
            incoming,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out' },
            at + 0.15,
          )
        }
      }

      updateUi(0)
      ScrollTrigger.refresh()
    }, sectionRef)

    const onImageLoad = () => ScrollTrigger.refresh()
    frame.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', onImageLoad, { once: true })
    })

    return () => ctx.revert()
  }, [scrollReady, reducedMotion, stops.length])

  const activeStop = stops[activeIndex]

  return (
    <div ref={sectionRef} className="salon-tour-section relative">
      <SectionWrapper id="tour" number="02" label={content.salonTour.sectionLabel} elevated>
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-zinc-100 md:text-5xl lg:text-6xl">
              {t(content.salonTour.heading)}
            </h2>
            <p className="mt-2 font-body text-sm uppercase tracking-[0.25em] text-zinc-500">
              {t(content.salonTour.subheading)}
            </p>
            <p className="mt-6 font-body text-base leading-relaxed text-zinc-400">
              {t(content.salonTour.description)}
            </p>
            {!reducedMotion && (
              <p className="mt-4 font-body text-xs uppercase tracking-[0.2em] text-zinc-600">
                {t({ en: 'Scroll down to enter the tour', vi: 'Cuộn xuống để vào tour' })}
              </p>
            )}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {reducedMotion ? (
        <div className="bg-elevated px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            {stops.map((stop, index) => (
              <TourPanel key={stop.id} stop={stop} index={index} total={stops.length} variant="stacked" />
            ))}
          </div>
        </div>
      ) : (
        <div ref={stageRef} className="salon-tour-stage relative h-[100svh] w-full bg-zinc-950">
          <div
            ref={backdropRef}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.15)_0%,rgba(0,0,0,0.92)_70%)]"
          />

          <div className="relative flex h-full flex-col justify-center px-3 pb-6 pt-4 sm:px-5 md:px-12 lg:px-16">
            <div className="mb-2 flex items-center justify-between gap-3 px-1 md:mb-4">
              <p className="max-w-[65%] truncate font-display text-sm text-zinc-300 sm:text-base md:text-lg">
                {activeStop ? t(activeStop.label) : ''}
              </p>
              <p className="shrink-0 font-body text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                {String(activeIndex + 1).padStart(2, '0')} / {String(stops.length).padStart(2, '0')}
              </p>
            </div>

            <div
              ref={frameRef}
              className="tour-frame relative mx-auto aspect-[4/3] h-auto w-full max-w-5xl overflow-hidden rounded-lg bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_28px_90px_rgba(0,0,0,0.75)] sm:aspect-[3/2] md:max-h-[min(72vh,780px)] md:w-[min(100%,960px)]"
            >
              {stops.map((stop, index) => (
                <TourPanel key={stop.id} stop={stop} index={index} total={stops.length} variant="cinematic" />
              ))}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30">
                <div className="h-[2px] bg-zinc-800/90">
                  <div ref={playbackRef} className="h-full bg-accent" style={{ width: '0%' }} />
                </div>
              </div>
            </div>

            <p className="mt-3 text-center font-body text-[10px] uppercase tracking-[0.22em] text-zinc-600 sm:mt-4">
              <span className="scroll-hint inline-block">
                {t({ en: 'Scroll to next frame', vi: 'Cuộn để xem ảnh tiếp theo' })}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
