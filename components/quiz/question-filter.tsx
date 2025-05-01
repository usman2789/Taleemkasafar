"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuestionFilterProps {
  filterOptions: { value: string; label: string }[]
  currentFilter: string
  onFilterChange: (filter: string) => void
}

export default function QuestionFilter({ filterOptions, currentFilter, onFilterChange }: QuestionFilterProps) {
  return (
    <div className="w-64">
      <Select value={currentFilter} onValueChange={onFilterChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter Questions" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
