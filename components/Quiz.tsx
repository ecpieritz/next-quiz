import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/question";
import Question from './Question';
import Button from './Button';

interface QuizProps {
  question: QuestionModel
  lastQuestion: boolean
  answeredQuestion: (question: QuestionModel) => void
  goToNextStep: () => void
}

export default function Quiz(props: QuizProps) {

  function onResponse(index: number){
    if(props.question.notAnswered) {
      props.answeredQuestion(props.question.answerWith(index))
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ?
        <Question
          value={props.question}
          timeToAnswer={10}
          onResponse={onResponse}
          timeOut={props.goToNextStep}
        />
        : false
      }
      <Button
        onClick={props.goToNextStep}
        text={props.lastQuestion ? 'Finalizar' : 'Próxima'}
      />
    </div>
  );
}