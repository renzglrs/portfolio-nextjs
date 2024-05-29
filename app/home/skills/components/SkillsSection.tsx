import Image from 'next/image';
import React from 'react'
import { SkillIconList } from './SkillIcons';
import { cn } from '@/lib/utils';
import SkillIcon from './SkillIcon';


const SkillsSection = () => {
  return (
    <section id="section" className="pt-10">

        <h2 className="text-2xl font-medium pb-4">Skills</h2>

        <div className="grid grid-cols-6 gap-4 2">
            {SkillIconList.map((skill, index) => (
                <div className="flex items-start justify-start" key={index}>
                    {/* Turn into component */}
                    <SkillIcon color={skill.color} icon={skill.icon} />
                </div>
            ))}
        </div>
    </section>
  )
}

export default SkillsSection;