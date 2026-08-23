import React from "react";
import {
  FaShieldAlt,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white border-t border-slate-800">

      {/* Top Accent */}

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* ================= BRAND ================= */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/30
                  text-cyan-400
                  flex
                  items-center
                  justify-center
                "
              >
                <FaShieldAlt />
              </div>

              <div>

                <h2 className="font-bold text-xl">
                  Pattan Imran
                </h2>

                <p className="text-xs text-cyan-400 uppercase tracking-widest">
                  Cyber Security
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-7 text-sm max-w-md">
              Cybersecurity enthusiast focused on SOC operations, threat
              detection, security monitoring and building practical
              security-focused applications.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm">

              {[
                ["Home", "home"],
                ["About", "about"],
                ["Skills", "skills"],
                ["Experience", "experience"],
                ["Projects", "projects"],
                ["Contact", "contact"],
              ].map(([label, id]) => (

                <button
                  key={id}
                  onClick={() =>
                    document
                      .getElementById(id)
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="
                    text-left
                    text-gray-400
                    hover:text-cyan-400
                    transition
                  "
                >
                  → {label}
                </button>

              ))}

            </div>

          </div>

          {/* ================= CONNECT ================= */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5">
              Interested in cybersecurity opportunities, collaboration or
              security projects? Let's connect.
            </p>

            <div className="flex gap-3">

              <a
                href="https://github.com/BASITH-art"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-11
                  h-11
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
                href="https://www.linkedin.com/in/shaik-basith-067aab375"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-11
                  h-11
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

              <a
                href="mailto:shaik786basith@gmail.com"
                aria-label="Email"
                className="
                  w-11
                  h-11
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
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-12
            pt-6
            border-t
            border-slate-800
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Pattan Imran. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs">
            Built with React • Tailwind CSS • Cybersecurity
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              w-10
              h-10
              rounded-lg
              bg-slate-900
              border
              border-slate-800
              text-cyan-400
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:text-black
              hover:-translate-y-1
            "
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;