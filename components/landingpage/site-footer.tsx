import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold text-lg">Taleem Ka Safar</span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Taleem Ka Safar. All rights reserved.
        </p>

        <nav className="flex gap-6">
          <Link href="#feedback" className="text-sm text-muted-foreground hover:underline">
            Feedback
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
