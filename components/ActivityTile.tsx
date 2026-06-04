"use client"

export default function ActivityTile() {
  // 12 columns x 8 rows = 96 activity data points
  const activityLevels = [
    1, 0, 2, 0, 1, 0, 0, 0,
    0, 3, 1, 0, 0, 2, 1, 0,
    0, 0, 4, 1, 0, 1, 0, 3,
    2, 0, 1, 0, 3, 0, 2, 0,
    0, 1, 0, 4, 2, 1, 0, 0,
    1, 2, 0, 0, 0, 3, 1, 0,
    0, 0, 2, 1, 0, 0, 4, 2,
    3, 1, 0, 2, 0, 1, 0, 0,
    0, 0, 1, 3, 2, 0, 1, 0,
    2, 4, 0, 0, 1, 0, 3, 1,
    0, 1, 3, 0, 0, 2, 0, 0,
    1, 0, 0, 4, 1, 2, 0, 3
  ]

  const totalSessions = 148
  const weeklyAverage = 12.3

  const colorMap: Record<number, string> = {
    0: "bg-[#1e1e2a]",
    1: "bg-[#2d2350]",
    2: "bg-[#4c337a]",
    3: "bg-[#7c6cf0]",
    4: "bg-[#a78bfa]"
  }

  return (
    <article className="relative overflow-hidden bg-tile-bg border border-border-default rounded-2xl p-6 flex flex-col justify-between min-h-[260px] w-full col-span-1 md:col-span-2">
      {/* Background subtle mesh glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.03),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 space-y-1">
        <h3 className="text-sm font-semibold text-text-primary">Study Activity</h3>
        <p className="text-xs text-text-muted font-medium">Weekly coding contribution graph</p>
      </div>

      {/* Contribution Grid */}
      <div className="relative z-10 my-4 flex justify-start md:justify-center overflow-x-auto pb-1">
        <div className="grid grid-flow-col grid-rows-8 gap-[5px] shrink-0">
          {activityLevels.map((level, i) => (
            <div
              key={i}
              className={`w-3.5 h-3.5 rounded-[2px] transition-all duration-300 hover:scale-110 cursor-pointer ${colorMap[level]}`}
              title={`Activity level: ${level}`}
            />
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="relative z-10 flex items-center justify-between border-t border-border-default pt-4 text-xs gap-4 flex-wrap">
        <div className="flex gap-6">
          <div>
            <span className="text-text-muted block text-[10px] font-medium">TOTAL TIME</span>
            <span className="text-sm font-bold text-text-primary">{totalSessions} hrs</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] font-medium">WEEKLY AVG</span>
            <span className="text-sm font-bold text-text-primary">{weeklyAverage} hrs</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 select-none">
          <span className="text-text-muted text-[10px] font-medium">Less</span>
          <div className="w-2.5 h-2.5 rounded-[1px] bg-[#1e1e2a]" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-[#2d2350]" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-[#4c337a]" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-[#7c6cf0]" />
          <div className="w-2.5 h-2.5 rounded-[1px] bg-[#a78bfa]" />
          <span className="text-text-muted text-[10px] font-medium">More</span>
        </div>
      </div>
    </article>
  )
}
