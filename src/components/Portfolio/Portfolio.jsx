import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { projects, categoryGradients } from '../../data/projects'
import { staggerItem, whenInView } from '../../utils/animations'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className={`${styles.portfolio} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={staggerItem}
          initial="hidden"
          animate={whenInView(isInView)}
        >
          <span className="section-tag">Meus trabalhos</span>
          <h2 className="section-title">Port<span>fólio</span></h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div className={styles.grid}>
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <div
                  className={styles.cardImage}
                  style={{ background: categoryGradients[project.category] ?? 'var(--bg-card)' }}
                  aria-hidden="true"
                />

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.cardTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.cardLinks}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.cardLink} ${styles.cardLinkPrimary}`}
                        aria-label={`Demo do ${project.title}`}
                      >
                        <FiExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
      </div>
    </section>
  )
}
