import styles from '../styles/Statement.module.css'
interface StatementProps {
  text: string
}
export default function Statement(props: StatementProps) {
  return (
    <div className={styles.statement}>
      <h3 className={styles.text}>{props.text}</h3>
    </div>
  );
}