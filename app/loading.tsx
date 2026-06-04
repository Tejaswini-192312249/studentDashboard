import SkeletonTile from "@/components/SkeletonTile"

export default function Loading() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header placeholder */}
      <header className="w-full text-left mb-6 max-w-[1200px] px-2 animate-pulse">
        <div className="w-20 h-3 bg-border-default rounded-sm mb-1.5" />
        <div className="w-48 h-8 bg-border-default rounded-md" />
      </header>

      {/* Grid placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-3 w-full max-w-[1200px]">
        {/* HeroTile Placeholder */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[190px] bg-tile-bg border border-border-default rounded-2xl animate-pulse" />
        
        {/* CourseTile Placeholders */}
        <SkeletonTile />
        <SkeletonTile />

        {/* ActivityTile Placeholder */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[260px] bg-tile-bg border border-border-default rounded-2xl animate-pulse" />

        <SkeletonTile />
        <SkeletonTile />
      </div>
    </div>
  )
}
