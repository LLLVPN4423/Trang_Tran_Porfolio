export type Locale = 'en' | 'vi'

export interface BilingualText {
  en: string
  vi: string
}

export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'threads'
  | 'tiktok'
  | 'youtube'
  | 'zalo'
  | 'website'
  | 'other'

export interface SocialLink {
  id: string
  platform: SocialPlatform
  label: BilingualText
  /** null = reserved slot or text-only entry */
  url: string | null
  /** Plain text line for non-link entries (e.g. salon address) */
  text?: BilingualText
}

export interface TourStop {
  id: string
  /** null = reserved tour panel slot */
  image: string | null
  label: BilingualText
  caption: BilingualText
  speed: number
}

export interface GalleryItem {
  id: string
  /** null = reserved lookbook slot */
  image: string | null
  title: BilingualText
  category: BilingualText
}

export interface ServiceItem {
  id: string
  name: BilingualText
  description: BilingualText
  priceFrom: string
}

export interface StatItem {
  value: string
  label: BilingualText
}

export interface SiteContent {
  brand: {
    name: string
    studio: string
    salon: string
  }
  nav: { id: string; label: BilingualText }[]
  hero: {
    image: string
    tagline: BilingualText
    subtitle: BilingualText
  }
  about: {
    sectionLabel: BilingualText
    heading: BilingualText
    bio: BilingualText
    quote: BilingualText
    pillars: BilingualText[]
    stats: StatItem[]
    portrait: string
    secondaryImage?: string | null
  }
  salonTour: {
    sectionLabel: BilingualText
    heading: BilingualText
    subheading: BilingualText
    description: BilingualText
    stops: TourStop[]
  }
  lookbook: {
    sectionLabel: BilingualText
    heading: BilingualText
    description: BilingualText
    items: GalleryItem[]
  }
  services: {
    sectionLabel: BilingualText
    heading: BilingualText
    description: BilingualText
    items: ServiceItem[]
  }
  contact: {
    sectionLabel: BilingualText
    heading: BilingualText
    description: BilingualText
    cta: BilingualText
    phone: string
    address: BilingualText
    mapsUrl: string
    social: SocialLink[]
  }
  footer: {
    copyright: BilingualText
    social: SocialLink[]
  }
}
