import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "imranphatan366@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-950 text-white py-24 overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-10 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's{" "}
            <span className="text-cyan-400">
              Connect
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            Interested in cybersecurity, SOC operations or security-focused
            projects? Feel free to reach out and connect with me.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* ================= LEFT ================= */}

          <div>

            <h3 className="text-2xl font-bold mb-5">
              Let's work together
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              I'm interested in opportunities where I can apply my
              cybersecurity knowledge, strengthen my SOC skills and
              contribute to real-world security operations.
            </p>

            {/* Email */}

            <div
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                p-5
                mb-4
                flex
                items-center
                justify-between
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:-translate-y-1
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaEnvelope />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="text-gray-200 text-sm md:text-base">
                    {email}
                  </p>

                </div>

              </div>

              <button
                onClick={copyEmail}
                className="
                  w-10
                  h-10
                  rounded-lg
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-cyan-400
                  hover:border-cyan-400
                  transition
                "
                title="Copy email"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>

            </div>

            {/* Location */}

            <div
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                p-5
                mb-4
                flex
                items-center
                gap-4
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:-translate-y-1
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-cyan-400/10
                  text-cyan-400
                  flex
                  items-center
                  justify-center
                "
              >
                <FaMapMarkerAlt />
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="text-gray-200">
                  India
                </p>

              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-4 mt-7">

              <a
                href="https://github.com/BASITH-art"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:border-cyan-400
                  hover:-translate-y-1
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/imran-pattan-338b7a411/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:border-cyan-400
                  hover:-translate-y-1
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* ================= RIGHT - FORM ================= */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-7
              md:p-8
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]
            "
          >

            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form
              action="https://formsubmit.co/imranphatan366@gmail.com"
              method="POST"
              className="space-y-5"
            >

              {/* FormSubmit Settings */}

              <input
                type="hidden"
                name="_subject"
                value="Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Name */}

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    focus:border-cyan-400
                    focus:ring-1
                    focus:ring-cyan-400
                  "
                />

              </div>

              {/* Email */}

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    focus:border-cyan-400
                    focus:ring-1
                    focus:ring-cyan-400
                  "
                />

              </div>

              {/* Message */}

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-3
                    text-white
                    outline-none
                    resize-none
                    transition
                    focus:border-cyan-400
                    focus:ring-1
                    focus:ring-cyan-400
                  "
                ></textarea>

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  w-full
                  bg-cyan-500
                  text-black
                  py-3
                  rounded-lg
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]
                "
              >
                <FaPaperPlane />

                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;