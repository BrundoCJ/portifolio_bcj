import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './ProjectCarousel.module.css'

export default function ProjectCarousel({ images, title, video }) {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null)
  const media = video
    ? [{ type: 'video', src: video }, ...images.map(src => ({ type: 'image', src }))]
    : images.map(src => ({ type: 'image', src }))

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % media.length)
  }, [media.length])

  const isCurrentVideo = media[current]?.type === 'video'

  useEffect(() => {
    if (!isCurrentVideo && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isCurrentVideo])

  useEffect(() => {
    if (media.length <= 1) return
    if (isCurrentVideo) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next, media.length, isCurrentVideo])

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {media.map((item, i) => (
          item.type === 'video' ? (
            <video
              key={item.src}
              ref={videoRef}
              src={item.src}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
              controls
              muted
              onEnded={next}
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
