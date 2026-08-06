import { useState, type FormEvent } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { SocialLinks } from './SocialLinks'

const inputClass =
  'w-full border-b border-zinc-700 bg-transparent py-3 font-body text-sm text-zinc-300 outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-400'

export function BookingForm() {
  const { t, locale } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fb = content.contact.social.find((s) => s.id === 'facebook' && s.url)
    window.open(fb?.url ?? content.contact.social[0]?.url ?? '#', '_blank')
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
            {locale === 'en' ? 'Name' : 'Họ tên'}
          </span>
          <input required name="name" type="text" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
            {locale === 'en' ? 'Phone' : 'Số điện thoại'}
          </span>
          <input required name="phone" type="tel" className={inputClass} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
          {locale === 'en' ? 'Service' : 'Dịch vụ'}
        </span>
        <select required name="service" className={inputClass} defaultValue="">
          <option value="" disabled className="bg-zinc-900">
            {locale === 'en' ? 'Select a service' : 'Chọn dịch vụ'}
          </option>
          {content.services.items.map((service) => (
            <option key={service.id} value={t(service.name)} className="bg-zinc-900">
              {t(service.name)}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
          {locale === 'en' ? 'Preferred Date' : 'Ngày mong muốn'}
        </span>
        <input name="date" type="date" className={inputClass} />
      </label>

      <label className="block">
        <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-zinc-500">
          {locale === 'en' ? 'Message' : 'Lời nhắn'}
        </span>
        <textarea name="message" rows={3} className={`${inputClass} resize-none`} />
      </label>

      <button
        type="submit"
        className="w-full border border-zinc-600 bg-transparent px-8 py-4 font-body text-xs uppercase tracking-[0.25em] text-zinc-200 transition-colors hover:border-accent hover:text-accent md:w-auto"
      >
        {t(content.contact.cta)}
      </button>

      {submitted && (
        <p className="font-body text-sm text-zinc-500">
          {locale === 'en'
            ? 'Thank you — message us on Facebook to confirm your booking.'
            : 'Cảm ơn bạn — nhắn tin Facebook để xác nhận lịch hẹn.'}
        </p>
      )}
    </form>
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
