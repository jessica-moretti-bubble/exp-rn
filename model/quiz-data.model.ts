


export interface QuizData {
    id: number,
    question: string,
    answers: Answer[],
    image: string

}



export interface Answer {
    id: number
    title: string
    isCorrect: boolean
}


export enum Reward {
    CUBBLE = "CUBBLE",
    TIME = "TIME",
    BOH = "BOH",
  }
  