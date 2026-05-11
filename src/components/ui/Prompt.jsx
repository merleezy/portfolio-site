import { portfolio } from '../../data/portfolio'
import styles from './Prompt.module.css'

export default function Prompt({ path = '~', cmd, comment }) {
  return (
    <div className={styles.prompt}>
      <span className={styles.user}>{portfolio.nameShort.toLowerCase()}</span>
      <span className={styles.host}>@portfolio</span>
      <span className={styles.host}>:</span>
      <span className={styles.path}>{path}</span>
      <span className={styles.dollar}>$</span>
      <span className={styles.cmd}>{cmd}</span>
      {comment && <span className={styles.comment}># {comment}</span>}
    </div>
  )
}
