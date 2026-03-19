import { useState, useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() =>
    setCurrent(c => (c - 1 + project.images.length) % project.images.length), [project.images.length])

  const next = useCallback(() =>
    setCurrent(c => (c + 1) % project.images.length), [project.images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, next, prev])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar">
          <FiX size={22} />
        </button>

        <div className={styles.imageArea}>
          <img
            src={project.images[current]}
            alt={`${project.title} - ${current + 1}`}
            className={styles.image}
          />

          {project.images.length > 1 && (
            <>
              <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
                <FiChevronLeft size={24} />
              </button>
              <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Próxima">
                <FiChevronRight size={24} />
              </button>

              <div className={styles.dots}>
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Imagem ${i + 1}`}
                  />
                ))}
              </div>

              <span className={styles.counter}>{current + 1} / {project.images.length}</span>
            </>
          )}
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.desc}>{project.description}</p>

          <div className={styles.tags}>
            {project.tags.map(({ icon: Icon, name, color }) => (
              <span key={name} className={styles.tag} title={name}>
                <Icon size={18} color={color} />
                {name}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkGithub}>
                <FiGithub size={16} /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkLive}>
                <FiExternalLink size={16} /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
