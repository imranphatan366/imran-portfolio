import React from "react";
import {
  FaShieldAlt,
  FaSearch,
  FaBug,
  FaNetworkWired,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaCertificate,
} from "react-icons/fa";

function About() {
  const focusAreas = [
    {
      icon: <FaShieldAlt />,
      title: "SOC Operations",
      description: "Security monitoring, alert triage and incident analysis.",
    },
    {
      icon: <FaSearch />,
      title: "Threat Hunting",
      description: "Investigating suspicious activity and identifying threats.",
    },
    {
      icon: <FaBug />,
      title: "Incident Response",
      description: "Analyzing and responding to security incidents.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Vulnerability Assessment",
      description: "Identifying security weaknesses in systems and applications.",
    },
  ];

  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "B.Tech CSE",
      description: "Computer Science Engineering(DataScience)",
    },
    {
      icon: <FaBriefcase />,
      title: "Cyber Security Internship",
      description: "Cyber Security & SOC Operations",
    },
    {
      icon: <FaRocket />,
      title: "Security Projects",
      description: "PhishGuard AI & House Price Prediction",
    },
    {
      icon: <FaCertificate />,
      title: "Certifications",
      description: "Python, Java & Cyber Security",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-900 text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= SECTION TITLE ================= */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <div className="mb-8">

              <p className="text-cyan-400 font-semibold mb-2">
                CYBER SECURITY
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Building Security-Focused Solutions
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                I'm a Computer Science Engineering graduate in Stream of DataScience passionate about
                Cyber Security and SOC Operations. I have hands-on experience
                with SIEM monitoring, threat detection, vulnerability
                assessment, incident response, Linux administration and
                networking.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                I enjoy building practical security applications that solve
                real-world problems. My current areas of interest include
                Threat Hunting, MITRE ATT&CK, Digital Forensics, Malware
                Analysis and Cloud Security.
              </p>

            </div>

            {/* Focus Areas */}

            <div className="grid sm:grid-cols-2 gap-4">

              {focusAreas.map((area) => (

                <div
                  key={area.title}
                  className="
                    group
                    bg-slate-800/70
                    border
                    border-slate-700
                    rounded-xl
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400/60
                    hover:bg-slate-800
                    hover:shadow-[0_10px_35px_rgba(34,211,238,0.12)]
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-lg
                      bg-cyan-400/10
                      text-cyan-400
                      flex
                      items-center
                      justify-center
                      text-lg
                      mb-4
                      transition-all
                      duration-300
                      group-hover:bg-cyan-400
                      group-hover:text-black
                    "
                  >
                    {area.icon}
                  </div>

                  <h4 className="font-bold text-lg mb-2">
                    {area.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-6">
                    {area.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div className="grid grid-cols-2 gap-5">

              {achievements.map((item) => (

                <div
                  key={item.title}
                  className="
                    group
                    relative
                    bg-slate-800
                    border
                    border-slate-700
                    rounded-2xl
                    p-7
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-cyan-400/60
                    hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)]
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      mx-auto
                      w-16
                      h-16
                      rounded-2xl
                      bg-slate-900
                      border
                      border-slate-700
                      flex
                      items-center
                      justify-center
                      text-2xl
                      text-cyan-400
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

                  <h3 className="text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

            {/* Security Quote Card */}

            <div
              className="
                mt-6
                bg-gradient-to-r
                from-slate-800
                to-slate-900
                border
                border-cyan-400/20
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:shadow-[0_10px_35px_rgba(34,211,238,0.1)]
              "
            >

              <div className="flex gap-4 items-start">

                <div className="text-cyan-400 text-2xl">
                  <FaShieldAlt />
                </div>

                <div>

                  <h4 className="font-bold mb-2">
                    Security Mindset
                  </h4>

                  <p className="text-gray-400 text-sm leading-6">
                    "Learn continuously, investigate carefully, and build
                    systems with security in mind."
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;