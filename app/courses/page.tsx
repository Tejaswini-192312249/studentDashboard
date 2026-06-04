import { supabase } from "@/lib/supabase"
import { iconMap } from "@/utils/iconMap"
import ProgressBar from "@/components/ProgressBar"
import { Course } from "@/lib/types"

export const revalidate = 0

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase.from("courses").select("*").order("created_at")
  if (error) return []
  return data || []
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="w-full max-w-[1200px]">
      <header className="mb-8">
        <span className="text-accent-end text-xs font-bold uppercase tracking-widest">Library</span>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mt-0.5">My Courses</h1>
        <p className="text-text-muted text-sm mt-1">{courses.length} courses enrolled</p>
      </header>

      {courses.length === 0 ? (
        <div className="bg-tile-bg border border-border-default rounded-2xl p-8 text-center text-text-muted text-sm">
          No courses found. Add some in your Supabase dashboard.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => {
            const Icon = iconMap[course.icon_name] || iconMap.code
            return (
              <div
                key={course.id}
                className="bg-tile-bg border border-border-default rounded-2xl p-6 flex flex-col gap-4 hover:border-accent-start transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1e1e2a] text-accent-end">
                    <Icon size={20} />
                  </div>
                  <h2 className="font-semibold text-text-primary text-base line-clamp-1">{course.title}</h2>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted">Progress</span>
                    <span className="text-text-primary font-bold">{course.progress}%</span>
                  </div>
                  <ProgressBar value={course.progress} />
                </div>
                <div className="text-xs text-text-muted">
                  {course.progress === 100 ? (
                    <span className="text-emerald-400 font-semibold">Completed</span>
                  ) : course.progress > 0 ? (
                    <span>In progress</span>
                  ) : (
                    <span>Not started</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
