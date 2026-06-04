import type { Metadata } from "next"
import "./globals.css"
import Sidebar from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Student Learning Dashboard",
  description: "A premium dark-mode Next.js student dashboard integrated with Supabase and animated with Framer Motion.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-page-bg text-text-primary">
        <Sidebar />
        <main className="min-h-screen pb-20 md:pb-8 md:pl-14 transition-all duration-300">
          <section className="max-w-[1200px] mx-auto p-4 md:p-8 lg:p-12 w-full flex flex-col items-center">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
