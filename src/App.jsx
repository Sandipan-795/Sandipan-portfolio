import profilePic from "./assets/profile.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">SB</h1>

          <ul className="hidden md:flex gap-8 text-white">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#education" className="hover:text-cyan-400 transition">
                Education
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Sandipan <span className="text-cyan-400">Bairagi</span>
            </h1>

            <h2 className="text-2xl text-gray-300 mt-5">
              AI Engineer • Computer Vision Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Passionate about Artificial Intelligence, Machine Learning, Deep
              Learning, and Computer Vision.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="/resume.pdf"
                download
                className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <div className="flex gap-5 text-3xl text-cyan-400">
                <a
                  href="https://github.com/Sandipan-795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/sandipan-bairagi-975280264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:bairagisandipan32@gmail.com"
                  className="hover:scale-110 transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* OUTER CYBER GLOW */}
            <div
              className="
      absolute
      w-[420px]
      h-[420px]
      rounded-full
      bg-cyan-400/10
      blur-3xl
      animate-pulse
    "
            ></div>

            {/* ROTATING NEON RING */}
            <motion.div
              className="
      absolute
      w-[340px]
      h-[340px]
      rounded-full
      border-[3px]
      border-dashed
      border-cyan-400/50
    "
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* SECOND RING */}
            <motion.div
              className="
      absolute
      w-[370px]
      h-[370px]
      rounded-full
      border
      border-cyan-300/20
    "
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* PARTICLES */}
            <motion.span
              className="
      absolute
      top-10
      left-10
      w-3
      h-3
      bg-cyan-400
      rounded-full
      shadow-[0_0_20px_rgba(34,211,238,1)]
    "
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <motion.span
              className="
      absolute
      bottom-12
      right-12
      w-2
      h-2
      bg-blue-400
      rounded-full
      shadow-[0_0_20px_rgba(59,130,246,1)]
    "
              animate={{
                y: [0, 20, 0],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <motion.span
              className="
      absolute
      top-20
      right-20
      w-2
      h-2
      bg-cyan-300
      rounded-full
      shadow-[0_0_20px_rgba(103,232,249,1)]
    "
              animate={{
                x: [0, 15, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* MAIN IMAGE CONTAINER */}
            <motion.div
              className="
      relative
      w-80
      h-80
      rounded-full
      overflow-hidden
      border-4
      border-cyan-400
      shadow-[0_0_80px_rgba(34,211,238,0.7)]
    "
              animate={{
                y: [0, -12, 0],
                opacity: [1, 0.2, 1],
                scale: [1, 0.97, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* AI HOLOGRAM OVERLAY */}
              <div
                className="
        absolute
        inset-0
        bg-gradient-to-b
        from-cyan-400/10
        via-transparent
        to-cyan-400/10
        animate-pulse
        z-20
      "
              ></div>

              {/* MOVING LIGHT BEAM */}
              <motion.div
                className="
        absolute
        top-0
        -left-20
        w-24
        h-full
        bg-white/20
        blur-xl
        rotate-12
        z-30
      "
                animate={{
                  left: ["-20%", "120%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* CYBER GRID EFFECT */}
              <div
                className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:20px_20px]
        opacity-20
        z-10
      "
              ></div>

              {/* PROFILE IMAGE */}
              <img
                src={profilePic}
                alt="Profile"
                className="
        relative
        z-0
        w-full
        h-full
        object-cover
      "
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* About Section */}

      <section id="about" className="py-24 px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="
  text-5xl
  font-bold
  text-center
  text-cyan-400
  mb-12
  "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="
  bg-white/5
  backdrop-blur-lg
  border
  border-white/10
  rounded-3xl
  p-10
  shadow-lg
  "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="
        text-lg
        text-gray-300
        leading-9
        "
            >
              I am a Computer Science and Engineering (Artificial Intelligence)
              student with a strong passion for building intelligent systems
              powered by Machine Learning, Deep Learning, and Computer Vision. I
              specialize in creating AI-driven solutions such as face
              recognition and smart automation systems that solve real-world
              problems with precision and impact. I am actively seeking
              opportunities in research collaborations, internships, and
              AI-focused roles to contribute to innovative advancements in
              Artificial Intelligence.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Education Section */}

      <section
        id="education"
        className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              My Academic Journey & Achievements
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* SSC */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
          group
          relative
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          overflow-hidden
          transition-all
          duration-500
          hover:border-cyan-400
          hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
        "
            >
              {/* Top Glow Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              {/* Icon */}
              <div className="text-5xl mb-6">🎓</div>

              <h3 className="text-2xl font-bold text-cyan-400 leading-snug">
                Secondary School Certificate (SSC)
              </h3>

              <p className="mt-4 text-gray-300 text-lg">Khulna Zilla School</p>

              <div className="mt-4 space-y-2">
                <p className="text-gray-400">
                  Passing Year: <span className="text-white">2018</span>
                </p>

                <p className="text-gray-400">
                  Department: <span className="text-white">Science</span>
                </p>
              </div>
            </motion.div>

            {/* HSC */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
          group
          relative
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          overflow-hidden
          transition-all
          duration-500
          hover:border-cyan-400
          hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
        "
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              <div className="text-5xl mb-6">📘</div>

              <h3 className="text-2xl font-bold text-cyan-400 leading-snug">
                Higher Secondary Certificate (HSC)
              </h3>

              <p className="mt-4 text-gray-300 text-lg">
                Govt. M. M. City College
              </p>

              <div className="mt-4 space-y-2">
                <p className="text-gray-400">
                  Passing Year: <span className="text-white">2020</span>
                </p>

                <p className="text-gray-400">
                  Department: <span className="text-white">Science</span>
                </p>
              </div>
            </motion.div>

            {/* B.Tech */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
          group
          relative
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          overflow-hidden
          transition-all
          duration-500
          hover:border-cyan-400
          hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
        "
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              <div className="text-5xl mb-6">💻</div>

              <h3 className="text-2xl font-bold text-cyan-400 leading-snug">
                B.Tech in CSE (AI)
              </h3>

              <p className="mt-4 text-gray-300 text-lg">Jain University</p>

              <div className="mt-4 space-y-2">
                <p className="text-gray-400">
                  Duration: <span className="text-white">2022 – 2026</span>
                </p>

                <p className="text-gray-400">
                  Specialization:
                  <span className="text-white"> Artificial Intelligence</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Section */}

      <section id="skills" className="py-24 px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2
            className="
      text-5xl
      font-bold
      text-center
      text-cyan-400
      mb-16
      "
          >
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {[
              "Python",
              "Machine Learning",
              "Deep Learning",
              "Computer Vision",
              "OpenCV",
              "Flask",
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "SQL",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          rounded-2xl
          p-6
          text-center
          hover:scale-105
          hover:border-cyan-400
          transition
          duration-300
          cursor-pointer
          "
              >
                <h3
                  className="
            text-lg
            font-semibold
            text-gray-200
            "
                >
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}

      <section id="projects" className="py-24 px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="
    bg-white/5
    backdrop-blur-lg
    border
    border-white/10
    rounded-3xl
    p-8
    hover:-translate-y-2
    hover:border-cyan-400
    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
    transition
    duration-300
  "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-6">🗳️</div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Digital Voting System with Anti-Duplicate Voting Mechanism
              </h3>

              <p className="text-gray-300 leading-7">
                Secure online voting system with anti-duplicate voting mechanism
                ensuring one user, one vote integrity and reliable election
                process.
              </p>

              <div className="mt-6">
                <span className="text-sm text-cyan-300">
                  Python • Flask • Database Security
                </span>
              </div>

              {/* Publication Info */}
              <div className="mt-6 border-t border-gray-700 pt-5">
                <p className="text-sm text-gray-400 mb-4">
                  Published in IRJIET
                </p>

                <a
                  href="https://irjiet.com/Volume-10/Issue-4-April-2026/104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        inline-block
        bg-cyan-400
        text-black
        px-5
        py-2
        rounded-full
        font-semibold
        hover:bg-cyan-300
        transition
        duration-300
      "
                >
                  Read Publication →
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="
    bg-white/5
    backdrop-blur-lg
    border
    border-white/10
    rounded-3xl
    p-8
    hover:-translate-y-2
    hover:border-cyan-400
    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
    transition
    duration-300
  "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-6">🤖</div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Personalized AI: Recommendation Based
              </h3>

              <p className="text-gray-300 leading-7">
                AI-powered personalized assistant designed to understand user
                behavior, provide intelligent responses, and automate daily
                tasks.
              </p>

              <div className="mt-6">
                <span className="text-sm text-cyan-300">
                  Python • NLP • Machine Learning
                </span>
              </div>

              {/* Publication Info */}
              <div className="mt-6 border-t border-gray-700 pt-5">
                <p className="text-sm text-gray-400 mb-4">
                  Published in IJMREST
                </p>

                <a
                  href="https://www.ijmrset.com/upload/19_Personalized%20AI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        inline-block
        bg-cyan-400
        text-black
        px-5
        py-2
        rounded-full
        font-semibold
        hover:bg-cyan-300
        transition
        duration-300
      "
                >
                  Read Publication →
                </a>
              </div>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Attendance Monitoring System
              </h3>

              <p className="text-gray-300 leading-7">
                Python-based attendance system using computer vision techniques
                for automated student attendance tracking and record management.
              </p>

              <div className="mt-6">
                <span className="text-sm text-cyan-300">
                  Python • OpenCV • Computer Vision
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}

      <section id="research" className="py-24 px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2
            className="
      text-5xl
      font-bold
      text-center
      text-cyan-400
      mb-6
      "
          >
            Research Interests
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Areas of Artificial Intelligence and Computing that I am passionate
            about exploring through research and advanced studies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-cyan-400 transition duration-300">
              <h3 className="text-2xl font-bold text-cyan-400">
                Computer Vision
              </h3>

              <p className="mt-4 text-gray-300">
                Face recognition, object detection, image analysis, and
                real-time vision systems.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-cyan-400 transition duration-300">
              <h3 className="text-2xl font-bold text-cyan-400">
                Machine Learning
              </h3>

              <p className="mt-4 text-gray-300">
                Predictive modeling, intelligent systems, data-driven decision
                making, and optimization.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-cyan-400 transition duration-300">
              <h3 className="text-2xl font-bold text-cyan-400">
                Human-Centered AI
              </h3>

              <p className="mt-4 text-gray-300">
                AI systems that enhance communication, emotional well-being, and
                user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}

      <section id="certifications" className="py-24 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2
            className="
      text-5xl
      font-bold
      text-center
      text-cyan-400
      mb-6
      "
          >
            Certifications
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Professional certifications and courses that strengthen my knowledge
            in Artificial Intelligence, Machine Learning, and Software
            Development.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Certificate 1 */}

            <div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:scale-105
        hover:border-cyan-400
        transition
        duration-300
        "
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                Certificate Name
              </h3>

              <p className="mt-4 text-gray-300">Platform Name</p>

              <p className="text-gray-400 mt-2">Year: XXXX</p>
            </div>

            {/* Certificate 2 */}

            <div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:scale-105
        hover:border-cyan-400
        transition
        duration-300
        "
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                Certificate Name
              </h3>

              <p className="mt-4 text-gray-300">Platform Name</p>

              <p className="text-gray-400 mt-2">Year: XXXX</p>
            </div>

            {/* Certificate 3 */}

            <div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:scale-105
        hover:border-cyan-400
        transition
        duration-300
        "
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                Certificate Name
              </h3>

              <p className="mt-4 text-gray-300">Platform Name</p>

              <p className="text-gray-400 mt-2">Year: XXXX</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}

      <section id="contact" className="py-24 px-8 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="
      text-5xl
      font-bold
      text-cyan-400
      mb-6
      "
          >
            Contact Me
          </h2>

          <p className="text-gray-400 mb-16">
            Interested in collaborating, discussing research, or exploring
            professional opportunities. Feel free to connect with me.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}

            <div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-cyan-400
        transition
        duration-300
        "
            >
              <h3 className="text-xl font-bold text-cyan-400">Email</h3>

              <p className="mt-4 text-gray-300">bairagisandipan32@gmail.com</p>
            </div>

            {/* GitHub */}

            <div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-cyan-400
        transition
        duration-300
        "
            >
              <h3 className="text-xl font-bold text-cyan-400">GitHub</h3>

              <p className="mt-4 text-gray-300 break-all">
                https://github.com/Sandipan-795
              </p>
            </div>

            {/* LinkedIn */}

            <div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-cyan-400
        transition
        duration-300
        "
            >
              <h3 className="text-xl font-bold text-cyan-400">LinkedIn</h3>

              <p className="mt-4 text-gray-300 break-all">
                https://www.linkedin.com/in/sandipan-bairagi-975280264
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <button
              className="
        bg-cyan-400
        text-black
        px-8
        py-3
        rounded-full
        font-semibold
        hover:scale-105
        transition
        "
            >
              Download Resume
            </button>

            <button
              className="
        border
        border-cyan-400
        px-8
        py-3
        rounded-full
        hover:bg-cyan-400
        hover:text-black
        transition
        "
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}

      <footer className="py-8 text-center border-t border-slate-800">
        <p className="text-gray-500">
          © 2026 Sandipan Bairagi. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
