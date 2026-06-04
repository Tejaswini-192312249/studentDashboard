export const revalidate = 0

const logs = [
  { type: "session", label: "Studied React Fundamentals", detail: "Completed 2 modules · 1h 20m", time: "Today, 09:15 AM", dot: "bg-accent-end" },
  { type: "progress", label: "Progress updated — TypeScript Mastery", detail: "40% → 55% complete", time: "Today, 08:00 AM", dot: "bg-sky-400" },
  { type: "session", label: "Studied Next.js Advanced", detail: "Completed 1 module · 45m", time: "Yesterday, 10:30 AM", dot: "bg-accent-end" },
  { type: "achievement", label: "Streak milestone reached", detail: "8 days active in a row 🔥", time: "Yesterday, 12:00 AM", dot: "bg-amber-400" },
  { type: "progress", label: "Progress updated — React Fundamentals", detail: "50% → 65% complete", time: "2 days ago, 11:00 AM", dot: "bg-sky-400" },
  { type: "session", label: "Studied UI/UX Design", detail: "Completed 3 modules · 2h", time: "2 days ago, 09:00 AM", dot: "bg-accent-end" },
  { type: "course", label: "Enrolled in Next.js Advanced", detail: "New course added to dashboard", time: "3 days ago, 03:00 PM", dot: "bg-emerald-400" },
  { type: "session", label: "Studied TypeScript Mastery", detail: "Completed 2 modules · 1h 10m", time: "3 days ago, 10:00 AM", dot: "bg-accent-end" },
  { type: "progress", label: "Progress updated — UI/UX Design", detail: "60% → 80% complete", time: "4 days ago, 02:00 PM", dot: "bg-sky-400" },
  { type: "achievement", label: "5-day streak achieved", detail: "Consistency is key 💪", time: "4 days ago, 12:00 AM", dot: "bg-amber-400" },
  { type: "session", label: "Studied React Fundamentals", detail: "Completed 1 module · 50m", time: "5 days ago, 09:30 AM", dot: "bg-accent-end" },
  { type: "course", label: "Enrolled in UI/UX Design", detail: "New course added to dashboard", time: "6 days ago, 11:00 AM", dot: "bg-emerald-400" },
]

const stats = [
  { label: "Total Study Hours", value: "148 hrs" },
  { label: "Current Streak", value: "8 days" },
  { label: "Courses Enrolled", value: "4" },
  { label: "Avg Daily Study", value: "2.3 hrs" },
]

export default function ProfilePage() {
  return (
    <div className="w-full max-w-[800px]">
      {/* Profile Card */}
      <div className="bg-tile-bg border border-border-default rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center shrink-0">
          <span className="text-3xl font-extrabold text-white">T</span>
        </div>
        <div className="flex-1 text-center md:text-left space-y-1">
          <h1 className="text-2xl font-extrabold text-text-primary">Tejaswini Pagadala</h1>
          <p className="text-sm text-text-muted">@tejaswini_pagadala</p>
          <p className="text-sm text-text-muted">jayasimhaaeturi@gmail.com</p>
          <p className="text-xs text-accent-end font-semibold mt-2">Student · Full-Stack Developer</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-tile-bg border border-border-default rounded-2xl p-4 text-center">
            <p className="text-xl font-extrabold text-text-primary">{s.value}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Activity Logs */}
      <div className="bg-tile-bg border border-border-default rounded-2xl p-6">
        <h2 className="text-sm font-semibold text-text-primary mb-5 border-b border-border-default pb-3">
          Activity Logs
        </h2>
        <div className="relative space-y-0">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-4 pb-5 last:pb-0">
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${log.dot}`} />
                {i < logs.length - 1 && (
                  <div className="w-px flex-1 bg-border-default mt-1" />
                )}
              </div>
              {/* Content */}
              <div className="flex-1 space-y-0.5 min-w-0">
                <p className="text-sm font-semibold text-text-primary">{log.label}</p>
                <p className="text-xs text-text-muted">{log.detail}</p>
                <p className="text-[11px] text-text-muted/60 mt-1">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
