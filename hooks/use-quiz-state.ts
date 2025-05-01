"use client"

import { useRouter } from "next/navigation"
import type { Question } from "@/types/quiz"
import useQuizTimer from "./use-quiz-timer"
import useQuizNavigation from "./use-quiz-navigation"
import useQuizAnswers from "./use-quiz-answers"
import useQuizSession from "./use-quiz-session"

export default function useQuizState(initialQuestions: Question[]) {
  const router = useRouter()

  const {
    selectedAnswers,
    savedAnswers,
    reviewQuestions,
    handleAnswerSelect,
    saveAnswer,
    toggleReview,
    calculateScores,
  } = useQuizAnswers(initialQuestions)

  const {
    currentQuestionIndex,
    currentQuestion,
    currentSection,
    isFirstQuestion,
    isLastQuestion,
    isFirstInSection,
    isLastInSection,
    navigateToQuestion,
    navigateToSection,
    navigateToNext,
    navigateToPrevious,
    navigateToFirst,
    navigateToLast,
  } = useQuizNavigation(initialQuestions)

  const submitTest = () => {
    // Calculate scores
    const results = calculateScores()

    // Save results to localStorage
    localStorage.setItem("quizResults", JSON.stringify(results))

    // Clear session
    clearSession()

    // Navigate to results page
    router.push("/quiz/results")
  }

  const { timeRemaining, pauseTimer } = useQuizTimer(3 * 60 * 60, submitTest)

  const { clearSession } = useQuizSession(
    currentQuestionIndex,
    selectedAnswers,
    savedAnswers,
    reviewQuestions,
    timeRemaining,
  )

  return {
    currentQuestionIndex,
    currentQuestion,
    selectedAnswers,
    savedAnswers,
    reviewQuestions,
    timeRemaining,
    isFirstQuestion,
    isLastQuestion,
    currentSection,
    isFirstInSection,
    isLastInSection,
    handleAnswerSelect: (answerIndex: number) => handleAnswerSelect(currentQuestionIndex, answerIndex),
    saveAnswer: () => saveAnswer(currentQuestionIndex),
    toggleReview: () => toggleReview(currentQuestionIndex),
    navigateToQuestion,
    navigateToSection,
    navigateToNext,
    navigateToPrevious,
    navigateToFirst,
    navigateToLast,
    submitTest,
    pauseTimer,
  }
}
