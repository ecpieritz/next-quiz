import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Statement from "./Statement";

interface QuestionProps {
  value: QuestionModel
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
          letter="a"
          letterBgCollor="red"
        />
      )
    })
  }

  return (
    <section className={styles.question}>
      <Statement text={question.statement} />
      {AnswersRender()}
    </section>
  );
}