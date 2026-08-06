import { AtSign, Camera, Globe, MapPin, MessageCircle, Music2, Share2, Video } from 'lucide-react'
import type { SocialLink } from '../../types/content'
import { useLanguage } from '../../context/LanguageContext'

const platformIcons = {
  facebook: Share2,
  instagram: Camera,
  threads: AtSign,
  tiktok: Music2,
  youtube: Video,
  zalo: MessageCircle,
  website: Globe,
  other: MapPin,
}

interface SocialLinksProps {
  links: SocialLink[]
  showReserved?: boolean
  variant?: 'contact' | 'footer'
}

export function SocialLinks({ links, showReserved = true, variant = 'contact' }: SocialLinksProps) {
  const { t } = useLanguage()

  const activeLinks = links.filter((link) => link.url)
  const infoLinks = links.filter((link) => !link.url && link.text)
  const reservedLinks = links.filter((link) => !link.url && !link.text)

  const linkClass =
    variant === 'footer'
      ? 'inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-zinc-500 transition-colors hover:text-zinc-300'
      : 'inline-flex items-center gap-2 border border-zinc-700 px-5 py-3 font-body text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200'

  const reservedClass =
    'inline-flex items-center gap-2 border border-dashed border-zinc-800 px-5 py-3 font-body text-xs uppercase tracking-[0.15em] text-zinc-600'

  const infoClass =
    variant === 'footer'
      ? 'font-body text-xs leading-relaxed text-zinc-500'
      : 'flex items-start gap-3 border border-zinc-800 px-5 py-3 font-body text-xs leading-relaxed text-zinc-400'

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {activeLinks.map((link) => {
          const Icon = platformIcons[link.platform]
          return (
            <a
              key={link.id}
              href={link.url!}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Icon size={14} />
              {t(link.label)}
            </a>
          )
        })}
      </div>

      {infoLinks.length > 0 && (
        <div className="space-y-3">
          {infoLinks.map((link) => {
            const Icon = platformIcons[link.platform]
            return (
              <div key={link.id} className={infoClass}>
                <Icon size={14} className="mt-0.5 shrink-0 text-zinc-600" />
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    {t(link.label)}
                  </p>
                  <p className="mt-1">{t(link.text!)}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {showReserved && reservedLinks.length > 0 && (
        <div>
          <p className="mb-2 font-body text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            {t({ en: 'Reserved channels', vi: 'Kênh dành chỗ' })} ({reservedLinks.length})
          </p>
          <div className="flex flex-wrap gap-3">
            {reservedLinks.map((link) => {
              const Icon = platformIcons[link.platform]
              return (
                <span
                  key={link.id}
                  className={reservedClass}
                  title={t({ en: 'Add URL in content.ts', vi: 'Thêm URL trong content.ts' })}
                >
                  <Icon size={14} className="opacity-40" />
                  {t(link.label)}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
