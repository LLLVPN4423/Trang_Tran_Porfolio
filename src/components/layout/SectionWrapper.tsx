import type { ReactNode } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import type { BilingualText } from '../../types/content'

interface SectionWrapperProps {
  id: string
  number: string
  label: BilingualText
  children: ReactNode
  className?: string
  elevated?: boolean
}

export function SectionWrapper({
  id,
  number,
  label,
  children,
  className = '',
  elevated = false,
}: SectionWrapperProps) {
  const { t } = useLanguage()

  return (
    <section
      id={id}
      className={`relative px-6 py-24 md:px-12 md:py-32 lg:px-20 ${
        elevated ? 'bg-elevated' : 'bg-base'
      } text-zinc-300 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <span className="font-display text-6xl leading-none text-zinc-800 md:text-8xl">{number}</span>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-zinc-500">{t(label)}</span>
        </div>
        {children}
      </div>
    </section>
  )
}
