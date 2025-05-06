import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4 text-center", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
