import { SectionWrapper } from '../layout/SectionWrapper'
import { ScrollReveal } from '../ui/ScrollReveal'
import { PricingTable } from '../ui/PricingTable'
import { content } from '../../data/content'
import { pricing } from '../../data/pricing'
import { useLanguage } from '../../context/LanguageContext'

export function Services() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="services" number="04" label={content.services.sectionLabel} elevated>
      <ScrollReveal>
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="font-display text-4xl text-zinc-100 md:text-5xl lg:text-6xl">
            {t(content.services.heading)}
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-zinc-400">
            {t(content.services.description)}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="mb-14 rounded-md border border-zinc-800 bg-zinc-900/30 p-5 md:p-8">
          <h3 className="font-display text-xl text-zinc-200 md:text-2xl">{t(pricing.durationsTitle)}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.durationGroups.map((group) => (
              <div key={t(group.title)}>
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-accent/90">
                  {t(group.title)}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={t(item.label)} className="flex justify-between gap-3 font-body text-xs text-zinc-400">
                      <span>{t(item.label)}</span>
                      <span className="shrink-0 text-zinc-500">{t(item.duration)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-14 md:space-y-20">
        {pricing.categories.map((category, index) => (
          <ScrollReveal key={category.id} delay={index * 0.04}>
            <section id={`pricing-${category.id}`} className="scroll-mt-28">
              <h3 className="font-display text-2xl text-zinc-100 md:text-3xl lg:text-4xl">{t(category.title)}</h3>

              {category.banner && (
                <p className="mt-3 font-body text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {t(category.banner)}
                </p>
              )}

              {category.subsections?.map((subsection) => (
                <div key={subsection.id} className="mt-8">
                  <h4 className="font-body text-sm uppercase tracking-[0.2em] text-zinc-400">
                    {t(subsection.title)}
                  </h4>
                  <div className="mt-4">
                    <PricingTable
                      rows={subsection.rows}
                      showSizes={subsection.rows.some((row) => row.sizes)}
                    />
                  </div>
                  {subsection.bullets && (
                    <ul className="mt-4 space-y-1 font-body text-sm text-zinc-500">
                      {subsection.bullets.map((bullet) => (
                        <li key={t(bullet)}>· {t(bullet)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {category.rows && (
                <div className="mt-6">
                  <PricingTable rows={category.rows} showSizes={category.rows.some((row) => row.sizes)} />
                </div>
              )}

              {category.bullets && (
                <ul className="mt-4 space-y-1 font-body text-sm text-zinc-500">
                  {category.bullets.map((bullet) => (
                    <li key={t(bullet)}>· {t(bullet)}</li>
                  ))}
                </ul>
              )}

              {category.callout && (
                <p className="mt-4 rounded-md border border-zinc-800 bg-zinc-900/40 p-4 font-body text-sm leading-relaxed text-zinc-400">
                  {t(category.callout)}
                </p>
              )}

              {category.notes && (
                <ul className="mt-4 space-y-2 border-t border-zinc-800 pt-4 font-body text-xs leading-relaxed text-zinc-600">
                  {category.notes.map((note) => (
                    <li key={t(note)}>{t(note)}</li>
                  ))}
                </ul>
              )}
            </section>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.1}>
        <p className="mt-14 border-t border-zinc-800 pt-8 font-body text-xs leading-relaxed text-zinc-600 md:text-sm">
          ★ {t(pricing.disclaimer)}
        </p>
      </ScrollReveal>
    </SectionWrapper>
  )
}
