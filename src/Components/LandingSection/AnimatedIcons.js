import React from 'react'
import { motion } from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import me from '../../assets/me.jpg'
import SpecIcons from '../Icons/HeadIcons';

function AnimatedIcons() {
    return (
        <div className="mt-16">
            <div className="flex justify-center font-jost">
                <div className='flex flex-col gap-10 flex-wrap w-1/2 mx-auto max-sm:w-[90%]'>
                    <h1 className="text-7xl tracking-widest font-semibold max-sm:text-2xl max-lg:text-4xl">Front-End React Developer</h1>
                    <p className='text-xl text-[#666666] flex flex-wrap w-5/6'>Hi, I am Heba Al-Najjar, a passionate Front-End Developer from Syria </p>
                    <SpecIcons />
                    <div className="flex gap-5 items-center">
                        <p className='text-xl font-bold'>Tech stack</p>
                        <span className="w-1 h-7 bg-[#666666]"></span>
                    </div>
                </div>
                <div className='flex justify-center w-[30%] h-full max-sm:hidden'><div className="heba w-[50%] h-[20%] rounded-full"><img className='rounded-full object-cover' src={me} alt='' /></div></div>
            </div>
            <div className="flex text-[50px] max-sm:hidden max-md:text-[30px] max-md:mx-14">
                <motion.a
                    initial={{ y: 20, x: 24 }}
                    animate={{ y: "-75%", x: "550%" }}
                    transition={{ duration: 2 }}
                ><RiTailwindCssFill className="text-[#44A8B3]" /></motion.a>
                <motion.a
                    initial={{ y: 20, x: 24 }}
                    animate={{ y: "-75%", x: "600%" }}
                    transition={{ duration: 2 }}
                ><IoLogoJavascript className="text-[#F5DE19]" /></motion.a>
                <motion.a
                    initial={{ y: 900, rotate: '165deg' }}
                    animate={{ y: "-75%", x: "650%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><FaHtml5 className="text-[#E44D26]" />
                </motion.a>
                <motion.a
                    initial={{ y: 410, rotate: '40deg' }}
                    animate={{ y: "-75%", x: "700%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><IoLogoCss3 className="text-[#1572B6]" />
                </motion.a>
                <motion.a
                    initial={{ y: 20, rotate: '60deg' }}
                    animate={{ y: "-75%", x: "750%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><FaReact className="text-[#00D8FF]" /></motion.a>
                <motion.a
                    initial={{ y: 800, x: 1200, rotate: '50deg' }}
                    animate={{ y: "-75%", x: "800%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><FaSass className="text-[#CD6799]" /></motion.a>
            </div>
            <div className="flex flex-col text-[50px] sm:hidden items-center">
                <motion.a className='w-fit'
                    initial={{ y: 20, x: 24 }}
                    animate={{ y: "10%", x: "50%" }}
                    transition={{ duration: 2 }}
                ><RiTailwindCssFill className="text-[#44A8B3]" /></motion.a>
                <motion.a className='w-fit'
                    initial={{ y: 20, x: 24 }}
                    animate={{ y: "15%", x: "50%" }}
                    transition={{ duration: 2 }}
                ><IoLogoJavascript className="text-[#F5DE19]" /></motion.a>
                <motion.a className='w-fit'
                    initial={{ y: 900, rotate: '165deg' }}
                    animate={{ y: "20%", x: "50%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><FaHtml5 className="text-[#E44D26]" />
                </motion.a>
                <motion.a className='w-fit'
                    initial={{ y: 410, rotate: '40deg' }}
                    animate={{ y: "25%", x: "50%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><IoLogoCss3 className="text-[#1572B6]" />
                </motion.a>
                <motion.a className='w-fit'
                    initial={{ y: 20, rotate: '60deg' }}
                    animate={{ y: "30%", x: "50%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><FaReact className="text-[#00D8FF]" /></motion.a>
                <motion.a className='w-fit'
                    initial={{ y: 800, x: 1200, rotate: '50deg' }}
                    animate={{ y: "35%", x: "50%", rotate: '0deg' }}
                    transition={{ duration: 2 }}
                ><FaSass className="text-[#CD6799]" /></motion.a>
            </div>
        </div>
    )
}

export default AnimatedIcons
