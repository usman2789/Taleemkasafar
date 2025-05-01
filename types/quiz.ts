export interface Question {
  id: number
  subject: string
  section: number
  question: string
  options: string[]
  correctAnswer: number
}

export interface QuizResults {
  math: number
  physics: number
  english: number
  total: number
}

export interface QuizSession {
  selectedAnswers: Record<number, number>
  savedAnswers: Record<number, number>
  reviewQuestions: number[]
  currentQuestionIndex: number
  timeRemaining: number
}
