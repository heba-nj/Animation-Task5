import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

function FootIcons() {
    return (
        <div className="flex text-xl gap-2">
            <FiGithub />
            <FaLinkedin />
        </div>
    )
}

export default FootIcons
