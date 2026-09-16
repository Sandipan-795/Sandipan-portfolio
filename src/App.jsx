import profilePic from "./assets/profile.jpg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
  FaCode,
  FaBrain,
  FaDatabase,
  FaRobot,
  FaEye,
  FaLayerGroup,
  FaGraduationCap,
  FaFlask,
  FaPython,
  FaReact,
  FaGitAlt,
  FaChevronDown,
} from "react-icons/fa";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-cyan-400 text-xs md:text-sm font-bold tracking-[0.28em] uppercase mb-4">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
        {title}
      </h2>

      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="w-10 h-px bg-cyan-400/40" />
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <span className="w-20 h-px bg-cyan-400/40" />
      </div>

      {description && (
        <p className="text-gray-400 mt-6 leading-8 text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function GlassCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-3xl
        border border-white/[0.08]
        bg-white/[0.035]
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        transition-all duration-500
        hover:border-cyan-400/30
        hover:bg-white/[0.055]
        hover:shadow-[0_25px_100px_rgba(34,211,238,0.08)]
        ${className}
      `}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.035] via-transparent to-blue-500/[0.025] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function App() {
  const skills = {
    programming: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "React.js",
      "HTML",
      "CSS",
      "Flask",
      "REST APIs",
    ],
    ai: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Reinforcement Learning",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
    vision: [
      "Computer Vision",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "Pattern Recognition",
      "Data-driven Learning",
    ],
    databases: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Git",
      "GitHub",
      "Jupyter",
      "Google Colab",
      "VS Code",
    ],
  };

  const projects = [
    {
      number: "01",
      category: "AI • ML • NLP",
      title: "Fake News Detection",
      description:
        "Machine learning and NLP-based system for classifying news content through text preprocessing, feature extraction, and supervised learning.",
      technologies: ["Python", "NLP", "Scikit-learn", "Flask"],
      icon: <FaBrain />,
    },
    {
      number: "02",
      category: "COMPUTER VISION",
      title: "Face Detection Attendance System",
      description:
        "Computer vision-based attendance system using face detection and recognition techniques to automate student identification and attendance recording.",
      technologies: ["Python", "OpenCV", "Face Recognition", "SQLite"],
      icon: <FaEye />,
    },
    {
      number: "03",
      category: "FULL-STACK • AI",
      title: "AI Attendance Website",
      description:
        "Full-stack attendance platform integrating a web interface with AI-based face detection for authentication, attendance management, and academic workflows.",
      technologies: ["React", "Flask", "OpenCV", "REST API"],
      icon: <FaLayerGroup />,
    },
    {
      number: "04",
      category: "AI • NLP",
      title: "Personalized AI Chatbot",
      description:
        "AI chatbot project exploring natural language processing and conversational interaction to provide personalized responses and intelligent user assistance.",
      technologies: ["Python", "NLP", "Machine Learning", "AI"],
      icon: <FaRobot />,
    },
    {
      number: "05",
      category: "AI • COMPUTER VISION",
      title: "Computer Vision Research",
      description:
        "Research-oriented work involving image processing, computer vision, deep learning, and intelligent visual analysis for AI-driven applications.",
      technologies: ["Deep Learning", "CNN", "OpenCV", "AI"],
      icon: <FaFlask />,
    },
    {
      number: "06",
      category: "SOFTWARE • SYSTEMS",
      title: "Digital Voting System",
      description:
        "Academic software project focused on developing a digital voting workflow with user interaction, data handling, and structured application logic.",
      technologies: ["Python", "Database", "Software Development"],
      icon: <FaCode />,
    },
  ];

  const researchAreas = [
    {
      icon: <FaEye />,
      number: "01",
      title: "Computer Vision",
      text: "Image processing, face recognition, object detection, pattern recognition, and intelligent real-time vision systems.",
    },
    {
      icon: <FaBrain />,
      number: "02",
      title: "Machine Learning & Deep Learning",
      text: "Data-driven learning algorithms, predictive modeling, neural networks, representation learning, and intelligent computational systems.",
    },
    {
      icon: <FaRobot />,
      number: "03",
      title: "Natural Language Processing",
      text: "Text classification, language understanding, intelligent conversational systems, and data-driven approaches to NLP.",
    },
    {
      icon: <FaLayerGroup />,
      number: "04",
      title: "Intelligent Systems",
      text: "Intelligent computational methods, reinforcement learning, optimization, decision-making, and adaptive AI systems.",
    },
    {
      icon: <FaDatabase />,
      number: "05",
      title: "Advanced Computing",
      text: "Scalable software systems, advanced computational methods, efficient algorithms, and reliable AI-enabled computing systems.",
    },
    {
      icon: <FaFlask />,
      number: "06",
      title: "AI for Real-World Applications",
      text: "Applying AI and machine learning methods to practical problems through robust, reliable, and deployable intelligent software systems.",
    },
  ];

  const certifications = [
    {
      icon: <FaPython />,
      title: "Programming with Python",
      provider: "Internshala",
      detail: "Top Performer",
    },
    {
      icon: <FaRobot />,
      title: "IBM Watson Studio",
      provider: "IBM",
      detail: "Professional Certification",
    },
    {
      icon: <FaCode />,
      title: "Python Programming Internship",
      provider: "InternPe",
      detail: "Internship Certification",
    },
    {
      icon: <FaLayerGroup />,
      title: "Web Development Internship",
      provider: "InternPe",
      detail: "Internship Certification",
    },
    {
      icon: <FaDatabase />,
      title: "Inferential Statistical Analysis with Python",
      provider: "Professional Course",
      detail: "Statistics & Data Analysis",
    },
    {
      icon: <FaBrain />,
      title: "NLP – Neuro Linguistic Programming",
      provider: "Alison",
      detail: "Professional Course",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white selection:bg-cyan-400 selection:text-slate-950">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />
        <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[140px]" />
        <div className="absolute bottom-0 left-[30%] w-[500px] h-[400px] rounded-full bg-indigo-600/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_100%)]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
          <div className="h-16 px-5 md:px-7 rounded-2xl border border-white/[0.08] bg-slate-950/65 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.3)] flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-slate-950 font-black shadow-[0_0_25px_rgba(34,211,238,0.25)] group-hover:scale-105 transition">
                SB
              </div>

              <div className="hidden sm:block">
                <p className="font-bold text-white leading-none">
                  Sandipan Bairagi
                </p>
                <p className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mt-1">
                  AI Engineer
                </p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-7 text-sm text-gray-400">
              {[
                ["About", "about"],
                ["Education", "education"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Research", "research"],
                ["Certifications", "certifications"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
            >
              Resume
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center px-5 md:px-10 pt-28 pb-16"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300">
                AI • Computer Vision • Intelligent Systems
              </span>
            </div>

            <p className="text-gray-500 font-medium mb-3">Hello, I&apos;m</p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-[-0.05em] leading-[0.95]">
              Sandipan
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Bairagi
              </span>
            </h1>

            <div className="flex items-center gap-4 mt-7">
              <div className="h-px w-12 bg-cyan-400/60" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                AI Engineer <span className="text-cyan-400 mx-1">•</span>{" "}
                Computer Vision Developer
              </h2>
            </div>

            <p className="max-w-2xl mt-7 text-gray-400 text-base md:text-lg leading-8">
              Computer Science and Engineering graduate specializing in
              Artificial Intelligence, with interests spanning Machine Learning,
              Deep Learning, NLP, Computer Vision, and Advanced Computing.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "NLP",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs md:text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.18)] hover:bg-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 font-semibold text-white hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Projects
                <FaArrowRight className="text-cyan-400 group-hover:translate-x-1 transition" />
              </a>
            </div>

            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://github.com/Sandipan-795"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.035] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sandipan-bairagi-975280264"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.035] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:bairagisandipan32@gmail.com"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.035] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="absolute w-[300px] md:w-[430px] h-[300px] md:h-[430px] rounded-full bg-cyan-400/[0.07] blur-[90px]" />

            <motion.div
              className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-cyan-400/[0.08]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-blue-400/[0.12]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="absolute -top-2 right-[8%] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />
            <div className="absolute bottom-[12%] left-[5%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,1)]" />

            <motion.div
              className="relative w-[290px] h-[290px] md:w-[390px] md:h-[390px] rounded-full p-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent shadow-[0_0_80px_rgba(34,211,238,0.18)]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full p-2 bg-[#020617]">
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                  <img
                    src={profilePic}
                    alt="Sandipan Bairagi"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-cyan-400/10" />

                  <motion.div
                    className="absolute top-0 -left-1/2 w-1/3 h-full bg-white/20 blur-2xl rotate-12"
                    animate={{ left: ["-40%", "140%"] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-2 right-[8%] md:right-0 rounded-2xl border border-white/10 bg-slate-950/75 backdrop-blur-xl px-5 py-4 shadow-2xl">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
                Focus
              </p>
              <p className="text-sm font-bold text-cyan-300 mt-1">
                Intelligent Systems
              </p>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>
          <FaChevronDown />
        </motion.a>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section id="about" className="relative z-10 py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Profile"
            title="About Me"
            description="Building intelligent systems at the intersection of artificial intelligence, software engineering, and real-world applications."
          />

          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-7">
            <GlassCard className="p-8 md:p-11">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                  <FaBrain />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Who I Am
                  </p>
                  <p className="font-bold text-white mt-1">
                    Computer Science & AI
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-8">
                I am a Computer Science and Engineering graduate specializing in
                Artificial Intelligence, with a strong interest in Artificial
                Intelligence, Machine Learning, Deep Learning, and Computer
                Vision. I enjoy developing intelligent systems that address
                real-world problems through automation, data-driven learning,
                and practical software solutions.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-8 mt-6">
                My academic and project experience includes Computer Vision,
                Natural Language Processing, Deep Learning, Reinforcement
                Learning, intelligent systems, and AI-powered applications. I am
                particularly interested in building reliable, scalable, and
                deployable AI systems while exploring advanced computing and
                research-oriented applications.
              </p>
            </GlassCard>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <GlassCard className="p-7" delay={0.1}>
                <FaGraduationCap className="text-2xl text-cyan-400 mb-5" />
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Education
                </p>
                <h3 className="text-xl font-bold mt-2">B.Tech CSE — AI</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Jain (Deemed-to-be University)
                </p>
              </GlassCard>

              <GlassCard className="p-7" delay={0.2}>
                <FaFlask className="text-2xl text-cyan-400 mb-5" />
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Direction
                </p>
                <h3 className="text-xl font-bold mt-2">MSc & Research</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Intelligent & scalable computing
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================= */}

      <section id="education" className="relative z-10 py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Academic Background"
            title="Education"
            description="An academic foundation in computer science, artificial intelligence, mathematics, and computational technologies."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" />

            <div className="space-y-8">
              {/* BTECH */}

              <motion.div
                className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="md:text-right mb-4 md:mb-0">
                  <span className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300 tracking-wide">
                    2022 — 2026
                  </span>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#020617] shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

                <GlassCard className="p-8 md:p-9 border-cyan-400/20">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-cyan-400 font-bold uppercase tracking-[0.2em]">
                        Bachelor&apos;s Degree
                      </p>

                      <h3 className="text-2xl md:text-3xl font-black mt-3">
                        B.Tech in Computer Science & Engineering
                      </h3>

                      <p className="text-cyan-300 font-semibold mt-2">
                        Specialization in Artificial Intelligence
                      </p>
                    </div>

                    <FaGraduationCap className="text-3xl text-cyan-400 shrink-0" />
                  </div>

                  <div className="mt-7 pt-6 border-t border-white/[0.08]">
                    <p className="font-semibold text-gray-200">
                      Jain (Deemed-to-be University)
                    </p>

                    <p className="text-gray-500 mt-1">Bengaluru, India</p>

                    <div className="inline-flex items-center gap-2 mt-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Degree Completed • First Class
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* HSC */}

              <motion.div
                className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <GlassCard className="p-8 md:p-9 md:col-start-1">
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-[0.2em]">
                    Higher Secondary
                  </p>

                  <h3 className="text-2xl font-black mt-3">
                    Higher Secondary Certificate
                  </h3>

                  <p className="text-cyan-300 font-semibold mt-2">Science</p>

                  <div className="mt-7 pt-6 border-t border-white/[0.08]">
                    <p className="font-semibold text-gray-200">
                      Govt. M. M. City College
                    </p>

                    <p className="text-gray-500 mt-1">Bangladesh</p>

                    <span className="inline-block mt-5 text-sm text-gray-500">
                      Completed • 2020
                    </span>
                  </div>
                </GlassCard>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-500 border-4 border-[#020617]" />

                <div className="md:text-left mt-4 md:mt-0 md:col-start-2">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold text-gray-400">
                    2020
                  </span>
                </div>
              </motion.div>

              {/* SSC */}

              <motion.div
                className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="md:text-right mb-4 md:mb-0">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold text-gray-400">
                    2018
                  </span>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-500 border-4 border-[#020617]" />

                <GlassCard className="p-8 md:p-9">
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-[0.2em]">
                    Secondary
                  </p>

                  <h3 className="text-2xl font-black mt-3">
                    Secondary School Certificate
                  </h3>

                  <p className="text-cyan-300 font-semibold mt-2">Science</p>

                  <div className="mt-7 pt-6 border-t border-white/[0.08]">
                    <p className="font-semibold text-gray-200">
                      Khulna Zilla School
                    </p>

                    <p className="text-gray-500 mt-1">Bangladesh</p>

                    <span className="inline-block mt-5 text-sm text-gray-500">
                      Completed • 2018
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section id="skills" className="relative z-10 py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Technical Expertise"
            title="Skills & Technologies"
            description="A practical technology stack developed through academic projects, AI/ML work, software development, and hands-on experimentation."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                title: "Programming & Development",
                icon: <FaCode />,
                items: skills.programming,
              },
              {
                title: "AI & Machine Learning",
                icon: <FaBrain />,
                items: skills.ai,
              },
              {
                title: "Computer Vision & Data",
                icon: <FaEye />,
                items: skills.vision,
              },
              {
                title: "Databases & Tools",
                icon: <FaDatabase />,
                items: skills.databases,
              },
            ].map((group, index) => (
              <GlassCard
                key={group.title}
                className="p-7 md:p-8"
                delay={index * 0.08}
              >
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center text-xl text-cyan-400">
                    {group.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="group/skill rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 text-sm text-gray-300 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] transition-all duration-300"
                    >
                      <span className="mr-2 text-cyan-400/50 group-hover/skill:text-cyan-400">
                        •
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section id="projects" className="relative z-10 py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects"
            description="Academic and practical projects spanning Artificial Intelligence, Machine Learning, Computer Vision, NLP, and software systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <GlassCard
                key={project.number}
                className="p-7 md:p-8 group"
                delay={index * 0.07}
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center text-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>

                  <span className="font-mono text-sm text-gray-600">
                    /{project.number}
                  </span>
                </div>

                <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
                  {project.category}
                </p>

                <h3 className="text-2xl font-black mt-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-white/[0.08]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-gray-500 bg-white/[0.035] border border-white/[0.06] px-2.5 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH
      ========================================================= */}

      <section id="research" className="relative z-10 py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Research Direction"
            title="Research Interests"
            description="Areas of Artificial Intelligence and Computing that I am interested in exploring through advanced study, research, and practical applications."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <GlassCard
                key={area.number}
                className="p-7 md:p-8 group"
                delay={index * 0.07}
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center text-xl text-cyan-400 group-hover:rotate-6 transition-transform duration-300">
                    {area.icon}
                  </div>

                  <span className="font-mono text-sm text-gray-600">
                    {area.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4 text-sm md:text-base">
                  {area.text}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATIONS
      ========================================================= */}

      <section
        id="certifications"
        className="relative z-10 py-28 px-5 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Professional Development"
            title="Certifications"
            description="Professional certifications, internships, and courses supporting my technical development across programming, AI, data, and software engineering."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <GlassCard
                key={cert.title}
                className="p-7 md:p-8 group"
                delay={index * 0.07}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center text-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-black mt-7 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-gray-300 font-medium mt-3">
                  {cert.provider}
                </p>

                <p className="text-gray-500 text-sm mt-1">{cert.detail}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section id="contact" className="relative z-10 py-28 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Connect"
            description="Interested in MSc opportunities, research collaborations, internships, or AI-focused projects? Feel free to reach out."
          />

          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-5">
              <a
                href="mailto:bairagisandipan32@gmail.com"
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
              >
                <FaEnvelope className="text-2xl text-cyan-400 mb-5" />

                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Email
                </p>

                <p className="text-gray-300 text-sm mt-3 break-all group-hover:text-cyan-300 transition">
                  bairagisandipan32@gmail.com
                </p>
              </a>

              <a
                href="https://github.com/Sandipan-795"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
              >
                <FaGithub className="text-2xl text-cyan-400 mb-5" />

                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  GitHub
                </p>

                <p className="text-gray-300 text-sm mt-3 group-hover:text-cyan-300 transition">
                  github.com/Sandipan-795
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/sandipan-bairagi-975280264"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
              >
                <FaLinkedin className="text-2xl text-cyan-400 mb-5" />

                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  LinkedIn
                </p>

                <p className="text-gray-300 text-sm mt-3 break-all group-hover:text-cyan-300 transition">
                  linkedin.com/in/sandipan-bairagi-975280264
                </p>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="mailto:bairagisandipan32@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 font-semibold text-white hover:border-cyan-400/30 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06] py-10 px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-white">Sandipan Bairagi</p>
            <p className="text-gray-600 text-sm mt-1">
              AI Engineer • Computer Vision Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Sandipan-795"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sandipan-bairagi-975280264"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bairagisandipan32@gmail.com"
              className="text-gray-500 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-gray-600 text-xs">
            © 2026 Sandipan Bairagi. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
