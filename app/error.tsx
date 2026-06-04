"use client"

import { useEffect } from "react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Dashboard error caught by boundary:", error)
  }, [error])

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <div className="bg-tile-bg border border-border-default rounded-2xl p-8 max-w-md w-full shadow-lg space-y-6">
        {/* Error icon graphic */}
        <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-text-primary">Something went wrong</h2>
          <p className="text-sm text-text-muted">
            We encountered an error loading your dashboard. Please verify your connection details and try again.
          </p>
        </div>

        <button
          onClick={reset}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-white font-bold hover:shadow-[0_0_15px_rgba(124,108,240,0.4)] transition-all duration-200 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
