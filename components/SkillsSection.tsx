import { skillsList } from '@/constants';
import Image from 'next/image';
import React from 'react'

const SkillsSection = () => {
  return (
    <section id="section" className="pt-10">

        <h2 className="text-2xl font-medium pb-4">Skills</h2>

        <div className="grid grid-cols-6 gap-5 2">
            {skillsList.map((skill) => (
                <div className="flex items-center justify-center">
                    <Image 
                        src={skill.imgUrl}
                        alt="avatar" 
                        width={42}
                        height={42}
                        className="dark:fill-slate-50"
                    />
                    {/* <p>{skill.label}</p> */}
                </div>
            ))}
        </div>
    </section>
  )
}

export default SkillsSection;