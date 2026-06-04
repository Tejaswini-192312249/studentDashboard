import { Suspense } from "react"
import BentoGrid from "@/components/BentoGrid"
import SkeletonTile from "@/components/SkeletonTile"
import { supabase } from "@/lib/supabase"

export const revalidate = 0

async function CoursesDashboard() {
  try {
    const { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at")

    if (error) {
      console.error("Supabase query error:", error)
      return <BentoGrid courses={[]} />
    }

    return <BentoGrid courses={courses || []} />
  } catch (err) {
    console.error("Fetch failed:", err)
    return <BentoGrid courses={[]} />
  }
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-3 w-full max-w-[1200px]">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[190px] bg-tile-bg border border-border-default rounded-2xl animate-pulse" />
      <SkeletonTile />
      <SkeletonTile />
      <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[260px] bg-tile-bg border border-border-default rounded-2xl animate-pulse" />
      <SkeletonTile />
      <SkeletonTile />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header section */}
      <header className="w-full text-left mb-6 max-w-[1200px] px-2">
        <span className="text-accent-end text-xs font-bold uppercase tracking-widest">Workspace</span>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mt-0.5">
          Learning Dashboard
        </h1>
      </header>

      {/* Grid wrapper */}
      <Suspense fallback={<SkeletonGrid />}>
        <CoursesDashboard />
      </Suspense>
    </div>
  )
}
