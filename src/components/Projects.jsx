"use client";

import ProjectCard from "./ProjectCard";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Book Recommender System",
      description:
        "Machine learning system that suggests books using collaborative filtering and NLP techniques.",
      tech: ["Python", "scikit-learn", "React"],
      demo: "#",
      github: "#",
      image: "/",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack Next.js and Node.js/Prisma application with product listings, cart, and secure checkout.",
      tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
      demo: "#",
      github: "#",
      image: "/",
    },
    {
      title: "Stock Price Predictor",
      description:
        "Time series forecasting model using TensorFlow to predict stock market trends.",
      tech: ["Python", "TensorFlow", "Pandas"],
      demo: "#",
      github: "#",
      image: "/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-black text-gray-200 py-24 lg:py-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          A selection of work showcasing full-stack apps, ML models, and
          experiments.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>


        
      </div>

      

    </section>
  );
}
