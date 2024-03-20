import Question from "../../components/Question";
import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Head from "next/head";
import { useState } from "react";
import Footer from "../../components/Footer";

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.incorrect('Preto'),
  AnswerModel.incorrect('Rosa'),
  AnswerModel.incorrect('Azul'),
  AnswerModel.correct('Roxo'),
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  function onResponse(index: number) {
    setQuestion(question.answerWith(index))
  }
  
  function timeOut() {
    if(question.notAnswered){
      setQuestion(question.answerWith(-1))
    }
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
          <Question
            // timeToAnswer={5}
            value={question}
            onResponse={onResponse}
            timeOut={timeOut}
          />
          <Button text="Próxima" />
        </div>
      </main>
      <Footer />
    </>
  );
}
