import { SectionWrapper } from '../layout/SectionWrapper'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BookingForm, ContactInfo } from '../ui/BookingForm'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="contact" number="05" label={content.contact.sectionLabel}>
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <ScrollReveal>
            <h2 className="font-display text-4xl text-zinc-100 md:text-5xl lg:text-6xl">
              {t(content.contact.heading)}
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-zinc-400">
              {t(content.contact.description)}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-12">
              <ContactInfo />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <BookingForm />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
