import { motion } from 'framer-motion'
import './Experiences.css'

export default function Experiences() {
  const experiences = [
    {
      title: "Senior MERN Stack Developer",
      company: "Freelance & Enterprise Clients",
      location: "Remote • Global",
      duration: "Jun 2023 - Present",
      description: "Leading full-stack development for enterprise clients, architecting scalable web applications with modern technologies. Specializing in performance optimization, security implementation, and delivering high-quality solutions that exceed client expectations.",
      responsibilities: [
        "Architected and delivered 12+ enterprise-grade web applications with 99.9% uptime",
        "Implemented advanced security protocols reducing vulnerabilities by 85%",
        "Optimized application performance achieving 40% faster load times and improved SEO rankings",
        "Led cross-functional teams and mentored junior developers on best practices",
        "Integrated complex payment systems and third-party APIs for seamless user experiences"
      ],
      skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "AWS", "Docker", "Redis", "Tailwind CSS"],
      type: "Freelance",
      current: true,
      icon: "💼"
    },
    {
      title: "Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Mumbai, India",
      duration: "Jan 2023 - May 2023",
      description: "Collaborated with agile development teams to build responsive, user-centric web applications. Focused on creating seamless user experiences while maintaining code quality and following industry best practices.",
      responsibilities: [
        "Developed 8+ responsive client websites with pixel-perfect designs and cross-browser compatibility",
        "Improved overall website performance by 45% through advanced optimization techniques",
        "Collaborated with UX/UI designers to implement intuitive and accessible user interfaces",
        "Established coding standards and development workflows that increased team productivity by 30%",
        "Conducted code reviews and implemented automated testing reducing bugs by 60%"
      ],
      skills: ["React", "JavaScript", "HTML5/CSS3", "Bootstrap", "Sass", "Figma", "Git", "Jest"],
      type: "Contract",
      icon: "🚀"
    },
    {
      title: "Web Development Specialist",
      company: "Self-Directed Learning & Portfolio Development",
      location: "India",
      duration: "Aug 2022 - Dec 2022",
      description: "Intensive skill development period focused on mastering modern web technologies through structured learning, hands-on projects, and industry certifications. Built a strong foundation in full-stack development.",
      responsibilities: [
        "Completed 5+ comprehensive certification courses from top platforms (Udemy, Coursera)",
        "Built 10+ diverse portfolio projects demonstrating proficiency across different tech stacks",
        "Mastered MERN stack fundamentals and advanced concepts through practical implementation",
        "Created responsive portfolio website showcasing technical skills and project achievements",
        "Contributed to open-source projects and engaged with developer communities"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Bootstrap", "Git", "Responsive Design"],
      type: "Learning",
      icon: "📚"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="experience-section">
      <div className="experience-container">
        {/* Header */}
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="experience-title">Professional Journey</h1>
          <p className="experience-subtitle">
            Transforming ideas into powerful digital solutions • Building the future of web development
          </p>
          <div className="title-line"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot">
                <span className="timeline-icon">{exp.icon}</span>
                {exp.current && <div className="current-indicator"></div>}
              </div>

              {/* Experience Card */}
              <motion.div 
                className="experience-card"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Header */}
                <div className="card-header">
                  <div className="job-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <p className="company-name">{exp.company}</p>
                      <span className="location">{exp.location}</span>
                    </div>
                    <div className="job-meta">
                      <span className={`job-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <div className="current-badge">
                      <span>🔥 Current Position</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="job-description">{exp.description}</p>

                {/* Key Responsibilities */}
                <div className="responsibilities">
                  <h4 className="section-title">🎯 Key Achievements & Impact:</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((responsibility, i) => (
                      <motion.li 
                        key={i} 
                        className="responsibility-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="skills-section">
                  <h4 className="section-title">⚡ Technologies & Expertise:</h4>
                  <div className="skills-tags">
                    {exp.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="skill-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stats-header">
            <h3 className="stats-title">📊 Impact & Achievements</h3>
            <p className="stats-subtitle">Measurable results that drive business success</p>
          </div>
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-desc">Professional Development</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Delivered</div>
              <div className="stat-desc">Enterprise & Personal</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">15+</div>
              <div className="stat-label">Happy Clients</div>
              <div className="stat-desc">Global Partnerships</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-desc">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="experience-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="cta-title">🚀 Ready to Build Something Extraordinary?</h3>
          <p className="cta-text">
            I'm passionate about creating innovative solutions that make a real impact. 
            Let's collaborate and bring your vision to life with cutting-edge technology.
          </p>
          <div className="cta-buttons">
            <motion.a 
              href="/contact" 
              className="cta-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a 
              href="/projects" 
              className="cta-secondary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}