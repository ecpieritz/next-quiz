import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBgCollor: string
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div className={styles.answer}>
      <div className={styles.contentAnswer}>
        <div className={styles.front}>
          <div className={styles.letter}
            style={{backgroundColor: props.letterBgCollor}}
          >
            <h4 className={styles.optionH4}>{props.letter}</h4>
          </div>
          <div className={styles.value}>
            <p className={styles.optionP}>{answer.value}</p>
          </div>
        </div>

        <div className={styles.back}>
          
        </div>
        
      </div>
    </div>
  );
}