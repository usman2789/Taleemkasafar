import { SiteHeader } from "@/components/landingpage/site-header"
import { SiteFooter } from "@/components/landingpage/site-footer"
import { HeroSection } from "@/components/landingpage/hero-section"
import { FeatureSection } from "@/components/landingpage/feature-section"
import { StrategySection } from "@/components/landingpage/strategy-section"
import { FeedbackForm } from "@/components/landingpage/feedback-form"
import { PlatformSection } from "@/components/landingpage/platform-section"

// This enables Static Site Generation
export const dynamic = "force-static"

// You can also use revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600 // revalidate every hour

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Platform Section */}
        <PlatformSection />

        {/* Features Section */}
        <FeatureSection />

        {/* Strategies Section */}
        <StrategySection />

        {/* Feedback Section */}
        <section id="feedback" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto w-full max-w-md space-y-4 py-12">
              <FeedbackForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
