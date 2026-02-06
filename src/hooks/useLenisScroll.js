import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export default function useLenisScroll() {
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0

    if (isTouch) return

    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      easing: (t) => t,
    })

    lenisInstance = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
