import Prompt from './Prompt'
import styles from './SectionHead.module.css'

export default function SectionHead({ num, title, cmd }) {
  return (
    <div className={styles.head}>
      <Prompt cmd={cmd} />
      <div className={styles.titleRow}>
        <span className={styles.num}>// {num}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  )
}
