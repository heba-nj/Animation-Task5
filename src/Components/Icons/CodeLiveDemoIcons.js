import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function CodeLiveDemoIcons() {
    return (
        <div className="flex justify-center gap-10 text-[10px] mt-5 font-jost">
            <div className="flex items-center gap-2">
                Code
                <FaGithub className="text-xl" />
            </div>
            <div className="flex items-center gap-2">
                Live Demo
                <FaArrowUpRightFromSquare className="text-xl" />
            </div>
        </div>
    )
}

export default CodeLiveDemoIcons
