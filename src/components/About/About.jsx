import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../../data/personal'
import { fadeInLeft, staggerContainer, staggerItem, whenInView } from '../../utils/animations'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import styles from './About.module.css'

const statusPhrases = [
  'Vamos construir algo incrível?',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const animate = whenInView(isInView)
  const displayed = useTypingEffect(statusPhrases)

  return (
    <section id="sobre" className={`${styles.about} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={staggerItem}
          initial="hidden"
          animate={animate}
        >
          <span className="section-tag">Quem sou eu</span>
          <h2 className="section-title">Sobre <span>Mim</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.imageCol}
            variants={fadeInLeft}
            initial="hidden"
            animate={animate}
          >
            <div className={styles.imageWrapper}>
              <img src="/img/pessoa_eu.jpeg" alt="Bruno" className={styles.photo} />
              {/* <div className={styles.badge}>
                <strong>3+</strong>
                <span>Anos de experiência</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            className={styles.contentCol}
            variants={staggerContainer}
            initial="hidden"
            animate={animate}
          >
            <motion.div variants={staggerItem}>
              <div className={styles.typingWrapper}>
                <span className={styles.typingText} aria-live="polite">
                  {displayed}
                  <span className={styles.cursor} aria-hidden="true" />
                </span>
              </div>
              <h3 className={styles.subtitle}>Desenvolvedor Junior & Analista de Dados</h3>
              <p className={styles.bio}>
                Sou um desenvolvedor apaixonado por tecnologia, baseado em Maringá, Brasil.
                Combino habilidades de desenvolvimento frontend e backend com análise de dados para criar
                soluções completas e orientadas por resultados. Gosto de resolver problemas complexos
                com código limpo e interfaces intuitivas que realmente fazem diferença para as pessoas.
              </p>
              <p className={styles.bio}>
                Estou sempre aprendendo e explorando novas tecnologias, com foco em criar
                experiências digitais que sejam tanto funcionais quanto sofisticadas.
              </p>
            </motion.div>

            <motion.div className={styles.infoGrid} variants={staggerContainer}>
              {personalInfo.map(({ icon: Icon, label, value }) => (
                <motion.div key={label} className={styles.infoItem} variants={staggerItem}>
                  <Icon className={styles.infoIcon} size={16} aria-hidden="true" />
                  <div>
                    <span className={styles.infoLabel}>{label}:</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
