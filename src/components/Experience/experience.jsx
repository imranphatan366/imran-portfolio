import React from "react";
import {
  FaBriefcase,
  FaShieldAlt,
  FaSearch,
  FaBug,
  FaNetworkWired,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";

function Experience() {
  const responsibilities = [
    {
      icon: <FaShieldAlt />,
      title: "SOC Operations",
      description:
        "Monitored security events and learned the alert triage and incident monitoring process used in SOC environments.",
    },
    {
      icon: <FaSearch />,
      title: "SIEM & Log Analysis",
      description:
        "Worked with SIEM concepts, log analysis, security monitoring and investigation of suspicious activities.",
    },
    {
      icon: <FaBug />,
      title: "Vulnerability Assessment",
      description:
        "Learned vulnerability identification, risk assessment and security testing methodologies.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking",
      description:
        "Applied networking fundamentals including TCP/IP, DNS, HTTP and network security concepts.",
    },
    {
      icon: <FaLinux />,
      title: "Linux & Security",
      description:
        "Worked with Linux fundamentals and security-related command-line operations.",
    },
    {
      icon: <FaDatabase />,
      title: "Security Projects",
      description:
        "Developed security-focused applications to apply cybersecurity concepts to practical problems.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-slate-900 text-white py-24 overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &{" "}
            <span className="text-cyan-400">
              Internship
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            Practical experience in cybersecurity, SOC operations,
            security monitoring and application development.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Timeline Line */}

          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent md:-translate-x-1/2"></div>

          {/* Timeline Item */}

          <div className="relative">

            {/* Timeline Dot */}

            <div
              className="
                absolute
                left-5
                md:left-1/2
                -translate-x-1/2
                w-11
                h-11
                rounded-full
                bg-slate-950
                border-2
                border-cyan-400
                flex
                items-center
                justify-center
                text-cyan-400
                z-10
                shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
            >
              <FaBriefcase />
            </div>

            {/* Content */}

            <div className="ml-16 md:ml-0 md:w-[46%]">

              <div
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-2xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/60
                  hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)]
                "
              >

                {/* Date */}

                <span
                  className="
                    inline-block
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    text-cyan-400
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    mb-4
                  "
                >
                  Cyber Security Internship
                </span>

                {/* Title */}

                <h3 className="text-2xl font-bold mb-2">
                  Cyber Security & SOC Operations
                </h3>

                <p className="text-cyan-400 font-medium mb-5">
                  Internship Experience
                </p>

                <p className="text-gray-400 leading-7">
                  Gained practical exposure to cybersecurity operations,
                  security monitoring, SIEM concepts, log analysis,
                  vulnerability assessment and incident handling.
                  Worked on security-focused projects while developing
                  a strong foundation in SOC operations and defensive security.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Responsibilities */}

        <div className="mt-16">

          <h3 className="text-2xl font-bold text-center mb-10">
            Key Areas of{" "}
            <span className="text-cyan-400">
              Experience
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {responsibilities.map((item) => (

              <div
                key={item.title}
                className="
                  group
                  bg-slate-800/70
                  border
                  border-slate-700
                  rounded-xl
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/60
                  hover:bg-slate-800
                  hover:shadow-[0_10px_35px_rgba(34,211,238,0.1)]
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    text-cyan-400
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-5
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400
                    group-hover:text-black
                    group-hover:scale-110
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}

                <h4 className="text-lg font-bold mb-3">
                  {item.title}
                </h4>

                {/* Description */}

                <p className="text-gray-400 text-sm leading-6">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Highlight */}

        <div
          className="
            mt-14
            max-w-4xl
            mx-auto
            bg-gradient-to-r
            from-slate-800
            to-slate-900
            border
            border-cyan-400/20
            rounded-2xl
            p-7
            text-center
            transition-all
            duration-300
            hover:border-cyan-400/50
            hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)]
          "
        >

          <p className="text-gray-300 leading-7">
            Currently strengthening my expertise in{" "}
            <span className="text-cyan-400 font-semibold">
              Threat Hunting
            </span>
            ,{" "}
            <span className="text-cyan-400 font-semibold">
              Incident Response
            </span>
            ,{" "}
            <span className="text-cyan-400 font-semibold">
              MITRE ATT&CK
            </span>
            , Digital Forensics and Security Monitoring.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;