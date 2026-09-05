import { Phone, MapPin } from 'lucide-react'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { SocialLinks } from './SocialLinks'

export function BookingForm() {
  const { t } = useLanguage()

  const handleBookNow = () => {
    window.open('https://trangtran-hair.pages.dev/', '_blank')
  }

  return (
    <div className="space-y-6">
      <p className="font-body text-base leading-relaxed text-zinc-400">
        {t({ en: 'Book your appointment online through our dedicated booking system.', vi: 'Đặt lịch hẹn trực tuyến qua hệ thống đặt lịch chuyên dụng của chúng tôi.' })}
      </p>
      <button
        onClick={handleBookNow}
        className="w-full border-2 border-yellow-600 bg-transparent px-8 py-4 font-body text-xs uppercase tracking-[0.25em] text-yellow-600 transition-colors hover:border-yellow-500 hover:text-yellow-500 md:w-auto"
      >
        {t(content.contact.cta)}
      </button>
    </div>
  )
}

export function ContactInfo() {
  const { t } = useLanguage()
  const { contact } = content

  return (
    <div className="space-y-8">
      <a
        href={`tel:${contact.phone}`}
        className="flex items-start gap-4 transition-opacity hover:opacity-80"
      >
        <Phone size={18} className="mt-1 shrink-0 text-zinc-500" />
        <div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-zinc-500">Hotline</p>
          <p className="mt-1 font-display text-2xl text-zinc-200">
            {contact.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
          </p>
        </div>
      </a>

      <a
        href={contact.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 transition-opacity hover:opacity-80"
      >
        <MapPin size={18} className="mt-1 shrink-0 text-zinc-500" />
        <div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
            {t({ en: 'Address', vi: 'Địa chỉ' })}
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-zinc-400">{t(contact.address)}</p>
        </div>
      </a>

      <div>
        <p className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
          {t({ en: 'Connect', vi: 'Kết nối' })}
        </p>
        <SocialLinks links={contact.social} showReserved variant="contact" />
      </div>
    </div>
  )
}
