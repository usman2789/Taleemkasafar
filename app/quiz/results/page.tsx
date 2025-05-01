"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface QuizResults {
  total: number
  math: number
  physics: number
  english: number
}

export default function ResultsPage() {
  const [results, setResults] = useState<QuizResults | null>(null)

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults")
    if (storedResults) {
      setResults(JSON.parse(storedResults))
    }
  }, [])

  if (!results) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Results Found</h1>
          <p className="mb-4">You haven't completed any quiz yet.</p>
          <Link href="/quiz">
            <Button>Start Quiz</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Quiz Results</CardTitle>
          <CardDescription>Your performance in the NUST Entry Test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-2">Total Score</h3>
                <div className="text-3xl font-bold text-blue-600">{results.total} / 200</div>
                <div className="text-sm text-gray-500 mt-1">{((results.total / 200) * 100).toFixed(2)}%</div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg mb-2">Mathematics</h3>
                <div className="text-3xl font-bold text-green-600">{results.math} / 100</div>
                <div className="text-sm text-gray-500 mt-1">{((results.math / 100) * 100).toFixed(2)}%</div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-lg mb-2">Physics</h3>
                <div className="text-3xl font-bold text-purple-600">{results.physics} / 60</div>
                <div className="text-sm text-gray-500 mt-1">{((results.physics / 60) * 100).toFixed(2)}%</div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-lg mb-2">English</h3>
                <div className="text-3xl font-bold text-amber-600">{results.english} / 40</div>
                <div className="text-sm text-gray-500 mt-1">{((results.english / 40) * 100).toFixed(2)}%</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Performance Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Mathematics</span>
                  <div className="w-64 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${(results.math / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Physics</span>
                  <div className="w-64 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${(results.physics / 60) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <div className="w-64 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-amber-600 h-2.5 rounded-full"
                      style={{ width: `${(results.english / 40) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
