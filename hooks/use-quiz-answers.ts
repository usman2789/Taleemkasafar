"use client"

import { useState, useEffect } from "react"
import type { Question } from "@/types/quiz"
import { calculateResults } from "@/utils/quiz-utils"

export default function useQuizAnswers(questions: Question[]) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [savedAnswers, setSavedAnswers] = useState<Record<number, number>>({})
  const [reviewQuestions, setReviewQuestions] = useState<number[]>([])

  // Load saved answers from localStorage
  useEffect(() => {
    const savedSession = localStorage.getItem("quizSession")
    if (savedSession) {
      try {
        const session = JSON.parse(savedSession)
        setSelectedAnswers(session.selectedAnswers || {})
        setSavedAnswers(session.savedAnswers || {})
        setReviewQuestions(session.reviewQuestions || [])
      } catch (error) {
        console.error("Error parsing saved session:", error)
      }
    }
  }, [])

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }))
  }

  const saveAnswer = (questionIndex: number) => {
    if (selectedAnswers[questionIndex] !== undefined) {
      setSavedAnswers((prev) => ({
        ...prev,
        [questionIndex]: selectedAnswers[questionIndex],
      }))
    }
  }

  const toggleReview = (questionIndex: number) => {
    if (reviewQuestions.includes(questionIndex)) {
      setReviewQuestions((prev) => prev.filter((q) => q !== questionIndex))
    } else {
      setReviewQuestions((prev) => [...prev, questionIndex])
    }
  }

  const calculateScores = () => {
    return calculateResults(questions, savedAnswers)
  }

  return {
    selectedAnswers,
    savedAnswers,
    reviewQuestions,
    handleAnswerSelect,
    saveAnswer,
    toggleReview,
    calculateScores,
  }
}
