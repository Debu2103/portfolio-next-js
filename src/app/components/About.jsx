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
  Hi, I'm a MERN stack and JavaScript developer with 1 year of professional
  experience in building efficient, innovative, and user-focused web
  applications. I have a solid foundation in modern web technologies,
  including HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.
  Additionally, I have hands-on experience with Swagger for API documentation
  and writing unit and integration tests in Node.js using Jest. I also have
  basic familiarity with Python.
</p>
<p className="py-2 text-gray-600 text-center md:text-left">
  I am a fast learner with a strong commitment to continuous improvement and
  clean, maintainable code. I value teamwork, collaboration, and effective
  problem-solving, and I strive to contribute meaningfully to every project I
  work on.
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
