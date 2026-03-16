import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Skills.css'

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", level: 95, description: "Component-based UI development" },
    { name: "Next.js", level: 85, description: "Full-stack React framework" },
    { name: "JavaScript", level: 90, description: "Modern ES6+ features" },
    { name: "TypeScript", level: 80, description: "Type-safe development" },
    { name: "HTML5", level: 95, description: "Semantic markup" },
    { name: "CSS3", level: 90, description: "Modern styling techniques" }
  ]

  const backendSkills = [
    { name: "Node.js", level: 85, description: "Server-side JavaScript" },
    { name: "Express.js", level: 85, description: "Web application framework" },
    { name: "MongoDB", level: 80, description: "NoSQL database" },
    { name: "PostgreSQL", level: 75, description: "Relational database" },
    { name: "REST APIs", level: 90, description: "API design & development" },
    { name: "GraphQL", level: 70, description: "Query language for APIs" }
  ]

  const toolsSkills = [
    { name: "Git & GitHub", level: 90, description: "Version control" },
    { name: "VS Code", level: 95, description: "Code editor" },
    { name: "Tailwind CSS", level: 90, description: "Utility-first CSS" },
    { name: "Figma", level: 75, description: "UI/UX design" },
    { name: "Docker", level: 70, description: "Containerization" },
    { name: "AWS", level: 65, description: "Cloud services" }
  ]

  const SkillCard = ({ skill, index, category }) => (
    <div className="skill-card" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="skill-header">
        <h3 className="skill-name">{skill.name}</h3>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <p className="skill-description">{skill.description}</p>
      <div className="skill-bar-container">
        <div 
          className={`skill-bar ${category}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="skill-level">
        {skill.level >= 90 ? 'Expert' : 
         skill.level >= 80 ? 'Advanced' : 
         skill.level >= 70 ? 'Intermediate' : 'Learning'}
      </div>
    </div>
  )

  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="skills-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" style={{marginRight: '15px', verticalAlign: 'middle'}}>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            My Skills
          </h1>
          <p className="skills-subtitle">
            Technologies and tools I use to create exceptional digital experiences
          </p>
          <div className="title-line"></div>
        </motion.div>

        {/* Skills Content */}
        <div className="skills-content">
          {/* Frontend Skills */}
          <div className="skill-category">
            <h2 className="category-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Frontend Development
            </h2>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                  category="frontend"
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category">
            <h2 className="category-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              Backend Development
            </h2>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                  category="backend"
                />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="skill-category">
            <h2 className="category-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Tools & Technologies
            </h2>
            <div className="skills-grid">
              {toolsSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                  category="tools"
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="skills-cta">
            <h3 className="cta-title">Ready to Build Something Amazing?</h3>
            <p className="cta-text">
              With expertise in modern web technologies and a passion for clean code, 
              I'm ready to bring your ideas to life.
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="cta-primary">
                View My Projects
              </Link>
              <Link to="/contact" className="cta-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}