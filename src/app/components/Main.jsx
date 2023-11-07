import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center md:pt-0">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm py-2 tracking-widest text-gray-600">
                        Lets Build Something Together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, Im <span class="text-[#5651e5]">Debaroon</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">A MERN Stack Developer</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Im Expertise in Creating a Full Stack Web App / Website
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full">
                            <FaLinkedinIn />
                        </div>
                        <div className="shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full">
                            <FaGithub />
                        </div>
                        <div className="shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full">
                            <FaFacebookF />
                        </div>
                        <div className="shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
