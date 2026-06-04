"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

interface ProgressBarProps {
  value: number
  color?: string
}

export default function ProgressBar({ value, color }: ProgressBarProps) {
  const widthVal = useMotionValue(0)

  useEffect(() => {
    const controls = animate(widthVal, value, {
      duration: 1,
      ease: "easeOut",
    })
    return () => controls.stop()
  }, [value, widthVal])

  const widthPercent = useTransform(widthVal, (v) => `${v}%`)

  return (
    <div className="w-full bg-[#1e1e2a] h-1 rounded-[2px] overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color || "from-accent-start to-accent-end"} rounded-[2px]`}
        style={{ width: widthPercent }}
      />
    </div>
  )
}
