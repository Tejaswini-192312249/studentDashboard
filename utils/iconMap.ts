import { Code, Coffee, Cpu, Brain } from 'lucide-react'

export const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  coffee: Coffee,
  cpu: Cpu,
  brain: Brain,
}
