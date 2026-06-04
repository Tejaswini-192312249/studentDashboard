export const revalidate = 0

const projects = [
  {
    name: "Student Learning Dashboard",
    description: "A full-stack dark-mode dashboard built with Next.js 16, Supabase, Tailwind CSS v4, and Framer Motion. Features real-time course tracking, bento grid layout, and animated progress bars.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion", "TypeScript"],
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    link: "https://student-dashboard-murex-ten.vercel.app",
  },
  {
    name: "Portfolio Website",
    description: "Personal developer portfolio showcasing projects, skills, and experience. Built with modern web technologies and optimised for performance.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    statusColor: "text-accent-end bg-accent-end/10 border-accent-end/20",
    link: null,
  },
  {
    name: "E-Commerce API",
    description: "RESTful backend API for an e-commerce platform with authentication, product management, cart, and order processing.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    status: "Completed",
    statusColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    link: null,
  },
  {
    name: "Chat Application",
    description: "Real-time chat app with rooms, direct messages, and file sharing. Uses WebSockets for instant message delivery.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB"],
    status: "Completed",
    statusColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    link: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-[1200px]">
      <header className="mb-8">
        <span className="text-accent-end text-xs font-bold uppercase tracking-widest">Portfolio</span>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mt-0.5">Projects</h1>
        <p className="text-text-muted text-sm mt-1">
          Built by <span className="text-text-primary font-semibold">Tejaswini Pagadala</span> — {projects.length} projects
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-tile-bg border border-border-default rounded-2xl p-6 flex flex-col gap-4 hover:border-accent-start transition-colors duration-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-bold text-text-primary text-base leading-snug">{project.name}</h2>
              <span className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${project.statusColor}`}>
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium bg-[#1e1e2a] text-text-muted border border-border-default px-2.5 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-accent-end hover:underline"
              >
                View Live →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
