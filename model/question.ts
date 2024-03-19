import { shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #statement: string
  #answers: AnswerModel[]
  #correct: boolean

  constructor(id:number, statement:string, answers:AnswerModel[],correct = false){
    this.#id = id
    this.#statement = statement
    this.#answers = answers
    this.#correct = correct
  }

  get id() {
    return this.#id
  }
  
  get statement() {
    return this.#statement
  }

  get answers() {
    return this.#answers
  }

  get correct() {
    return this.#correct
  }

  get notAnswered(){
    return !this.answered
  }

  get answered(){
    for(let answer of this.#answers) {
      if(answer.revealed) return true
    }
    return false
  }

  answerWith(index: number): QuestionModel {
    const correct = this.#answers[index]?.correct
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i
      const mustReveal = selectedAnswer || answer.correct
      return mustReveal ? answer.reveal() : answer
    })
    return new QuestionModel(this.id, this.statement, answers, correct)
  }

  shuffleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#statement, scrambledAnswers, this.#correct)
  }

  convertToObject(){
    return {
      id: this.#id,
      statement: this.#statement,
      answered : this.answered,
      correct: this.#correct,
      answers: this.#answers.map(anw => anw.convertToObject()),
    }
  }
}