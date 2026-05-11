import { portfolio } from '../../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const buildDate = new Date().toISOString().slice(0, 10)

  return (
    <footer className={styles.footer}>
      <span>© 2026 {portfolio.name}. Built with care, deployed on Vercel.</span>
      <span>v1.0.0 · last build {buildDate}</span>
    </footer>
  )
}
