import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/80 p-1 font-body text-xs backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === 'en' ? 'bg-zinc-200 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('vi')}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === 'vi' ? 'bg-zinc-200 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        VI
      </button>
    </div>
  )
}
