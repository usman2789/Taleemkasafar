"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

interface StrategyCardProps {
  index: number
  title: string
  description: string
  delay?: number
}

export function StrategyCard({ index, title, description, delay = 0 }: StrategyCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={`/placeholder.svg?height=200&width=300&text=Strategy ${index}`}
          width={300}
          height={200}
          alt={`Strategy ${index}`}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Test Preparation</span>
        </div>
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <Button variant="link" className="mt-4 p-0 group">
          Read More
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  )
}
