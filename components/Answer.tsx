import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBgCollor: string
  onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const answer = props.value

  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={styles.contentAnswer}>
        {!answer.revealed ? (
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

        ) : (
          <div className={styles.back}>
            {answer.correct ? (
              <div className={styles.correct}>
                <div><p>A resposta certa é...</p></div>
                <div className={styles.value}><h4>{answer.value}</h4></div>
              </div>
            ) : (
              <div className={styles.incorrect}>
                <div><p>A resposta está errada!</p></div>
                <div className={styles.value}><h4>{answer.value}</h4></div>
              </div>
            )}
          </div>
        )}

        
      </div>
    </div>
  );
}