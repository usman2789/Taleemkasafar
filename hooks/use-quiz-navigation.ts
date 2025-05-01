"use client"

import { useState } from "react"
import type { Question } from "@/types/quiz"

export default function useQuizNavigation(questions: Question[]) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const navigateToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index)
    }
  }

  const navigateToSection = (section: number) => {
    const sectionStartIndex = questions.findIndex((q) => q.section === section)
    if (sectionStartIndex !== -1) {
      setCurrentQuestionIndex(sectionStartIndex)
    }
  }

  const navigateToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const navigateToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const navigateToFirst = () => {
    setCurrentQuestionIndex(0)
  }

  const navigateToLast = () => {
    setCurrentQuestionIndex(questions.length - 1)
  }

  // Find section boundaries
  const currentQuestion = questions[currentQuestionIndex]
  const currentSection = currentQuestion?.section

  const sectionStartIndices = {
    1: 0, // Math starts at index 0
    2: questions.findIndex((q) => q.section === 2), // Physics
    3: questions.findIndex((q) => q.section === 3), // English
  } as const

  const sectionEndIndices = {
    1: sectionStartIndices[2] > 0 ? sectionStartIndices[2] - 1 : questions.length - 1,
    2: sectionStartIndices[3] > 0 ? sectionStartIndices[3] - 1 : questions.length - 1,
    3: questions.length - 1,
  } as const

  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const isFirstInSection = currentSection ? currentQuestionIndex === sectionStartIndices[currentSection as 1 | 2 | 3] : false
  const isLastInSection = currentSection ? currentQuestionIndex === sectionEndIndices[currentSection as 1 | 2 | 3] : false

  return {
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
  }
}
