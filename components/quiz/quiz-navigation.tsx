"use client"

import { Button } from "@/components/ui/button"

interface QuizNavigationProps {
  onNext: () => void
  onPrev: () => void
  onSave: () => void
  onToggleReview: () => void
  onNextSection: () => void
  onPrevSection: () => void
  onFirst: () => void
  onLast: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
  isFirstSection: boolean
  isLastSection: boolean
  isMarkedForReview: boolean
}

export default function QuizNavigation({
  onNext,
  onPrev,
  onSave,
  onToggleReview,
  onNextSection,
  onPrevSection,
  onFirst,
  onLast,
  isFirstQuestion,
  isLastQuestion,
  isFirstSection,
  isLastSection,
  isMarkedForReview,
}: QuizNavigationProps) {
  return (
    <div className="flex space-x-2 flex-wrap gap-2">
      <Button onClick={onSave} className="bg-gray-300 hover:bg-gray-400 text-black">
        Save
      </Button>
      <Button onClick={onNext} className="bg-blue-500 hover:bg-blue-600 text-white" disabled={isLastQuestion}>
        Next
      </Button>
      <Button onClick={onPrev} className="bg-blue-500 hover:bg-blue-600 text-white" disabled={isFirstQuestion}>
        Prev
      </Button>
      <Button onClick={onToggleReview} className="bg-gray-300 hover:bg-gray-400 text-black">
        {isMarkedForReview ? "Remove Review" : "Mark for Review"}
      </Button>
      <Button onClick={onNextSection} className="bg-blue-500 hover:bg-blue-600 text-white" disabled={isLastSection}>
        Next Section
      </Button>
      <Button onClick={onPrevSection} className="bg-blue-500 hover:bg-blue-600 text-white" disabled={isFirstSection}>
        Prev Section
      </Button>
      <Button onClick={onFirst} className="bg-blue-500 hover:bg-blue-600 text-white">
        First
      </Button>
      <Button onClick={onLast} className="bg-blue-500 hover:bg-blue-600 text-white">
        Last
      </Button>
    </div>
  )
}
