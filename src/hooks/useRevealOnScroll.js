import { useEffect } from 'react'

/**
 * Observes every element with the `.reveal` class and adds `.active`
 * once it scrolls into view, mirroring the original vanilla-JS behavior.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
