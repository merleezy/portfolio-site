import { portfolio } from '../../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const now = new Date()
  const pad = n => String(n).padStart(2, '0')
  const buildDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

  return (
    <footer className={styles.footer}>
      <span>© 2026 {portfolio.name}. Built with care, deployed on Vercel.</span>
      <span>v1.0.0 · last build {buildDate}</span>
    </footer>
  )
}
