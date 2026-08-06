import { SectionWrapper } from '../layout/SectionWrapper'
import { ScrollReveal } from '../ui/ScrollReveal'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'

export function Services() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="services" number="04" label={content.services.sectionLabel} elevated>
      <ScrollReveal>
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl text-zinc-100 md:text-5xl lg:text-6xl">
            {t(content.services.heading)}
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-zinc-400">
            {t(content.services.description)}
          </p>
        </div>
      </ScrollReveal>

      <div className="divide-y divide-zinc-800">
        {content.services.items.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 0.05}>
            <div className="group grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:py-10">
              <div>
                <h3 className="font-display text-2xl text-zinc-200 transition-colors group-hover:text-accent md:text-4xl lg:text-5xl">
                  {t(service.name)}
                </h3>
                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-zinc-500 md:text-base">
                  {t(service.description)}
                </p>
              </div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-zinc-500 md:text-right">
                {service.priceFrom === 'Free'
                  ? service.priceFrom
                  : `${t({ en: 'From', vi: 'Từ' })} ${service.priceFrom}`}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
