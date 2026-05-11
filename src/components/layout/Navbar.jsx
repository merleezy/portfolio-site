import { useState, useEffect } from 'react'
import { portfolio } from '../../data/portfolio'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const fmtDate = time.toISOString().slice(0, 10)
  const fmtTime = time.toTimeString().slice(0, 8)

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <span className={styles.title}>
          {portfolio.nameShort.toLowerCase()}@portfolio — zsh — 142×42
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.online}>● online</span>
        <span>{fmtDate}</span>
        <span className={styles.time}>{fmtTime}</span>
      </div>
    </nav>
  )
}
