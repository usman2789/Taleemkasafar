"use client"

import type { Question } from "@/types/quiz"

interface QuestionDisplayProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  selectedAnswer?: number
  isSaved: boolean
  onAnswerSelect: (index: number) => void
}

export default function QuestionDisplay({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  isSaved,
  onAnswerSelect,
}: QuestionDisplayProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-md mb-4">
      <div className="bg-blue-100 p-2 flex justify-between items-center border-b border-gray-300">
        <div>
          Q. No: {currentIndex + 1} of {totalQuestions} |  {question.subject}
        </div>
        <div className="flex items-center">
          <span className="mr-2">
            {isSaved ? (
              <span className="text-green-600 font-semibold">Saved</span>
            ) : selectedAnswer !== undefined ? (
              <span className="text-yellow-600 font-semibold">Not Saved</span>
            ) : (
              <span className="text-gray-600">Not Attempt</span>
            )}
          </span>
          {/* <span>Marks: 1</span> */}
        </div>
      </div>

      <div className="p-4 min-h-[125px] max-h-[220px] border-b border-gray-300 overflow-y-auto">
        <h5 className="text-lg font-mono">{question.question}</h5>
      </div>

      <div className="bg-blue-100 p-1 border-b border-gray-300">Answer ( Please select your correct option )</div>

      <div className="p-2 max-h-[200px] overflow-y-auto">
        {question.options.map((option, index) => (
          <div key={index} className="mb-2 border border-gray-300 p-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="answer"
                checked={selectedAnswer === index}
                onChange={() => onAnswerSelect(index)}
                className="form-radio"
              />
              <span className="font-mono">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
