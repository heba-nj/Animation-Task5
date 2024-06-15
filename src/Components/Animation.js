import React from 'react'
import { motion } from "framer-motion";
function Animation() {
    return (
        <div>
            <motion.div className="h-screen d-flex items-center font-jost"
                initial={{ backgroundColor: "black", display: "block" }}
                animate={{ backgroundColor: "white", display: "none" }}
                transition={{ delay: 3 }}>
                <h1 className="textt text-7xl mx-auto pt-[30vh] font-bold w-[700px] max-sm:text-[20px] max-sm:w-[300px] max-sm:text-center">Front-End React Developer</h1>
                <motion.div className=" text-white pl-80 font-extrabold font-jost text-xl tracking-widest leading-relaxed opacity-[26%] pt-5"
                    initial={{ display: "block", }}
                    animate={{ display: "none", }}
                    transition={{ delay: 2.5 }}
                >
                    <div className="max-sm:hidden">
                        <div className="text-[#666666] max-sm:text-[20px]">&lt;!DOCTYPE &gt;<span className="text-[#33A9DC] ">html&gt;</span><br /></div>
                        &lt;html<span className="text-[#CD03A1]"> lang= <span className="text-[#009846]">"en"</span></span>&gt;<br />
                        &nbsp;&nbsp;&lt;head&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta <span className="text-[#CD03A1]">charset</span> charset= <span className="text-[#009846]">"UTF-8"</span>&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta <span className="text-[#CD03A1]">name</span> =<span className="text-[#009846]">"viewport"</span> <span className="text-[#CD03A1]">content</span> = <span className="text-[#009846]">"width=device-width, initial-scale=1.0"</span>&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Change Background Color&lt;/title&gt;<br />
                        &nbsp;&nbsp;&lt;Style&gt;<br />
                        &nbsp;&nbsp;&lt;/head&gt;<br />
                        &nbsp;&nbsp;&lt;/body&gt;<br />
                        &lt;/html&gt;
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Animation
