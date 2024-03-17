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

  get answered(){
    for(let answer of this.#answers) {
      if(answer.revealed) return true
    }
    return false
  }

  shuffleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#statement, scrambledAnswers, this.#correct)
  }

  convertToObject(){
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map(anw => anw.convertToObject()),
      correct: this.#correct,
    }
  }
}