"use client"

import { useEffect } from "react"
import type { QuizSession } from "@/types/quiz"

export default function useQuizSession(
  currentQuestionIndex: number,
  selectedAnswers: Record<number, number>,
  savedAnswers: Record<number, number>,
  reviewQuestions: number[],
  timeRemaining: number,
) {
  // Save session to localStorage
  useEffect(() => {
    localStorage.setItem(
      "quizSession",
      JSON.stringify({
        selectedAnswers,
        savedAnswers,
        reviewQuestions,
        currentQuestionIndex,
        timeRemaining,
      } as QuizSession),
    )
  }, [selectedAnswers, savedAnswers, reviewQuestions, currentQuestionIndex, timeRemaining])

  const clearSession = () => {
    localStorage.removeItem("quizSession")
  }

  return {
    clearSession,
  }
}
