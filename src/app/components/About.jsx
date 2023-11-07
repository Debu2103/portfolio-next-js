/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 -mt-10 md:mt-0">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5] text-center md:text-left">About</p>
                    <h2 className="py-4 text-center md:text-left">Who I Am</h2>

                    <p className="py-2 text-gray-600 text-center md:text-left">
                        Hi, I&apos;m a fresher MERN stack developer and JavaScript developer
                        with a passion for building innovative and user-friendly web
                        applications. I have a strong foundation in the fundamentals of web
                        development, including HTML, CSS, JavaScript, React, Node.js, and
                        Express.js.{" "}
                    </p>
                    <p className="py-2 text-gray-600 text-center md:text-left">
                        I am a quick learner and I am always eager to take on new
                        challenges. I am also a team player and I am always willing to help
                        others. I am confident that I have the skills and the drive to be a
                        valuable asset to any team.
                    </p>

                </div>
                <div className="w-full h-auto m-auto flex items-center justify-center">
                    <img className="rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 duration-150 ease-linear hover:shadow-blue-500 hover:shadow-2xl w-56 md:w-auto" src="/dp.jpg" alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;
