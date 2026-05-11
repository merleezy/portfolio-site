import { useState, useEffect } from 'react'
import { portfolio } from '../../data/portfolio'
import Prompt from '../ui/Prompt'
import styles from './Hero.module.css'

const ASCII_FIRST = `
 ___ ____    _    _    ____
|_ _/ ___|  / \\  / \\  / ___|
 | |\\___ \\ / _ \\/ _ \\| |
 | | ___) / ___ \\ ___ \\ |___
|___|____/_/   \\_\\   \\_\\____|`.trimStart()

const ASCII_LAST = `
 __  __      ____   _____        _______ _     _
|  \\/  | ___|  _ \\ / _ \\ \\      / / ____| |   | |
| |\\/| |/ __| | | | | | \\ \\ /\\ / /|  _| | |   | |
| |  | | (__| |_| | |_| |\\ V  V / | |___| |___| |___
|_|  |_|\\___|____/ \\___/  \\_/\\_/  |_____|_____|_____|`.trimStart()

export default function Hero() {
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const c = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(c)
  }, [])

  return (
    <section className={styles.hero}>
      <Prompt cmd="whoami" />

      <div className={styles.output}>
        <div className={styles.ascii}>
          <pre className={styles.pre}>{ASCII_FIRST}</pre>
          <pre className={styles.pre}>{ASCII_LAST}</pre>
        </div>

        <div className={styles.meta}>
          <div className={styles.row}>
            <span className={styles.label}>NAME</span>
            <span className={styles.name}>{portfolio.name}</span>
          </div>
          <div className={styles.rowGroup}>
            <div className={styles.pair}>
              <span className={styles.label}>ROLE</span>
              <span className={styles.value}>{portfolio.role}</span>
            </div>
            <span className={styles.sep}>·</span>
            <div className={styles.pair}>
              <span className={styles.label}>LOC</span>
              <span className={styles.value}>{portfolio.location}</span>
            </div>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>BIO</span>
            <span className={styles.bio}>{portfolio.intro}</span>
          </div>
        </div>

        <Prompt cmd="cat status.txt" />

        <div className={styles.statusBox}>
          <span className={styles.dot}>●</span>
          &nbsp;{portfolio.status}
          <span className={cursorOn ? styles.cursor : styles.cursorHidden}>▊</span>
        </div>
      </div>
    </section>
  )
}
