import { useState, useEffect, useCallback } from 'react'
import styles from './ProjectCarousel.module.css'

export default function ProjectCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next, images.length])

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} - ${i + 1}`}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
          />
        ))}

        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
