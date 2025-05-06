// Main Site Header Component with Navigation
"use client" // Marks this as a client-side component

// Import necessary dependencies
import type React from "react"
import Link from "next/link"
import { useEffect, useState } from "react" // React hooks for state and side effects
import { BookOpen } from "lucide-react" // Icon component
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion" // Animation library
import { SignInButton, useAuth } from "@clerk/nextjs" // Authentication hooks and components

export function SiteHeader() {
  // useState Hook:
  // - Creates a state variable 'mounted' and its setter function 'setMounted'
  // - Initial value is false
  // - Used to handle client-side hydration
  const [mounted, setMounted] = useState(false)

  // useAuth Hook:
  // - Provided by Clerk for authentication
  // - Destructures isSignedIn from the auth state
  // - Tracks whether a user is authenticated
  const { isSignedIn } = useAuth();

  // useEffect Hook:
  // - Runs side effects in functional components
  // - Empty dependency array [] means it only runs once after initial render
  // - Sets mounted to true when component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Navigation configuration
  // Array of objects defining the navigation menu structure
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#platform", label: "Platform" },
    { href: "#features", label: "Features" },
    { href: "#strategies", label: "Strategies" },
    { href: "#feedback", label: "Feedback" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand Name */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <BookOpen className="h-7 w-7" />
          <span className="text-xl font-bold tracking-tight">Taleem Ka Safar</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Authentication Button Section */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href={isSignedIn ? "/lms" : "/sign-in"}>
              <Button variant="outline" size="sm">
                {isSignedIn ? "LMS" : "Sign In"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
