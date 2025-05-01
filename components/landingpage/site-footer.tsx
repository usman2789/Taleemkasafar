"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold text-lg">Taleem Ka Safar</span>
        </motion.div>

        <motion.p
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Taleem Ka Safar. All rights reserved.
        </motion.p>

        <motion.nav
          className="flex gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="#feedback" className="text-sm text-muted-foreground hover:underline">
            Feedback
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
        </motion.nav>
      </div>
    </footer>
  )
}
