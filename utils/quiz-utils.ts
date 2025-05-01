import type { Question, QuizResults } from "@/types/quiz"

export function calculateResults(questions: Question[], savedAnswers: Record<number, number>): QuizResults {
  const results: QuizResults = {
    math: 0,
    physics: 0,
    english: 0,
    total: 0,
  }

  questions.forEach((question, index) => {
    if (savedAnswers[index] === question.correctAnswer) {
      const subject = question.subject.toLowerCase() as keyof QuizResults
      if (subject in results) {
        results[subject]++
        results.total++
      }
    }
  })

  return results
}

export function getFilteredQuestions(
  questions: Question[],
  filterType: string,
  savedAnswers: Record<number, number>,
  reviewQuestions: number[],
): number[] {
  if (filterType === "all") return Array.from({ length: questions.length }, (_, i) => i)
  if (filterType === "unattempted")
    return Array.from({ length: questions.length }, (_, i) => i).filter((i) => savedAnswers[i] === undefined)
  if (filterType === "review") return reviewQuestions
  return []
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}
