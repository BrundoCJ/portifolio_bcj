import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../data/navigation'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'
import { scrollTo } from '../../utils/scrollTo'
import styles from './Header.module.css'

const sectionIds = navLinks.map(l => l.href.slice(1))

export default function Header() {
  const scrolled = useScrolled(20)
  const activeSection = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={e => handleNavClick(e, '#home')}>
          Dev <span>Bruno</span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    onClick={e => handleNavClick(e, link.href)}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        className={styles.activeDot}
                        layoutId="activeDot"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
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
