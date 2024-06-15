import { Fragment } from "react";
import body1 from '../assets/body1.png';
import button from '../assets/button.png'
import contact from '../assets/contact.png'
import mail from '../assets/mail.jpg'
import { LuCopyright } from "react-icons/lu";
import body2 from '../assets/body2.png';
import body4 from '../assets/body4.png';
import body3 from '../assets/body3.png';
import FootIcons from "./Icons/FootIcons";
import '../App.css'
import Navbar from "./LandingSection/Navbar";
import AnimatedIcons from "./LandingSection/AnimatedIcons";
import Port from "./Port";
function Landing() {

    return (
        <Fragment>
            <Navbar />
            <AnimatedIcons />
            <div className="mt-20 flex px-10 flex-col items-center text-xl text-[#666666] font-jost">
                <div className="flex w-[80%] mx-auto text-[18px] font-bold max-sm:flex-col max-md:gap-5 max-sm:items-center max-sm:text-center">
                    <div className="w-1/3 flex items-center max-sm:w-[90%] max-sm:justify-center">
                        <img className="w-[200px] h-[200px]" src={body1} alt="" />
                    </div>
                    <div className="w-2/3 max-sm:w-[90%]">
                        <h1 className="text-[#006AB8] font-extrabold">About me</h1>
                        <p className="mt-10">Hello, I'm Heba, a Frontend Developer who is dedicated to crafting sleek UI/UX experiences for users. Currently, I primarily work with React.js, Tailwind CSS, and JavaScript in my projects.</p>
                    </div>
                </div>
                <div className="max-sm:text-center text-start w-[80%]">
                    <h1 className="text-[#006AB8] text-[18px] mt-14 font-extrabold">Potfolio</h1>
                    <p className="text-black font-bold text-[18px] mb-14">I would like to present my portfolio for your consideration.</p>
                </div>
                <Port title="Erick Coffee" desc={"The website features a modern and sleek design, showcasing Erick Coffee's products and brand story."} reverse={false} img={body2} />
                <Port title="Chicken" desc={"I designed a website for the restaurant Chicken, featuring an elegant and user-friendly interface to showcase their menu offerings and services."} reverse={true} img={body3} />
                <Port title="Elevate" desc={"I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options."} reverse={false} img={body4} />
                <img className="text-center mx-[400px] mt-10 w-40" src={button} alt='' />
                <div className="max-sm:text-center text-start w-[80%] mt-5">
                    <h1 className="text-[#006AB8] font-extrabold text-[18px]">Contact</h1>
                    <p className="text-black font-bold text-[18px]">Don’t hesitate to call me</p>
                </div>
                <div className="flex w-[80%] items-center justify-between gap-5 flex-wrap text-[18px] text-black mt-10 ">
                    <div className="flex gap-5 items-center">
                        <img className="w-16" src={contact} alt='' />
                        <div className="">
                            <h1 className="font-bold text-wrap">Phone Number</h1>
                            <p className="text-wrap">+966 576187008</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <img className="w-16" src={mail} alt='' />
                        <div className="">
                            <h1 className="font-bold text-wrap">Email</h1>
                            <p className="text-wrap break-all">alnajjarheba.22@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-7 mt-14 bg-[#3D3D3D] rounded-t-2xl flex items-center justify-between text-white font-bold font-jost shadow-[0_-4px_20px_rgb(0,0,0,1)] max-md:flex max-md:flex-col max-md:p-[20px]">
                <div className="flex justify-start items-center"> Copyright <LuCopyright />  2024.All rights are reserved.</div>
                <FootIcons />
            </div>
        </Fragment>
    );
}

export default Landing
