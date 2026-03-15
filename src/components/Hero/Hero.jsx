import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { roles, socials } from '../../data/personal'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { scrollTo } from '../../utils/scrollTo'
import styles from './Hero.module.css'

export default function Hero() {
  const displayed = useTypingEffect(roles)

  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className={styles.greeting}>Olá, mundo! 👋</span>

            <h1 className={styles.title}>
              Eu sou <span className={styles.name}>Bruno</span>
            </h1>

            <div className={styles.roleWrapper}>
              <span className={styles.role} aria-live="polite">
                {displayed}
                <span className={styles.cursor} aria-hidden="true" />
              </span>
            </div>

            <p className={styles.bio}>
              Apaixonado por transformar dados em insights e ideias em interfaces elegantes.
              Criando soluções digitais com foco em performance e experiência do usuário.
            </p>

            <div className={styles.actions}>
              <a href="/cv.pdf" download className="btn btn-primary">
                <FiDownload size={16} />
                Download CV
              </a>
              <a
                href="#contato"
                className="btn btn-outline"
                onClick={e => { e.preventDefault(); scrollTo('#contato') }}
              >
                Fale Comigo
                <FiArrowRight size={16} />
              </a>
            </div>

            <div className={styles.socials}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialLink}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className={styles.imageFrame}>
              <img
                src="/img/pessoa_eu.jpg"
                alt="Bruno — Desenvolvedor Frontend & Analista de Dados"
                className={styles.photo}
              />
              <div className={styles.imageBadge}>
                <span className={styles.badgeDot} />
                Disponível para freela
              </div>
            </div>
            <div className={styles.imageGlow} aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
