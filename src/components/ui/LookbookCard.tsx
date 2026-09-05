import type { GalleryItem } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'
import { mediaPath } from '../../lib/mediaPath'
import { Play, ExternalLink } from 'lucide-react'

interface LookbookCardProps {
  item: GalleryItem
  index: number
  variant?: 'horizontal' | 'grid'
  onClick?: () => void
}

const horizontalCardClass =
  'h-[min(48vh,380px)] w-[82vw] sm:h-[min(52vh,420px)] sm:w-[68vw] md:h-[min(56vh,480px)] md:w-[42vw] lg:w-[min(32vw,360px)]'

export function LookbookCard({ item, variant = 'horizontal', onClick }: LookbookCardProps) {
  const { t } = useLanguage()
  const isReserved = !item.image && !item.externalUrl
  const hasExternalUrl = !!item.externalUrl

  if (variant === 'grid') {
    return (
      <figure className="lookbook-item relative aspect-[3/4] w-full overflow-hidden rounded-md border border-dashed border-zinc-800 bg-zinc-900/50">
        <div className="flex h-full flex-col items-center justify-center p-6 text-center">
          <span className="font-display text-3xl text-zinc-800">{item.id}</span>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-zinc-600">
            {t({ en: 'Portfolio slot', vi: 'Slot portfolio' })}
          </p>
        </div>
      </figure>
    )
  }

  if (isReserved) {
    return (
      <figure
        className={`lookbook-item group relative shrink-0 overflow-hidden rounded-md border border-dashed border-zinc-800 bg-zinc-900/50 ${horizontalCardClass}`}
      >
        <div className="flex h-full flex-col items-center justify-center p-6 text-center sm:p-8">
          <span className="font-display text-4xl text-zinc-800 md:text-5xl">{item.id}</span>
          <p className="mt-4 font-body text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs">
            {t({ en: 'Portfolio slot', vi: 'Slot portfolio' })}
          </p>
          <p className="mt-2 max-w-[220px] font-body text-xs leading-relaxed text-zinc-700 sm:text-sm">
            {t({ en: 'Add image to public/images/gallery/', vi: 'Thêm ảnh vào public/images/gallery/' })}
          </p>
        </div>
      </figure>
    )
  }

  const displayImage = item.thumbnail || item.image

  return (
    <figure
      className={`lookbook-item group relative shrink-0 overflow-hidden rounded-md bg-zinc-900 ${horizontalCardClass} ${hasExternalUrl ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="pointer-events-none absolute -inset-2 glow-warm opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="flex h-full w-full items-center justify-center p-1 sm:p-2">
        {displayImage ? (
          <img
            src={mediaPath(displayImage)}
            alt={t(item.title)}
            className="max-h-full max-w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-800">
            <Play size={48} className="text-zinc-600" />
          </div>
        )}
      </div>
      
      {hasExternalUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-zinc-900/80 p-4 backdrop-blur-sm">
            {item.externalUrl?.includes('drive.google.com') ? (
              <Play size={32} className="text-zinc-200" />
            ) : (
              <ExternalLink size={32} className="text-zinc-200" />
            )}
          </div>
        </div>
      )}
      
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-transparent p-4 sm:p-5">
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
          {t(item.category)}
        </p>
        <p className="mt-1 font-display text-lg text-zinc-200 sm:text-xl">{t(item.title)}</p>
        {hasExternalUrl && (
          <p className="mt-1 font-body text-[10px] uppercase tracking-[0.15em] text-zinc-500">
            {t({ en: 'Click to play', vi: 'Nhấp để phát' })}
          </p>
        )}
      </figcaption>
    </figure>
  )
}
