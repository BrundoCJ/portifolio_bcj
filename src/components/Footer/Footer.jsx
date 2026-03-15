import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
          Dev <span>Bruno</span>
        </a>
        <p className={styles.copy}>
          © {year} Dev Bruno. Feito com React & carinho.
        </p>
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          ↑ Topo
        </button>
      </div>
    </footer>
  )
}
