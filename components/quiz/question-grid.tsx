"use client"

import { Button } from "@/components/ui/button"

interface QuestionGridProps {
  questions: number[]
  currentIndex: number
  savedAnswers: Record<number, number>
  selectedAnswers: Record<number, number>
  reviewQuestions: number[]
  onNavigate: (index: number) => void
}

export default function QuestionGrid({
  questions,
  currentIndex,
  savedAnswers,
  selectedAnswers,
  reviewQuestions,
  onNavigate,
}: QuestionGridProps) {
  return (
    <div className="flex-1 mx-4 overflow-y-auto max-h-32 border border-gray-300 p-2 bg-white rounded">
      <div className="grid grid-cols-10 gap-4">
        {questions.map((index) => (
          <Button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-8 h-8 p-0 text-xs ${
              currentIndex === index
                ? "bg-blue-600 text-white"
                : savedAnswers[index] !== undefined
                  ? "bg-green-100 border border-green-500 text-black"
                  : selectedAnswers[index] !== undefined
                    ? "bg-yellow-100 border border-yellow-500 text-black"
                    : "bg-gray-100 border border-gray-300 text-black"
            } ${reviewQuestions.includes(index) ? "ring-2 ring-red-500 text-red-700" : ""}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}
