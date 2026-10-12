/**
 * Reserved content slots — edit counts here when expanding the site.
 * Fill empty slots in src/data/content.ts
 */
export const SLOT_LIMITS = {
  /** Hair portfolio gallery (Lookbook section) */
  lookbook: {
    max: 18,
    /** Cards shown in the horizontal gallery (18 video clips) */
    reservedVisible: 18,
  },
  /** Social / channel links (Contact + Footer) */
  social: {
    max: 6,
  },
  /** Salon virtual tour panels */
  salonTour: {
    max: 12,
  },
  /** About section secondary images (optional) */
  aboutGallery: {
    max: 4,
  },
} as const

export type SlotLimits = typeof SLOT_LIMITS
