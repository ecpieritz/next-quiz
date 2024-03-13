// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questions from '../questionsDatabase'

export default function handler(req, res) {
  res.status(200).json(questions[0]);
}