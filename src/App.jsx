import profilePic from "./assets/profile.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Sandipan</h1>

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
                  href="YOUR_GITHUB_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="YOUR_LINKEDIN_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:YOUR_EMAIL"
                  className="hover:scale-110 transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="
  w-80
  h-80
  rounded-full
  border-4
  border-cyan-400
  overflow-hidden
  shadow-[0_0_60px_rgba(34,211,238,0.6)]
  "
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
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
              student passionate about Artificial Intelligence, Machine
              Learning, Deep Learning, and Computer Vision. I enjoy building
              intelligent systems that solve real-world problems through
              automation and data-driven decision making. My primary interests
              include Computer Vision, Face Recognition Systems, Generative AI,
              Deep Learning, and AI-powered web applications. I am currently
              seeking opportunities for MSc programs, research collaborations,
              internships, and AI-focused software engineering roles.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Education Section */}

      <section id="education" className="py-24 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="
      text-5xl
      font-bold
      text-center
      text-cyan-400
      mb-16
      "
          >
            Education
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SSC */}

            <motion.div
              className="
  bg-white/5
  backdrop-blur-lg
  border
  border-white/10
  rounded-3xl
  p-8
  hover:scale-105
  hover:hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
  transition
  duration-300
  "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                Secondary School Certificate (SSC)
              </h3>

              <p className="mt-3 text-gray-300">Khulna Zilla School</p>

              <p className="text-gray-400 mt-2">Passing Year: 2018</p>
              <p className="mt-3 text-gray-300">Science Department</p>

              <div className="mt-5 border-t border-gray-700 pt-4">
                <p className="text-cyan-400 font-semibold">GPA</p>

                <p className="text-2xl font-bold mt-2">5.00 / 5.00</p>
              </div>
            </motion.div>

            {/* HSC */}

            <motion.div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:scale-105
        hover:hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
        transition
        duration-300
        "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                Higher Secondary Certificate (HSC)
              </h3>

              <p className="mt-3 text-gray-300">Govt. M. M. City College</p>
              <p className="text-gray-400 mt-2">Passing Year: 2020</p>
              <p className="mt-3 text-gray-300">Science Department</p>

              <div className="mt-5 border-t border-gray-700 pt-4">
                <p className="text-cyan-400 font-semibold">GPA</p>

                <p className="text-2xl font-bold mt-2">5.00 / 5.00</p>
              </div>
            </motion.div>

            {/* B.Tech */}

            <motion.div
              className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:scale-105
        hover:hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
        transition
        duration-300
        "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                B.Tech in Computer Science & Engineering (AI)
              </h3>

              <p className="mt-3 text-gray-300">Jain University</p>

              <p className="text-gray-400 mt-2">2022 – 2026</p>

              <p className="mt-3 text-gray-300">
                Specialization in Artificial Intelligence.
              </p>

              <div className="mt-5 border-t border-gray-700 pt-4">
                <p className="text-cyan-400 font-semibold">Current CGPA</p>

                <p className="text-2xl font-bold mt-2">XX / 10.00</p>

                <p className="text-gray-400 text-sm mt-1">Update Later</p>
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
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Face Detection Attendance System
              </h3>

              <p className="text-gray-300 leading-7">
                AI-powered attendance monitoring system using OpenCV and face
                recognition technology for automated student attendance
                tracking.
              </p>

              <div className="mt-6">
                <span className="text-sm text-cyan-300">
                  Python • OpenCV • SQLite
                </span>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                AI Attendance Website
              </h3>

              <p className="text-gray-300 leading-7">
                Full-stack attendance platform supporting teachers and students
                with face detection login and attendance management.
              </p>

              <div className="mt-6">
                <span className="text-sm text-cyan-300">
                  React • Flask • OpenCV
                </span>
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
                Computer Vision Research
              </h3>

              <p className="text-gray-300 leading-7">
                Research and development work focused on image processing,
                object detection, and machine learning applications.
              </p>

              <div className="mt-6">
                <span className="text-sm text-cyan-300">
                  Deep Learning • CNN • AI
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
      <section id="contact" className="py-24 px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-cyan-400 mb-8">Contact</h2>

          <p className="text-gray-300 text-lg mb-10">
            Interested in MSc opportunities, research collaborations,
            internships, or AI projects? Feel free to reach out.
          </p>

          <div className="space-y-4 text-lg">
            <p>📧 your.email@example.com</p>

            <p>📍 India</p>
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
            professional opportunities? Feel free to connect with me.
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

              <p className="mt-4 text-gray-300">your-email@example.com</p>
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
                github.com/yourusername
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
                linkedin.com/in/yourprofile
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
