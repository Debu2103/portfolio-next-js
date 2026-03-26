/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_02qrzx8",
        "template_ay9iycv",
        form.current,
        "ZTEwb_0sV_ODJumi1"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent! 🚀",
            text: "Thanks for reaching out. I'll get back to you soon!",
            icon: "success",
            background: "#111111",
            color: "#e5e7eb",
            confirmButtonColor: "#d4af37",
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            background: "#111111",
            color: "#e5e7eb",
            confirmButtonColor: "#d4af37",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 lg:py-28 pb-32 lg:pb-20">
      <div className="section-heading lg:hidden">
        <h2>Contact</h2>
      </div>

      {/* Contact intro */}
      <div className="mb-8">
        <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px] max-w-[480px]">
          I&apos;m currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi — my inbox is always
          open. I&apos;ll do my best to get back to you!
        </p>
      </div>

      {/* Contact Form */}
      <div className="glass-card p-6 sm:p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-2">
                Name
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Your name"
                required
                name="user_name"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-2">
                Phone
              </label>
              <input
                type="number"
                className="form-input"
                placeholder="Optional"
                name="user_number"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="your@email.com"
              required
              name="user_email"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-2">
              Subject
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="What's this about?"
              required
              name="subject"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-2">
              Message
            </label>
            <textarea
              className="form-input resize-none"
              rows="5"
              placeholder="Tell me about your project..."
              name="message"
            />
          </div>

          <button type="submit" className="btn-neon w-full py-4 text-sm">
            Send Message
          </button>
        </form>
      </div>

      {/* Back to top */}
      <div className="flex justify-center mt-12">
        <a
          href="#home"
          className="social-icon w-12 h-12 border border-white/[0.06] rounded-full hover:border-neon-blue/30 transition-all group"
        >
          <HiOutlineChevronDoubleUp
            size={18}
            className="text-gray-500 group-hover:text-neon-blue transition-colors"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
