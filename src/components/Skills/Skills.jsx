import React from "react";
import {
  FaCode,
  FaGlobe,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaDatabase,
  FaPython,
  FaLinux,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming",
    icon: <FaCode />,
    skills: ["Python", "Java", "JavaScript", "C"],
  },

  {
    title: "Web Development",
    icon: <FaGlobe />,
    skills: ["HTML", "CSS", "React", "Flask", "MERN"],
  },

  {
    title: "Cyber Security",
    icon: <FaShieldAlt />,
    skills: [
      "SOC Operations",
      "SIEM",
      "Threat Hunting",
      "Incident Response",
      "MITRE ATT&CK",
      "OWASP",
    ],
  },

  {
    title: "Networking & OS",
    icon: <FaNetworkWired />,
    skills: [
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Linux",
      "Windows",
      "Networking",
    ],
  },

  {
    title: "Security Tools",
    icon: <FaTools />,
    skills: [
      "Wazuh",
      "QRadar",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Git",
    ],
  },

  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: [
      "SQLite",
      "MongoDB",
      "MySQL",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-950 text-white py-24 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-10 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technical{" "}
            <span className="text-cyan-400">
              Skills
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            A combination of programming, cybersecurity, networking and
            development skills that I use to build and analyze
            security-focused solutions.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="
                group
                relative
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-cyan-400/60
                hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)]
              "
            >

              {/* Top Accent */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-0
                  h-1
                  bg-cyan-400
                  rounded-t-2xl
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              ></div>

              {/* Icon + Title */}

              <div className="flex items-center gap-4 mb-7">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                    text-xl
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400
                    group-hover:text-black
                    group-hover:scale-110
                  "
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      bg-slate-800
                      border
                      border-slate-700
                      px-3
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-300
                      transition-all
                      duration-300
                      hover:bg-cyan-400
                      hover:text-black
                      hover:border-cyan-400
                      hover:-translate-y-1
                      hover:shadow-[0_5px_20px_rgba(34,211,238,0.2)]
                      cursor-default
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Cybersecurity Highlight */}

        <div
          className="
            mt-14
            bg-slate-900
            border
            border-cyan-400/20
            rounded-2xl
            p-7
            transition-all
            duration-300
            hover:border-cyan-400/50
            hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)]
          "
        >

          <div className="flex flex-col md:flex-row items-center gap-6">

            <div
              className="
                w-16
                h-16
                flex-shrink-0
                rounded-2xl
                bg-cyan-400/10
                border
                border-cyan-400/20
                flex
                items-center
                justify-center
                text-cyan-400
                text-2xl
              "
            >
              <FaShieldAlt />
            </div>

            <div className="text-center md:text-left">

              <h3 className="text-xl font-bold mb-2">
                Cybersecurity Focus
              </h3>

              <p className="text-gray-400 leading-7">
                Currently focused on strengthening my skills in SOC
                operations, SIEM monitoring, threat detection, incident
                response, threat hunting and security monitoring.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;