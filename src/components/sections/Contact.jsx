import { portfolio } from '../../data/portfolio'
import SectionHead from '../ui/SectionHead'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section}>
      <SectionHead num="04" title="Contact" cmd="./contact --interactive" />

      <div className={styles.card}>
        <h3 className={styles.heading}>Get in touch</h3>
        <p className={styles.subtext}>
          Email is the best way to reach me. I read everything and try to reply within a day or two.
        </p>

        <div className={styles.emailRow}>
          <span className={styles.arrow}>→</span>
          <a
            href={`mailto:${portfolio.contact.email}`}
            className={styles.email}
          >
            {portfolio.contact.email}
          </a>
        </div>

        <div className={styles.socials}>
          {portfolio.contact.socials.map(s => (
            <a
              key={s.label}
              href={`https://${s.url}`}
              target="_blank"
              rel="noreferrer"
              className={styles.socialCard}
            >
              <span className={styles.socialLabel}>{s.label}</span>
              <span className={styles.socialHandle}>{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
