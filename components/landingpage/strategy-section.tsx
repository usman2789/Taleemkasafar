"use client"

import { Lightbulb, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/landingpage/section-heading"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface StrategyCardProps {
  index: number
  title: string
  description: string
  delay: number
}

function StrategyCard({ index, title, description, delay }: StrategyCardProps) {
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

export function StrategySection() {
  const strategies = [
    {
      title: "Effective Study Techniques",
      description: "Learn proven strategies to maximize your study efficiency and improve retention.",
    },
    {
      title: "Time Management",
      description: "Master the art of managing your time effectively during exams to maximize your score.",
    },
    {
      title: "Stress Management",
      description: "Discover techniques to stay calm and focused during high-pressure exam situations.",
    },
  ]

  return (
    <section id="strategies" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Test Strategies"
          description="Expert tips and strategies to help you excel in your exams."
        />
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {strategies.map((strategy, index) => (
            <StrategyCard
              key={index}
              index={index + 1}
              title={strategy.title}
              description={strategy.description}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="group">
            Explore All Strategies
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
