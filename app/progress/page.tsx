import { supabase } from "@/lib/supabase"
import { Course } from "@/lib/types"
import ProgressBar from "@/components/ProgressBar"

export const revalidate = 0

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase.from("courses").select("*").order("created_at")
  if (error) return []
  return data || []
}

export default async function ProgressPage() {
  const courses = await getCourses()

  const total = courses.length
  const completed = courses.filter((c) => c.progress === 100).length
  const inProgress = courses.filter((c) => c.progress > 0 && c.progress < 100).length
  const avgProgress = total > 0 ? Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / total) : 0

  const stats = [
    { label: "Total Courses", value: total, color: "text-text-primary" },
    { label: "Completed", value: completed, color: "text-emerald-400" },
    { label: "In Progress", value: inProgress, color: "text-accent-end" },
    { label: "Avg Progress", value: `${avgProgress}%`, color: "text-sky-400" },
  ]

  return (
    <div className="w-full max-w-[1200px]">
      <header className="mb-8">
        <span className="text-accent-end text-xs font-bold uppercase tracking-widest">Analytics</span>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mt-0.5">Progress</h1>
        <p className="text-text-muted text-sm mt-1">Your overall learning stats</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-tile-bg border border-border-default rounded-2xl p-5">
            <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-1">{stat.label}</p>
            <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Per-course breakdown */}
      <div className="bg-tile-bg border border-border-default rounded-2xl p-6">
        <h2 className="text-sm font-semibold text-text-primary mb-5">Course Breakdown</h2>
        {courses.length === 0 ? (
          <p className="text-text-muted text-sm text-center py-4">No courses found.</p>
        ) : (
          <div className="space-y-5">
            {courses.map((course) => (
              <div key={course.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="text-text-primary font-medium">{course.title}</span>
                  <span className="text-text-muted text-xs font-bold">{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
