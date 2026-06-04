"use client"

import { Course } from "@/lib/types"
import { iconMap } from "@/utils/iconMap"
import ProgressBar from "./ProgressBar"
import { motion } from "framer-motion"

interface CourseTileProps {
  course: Course
}

const courseAccents: Record<string, { bgGlow: string; barGradient: string; iconColor: string }> = {
  code: {
    bgGlow: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.04), transparent 70%)",
    barGradient: "from-sky-500 to-indigo-500",
    iconColor: "text-sky-400"
  },
  coffee: {
    bgGlow: "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.04), transparent 70%)",
    barGradient: "from-orange-500 to-amber-600",
    iconColor: "text-orange-400"
  },
  cpu: {
    bgGlow: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.04), transparent 70%)",
    barGradient: "from-emerald-500 to-teal-600",
    iconColor: "text-emerald-400"
  },
  brain: {
    bgGlow: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.04), transparent 70%)",
    barGradient: "from-pink-500 to-rose-600",
    iconColor: "text-pink-400"
  }
}

export default function CourseTile({ course }: CourseTileProps) {
  const accent = courseAccents[course.icon_name] || {
    bgGlow: "radial-gradient(circle at 50% 50%, rgba(124, 108, 240, 0.04), transparent 70%)",
    barGradient: "from-accent-start to-accent-end",
    iconColor: "text-accent-end"
  }

  const Icon = iconMap[course.icon_name] || iconMap.code

  return (
    <motion.article
      className="relative overflow-hidden bg-tile-bg border border-border-default rounded-xl p-5 flex flex-col justify-between h-[140px] w-full cursor-pointer"
      whileHover={{ scale: 1.02, borderColor: "#7c6cf0" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Radial gradient background using accent color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: accent.bgGlow }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon Container */}
        <div className={`p-2.5 rounded-lg bg-[#1e1e2a] ${accent.iconColor} flex items-center justify-center shrink-0`}>
          <Icon size={20} />
        </div>
        {/* Title */}
        <h3 className="font-semibold text-text-primary text-sm md:text-base line-clamp-1">
          {course.title}
        </h3>
      </div>

      <div className="relative z-10 w-full space-y-2 mt-2">
        <div className="flex justify-between items-baseline text-xs">
          <span className="text-text-muted font-medium">Progress</span>
          <span className="text-text-primary font-bold">{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} color={accent.barGradient} />
      </div>
    </motion.article>
  )
}
