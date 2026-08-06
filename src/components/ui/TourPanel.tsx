import type { TourStop } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { mediaPath } from '../../lib/mediaPath'

interface TourPanelProps {
  stop: TourStop
  index: number
  total: number
  variant?: 'cinematic' | 'stacked'
}

export function TourPanel({ stop, index, total, variant = 'cinematic' }: TourPanelProps) {
  const { t } = useLanguage()
  const isReserved = !stop.image
  const counter = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  if (variant === 'stacked') {
    if (isReserved) {
      return (
        <article className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-md border border-dashed border-zinc-700 bg-zinc-900/40">
          <div className="p-8 text-center">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-zinc-600">{counter}</p>
            <p className="mt-4 font-display text-2xl text-zinc-700">{t(stop.label)}</p>
            <p className="mt-3 font-body text-sm text-zinc-600">{t(stop.caption)}</p>
          </div>
        </article>
      )
    }

    return (
      <article className="relative overflow-hidden rounded-md bg-zinc-950">
        <div className="flex min-h-[280px] items-center justify-center p-2 sm:min-h-[320px]">
          <img
            src={mediaPath(stop.image!)}
            alt={t(stop.label)}
            className="max-h-[65vh] w-full object-contain object-center"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-zinc-500">{counter}</p>
          <h3 className="mt-2 font-display text-2xl text-zinc-100 md:text-3xl">{t(stop.label)}</h3>
          <p className="mt-2 max-w-lg font-body text-sm text-zinc-400">{t(stop.caption)}</p>
        </div>
      </article>
    )
  }

  if (isReserved) {
    return (
      <article
        className="tour-slide absolute inset-0 opacity-0"
        data-index={index}
        aria-hidden={index !== 0}
      >
        <div className="tour-slide-inner flex h-full w-full items-center justify-center bg-zinc-900/80">
          <div className="rounded-md border border-dashed border-zinc-700 p-6 text-center sm:p-8">
            <p className="tour-slide-counter font-body text-xs uppercase tracking-[0.3em] text-zinc-600">
              {counter}
            </p>
            <p className="tour-slide-title mt-4 font-display text-xl text-zinc-700 sm:text-2xl">
              {t(stop.label)}
            </p>
            <p className="tour-slide-desc mt-3 font-body text-sm text-zinc-600">{t(stop.caption)}</p>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={`tour-slide absolute inset-0 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
      data-index={index}
      aria-hidden={index !== 0}
    >
      <div className="tour-slide-inner relative h-full w-full bg-zinc-950">
        <div className="tour-slide-media absolute inset-0 flex items-center justify-center p-2 will-change-transform sm:p-3 md:p-4">
          <img
            src={mediaPath(stop.image!)}
            alt={t(stop.label)}
            className="tour-slide-img max-h-full max-w-full object-contain object-center"
            loading={index < 4 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent" />

        <div className="tour-slide-caption absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 md:p-6 lg:p-8">
          <p className="tour-slide-counter font-body text-[10px] uppercase tracking-[0.35em] text-zinc-400">
            {counter}
          </p>
          <h3 className="tour-slide-title mt-2 font-display text-lg text-zinc-50 sm:text-2xl md:text-4xl">
            {t(stop.label)}
          </h3>
          <p className="tour-slide-desc mt-2 max-w-xl font-body text-xs leading-relaxed text-zinc-300/90 sm:text-sm md:text-base">
            {t(stop.caption)}
          </p>
        </div>
      </div>
    </article>
  )
}
