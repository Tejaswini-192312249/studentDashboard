"use client"

export default function HeroTile() {
  const totalDays = 14
  const streak = 8

  return (
    <article className="relative overflow-hidden bg-tile-bg border border-border-default rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[190px] w-full col-span-1 md:col-span-2">
      {/* Background subtle radial gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,108,240,0.06),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
          Good morning, Tejaswini Pagadala 👋
        </h2>
        <p className="text-xs md:text-sm text-text-muted">
          Ready to level up your engineering skills today?
        </p>
      </div>

      <div className="relative z-10 mt-6 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-muted font-medium">Daily Streak Track</span>
          <span className="text-accent-end font-bold">{streak} Days Active</span>
        </div>

        <div className="flex justify-between items-center gap-1.5 md:gap-2">
          {Array.from({ length: totalDays }).map((_, i) => {
            const isCompleted = i < streak - 1
            const isToday = i === streak - 1
            const isFuture = i > streak - 1

            return (
              <div
                key={i}
                id={`streak-day-${i + 1}`}
                className={`w-full aspect-square max-w-[32px] rounded-md flex items-center justify-center text-[10px] md:text-xs font-bold transition-all duration-300
                  ${isCompleted ? "bg-gradient-to-br from-accent-start to-accent-end text-text-primary" : ""}
                  ${isToday ? "bg-gradient-to-br from-accent-start to-accent-end text-text-primary shadow-[0_0_12px_rgba(124,108,240,0.6)] ring-2 ring-accent-end/40" : ""}
                  ${isFuture ? "bg-[#1e1e2a] text-text-muted" : ""}
                `}
              >
                {i + 1}
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
