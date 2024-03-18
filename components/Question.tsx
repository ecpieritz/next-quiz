import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Statement from "./Statement";

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value
  return (
    <section className={styles.question}>
      <Statement text={question.statement} />
    </section>
  );
}