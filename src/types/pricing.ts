import type { BilingualText } from './content'

export interface SizePrices {
  s?: string
  m?: string
  l?: string
  xl?: string
}

export interface PricingRow {
  id: string
  name: BilingualText
  description?: BilingualText
  price?: string
  sizes?: SizePrices
}

export interface PricingSubsection {
  id: string
  title: BilingualText
  rows: PricingRow[]
  bullets?: BilingualText[]
}

export interface PricingCategory {
  id: string
  title: BilingualText
  banner?: BilingualText
  subsections?: PricingSubsection[]
  rows?: PricingRow[]
  bullets?: BilingualText[]
  notes?: BilingualText[]
  callout?: BilingualText
}

export interface DurationGroup {
  title: BilingualText
  items: { label: BilingualText; duration: BilingualText }[]
}

export interface PricingContent {
  durationsTitle: BilingualText
  durationGroups: DurationGroup[]
  sizeBanner: BilingualText
  disclaimer: BilingualText
  categories: PricingCategory[]
  bookingOptions: { id: string; label: BilingualText }[]
}
