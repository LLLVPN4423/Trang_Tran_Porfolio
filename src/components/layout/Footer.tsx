import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-zinc-800 bg-base px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.15em] text-zinc-200">{content.brand.name}</p>
            <p className="mt-1 font-body text-sm text-zinc-500">{content.brand.studio}</p>
          </div>
          <SocialLinks links={content.footer.social} showReserved={false} variant="footer" />
        </div>
        <p className="font-body text-sm text-zinc-600">{t(content.footer.copyright)}</p>
      </div>
    </footer>
  )
}
