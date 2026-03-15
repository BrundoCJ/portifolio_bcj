/**
 * Smoothly scrolls to an element identified by a CSS selector or ID hash.
 * @param {string} target - CSS selector (e.g. '#sobre') or element ID (e.g. 'sobre')
 */
export function scrollTo(target) {
  const selector = target.startsWith('#') ? target : `#${target}`
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
