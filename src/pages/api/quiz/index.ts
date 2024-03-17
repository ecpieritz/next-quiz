import questions from "../questionsDatabase"

export default function handler(req, res) {
  
  res.status(200).json(questions.map(question => question.id))
}