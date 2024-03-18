import Question from "../../components/Question";
import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";
import Header from "../../components/Header";
import Head from "next/head";

export default function Home() {
  const questionTest = new QuestionModel(1, 'Melhor cor?', [
    AnswerModel.incorrect('Preto'),
    AnswerModel.incorrect('Rosa'),
    AnswerModel.incorrect('Azul'),
    AnswerModel.correct('Roxo'),
  ])


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
        className={`flex min-h-screen flex-col items-center p-24`}
      >
        <Question value={questionTest} />
      </main>
    </>
  );
}
