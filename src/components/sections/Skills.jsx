import { portfolio } from '../../data/portfolio'
import SectionHead from '../ui/SectionHead'
import styles from './Skills.module.css'

function TimelineList({ label, items }) {
  return (
    <div className={styles.timeline}>
      <h3 className={styles.subhead}>{label}</h3>
      {items.map(item => (
        <div key={item.company} className={styles.row}>
          <div className={styles.left}>
            <span className={styles.period}>{item.period}</span>
            <span className={styles.company}>{item.company}</span>
            {item.location && <span className={styles.location}>{item.location}</span>}
          </div>
          <div className={styles.right}>
            <span className={styles.role}>{item.role}</span>
            <span className={styles.blurb}>{item.blurb}</span>
          </div>
        </div>
      ))}
      <div className={styles.timelineFooter} />
    </div>
  )
}

export default function Skills() {
  const skillEntries = Object.entries(portfolio.skills)

  return (
    <section className={styles.section}>
      <SectionHead num="03" title="Skills & experience" cmd="cat skills.json | jq" />

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

      <TimelineList label="Education" items={portfolio.education} />
      <TimelineList label="Experience" items={portfolio.experience} />
    </section>
  )
}
