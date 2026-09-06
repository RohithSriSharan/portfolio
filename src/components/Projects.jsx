"use client";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Cortex — RAG Document Q&A",
      description:
        "Document Q&A application supporting PDF, Markdown, and TXT uploads, with sentence-aware chunking, vector retrieval, source traceability, and evaluated retrieval performance.",
      tech: [
        "Python",
        "Sentence Transformers",
        "ChromaDB",
        "Groq",
        "Streamlit",
        "Pytest",
      ],
      demo: "https://repomind-ceecagubbgpx22w6x7c9xx.streamlit.app/",
      github: "https://github.com/RohithSriSharan/RepoMind",
      image: "/cortex.png",
    },
    {
      title: "Sentiment Classification — MLOps Pipeline",
      description:
        "Seven-stage reproducible ML pipeline using DVC, TF-IDF, and model comparison. Achieved 90.36% accuracy with Linear SVM across 39,665 reviews.",
      tech: [
        "Python",
        "scikit-learn",
        "DVC",
        "MLflow",
        "AWS S3",
        "GitHub Actions",
      ],
      demo: "#",
      github: "https://github.com/RohithSriSharan/ML-Ops-End-to-End",
      image: "/sentiment.png",
    },
    {
      title: "Computer Vision — Face Matching",
      description:
        "ViT-based face-matching system that generates image embeddings and compares faces using cosine similarity, mean-pooled reference embeddings, and configurable thresholds.",
      tech: [
        "Python",
        "PyTorch",
        "Hugging Face",
        "Vision Transformer",
        "Cosine Similarity",
      ],
      demo: "#",
      github:
        "https://github.com/RohithSriSharan/ML-Projects/tree/main/face-recognition",
      image: "/face_matching.png",
    },
    {
      title: "Cat vs Dog Image Classifier",
      description:
        "CNN image classifier built from scratch with TensorFlow/Keras, data augmentation, and separate training, validation, and test sets, achieving 80.24% test accuracy.",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNN",
        "Computer Vision",
      ],
      demo: "#",
      github:
        "https://github.com/RohithSriSharan/ML-Projects/tree/main/image_cnn",
      image: "/image_classifier.png",
    },
    {
      title: "Art Evo — Full-Stack E-commerce Platform",
      description:
        "Production e-commerce platform for 3D-printed art and decor, featuring authentication, cart, wishlist, checkout, seller operations, Razorpay payments, and live order tracking.",
      tech: [
        "Next.js",
        "TypeScript",
        "Clerk",
        "Razorpay",
        "GitHub Actions",
        "Vercel",
      ],
      demo: "https://artevostore.in/",
      github: "",
      image: "/art_evo.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-24 overflow-hidden bg-black py-24 text-gray-200 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          {/* <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
            Selected Work
          </p> */}

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
             <span className="text-purple-400">Projects</span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Applied ML, AI, and software-engineering projects covering RAG,
            NLP, computer vision, evaluation, reproducible pipelines, and
            production full-stack development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}