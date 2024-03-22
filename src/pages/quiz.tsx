import QuestionModel from "../../model/question";
import Header from "../../components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Quiz from "../../components/Quiz";
import { useRouter } from "next/router";

const BASE_URL = 'http://localhost:3000/api'

export default function QuizPage() {
  const router = useRouter()
  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  async function loadQuestionsIds(){
    const awr = await fetch(`${BASE_URL}/quiz`)
    const questionsIds = await awr.json()
    setQuestionsIds(questionsIds)
  }
  
  async function loadQuestion(questionId: number){
    const awr = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await awr.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])
  
  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function answeredQuestion(answeredQuestion: QuestionModel){
    setQuestion(answeredQuestion)
    const correct = answeredQuestion.correct
    setCorrectAnswers(correctAnswers + (correct ? 1 : 0))
  }

  function nextQuestionId(){
    if(question){
      const nextIndex = questionsIds.indexOf(question?.id) + 1
      return questionsIds[nextIndex]
    }
  }

  function goToNextStep(){
    if(question){
      const nextId = nextQuestionId()
      nextId ? goToNextQuestion(nextId) : finish()
    }
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: '/resultado',
      query: {
        total: questionsIds.length,
        corrects: correctAnswers
      }
    })
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="A simple quiz about kpop" />
        <title>Kpop Quiz</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main
        className={`flex flex-col items-center`}
      >
        <div className="bg-white">
          {question ? (
            <Quiz
              question={question}
              lastQuestion={nextQuestionId() === undefined}
              answeredQuestion={answeredQuestion}
              goToNextStep={goToNextStep}
            />
          ): false}
        </div>
      </main>
      <Footer />
    </>
  );
}
