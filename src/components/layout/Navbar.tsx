import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { scrollToSection, useLenisInstance } from '../../context/LenisContext'
import { LanguageToggle } from '../ui/LanguageToggle'

export function Navbar() {
  const { t } = useLanguage()
  const lenis = useLenisInstance()
  const scrolled = useScrollProgress(60)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id, lenis)
  }

  const scrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <button type="button" onClick={scrollTop} className="text-left">
          <span className="block font-display text-lg tracking-[0.2em] text-zinc-200">
            {content.brand.name}
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            {content.brand.studio}
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="font-body text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-zinc-200"
            >
              {t(item.label)}
            </button>
          ))}
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-1 text-zinc-300"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {content.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-left font-body text-sm uppercase tracking-[0.2em] text-zinc-300"
              >
                {t(item.label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
