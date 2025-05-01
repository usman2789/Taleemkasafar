"use client"

import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react"
import mcqData from "@/data/mcq.json"
import FlipClock from "@/components/quiz/flip-clock"
import { Button } from "@/components/ui/button"
import useQuizState from "@/hooks/use-quiz-state"
import { getFilteredQuestions } from "@/utils/quiz-utils"
import QuestionDisplay from "@/components/quiz/question-display"
import QuizNavigation from "@/components/quiz/quiz-navigation"
import QuestionFilter from "@/components/quiz/question-filter"
import QuestionGrid from "@/components/quiz/question-grid"
import SectionProgress from "@/components/quiz/section-progress"
import type { Question } from "@/types/quiz"

export default function QuizPage() {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [filterType, setFilterType] = useState("all")
  const router = useRouter()

useEffect(() => {
  const testType = sessionStorage.getItem('testType')
  const instructionsViewed = sessionStorage.getItem('instructionsViewed')

  if (!testType || !instructionsViewed) {
    router.push('/quiz') // go back to quiz homepage if skipped steps
  }
}, [router])


  // Initialize quiz data
  useEffect(() => {
    // Load questions from JSON
    setQuestions(mcqData as Question[])
    setLoading(false)
  }, [])

  const {
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
    handleAnswerSelect,
    saveAnswer,
    toggleReview,
    navigateToQuestion,
    navigateToSection,
    navigateToNext,
    navigateToPrevious,
    navigateToFirst,
    navigateToLast,
    submitTest,
  } = useQuizState(questions)

  const filterOptions = [
    { value: "all", label: "All Questions" },
    { value: "unattempted", label: "Unattempted Questions" },
    { value: "review", label: "Marked for Review" },
  ]

  if (loading || !currentQuestion) {
    return <div className="flex items-center justify-center min-h-screen">Loading quiz...</div>
  }

  const filteredQuestions = getFilteredQuestions(questions, filterType, savedAnswers, reviewQuestions)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-white border-b border-gray-300">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-3">
            <div className="text-blue-800 font-semibold">{currentQuestion?.subject}</div>
            <div className="text-center text-red-600 font-bold">
              Engineering/Computer Science/BS Mathematics (With Computer Science)
            </div>
            <div className="text-right text-red-600 font-bold">
              NUST05 <span className="text-green-700">(SCME014)</span>
            </div>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto p-4">
        <QuestionDisplay
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          isSaved={savedAnswers[currentQuestionIndex] !== undefined}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 text-white p-2 w-18 text-center">
              <div className="text-2xl">{Math.floor(timeRemaining / 60)}</div>
              <div className="text-xs">min</div>
              <div className="text-xs">Remaining</div>
            </div>
            <div className="border border-gray-300 p-2 bg-white">
              <FlipClock seconds={timeRemaining} />
            </div>
          </div>

          <QuizNavigation
            onNext={navigateToNext}
            onPrev={navigateToPrevious}
            onSave={saveAnswer}
            onToggleReview={toggleReview}
            onNextSection={() => navigateToSection(currentSection + 1)}
            onPrevSection={() => navigateToSection(currentSection - 1)}
            onFirst={navigateToFirst}
            onLast={navigateToLast}
            isFirstQuestion={isFirstQuestion}
            isLastQuestion={isLastQuestion}
            isFirstSection={currentSection === 1}
            isLastSection={currentSection === 3}
            isMarkedForReview={reviewQuestions.includes(currentQuestionIndex)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <QuestionFilter filterOptions={filterOptions} currentFilter={filterType} onFilterChange={setFilterType} />

          <QuestionGrid
            questions={filteredQuestions}
            currentIndex={currentQuestionIndex}
            savedAnswers={savedAnswers}
            selectedAnswers={selectedAnswers}
            reviewQuestions={reviewQuestions}
            onNavigate={navigateToQuestion}
          />

          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to finish the test? This action cannot be undone.")) {
                submitTest()
              }
            }}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Finish Test
          </Button>
        </div>

        <SectionProgress questions={questions} savedAnswers={savedAnswers} />
      </main>
    </div>
  )
}
