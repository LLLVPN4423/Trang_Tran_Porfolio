interface TourProgressProps {
  current: number
  total: number
  progressMode?: 'scrub' | 'step'
}

export function TourProgress({ current, total, progressMode = 'step' }: TourProgressProps) {
  const progress = ((current + 1) / total) * 100

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex lg:right-10">
      <span className="font-display text-sm tracking-[0.2em] text-zinc-400">
        {String(current + 1).padStart(2, '0')}
        <span className="text-zinc-700"> / </span>
        {String(total).padStart(2, '0')}
      </span>
      <div className="h-32 w-px bg-zinc-800">
        <div
          className={`w-full bg-zinc-400 ${
            progressMode === 'scrub' ? 'transition-none' : 'transition-all duration-500 ease-out'
          }`}
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  )
}
