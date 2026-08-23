import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload, FaShieldAlt } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-lg"
            : "bg-slate-950/40 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-cyan-400/10
                border
                border-cyan-400/30
                flex
                items-center
                justify-center
                text-cyan-400
                transition-all
                duration-300
                group-hover:bg-cyan-400
                group-hover:text-black
                group-hover:scale-105
              "
            >
              <FaShieldAlt />
            </div>

            <div className="text-left">

              <h1 className="font-bold text-lg text-white">
                Pattan Imran
              </h1>

              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                Cyber Security
              </p>

            </div>

          </button>

          {/* ================= DESKTOP MENU ================= */}

          <div className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => (

              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/5"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-slate-900"
                  }
                `}
              >
                {item.label}

                {/* Active Indicator */}

                {activeSection === item.id && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-5
                      h-0.5
                      bg-cyan-400
                      rounded-full
                    "
                  ></span>
                )}

              </button>

            ))}

          </div>

          {/* ================= RESUME ================= */}

          <div className="hidden lg:block">

            <a
              href="/resume.pdf"
              download
              className="
                flex
                items-center
                gap-2
                bg-cyan-500
                text-black
                px-5
                py-2.5
                rounded-lg
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(34,211,238,0.25)]
              "
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-lg
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-gray-300
              hover:text-cyan-400
              hover:border-cyan-400
              transition
            "
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (

          <div
            className="
              lg:hidden
              pb-5
              border-t
              border-slate-800
              pt-4
            "
          >

            <div className="flex flex-col gap-2">

              {navItems.map((item) => (

                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    text-left
                    px-4
                    py-3
                    rounded-lg
                    transition-all
                    ${
                      activeSection === item.id
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-gray-300 hover:bg-slate-900 hover:text-cyan-400"
                    }
                  `}
                >
                  {item.label}
                </button>

              ))}

              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-cyan-500
                  text-black
                  px-5
                  py-3
                  rounded-lg
                  font-semibold
                "
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </div>

        )}

      </div>
    </nav>
  );
}

export default Navbar;