import type React from "react"
import { BookOpen, BarChart2, Clock, LineChart } from "lucide-react"
import { SectionHeading } from "@/components/landingpage/section-heading"

interface FeatureCardProps {
  icon: React.ComponentType<any>
  title: string
  description: string
  index: number
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <div 
      className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="rounded-full bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  )
}

export function FeatureSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Custom Mock Tests",
      description: "Create personalized tests based on your specific needs and areas of improvement.",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get immediate feedback on your performance to quickly identify strengths and weaknesses.",
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Monitor your progress over time with comprehensive performance metrics.",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Gain deep insights into your performance patterns with detailed analytical reports.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Features"
          description="Powerful tools designed to enhance your test preparation experience."
        />
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
