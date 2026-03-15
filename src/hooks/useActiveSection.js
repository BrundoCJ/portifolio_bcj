import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently visible based on scroll position.
 * @param {string[]} sectionIds - Ordered list of section IDs to observe
 * @param {number} offset - Pixels from the top to consider a section active (default: 100)
 * @returns {string} The ID of the currently active section
 */
export function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const handler = () => {
      let current = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds, offset])

  return activeSection
}
