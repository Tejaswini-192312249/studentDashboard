"use client"

import { motion } from "framer-motion"

export default function SkeletonTile() {
  return (
    <motion.div
      className="bg-tile-bg border border-border-default rounded-xl p-5 flex flex-col justify-between h-[140px] w-full"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center gap-4">
        {/* Mock Icon */}
        <div className="w-10 h-10 rounded-lg bg-border-default shrink-0" />
        {/* Mock Title */}
        <div className="w-2/3 h-4 bg-border-default rounded-md" />
      </div>
      <div className="w-full space-y-2 mt-4">
        {/* Mock Progress Text */}
        <div className="flex justify-between w-full">
          <div className="w-12 h-3 bg-border-default rounded-sm" />
          <div className="w-8 h-3 bg-border-default rounded-sm" />
        </div>
        {/* Mock Progress Bar */}
        <div className="w-full h-1 bg-border-default rounded-[2px]" />
      </div>
    </motion.div>
  )
}
