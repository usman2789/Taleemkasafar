"use client"

import { useEffect, useState } from "react"

export default function FlipClock({ seconds }: { seconds: number }) {
  const [hours, setHours] = useState(Math.floor(seconds / 3600))
  const [minutes, setMinutes] = useState(Math.floor((seconds % 3600) / 60))
  const [secs, setSecs] = useState(seconds % 60)

  const [hourFlip, setHourFlip] = useState(false)
  const [minuteFlip, setMinuteFlip] = useState(false)
  const [secondFlip, setSecondFlip] = useState(false)

  useEffect(() => {
    setHours(Math.floor(seconds / 3600))
    setMinutes(Math.floor((seconds % 3600) / 60))
    setSecs(seconds % 60)

    // Trigger flip animation
    setSecondFlip(true)
    if (seconds % 60 === 0) setMinuteFlip(true)
    if (seconds % 3600 === 0) setHourFlip(true)

    const timeout = setTimeout(() => {
      setSecondFlip(false)
      setMinuteFlip(false)
      setHourFlip(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [seconds])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="flex flex-col items-center">
        <div className={`bg-gray-800 text-white px-2 py-1 rounded-md ${hourFlip ? "animate-flip" : ""}`}>
          {formatNumber(hours)}
        </div>
        <div className="text-xs text-gray-600">Hours</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className={`bg-gray-800 text-white px-2 py-1 rounded-md ${minuteFlip ? "animate-flip" : ""}`}>
          {formatNumber(minutes)}
        </div>
        <div className="text-xs text-gray-600">Minutes</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className={`bg-gray-800 text-white px-2 py-1 rounded-md ${secondFlip ? "animate-flip" : ""}`}>
          {formatNumber(secs)}
        </div>
        <div className="text-xs text-gray-600">Seconds</div>
      </div>
    </div>
  )
}
