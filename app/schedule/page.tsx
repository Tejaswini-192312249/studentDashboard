export const revalidate = 0

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const schedule: Record<string, { time: string; subject: string; duration: string; color: string }[]> = {
  Mon: [
    { time: "09:00", subject: "React Fundamentals", duration: "1h 30m", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
    { time: "14:00", subject: "TypeScript Mastery", duration: "1h", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
  ],
  Tue: [
    { time: "10:00", subject: "Next.js Advanced", duration: "2h", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" },
  ],
  Wed: [
    { time: "09:00", subject: "React Fundamentals", duration: "1h 30m", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
    { time: "15:00", subject: "UI/UX Design", duration: "1h", color: "bg-pink-500/10 border-pink-500/30 text-pink-400" },
  ],
  Thu: [
    { time: "10:00", subject: "TypeScript Mastery", duration: "1h", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
    { time: "13:00", subject: "Next.js Advanced", duration: "2h", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" },
  ],
  Fri: [
    { time: "09:00", subject: "UI/UX Design", duration: "1h 30m", color: "bg-pink-500/10 border-pink-500/30 text-pink-400" },
    { time: "14:00", subject: "React Fundamentals", duration: "1h", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
  ],
  Sat: [
    { time: "11:00", subject: "TypeScript Mastery", duration: "2h", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
  ],
  Sun: [],
}

export default function SchedulePage() {
  return (
    <div className="w-full max-w-[1200px]">
      <header className="mb-8">
        <span className="text-accent-end text-xs font-bold uppercase tracking-widest">Planner</span>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mt-0.5">Weekly Schedule</h1>
        <p className="text-text-muted text-sm mt-1">Your study plan for the week</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
        {days.map((day) => {
          const sessions = schedule[day]
          const isToday = day === new Date().toLocaleDateString("en-US", { weekday: "short" }).slice(0, 3)

          return (
            <div
              key={day}
              className={`bg-tile-bg border rounded-2xl p-4 flex flex-col gap-3 min-h-[180px] ${
                isToday ? "border-accent-start" : "border-border-default"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold ${isToday ? "text-accent-end" : "text-text-primary"}`}>
                  {day}
                </span>
                {isToday && (
                  <span className="text-[10px] bg-accent-start/20 text-accent-end font-semibold px-2 py-0.5 rounded-full">
                    Today
                  </span>
                )}
              </div>

              {sessions.length === 0 ? (
                <p className="text-text-muted text-xs mt-2">Rest day</p>
              ) : (
                sessions.map((s, i) => (
                  <div
                    key={i}
                    className={`border rounded-xl p-3 space-y-1 ${s.color}`}
                  >
                    <p className="text-[10px] font-semibold opacity-70">{s.time} · {s.duration}</p>
                    <p className="text-xs font-bold leading-tight">{s.subject}</p>
                  </div>
                ))
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
