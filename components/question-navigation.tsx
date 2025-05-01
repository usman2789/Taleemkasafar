"use client"

export default function QuestionNavigation({
  totalQuestions,
  currentIndex,
  answeredQuestions,
  onNavigate,
}: {
  totalQuestions: number
  currentIndex: number
  answeredQuestions: number[]
  onNavigate: (index: number) => void
}) {
  // Create an array of question numbers
  const questionNumbers = Array.from({ length: totalQuestions }, (_, i) => i)

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-300 max-w-xs">
      <h3 className="font-semibold mb-2">Question Navigation</h3>
      <div className="grid grid-cols-5 gap-2">
        {questionNumbers.map((index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-8 h-8 text-xs rounded-md flex items-center justify-center
              ${
                currentIndex === index
                  ? "bg-blue-600 text-white"
                  : answeredQuestions.includes(index)
                    ? "bg-green-100 border border-green-500"
                    : "bg-gray-100 border border-gray-300"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
