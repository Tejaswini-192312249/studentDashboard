"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Calendar,
  Settings,
  FolderKanban,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "Projects", icon: FolderKanban, href: "/projects" },
  { name: "Progress", icon: BarChart3, href: "/progress" },
  { name: "Schedule", icon: Calendar, href: "/schedule" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  return (
    <nav>
      {/* Mobile Bottom Navigation Bar (< 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-tile-bg border-t border-border-default flex justify-around items-center z-50 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              id={`nav-mobile-${item.name.toLowerCase()}`}
              className="relative flex flex-col items-center justify-center flex-1 h-full py-1 text-[10px] font-medium"
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavMobile"
                  className="absolute inset-x-2 top-0 h-0.5 bg-gradient-to-r from-accent-start to-accent-end"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={`transition-colors duration-200 ${
                  isActive ? "text-accent-end" : "text-text-muted"
                }`}
              />
              <span
                className={`mt-1 font-medium transition-colors duration-200 ${
                  isActive ? "text-text-primary font-semibold" : "text-text-muted"
                }`}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Desktop/Tablet Sidebar (>= 768px) */}
      <div
        className={`hidden md:flex flex-col fixed left-0 top-0 bottom-0 bg-tile-bg border-r border-border-default z-50 transition-all duration-300 ease-in-out
          ${isExpanded ? "w-[180px]" : "w-14"}
          lg:${isExpanded ? "w-[180px]" : "w-14"}
        `}
      >
        {/* Logo area */}
        <Link href="/profile" className="h-16 flex items-center px-4 border-b border-border-default overflow-hidden shrink-0 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-white">T</span>
          </div>
          {isExpanded && (
            <span className="ml-3 font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent text-sm whitespace-nowrap">
              Tejaswini
            </span>
          )}
        </Link>

        {/* Navigation links */}
        <div className="flex-1 py-6 px-2 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                id={`nav-desktop-${item.name.toLowerCase()}`}
                className={`relative w-full flex items-center p-2.5 rounded-lg text-sm font-medium transition-colors duration-200 group outline-none
                  ${isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary"}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#1e1e2a] border-l-2 border-accent-start rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center shrink-0">
                  <Icon
                    size={20}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-accent-end" : "text-text-muted group-hover:text-text-primary"
                    }`}
                  />
                </span>
                <span
                  className={`relative z-10 ml-3 transition-opacity duration-300 whitespace-nowrap
                    ${isExpanded ? "opacity-100 block" : "opacity-0 hidden"}
                  `}
                >
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Toggle Button at Bottom (Only visible on Desktop >= 1024px) */}
        <div className="hidden lg:block p-2 border-t border-border-default shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-[#1e1e2a] transition-all duration-200"
            title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
