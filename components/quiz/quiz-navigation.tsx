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
      <Button onClick={onSave} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black">
        Save
      </Button>
      <Button onClick={onNext} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black" disabled={isLastQuestion}>
        Next
      </Button>
      <Button onClick={onPrev} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black" disabled={isFirstQuestion}>
        Prev
      </Button>
      <div className="hidden md:block"><Button onClick={onToggleReview} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black">
        {isMarkedForReview ? "Remove Review" : "Mark for Review"}
      </Button></div>
      <Button onClick={onNextSection} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black" disabled={isLastSection}>
        Next Section
      </Button>
      <Button onClick={onPrevSection} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black" disabled={isFirstSection}>
        Prev Section
      </Button>
      <Button onClick={onFirst} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black">
        First
      </Button>
      <Button onClick={onLast} className="border border-gray-600 text-black rounded-md bg-white hover:bg-blue-400 hover:border-black">
        Last
      </Button>
    </div>
  )
}
