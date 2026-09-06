// "use client";

// import Image from "next/image";
// import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

// export default function ProjectCard({
//   title,
//   description,
//   tech,
//   demo,
//   github,
//   image,
// }) {
//   const hasDemo = demo && demo !== "#";
//   const hasGitHub = github && github !== "#";

//   return (
//     <article
//       className="
//         group relative flex h-full flex-col overflow-hidden
//         rounded-3xl border border-white/10
//         bg-gradient-to-b from-white/[0.09] to-white/[0.03]
//         shadow-[0_20px_60px_rgba(0,0,0,0.35)]
//         transition-all duration-500
//         hover:-translate-y-2 hover:border-purple-400/40
//         hover:shadow-[0_25px_70px_rgba(126,34,206,0.22)]
//       "
//     >
//       {/* Hover glow */}
//       <div
//         className="
//           pointer-events-none absolute -right-20 -top-20 z-0
//           h-48 w-48 rounded-full bg-purple-600/20 blur-3xl
//           transition-all duration-500
//           group-hover:bg-purple-500/30
//         "
//       />

//       {/* Image */}
//       {image && (
//         <div className="relative h-52 w-full overflow-hidden bg-white/5">
//           <Image
//             src={image}
//             alt={`${title} project preview`}
//             fill
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//             className="
//               object-cover transition-transform duration-700
//               group-hover:scale-105
//             "
//           />

//           {/* Image overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#08050f] via-transparent to-transparent" />

//           {/* Project label */}
//           <div
//             className="
//               absolute left-5 top-5 rounded-full
//               border border-white/15 bg-black/50
//               px-3 py-1.5 text-[10px] font-bold uppercase
//               tracking-[0.2em] text-purple-200 backdrop-blur-md
//             "
//           >
//             Featured Project
//           </div>
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-10 flex flex-1 flex-col p-7">
//         <div className="mb-4 flex items-start justify-between gap-4">
//           <h3 className="text-xl font-bold leading-tight text-white transition-colors group-hover:text-purple-200">
//             {title}
//           </h3>

//           <ArrowUpRight
//             className="
//               mt-0.5 h-5 w-5 shrink-0 text-gray-600
//               transition-all duration-300
//               group-hover:-translate-y-1 group-hover:translate-x-1
//               group-hover:text-purple-400
//             "
//           />
//         </div>

//         <p className="mb-6 text-sm leading-6 text-gray-400">
//           {description}
//         </p>

//         {/* Technologies */}
//         <div className="mb-7 flex flex-wrap gap-2">
//           {tech.map((item) => (
//             <span
//               key={item}
//               className="
//                 rounded-full border border-purple-400/15
//                 bg-purple-500/10 px-3 py-1.5
//                 text-[11px] font-semibold text-purple-200
//                 transition-colors duration-300
//                 group-hover:border-purple-400/25
//                 group-hover:bg-purple-500/15
//               "
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Links */}
//         {(hasDemo || hasGitHub) && (
//           <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
//             {hasGitHub && (
//               <a
//                 href={github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`View ${title} on GitHub`}
//                 className="
//                   inline-flex items-center gap-2 rounded-xl
//                   border border-white/10 bg-white/[0.06]
//                   px-4 py-2.5 text-xs font-bold text-gray-200
//                   transition-all duration-300
//                   hover:border-purple-400/40 hover:bg-purple-500/15
//                   hover:text-white
//                 "
//               >
//                 <Github size={16} />
//                 GitHub
//               </a>
//             )}

//             {hasDemo && (
//               <a
//                 href={demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`Open ${title} live demo`}
//                 className="
//                   inline-flex items-center gap-2 rounded-xl
//                   bg-purple-600 px-4 py-2.5
//                   text-xs font-bold text-white
//                   shadow-[0_8px_25px_rgba(147,51,234,0.25)]
//                   transition-all duration-300
//                   hover:bg-purple-500
//                   hover:shadow-[0_10px_30px_rgba(147,51,234,0.4)]
//                 "
//               >
//                 <ExternalLink size={16} />
//                 Live Demo
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     </article>
//   );
// }









"use client";

import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  tech = [],
  demo,
  github,
  image,
}) {
  const hasDemo = Boolean(demo && demo !== "#");
  const hasGitHub = Boolean(github && github !== "#");

  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-white/[0.10]
        bg-[#0b0b10]
        shadow-[0_18px_50px_rgba(0,0,0,0.28)]
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-purple-400/30
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]
      "
    >
      {/* Subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Project image */}
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111118]">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover object-center
              transition-transform duration-700 ease-out
              group-hover:scale-[1.035]
            "
          />

          {/* Controlled image shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-black/10" />

          {/* Project type */}
          
        </div>
      )}

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        {/* Title */}
        <div className="mb-3 flex items-start justify-between gap-5">
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">
            {title}
          </h3>

          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full border border-white/10 bg-white/[0.04]
              text-gray-500 transition-all duration-300
              group-hover:border-purple-400/30
              group-hover:bg-purple-500/10
              group-hover:text-purple-300
            "
          >
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-6 text-gray-400">
          {description}
        </p>

        {/* Technology tags */}
        <div className="mb-7 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-md border border-white/[0.08]
                bg-white/[0.04] px-2.5 py-1.5
                text-[11px] font-medium text-gray-300
                transition-colors duration-300
                group-hover:border-purple-400/15
                group-hover:text-purple-200
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}
        {(hasGitHub || hasDemo) && (
          <div className="mt-auto flex items-center gap-3 border-t border-white/[0.08] pt-5">
            {hasGitHub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                className="
                  inline-flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-white/10
                  bg-white/[0.04] px-4 py-2.5
                  text-xs font-semibold text-gray-200
                  transition-all duration-300
                  hover:border-white/20 hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <Github size={16} />
                Source Code
              </a>
            )}

            {hasDemo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} live demo`}
                className="
                  inline-flex flex-1 items-center justify-center gap-2
                  rounded-lg bg-purple-600
                  px-4 py-2.5 text-xs font-semibold text-white
                  shadow-[0_8px_25px_rgba(147,51,234,0.18)]
                  transition-all duration-300
                  hover:bg-purple-500
                  hover:shadow-[0_10px_30px_rgba(147,51,234,0.28)]
                "
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}