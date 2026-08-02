"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, tech, demo, github, image }) {
  return (
    <div
      className="
        rounded-xl border border-purple-400/20 bg-white/5 overflow-hidden
        hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
        transition duration-300 flex flex-col
      "
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 md:h-56 lg:h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs rounded-md bg-purple-600/20 text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {demo && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center gap-1 text-purple-400 hover:text-purple-200 text-sm transition"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 text-purple-400 hover:text-purple-200 text-sm transition"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
