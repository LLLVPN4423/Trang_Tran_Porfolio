import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Must match SmoothScrollProvider scrollerProxy target */
export const SCROLL_ROOT = document.documentElement

export function initScrollDefaults() {
  ScrollTrigger.defaults({
    scroller: SCROLL_ROOT,
  })
}

// Set defaults as early as possible
initScrollDefaults()

export { gsap, ScrollTrigger }
