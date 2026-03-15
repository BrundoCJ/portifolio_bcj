import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FiCalendar, FiMapPin, FiGlobe, FiPhone, FiMail,
  FiBriefcase, FiUser
} from 'react-icons/fi'
import styles from './About.module.css'

const personalInfo = [
  { icon: FiCalendar, label: 'Nascimento', value: '04 de Maio, 2001' },
  { icon: FiBriefcase, label: 'Freelance', value: 'Disponível' },
  { icon: FiMapPin, label: 'Endereço', value: 'Curitiba, Brasil' },
  { icon: FiGlobe, label: 'Idiomas', value: 'Português, Inglês, Espanhol' },
  { icon: FiUser, label: 'Nacionalidade', value: 'Brasileiro' },
  { icon: FiPhone, label: 'Telefone', value: '+55 (41) 9 9999-9999' },
  { icon: FiMail, label: 'E-mail', value: 'bruno@email.com' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className={`${styles.about} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Quem sou eu</span>
          <h2 className="section-title">Sobre <span>Mim</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="/img/pessoa_eu.jpg"
                alt="Bruno"
                className={styles.photo}
              />
              <div className={styles.badge}>
                <strong>3+</strong>
                <span>Anos de experiência</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contentCol}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h3 className={styles.subtitle}>Desenvolvedor Junior & Analista de Dados</h3>
              <p className={styles.bio}>
                Sou um desenvolvedor apaixonado por tecnologia, baseado em Curitiba, Brasil.
                Combino habilidades de desenvolvimento frontend com análise de dados para criar
                soluções completas e orientadas por resultados. Gosto de resolver problemas complexos
                com código limpo e interfaces intuitivas que realmente fazem diferença para as pessoas.
              </p>
              <p className={styles.bio}>
                Estou sempre aprendendo e explorando novas tecnologias, com foco em criar
                experiências digitais que sejam tanto funcionais quanto belas.
              </p>
            </motion.div>

            <motion.div className={styles.infoGrid} variants={containerVariants}>
              {personalInfo.map(({ icon: Icon, label, value }) => (
                <motion.div key={label} className={styles.infoItem} variants={itemVariants}>
                  <Icon className={styles.infoIcon} size={16} aria-hidden="true" />
                  <div>
                    <span className={styles.infoLabel}>{label}:</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="/cv.pdf"
              download
              className="btn btn-primary"
              variants={itemVariants}
              style={{ alignSelf: 'flex-start' }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
