import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({
    project: { title, description, tags, link, github },
}) => {
    return (
        <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
            <a href={link}>
                <h1 className="text-xl text-center font-bold">
                    {title}{' '}
                    <FaExternalLinkAlt className="inline align-baseline" />
                </h1>
            </a>
            <hr className="my-4" />
            <p className="text-center">{description}</p>
            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                {tags.map((tag) => (
                    <div className="px-4 py-1 border-2 rounded-full">{tag}</div>
                ))}
            </div>
            <div class="w-full text-center">
                <a
                    href={github}
                    class="bg-red-400 hover:bg-gray-400 mr-2 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-blue-500 rounded"
                >
                    <span>GitHub</span>
                </a>
                <a
                    href={link}
                    class="bg-blue-500 hover:bg-gray-400 ml-2 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-grey-500 rounded"
                >
                    Live
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
