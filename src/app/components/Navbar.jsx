"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
    FaFacebookF,
    FaGithub,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";
import Main from "./Main";
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="fixed w-full h-20 shadow-sm z-[100] bg-slate-500">
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Link href="/#home">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="-mt-1"
                        />
                    </Link>
                    <div>
                        <ul className="hidden md:flex">
                            <Link href="/#home">
                                <li className="ml-10 text-sm uppercase hover:border-b-red-300 hover:border-b-2 hover:ease-in duration-150 text-white">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li className="ml-10 text-sm uppercase hover:border-b-red-300 hover:border-b-2 hover:ease-in duration-150 text-white">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li className="ml-10 text-sm uppercase hover:border-b-red-300 hover:border-b-2 hover:ease-in duration-150 text-white">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#project">
                                <li className="ml-10 text-sm uppercase hover:border-b-red-300 hover:border-b-2 hover:ease-in duration-150 text-white">
                                    Project
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li className="ml-10 text-sm uppercase hover:border-b-red-300 hover:border-b-2 hover:ease-in duration-150 text-white">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size={25} color="white" />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        nav
                            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                            : ""
                    }
                >
                    <div
                        className={
                            nav
                                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                        }
                    >
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    className="-ml-7"
                                    width={87}
                                    height={35}
                                />
                                <div
                                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                                    onClick={handleNav}
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-300 my-4">
                                <p className="w-[85%] md:w-[90%]">
                                    Let&apos;s Build Something Legendary Toghether
                                </p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase ">
                                <Link href="/">
                                    <li className="py-4 text-sm"> Home</li>
                                </Link>
                                <Link href="/src/app/components/About.jsx">
                                    <li className="py-4 text-sm"> About</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm"> Skills</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm"> Project</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm"> Contact</li>
                                </Link>
                            </ul>
                            <div className="pt-16 ">
                                <p className="uppercase tracking-widest text-[#5651e5]">
                                    Lets Connect
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 rounded-full">
                                        <FaLinkedin />
                                    </div>
                                    <div className="shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 rounded-full">
                                        <FaGithub />
                                    </div>
                                    <div className="shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 rounded-full">
                                        <FaFacebookF />
                                    </div>
                                    <div className="shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 rounded-full">
                                        <FaInstagramSquare />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
