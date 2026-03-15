import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Resumo', href: '#resumo' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Preços', href: '#precos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(l => l.href.slice(1))
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={e => handleNavClick(e, '#home')}>
          Dev <span>Bruno</span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      className={styles.activeDot}
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className={`${styles.mobileLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                    onClick={e => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
