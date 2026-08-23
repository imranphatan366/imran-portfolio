import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaExpand,
  FaShieldAlt,
} from "react-icons/fa";

function ProjectCard({ project }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <article
        className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          bg-slate-900
          transition-all
          duration-500
          hover:-translate-y-3
          ${
            project.featured
              ? "border-cyan-400/50 shadow-[0_15px_60px_rgba(34,211,238,0.12)]"
              : "border-slate-800 hover:border-cyan-400/50"
          }
        `}
      >

        {/* Featured Top Line */}

        {project.featured && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        )}

        {/* ================= IMAGE ================= */}

        <div
          className="relative h-64 overflow-hidden cursor-pointer"
          onClick={() => setShowImage(true)}
        >

          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Dark Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950
              via-transparent
              to-transparent
              opacity-70
            "
          ></div>

          {/* Image Hover Label */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
            "
          >

            <div
              className="
                bg-slate-950/80
                backdrop-blur-sm
                border
                border-cyan-400/50
                text-cyan-400
                px-5
                py-3
                rounded-xl
                flex
                items-center
                gap-2
              "
            >
              <FaExpand />
              View Project
            </div>

          </div>

          {/* Featured Badge */}

          {project.featured && (
            <span
              className="
                absolute
                top-5
                left-5
                bg-cyan-400
                text-black
                px-4
                py-2
                rounded-full
                text-xs
                font-bold
                shadow-lg
              "
            >
              ⭐ Featured Project
            </span>
          )}

          {/* Category */}

          <span
            className="
              absolute
              bottom-5
              left-5
              bg-slate-950/80
              backdrop-blur-sm
              border
              border-slate-700
              px-3
              py-1.5
              rounded-lg
              text-xs
              text-cyan-400
            "
          >
            {project.category}
          </span>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="p-7">

          {/* Title */}

          <div className="flex items-start justify-between gap-4 mb-3">

            <div>

              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              {project.subtitle && (
                <p className="text-sm text-cyan-400 mt-1">
                  {project.subtitle}
                </p>
              )}

            </div>

            <FaShieldAlt
              className="
                text-slate-700
                text-xl
                group-hover:text-cyan-400
                transition
              "
            />

          </div>

          {/* Description */}

          <p className="text-gray-400 leading-7 mb-6">
            {project.description}
          </p>

          {/* ================= FEATURES ================= */}

          {project.features && (
            <div className="mb-6">

              <p className="text-sm font-semibold text-gray-300 mb-3">
                Key Features
              </p>

              <div className="grid grid-cols-2 gap-2">

                {project.features.slice(0, 4).map((feature) => (

                  <div
                    key={feature}
                    className="
                      text-xs
                      text-gray-400
                      bg-slate-800
                      border
                      border-slate-700
                      rounded-lg
                      px-3
                      py-2
                      transition
                      hover:border-cyan-400/40
                      hover:text-cyan-400
                    "
                  >
                    ✓ {feature}
                  </div>

                ))}

              </div>

            </div>
          )}

          {/* ================= TECHNOLOGIES ================= */}

          <div className="flex flex-wrap gap-2 mb-7">

            {(
              project.technologies ||
              project.tech ||
              []
            ).map((technology) => (

              <span
                key={technology}
                className="
                  text-xs
                  bg-cyan-400/5
                  border
                  border-cyan-400/20
                  text-cyan-400
                  px-3
                  py-1.5
                  rounded-full
                  transition
                  duration-300
                  hover:bg-cyan-400
                  hover:text-black
                "
              >
                {technology}
              </span>

            ))}

          </div>

          {/* ================= BUTTONS ================= */}

          <div className="flex gap-3">

            {project.github && project.github !== "#" && (

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-slate-700
                  py-3
                  rounded-lg
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  hover:-translate-y-1
                "
              >
                <FaGithub />
                GitHub
              </a>

            )}

            {project.demo && project.demo !== "#" && (

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-cyan-500
                  text-black
                  py-3
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
                <FaExternalLinkAlt />
                Live Demo
              </a>

            )}

            {/* If no links are available */}

            {(!project.github || project.github === "#") &&
              (!project.demo || project.demo === "#") && (

                <button
                  onClick={() => setShowImage(true)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-cyan-400/40
                    text-cyan-400
                    py-3
                    rounded-lg
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-cyan-400
                    hover:text-black
                  "
                >
                  <FaExpand />
                  View Project
                </button>

              )}

          </div>

        </div>

      </article>

      {/* ================= IMAGE MODAL ================= */}

      {showImage && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/90
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-6
          "
          onClick={() => setShowImage(false)}
        >

          <button
            onClick={() => setShowImage(false)}
            className="
              absolute
              top-6
              right-6
              w-12
              h-12
              rounded-full
              bg-slate-900
              border
              border-slate-700
              text-white
              flex
              items-center
              justify-center
              hover:bg-red-500
              transition
              z-10
            "
          >
            <FaTimes />
          </button>

          <img
            src={project.image}
            alt={`${project.title} full preview`}
            className="
              max-w-6xl
              max-h-[85vh]
              w-auto
              h-auto
              rounded-xl
              shadow-2xl
              border
              border-slate-700
              object-contain
            "
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </>
  );
}

export default ProjectCard;