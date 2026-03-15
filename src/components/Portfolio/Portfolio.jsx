import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from './Portfolio.module.css'

const categories = ['Todos', 'Frontend', 'Dados', 'Full Stack']

const projects = [
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados de vendas com filtros dinâmicos e gráficos em tempo real.',
    tags: ['React', 'D3.js', 'Node.js'],
    category: 'Dados',
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'E-commerce UI',
    description: 'Interface completa de loja virtual com carrinho, filtros de produtos e checkout responsivo.',
    tags: ['React', 'CSS Modules', 'Context API'],
    category: 'Frontend',
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Sistema de Gestão',
    description: 'Aplicação full stack para gestão de funcionários com autenticação JWT e relatórios em PDF.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full Stack',
    image: null,
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Análise de Sentimentos',
    description: 'Script Python para análise de sentimentos em tweets usando NLTK e visualização com Matplotlib.',
    tags: ['Python', 'NLP', 'Pandas'],
    category: 'Dados',
    image: null,
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Landing Page',
    description: 'Landing page animada de SaaS com foco em conversão, performance e design moderno.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'API REST',
    description: 'API RESTful para gerenciamento de tarefas com autenticação, paginação e documentação Swagger.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    category: 'Full Stack',
    image: null,
    github: 'https://github.com',
    live: null,
  },
]

const categoryGradients = {
  Frontend: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  Dados: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  'Full Stack': 'linear-gradient(135deg, #10b981, #3b82f6)',
}

export default function Portfolio() {
  const [active, setActive] = useState('Todos')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className={`${styles.portfolio} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Meus trabalhos</span>
          <h2 className="section-title">Port<span>fólio</span></h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.activeFilter : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div className={styles.grid} layout>
            {filtered.map((project, i) => (
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
                  style={{ background: categoryGradients[project.category] || 'var(--bg-card)' }}
                  aria-hidden="true"
                >
                  <span className={styles.cardCategory}>{project.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.cardTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.cardLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`Código do ${project.title}`}
                    >
                      <FiGithub size={16} />
                      Código
                    </a>
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
        </AnimatePresence>
      </div>
    </section>
  )
}
