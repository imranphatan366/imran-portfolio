import React from "react";
import profileImage from "../../assets/profile.jpg.jpeg";
import { FaGithub, FaLinkedinIn, FaShieldAlt } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      {/* Cybersecurity Grid Effect */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center w-full">

        {/* ================= LEFT SIDE ================= */}

        <div>

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-cyan-400/30 rounded-full px-4 py-2 mb-6 hover:border-cyan-400 transition duration-300">

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-sm text-gray-300">
              Open to Cyber Security Opportunities
            </span>

          </div>

          {/* Greeting */}

          <p className="text-cyan-400 font-semibold text-lg mb-3">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Pattan{" "}
            <span className="text-cyan-400">
              Imran
            </span>
          </h1>

          {/* Role */}

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">

            Cyber Security{" "}
            <span className="text-cyan-400">
              Analyst
            </span>

          </h2>

          {/* Description */}

          <p className="text-gray-400 leading-8 text-lg max-w-2xl mb-8">

            Passionate about{" "}
            <span className="text-cyan-400">
              Threat Detection
            </span>
            , SOC Operations, Incident Response, Threat Hunting and Web
            Security. I build security-focused applications and continuously
            learn modern cybersecurity technologies.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mb-8">

            {/* Resume */}

            <a
              href="/resume.pdf.docx"
              download
              className="
                group
                bg-cyan-500
                text-black
                px-7
                py-3
                rounded-lg
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_10px_35px_rgba(34,211,238,0.35)]
              "
            >
              Download Resume

              <span className="group-hover:translate-y-1 transition">
                ↓
              </span>

            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
                border
                border-cyan-400
                px-7
                py-3
                rounded-lg
                font-semibold
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:text-black
                hover:-translate-y-1
                hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)]
              "
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}

          <div className="flex items-center gap-4">

            <span className="text-gray-500 text-sm">
              Connect with me
            </span>

            {/* GitHub */}

            <a
              href="https://github.com/imranphatan366"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                rounded-full
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-gray-400
                transition-all
                duration-300
                hover:text-cyan-400
                hover:border-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              "
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/imran-pattan-338b7a411/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                rounded-full
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-gray-400
                transition-all
                duration-300
                hover:text-cyan-400
                hover:border-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              "
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex justify-center relative">

          {/* Outer Glow */}

          <div
            className="
              absolute
              w-80
              h-80
              md:w-[420px]
              md:h-[420px]
              rounded-full
              bg-cyan-400/10
              blur-3xl
              animate-pulse
            "
          ></div>

          {/* Decorative Ring */}

          <div
            className="
              absolute
              w-80
              h-80
              md:w-[420px]
              md:h-[420px]
              rounded-full
              border
              border-cyan-400/20
              animate-[spin_20s_linear_infinite]
            "
          ></div>

          {/* Photo Container */}

          <div className="relative group">

            {/* Glow Behind Photo */}

            <div
              className="
                absolute
                -inset-3
                rounded-full
                bg-cyan-400/20
                blur-xl
                transition-all
                duration-500
                group-hover:bg-cyan-400/40
              "
            ></div>

            {/* Photo */}

            <img
              src={profileImage}
              alt="Pattan Imran - Cyber Security Analyst"
              className="
                relative
                w-72
                h-72
                md:w-96
                md:h-96
                object-cover object-
                rounded-full
                border-4
                border-cyan-400
                shadow-2xl
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:border-cyan-300
                group-hover:shadow-[0_0_60px_rgba(34,211,238,0.45)]
              "
            />

            {/* Security Badge */}

            <div
              className="
                absolute
                -bottom-3
                -left-4
                bg-slate-900
                border
                border-cyan-400/40
                rounded-xl
                px-4
                py-3
                flex
                items-center
                gap-3
                shadow-xl
                transition-all
                duration-300
                group-hover:-translate-y-2
              "
            >

              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">

                <FaShieldAlt className="text-cyan-400" />

              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Focus
                </p>

                <p className="text-sm font-semibold">
                  Cyber Security
                </p>

              </div>

            </div>

            {/* Status Badge */}

            <div
              className="
                absolute
                -top-3
                -right-4
                bg-slate-900
                border
                border-green-400/30
                rounded-xl
                px-4
                py-3
                shadow-xl
                transition-all
                duration-300
                group-hover:-translate-y-2
              "
            >

              <div className="flex items-center gap-2">

                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

                <span className="text-xs text-green-400">
                  SOC Ready
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;