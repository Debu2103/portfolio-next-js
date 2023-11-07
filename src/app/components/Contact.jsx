/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";

import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ccizs79', 'template_ay9iycv', form.current, 'ZTEwb_0sV_ODJumi1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase text-[5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* LEft */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full  rounded-xl p-4">
                        <div className="lg:p-4 h-full rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-xl hover:scale-105 ease-in duration-300"
                                alt="/"
                            />
                            <div>
                                <h2 className="py-4 ">Debaroon Deb Roy</h2>
                                <p>Full Stack Developer</p>
                                <p className="py-4">
                                    Im Available for freelancing or full-time positions. Contact
                                    me and lets talk
                                </p>
                            </div>
                            <div>
                                <p
                                    className="uppercase
                             pt-8"
                                >
                                    Connect With Me
                                </p>
                                <div className="flex items-center justify-between py-4">
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
                    {/* Right */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col ">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input
                                            type="text"
                                            className="border-2 rounded-lg p-3 flex"
                                            placeholder="Your Name"
                                            required
                                            name="user_name"
                                        />
                                    </div>
                                    <div className="flex flex-col ">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="number"
                                            className="border-2 rounded-lg p-3 flex"
                                            placeholder="Phone Number"
                                            name="user_number"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input
                                        type="email"
                                        className="border-2 rounded-lg p-3 flex"
                                        placeholder="Email"
                                        required={true}
                                        name="user_email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input
                                        type="text"
                                        className="border-2 rounded-lg p-3 flex"
                                        placeholder="Subject"
                                        required={true}
                                        name="user_email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300"
                                        rows="10"
                                        name="message"
                                    ></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12 ">
                    <Link href="/">
                        <div
                            className="rounded-full shadow-gray-600
                    p-6 cursor-pointer hover:scale-110 ease-in duration-300 shadow-md  bg-blue-300 hover:bg-blue-400 hover:text-white"
                        >
                            <HiOutlineChevronDoubleUp />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
