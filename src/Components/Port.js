import React from 'react'
import CodeLiveDemoIcons from './Icons/CodeLiveDemoIcons';
function Port({img,title,desc,reverse}) {
    return (
        <div className={`${reverse ? "flex-row-reverse" : ""} flex text-[18px] font-bold mt-10 font-jost w-[80%] justify-between max-sm:flex-col max-sm:gap-10`}>
            <div className='max-sm:w-[90%] max-sm:mx-auto'>
                <img className="w-[450px] h-[300px] max-sm:w-full max-sm:h-full max-sm:mx-auto" src={img} alt='' />
            </div>
            <div className="text-center w-1/3 flex flex-col space-y-6 max-sm:w-[90%] max-sm:mx-auto">
                <h1 className="text-black font-extrabold">{title}</h1>
                <p className="">{desc}</p>
                <div className="flex justify-center gap-10 text-black font-bold mt-5">
                    <h1>React</h1>
                    <h1>Scss</h1>
                </div>
                <CodeLiveDemoIcons/>
            </div>
        </div>
    )
}

export default Port
