import type { Question } from "@/types/quiz"

interface SectionProgressProps {
  questions: Question[]
  savedAnswers: Record<number, number>
}

export default function SectionProgress({ questions, savedAnswers }: SectionProgressProps) {
  const mathAnswered = Object.keys(savedAnswers).filter((key) => questions[Number(key)]?.section === 1).length

  const physicsAnswered = Object.keys(savedAnswers).filter((key) => questions[Number(key)]?.section === 2).length

  const englishAnswered = Object.keys(savedAnswers).filter((key) => questions[Number(key)]?.section === 3).length

  return (
    <div className="bg-white p-4 rounded-md border border-gray-300 mb-4">
      <h3 className="font-semibold mb-2">Section Progress</h3>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Mathematics (Section 1)</span>
            <span>{mathAnswered} / 100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(mathAnswered / 100) * 100}%` }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Physics (Section 2)</span>
            <span>{physicsAnswered} / 60</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{ width: `${(physicsAnswered / 60) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>English (Section 3)</span>
            <span>{englishAnswered} / 40</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-amber-600 h-2.5 rounded-full"
              style={{ width: `${(englishAnswered / 40) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
