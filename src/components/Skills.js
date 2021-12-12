import React from 'react'
import SkillCard from './SkillCard.js'

function Skills({ skills }) {
    return (
        <>
            <p className="text-2xl md:text-4xl mt-6 font-bold text-center">
                Technical Skills
            </p>
            <div className="flex flex-col flex-wrap sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
                {skills.map((skill) => {
                    return (
                        <SkillCard
                            skillName={skill.skillName}
                            skillIcon={skill.skillIcon}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Skills
