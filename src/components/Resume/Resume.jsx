import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Resume.module.css'

const skills = [
  { name: 'HTML & CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 80, category: 'Frontend' },
  { name: 'React', level: 75, category: 'Frontend' },
  { name: 'Python', level: 85, category: 'Dados' },
  { name: 'SQL', level: 80, category: 'Dados' },
  { name: 'Power BI', level: 70, category: 'Dados' },
  { name: 'Node.js', level: 60, category: 'Backend' },
  { name: 'Git & GitHub', level: 85, category: 'Ferramentas' },
]

const experience = [
  {
    type: 'work',
    title: 'Desenvolvedor Frontend Jr.',
    org: 'Empresa Tech',
    period: '2024 — Presente',
    description: 'Desenvolvimento de interfaces responsivas com React e otimização de performance em aplicações web.',
  },
  {
    type: 'work',
    title: 'Analista de Dados Jr.',
    org: 'Startup de Analytics',
    period: '2023 — 2024',
    description: 'Criação de dashboards em Power BI, análise de dados com Python e SQL para geração de insights.',
  },
  {
    type: 'edu',
    title: 'Análise e Desenvolvimento de Sistemas',
    org: 'Universidade Positivo',
    period: '2022 — 2024',
    description: 'Formação em desenvolvimento de software com foco em sistemas web e banco de dados.',
  },
  {
    type: 'edu',
    title: 'Bootcamp Full Stack',
    org: 'Rocketseat',
    period: '2023',
    description: 'Curso intensivo de desenvolvimento web com Node.js, React e boas práticas de código.',
  },
]

const categoryColors = {
  Frontend: '#3b82f6',
  Dados: '#8b5cf6',
  Backend: '#10b981',
  Ferramentas: '#f59e0b',
}

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resumo" className={`${styles.resume} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            <div className={styles.skillsList}>
              {skills.map((skill, i) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillMeta}>
                      <span
                        className={styles.skillCategory}
                        style={{ color: categoryColors[skill.category] }}
                      >
                        {skill.category}
                      </span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                  </div>
                  <div className={styles.bar}>
                    <motion.div
                      className={styles.barFill}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
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
