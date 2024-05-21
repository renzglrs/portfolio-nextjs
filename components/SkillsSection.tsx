import Image from 'next/image';
import React from 'react'
import { SkillIcons } from './SkillIcons';

const SkillsSection = () => {
  return (
    <section id="section" className="pt-10">

        <h2 className="text-2xl font-medium pb-4">Skills</h2>

        <div className="grid grid-cols-6 gap-4 2">
            {SkillIcons.map((skill) => (
                <div className="flex items-start justify-start">
                    {/* <Image 
                        src={skill.imgUrl}
                        alt="avatar" 
                        width={42}
                        height={42}
                        className="dark:fill-slate-50"
                    /> */}
                    {/* <p>{skill.label}</p> */}
                    <span className="text-5xl">{skill.icon}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default SkillsSection;