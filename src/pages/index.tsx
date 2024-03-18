import { Inter } from "next/font/google";
import Question from "../../components/Question";
import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const questionTest = new QuestionModel(1, 'Melhor cor?', [
    AnswerModel.incorrect('Preto'),
    AnswerModel.incorrect('Rosa'),
    AnswerModel.incorrect('Azul'),
    AnswerModel.correct('Roxo'),
  ])

  
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
      >
        <Question value={questionTest} />
      </main>
    </>
  );
}
