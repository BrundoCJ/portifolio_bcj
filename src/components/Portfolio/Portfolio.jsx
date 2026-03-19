import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../../data/projects'
import { staggerItem, whenInView } from '../../utils/animations'
import ProjectCarousel from './ProjectCarousel'
import ProjectModal from './ProjectModal'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
            >
              <div className={styles.imageCol}>
                <ProjectCarousel images={project.images} title={project.title} />
                <div className={styles.imageOverlay}>
                  <span className={styles.viewBtn}>Ver detalhes →</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map(({ icon: Icon, name, color }) => (
                    <span key={name} className={styles.tag}>
                      <Icon size={14} color={color} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
