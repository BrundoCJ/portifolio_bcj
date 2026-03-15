import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Básico',
    price: '800',
    description: 'Ideal para quem precisa de uma presença online simples e eficaz.',
    features: [
      { text: 'Landing page (1 página)', included: true },
      { text: 'Design responsivo', included: true },
      { text: 'SEO básico', included: true },
      { text: 'Formulário de contato', included: true },
      { text: 'Integração com redes sociais', included: false },
      { text: 'Painel administrativo', included: false },
      { text: 'Suporte por 3 meses', included: false },
    ],
    cta: 'Contratar',
    popular: false,
  },
  {
    name: 'Profissional',
    price: '2.200',
    description: 'Para negócios que precisam de uma solução completa e profissional.',
    features: [
      { text: 'Site multi-páginas', included: true },
      { text: 'Design responsivo', included: true },
      { text: 'SEO avançado', included: true },
      { text: 'Formulário de contato', included: true },
      { text: 'Integração com redes sociais', included: true },
      { text: 'Painel administrativo', included: true },
      { text: 'Suporte por 3 meses', included: false },
    ],
    cta: 'Contratar',
    popular: true,
  },
  {
    name: 'Premium',
    price: '4.500',
    description: 'Solução completa com análise de dados e suporte dedicado.',
    features: [
      { text: 'Aplicação completa', included: true },
      { text: 'Design responsivo', included: true },
      { text: 'SEO avançado + Analytics', included: true },
      { text: 'Formulário + CRM', included: true },
      { text: 'Integrações customizadas', included: true },
      { text: 'Painel administrativo', included: true },
      { text: 'Suporte por 3 meses', included: true },
    ],
    cta: 'Contratar',
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="precos" className={`${styles.pricing} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Investimento</span>
          <h2 className="section-title">Meus <span>Preços</span></h2>
          <div className="section-divider" />
          <p className={styles.subtitle}>Todos os projetos incluem reuniões de briefing e revisões ilimitadas.</p>
        </motion.div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              {plan.popular && <span className={styles.popularBadge}>Mais popular</span>}

              <div className={styles.cardTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>R$</span>
                  <span className={styles.amount}>{plan.price}</span>
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map(({ text, included }) => (
                  <li key={text} className={`${styles.feature} ${!included ? styles.disabled : ''}`}>
                    {included
                      ? <FiCheck className={styles.checkIcon} size={15} />
                      : <FiX className={styles.xIcon} size={15} />
                    }
                    {text}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
