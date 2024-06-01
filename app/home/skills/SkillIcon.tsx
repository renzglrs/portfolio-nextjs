import { cn } from '@/lib/utils'
import { IconType } from 'react-icons/lib'

interface SkillIconProps {
    style?: string
    icon: React.ReactNode
}

const SkillIcon = ({ style, icon }: SkillIconProps) => {
  return (
    <span className={cn("text-5xl cursor-pointer hover:opacity-50", style)}>{icon}</span>
  )
}

export default SkillIcon