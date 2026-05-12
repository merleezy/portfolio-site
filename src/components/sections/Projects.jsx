import { portfolio } from '../../data/portfolio'
import SectionHead from '../ui/SectionHead'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section}>
      <SectionHead num="01" title="Projects" cmd="ls -lah ./projects" />

      <div className={styles.table}>
        <div className={styles.header}>
          <span>YEAR</span>
          <span>NAME / DESCRIPTION</span>
          <span>STACK</span>
          <span>ROLE</span>
          <span className={styles.linksHeader}>LINKS</span>
        </div>

        {portfolio.projects.map(p => (
          <div key={p.id} className={styles.row}>
            <span className={styles.year}>{p.year}</span>

            <div className={styles.nameCell}>
              <div className={styles.nameRow}>
                <span className={styles.projectName}>{p.name}</span>
                {p.wip && <span className={styles.wipBadge}>wip</span>}
                <span className={styles.dot} style={{ '--dot-color': p.accent }}>●</span>
              </div>
              <p className={styles.blurb}>{p.blurb}</p>
            </div>

            <div className={styles.tech}>
              {p.tech.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>

            <span className={styles.role}>{p.role}</span>

            <div className={styles.links}>
              {p.live && (
                <a
                  href={`https://${p.live}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >↗ live</a>
              )}
              {p.repo && (
                <a
                  href={`https://${p.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >↗ src</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
