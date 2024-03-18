// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questions from '../questionsDatabase'

export default function handler(req, res) {
  const selectedId = +req.query.id

  const unicQuestionOrNothing = questions.filter(question => question.id === selectedId)

  if(unicQuestionOrNothing.length === 1) {
    const selectedQuestion = unicQuestionOrNothing[0].shuffleAnswers()
    const obj = selectedQuestion.answerWith(0).convertToObject()
    res.status(200).json(obj)
  } else {
    res.status(204).send()
  }
}