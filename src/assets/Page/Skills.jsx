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
        <div className="skills-header">
          <h1 className="skills-title">My Skills</h1>
          <p className="skills-subtitle">
            Technologies and tools I use to create exceptional digital experiences
          </p>
          <div className="title-line"></div>
        </div>

        {/* Skills Content */}
        <div className="skills-content">
          {/* Frontend Skills */}
          <div className="skill-category">
            <h2 className="category-title">Frontend Development</h2>
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
            <h2 className="category-title">Backend Development</h2>
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
            <h2 className="category-title">Tools & Technologies</h2>
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