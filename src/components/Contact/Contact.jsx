import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { contactInfo, socials } from '../../data/personal'
import { staggerItem, whenInView } from '../../utils/animations'
import styles from './Contact.module.css'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    // TODO: replace with real API call (e.g. EmailJS, Formspree, etc.)
    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus(null), 4000)
    }, 1200)
  }

  return (
    <section id="contato" className={`${styles.contact} section`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={staggerItem}
          initial="hidden"
          animate={whenInView(isInView)}
        >
          <span className="section-tag">Entre em contato</span>
          <h2 className="section-title">Vamos <span>Conversar?</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.infoTitle}>Estou disponível para projetos freelance!</h3>
            <p className={styles.infoText}>
              Tem um projeto em mente? Precisa de um desenvolvedor ou analista de dados?
              Me mande uma mensagem e vamos criar algo incrível juntos.
            </p>

            <ul className={styles.contactList}>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className={styles.contactItem}>
                  <div className={styles.contactIconBox}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>{label}</span>
                    <span className={styles.contactValue}>{value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.socialsRow}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialBtn}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            noValidate
          >
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Nome</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Seu nome"
                  value={form.name} onChange={handleChange}
                  required className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="seu@email.com"
                  value={form.email} onChange={handleChange}
                  required className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">Assunto</label>
              <input
                id="subject" name="subject" type="text"
                placeholder="Sobre o que você quer falar?"
                value={form.subject} onChange={handleChange}
                required className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Mensagem</label>
              <textarea
                id="message" name="message"
                placeholder="Descreva seu projeto ou dúvida..."
                rows={6}
                value={form.message} onChange={handleChange}
                required className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...'
                : status === 'sent'    ? 'Mensagem enviada!'
                : <><FiSend size={16} /> Enviar mensagem</>
              }
            </button>

            {status === 'sent' && (
              <motion.p
                className={styles.successMsg}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Obrigado! Responderei em breve.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
