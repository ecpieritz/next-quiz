import AnswerModel from "../../../model/answer"
import QuestionModel from "../../../model/question"

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Quem é a mais velha no BlackPink?', [
    AnswerModel.incorrect('Jennie'),
    AnswerModel.incorrect('Lisa'),
    AnswerModel.incorrect('Rosé'),
    AnswerModel.correct('Jissoo')
  ]),
  new QuestionModel(306, 'Em que ano Le Sserafim debutou?', [
    AnswerModel.incorrect('2021'),
    AnswerModel.incorrect('2023'),
    AnswerModel.incorrect('2020'),
    AnswerModel.correct('2022')
  ]),
]

export default questions