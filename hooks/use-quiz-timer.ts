"use client"

import { useState, useEffect } from "react"

export default function useQuizTimer(initialTime: number, onTimeExpired: () => void) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onTimeExpired()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, onTimeExpired])

  const pauseTimer = () => setIsActive(false)
  const resumeTimer = () => setIsActive(true)
  const resetTimer = (newTime?: number) => setTimeRemaining(newTime || initialTime)

  return {
    timeRemaining,
    isActive,
    pauseTimer,
    resumeTimer,
    resetTimer,
  }
}
