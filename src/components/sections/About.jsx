import { portfolio } from '../../data/portfolio'
import SectionHead from '../ui/SectionHead'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <SectionHead num="02" title="About" cmd="cat about.md" />

      <div className={styles.grid}>
        <p className={styles.body}>{portfolio.about.body}</p>

        <div className={styles.interests}>
          {portfolio.about.interests.map(item => (
            <div key={item.label} className={styles.interestRow}>
              <span className={styles.interestLabel}>{item.label}</span>
              <span className={styles.interestNote}>{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
