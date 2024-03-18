import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterCollor: string
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div className={styles.answer}>
      <div className={styles.contentAnswer}>
        <div className={styles.front}>
          <div className={styles.letter}>
            <h4>{props.letter}</h4>
          </div>
          <div className={styles.value}>
            <p>{answer.value}</p>
          </div>
        </div>

        <div className={styles.back}>
          
        </div>
        
      </div>
    </div>
  );
}