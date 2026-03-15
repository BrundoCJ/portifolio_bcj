import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, categoryColors } from '../../data/skills'
import { experience } from '../../data/experience'
import { staggerItem, whenInView } from '../../utils/animations'
import styles from './Resume.module.css'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const animate = whenInView(isInView)

  return (
    <section id="resumo" className={`${styles.resume} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={staggerItem}
          initial="hidden"
          animate={animate}
        >
          <span className="section-tag">Minhas habilidades</span>
          <h2 className="section-title">Resumo <span>Profissional</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.colTitle}>Habilidades Técnicas</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, i) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                    title={skill.name}
                  >
                    <Icon size={28} color={skill.color} />
                    <span className={styles.skillCardName}>{skill.name}</span>
                    <span
                      className={styles.skillCardCategory}
                      style={{ color: categoryColors[skill.category] }}
                    >
                      {skill.category}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.colTitle}>Experiência & Formação</h3>
            <div className={styles.timeline}>
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className={styles.timelineDot} data-type={item.type} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <span className={styles.timelineType}>
                        {item.type === 'work' ? 'Trabalho' : 'Educação'}
                      </span>
                      <span className={styles.timelinePeriod}>{item.period}</span>
                    </div>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <span className={styles.timelineOrg}>{item.org}</span>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
