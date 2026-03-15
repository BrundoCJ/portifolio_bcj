import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter animation.
 * @param {string[]} texts - Strings to cycle through
 * @param {{ typeSpeed?: number, deleteSpeed?: number, pauseMs?: number }} options
 * @returns {string} The currently displayed text (partial)
 */
export function useTypingEffect(texts, { typeSpeed = 65, deleteSpeed = 35, pauseMs = 1800 } = {}) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    if (!texts.length) return

    const current = texts[index]

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyping(false), pauseMs)
      return () => clearTimeout(t)
    }

    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
      return () => clearTimeout(t)
    }

    setIndex(i => (i + 1) % texts.length)
    setTyping(true)
  }, [displayed, typing, index, texts, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}
