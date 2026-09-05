import { SectionWrapper } from '../layout/SectionWrapper'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ParallaxImage } from '../ui/ParallaxImage'
import { content } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { mediaPath } from '../../lib/mediaPath'

export function About() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="about" number="01" label={content.about.sectionLabel}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <div className="relative space-y-4">
            <div className="pointer-events-none absolute -inset-4 glow-warm" />
            <ParallaxImage
              src={mediaPath(content.about.portrait)}
              alt="Trang Tran"
              className="relative aspect-[3/4] bg-zinc-900"
              speed={0.12}
            />
            {content.about.secondaryImage && (
              <ParallaxImage
                src={mediaPath(content.about.secondaryImage)}
                alt="Trang Tran — Trang Tran Hair"
                className="relative aspect-[16/10] bg-zinc-900"
                speed={0.08}
              />
            )}
          </div>
        </ScrollReveal>

        <div className="flex flex-col justify-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl leading-tight text-zinc-100 md:text-5xl lg:text-6xl">
              {t(content.about.heading)}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 font-body text-base leading-relaxed text-zinc-400 md:text-lg">
              {t(content.about.bio)}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <blockquote className="mt-8 border-l-2 border-accent pl-6 font-display text-xl italic text-zinc-300 md:text-2xl">
              {t(content.about.quote)}
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              {content.about.pillars.map((pillar) => (
                <span
                  key={pillar.en}
                  className="rounded-full border border-zinc-700 px-4 py-2 font-body text-xs uppercase tracking-[0.15em] text-zinc-400"
                >
                  {t(pillar)}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
              {content.about.stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-display text-3xl text-zinc-100 md:text-4xl">{stat.value}</p>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-zinc-500">
                    {t(stat.label)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 space-y-6">
              <h3 className="font-display text-2xl text-zinc-200 md:text-3xl">
                {t({ en: 'Achievements & Recognition', vi: 'Thành Tựu & Vinh Danh' })}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {content.about.achievements.map((achievement) => (
                  <div
                    key={achievement.title.en}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h4 className="font-display text-lg text-zinc-200">{t(achievement.title)}</h4>
                        <p className="mt-2 font-body text-sm leading-relaxed text-zinc-400">
                          {t(achievement.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
