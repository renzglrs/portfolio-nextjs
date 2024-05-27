import { cn } from '@/lib/utils'
import { IconType } from 'react-icons/lib'

interface SkillIconProps {
    color?: string
    icon: React.ReactNode
}

const SkillIcon = ({ color, icon }: SkillIconProps) => {
  return (
    <span className={cn("text-5xl cursor-pointer", color)}>{icon}</span>
  )
}

export default SkillIcon