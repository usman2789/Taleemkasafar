import Link from "next/link"
import { SectionHeading } from "@/components/landingpage/section-heading"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function PlatformSection() {
  return (
    <section id="platform" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-pattern opacity-10"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Platform"
          description="Taleem Ka Safar is Pakistan's first free entry test preparation platform, designed to make quality education accessible to all."
        />
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-blue-500/20 p-1 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 relative z-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">Continuous Learning</h3>
                      <p className="text-sm text-muted-foreground">Adaptive learning paths</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="h-6 w-6 bg-blue-500/60 rounded-md animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">Personalized Experience</h3>
                      <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="h-6 w-6 bg-purple-500/60 rounded-full animate-bounce"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">Interactive Learning</h3>
                      <p className="text-sm text-muted-foreground">Engage with content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              We believe that every student deserves access to high-quality test preparation resources regardless of
              their financial background. Our platform provides comprehensive test preparation materials, practice
              tests, and performance analytics to help students achieve their academic goals.
            </p>
            <p className="text-muted-foreground">
              Whether you're preparing for entry tests, board exams, or competitive assessments, Taleem Ka Safar is your
              companion throughout your educational journey.
            </p>

            <div className="pt-4">
              <Link href="/lms">
                <Button className="group">
                  Start Learning
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
