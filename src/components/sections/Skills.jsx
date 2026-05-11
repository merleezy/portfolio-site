import { portfolio } from '../../data/portfolio'
import SectionHead from '../ui/SectionHead'
import styles from './Skills.module.css'

export default function Skills() {
  const skillEntries = Object.entries(portfolio.skills)

  return (
    <section className={styles.section}>
      <SectionHead num="03" title="Skills & education" cmd="cat skills.json | jq" />

      <div className={styles.json}>
        <div className={styles.brace}>{'{'}</div>
        {skillEntries.map(([key, values], idx) => (
          <div key={key} className={styles.jsonLine}>
            <span className={styles.key}>"{key}"</span>
            <span className={styles.punct}>: [</span>
            {values.map((skill, i) => (
              <span key={skill}>
                <span className={styles.value}>"{skill}"</span>
                {i < values.length - 1 && <span className={styles.punct}>, </span>}
              </span>
            ))}
            <span className={styles.punct}>]{idx < skillEntries.length - 1 ? ',' : ''}</span>
          </div>
        ))}
        <div className={styles.brace}>{'}'}</div>
      </div>

      <div className={styles.education}>
        {portfolio.education.map(e => (
          <div key={e.company} className={styles.eduRow}>
            <div className={styles.eduLeft}>
              <span className={styles.period}>{e.period}</span>
              <span className={styles.company}>{e.company}</span>
            </div>
            <div className={styles.eduRight}>
              <span className={styles.degree}>{e.role}</span>
              <span className={styles.eduBlurb}>{e.blurb}</span>
            </div>
          </div>
        ))}
        <div className={styles.eduFooter} />
      </div>
    </section>
  )
}
