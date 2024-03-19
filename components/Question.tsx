import { time } from "console";
import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Statement from "./Statement";
import Timer from "./Timer";

const letters = [
  {value: 'a', collor: '#ebce6e'},
  {value: 'b', collor: '#ee8fd2'},
  {value: 'c', collor: '#6d6bdd'},
  {value: 'd', collor: '#6bddc4'},
]

interface QuestionProps {
  value: QuestionModel
  onResponse: (index: number) => void
  timeOut: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value

  function AnswersRender(){
    return question.answers.map((answer, i) => {
      return (
        <Answer 
          key={i}
          value={answer}
          index={i}
          letter={letters[i].value}
          letterBgCollor={letters[i].collor}
          onResponse={props.onResponse}
        />
      )
    })
  }

  return (
    <section className={styles.question}>
      <Statement text={question.statement} />
      <Timer duration={10} timeOut={props.timeOut} />
      {AnswersRender()}
    </section>
  );
}