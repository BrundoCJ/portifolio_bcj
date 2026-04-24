import { useState, useEffect, useCallback } from 'react'
import styles from './ProjectCarousel.module.css'

export default function ProjectCarousel({ images, title, video }) {
  const [current, setCurrent] = useState(0)
  const media = video ? [{ type: 'video', src: video }, ...images.map(src => ({ type: 'image', src }))] : images.map(src => ({ type: 'image', src }))

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % media.length)
  }, [media.length])

  useEffect(() => {
    if (media.length <= 1) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next, media.length])

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {media.map((item, i) => (
          item.type === 'video' ? (
            <video
              key={item.src}
              src={item.src}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
              controls
              muted
            />
          ) : (
            <img
              key={item.src}
              src={item.src}
              alt={`${title} - ${i + 1}`}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
            />
          )
        ))}

        {media.length > 1 && (
          <div className={styles.dots}>
            {media.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Mídia ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
