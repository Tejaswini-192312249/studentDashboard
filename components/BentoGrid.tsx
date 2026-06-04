"use client"

import { motion, Variants } from "framer-motion"
import HeroTile from "./HeroTile"
import CourseTile from "./CourseTile"
import ActivityTile from "./ActivityTile"
import { Course } from "@/lib/types"

interface BentoGridProps {
  courses: Course[]
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export default function BentoGrid({ courses }: BentoGridProps) {
  if (!courses || courses.length === 0) {
    return (
      <div className="bg-tile-bg border border-border-default rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px] w-full">
        <p className="text-text-muted text-sm font-medium">No courses available. Check your database connection.</p>
      </div>
    )
  }

  const course1 = courses[0]
  const course2 = courses[1]
  const course3 = courses[2]
  const course4 = courses[3]

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-3 w-full max-w-[1200px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Row 1, Col 1 (2fr) */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-1">
        <HeroTile />
      </motion.div>

      {/* Row 1, Col 2 (1fr) */}
      <motion.div variants={item} className="col-span-1">
        {course1 && <CourseTile course={course1} />}
      </motion.div>

      {/* Row 1, Col 3 (1fr) */}
      <motion.div variants={item} className="col-span-1">
        {course2 && <CourseTile course={course2} />}
      </motion.div>

      {/* Row 2, Col 1 (2fr) */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-1">
        <ActivityTile />
      </motion.div>

      {/* Row 2, Col 2 (1fr) */}
      <motion.div variants={item} className="col-span-1">
        {course3 && <CourseTile course={course3} />}
      </motion.div>

      {/* Row 2, Col 3 (1fr) */}
      <motion.div variants={item} className="col-span-1">
        {course4 && <CourseTile course={course4} />}
      </motion.div>

      {/* Append any extra courses dynamically */}
      {courses.slice(4).map((c, i) => (
        <motion.div key={c.id || i} variants={item} className="col-span-1">
          <CourseTile course={c} />
        </motion.div>
      ))}
    </motion.div>
  )
}
