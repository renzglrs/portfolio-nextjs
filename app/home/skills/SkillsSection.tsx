import React from 'react'
import { SkillIconList } from './SkillIconList';
import SkillIcon from './SkillIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"


const SkillsSection = () => {
  return (
    <section id="section" className="pt-10">

        <h2 className="text-2xl font-medium pb-4">Skills</h2>

        <div className="grid grid-cols-6 gap-4 2">
            {SkillIconList.map((skill, index) => (
                <div className="flex items-start justify-start" key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <SkillIcon style={skill.style} icon={skill.icon} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
            ))}
        </div>
    </section>
  )
}

export default SkillsSection;