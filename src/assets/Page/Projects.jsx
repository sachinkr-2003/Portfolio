import { Link } from 'react-router-dom'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce platform with payment integration, admin dashboard, and real-time inventory management. Features include user authentication, product catalog, shopping cart, and order tracking.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
      github: "#",
      live: "#",
      featured: true,
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Task Management System",
      description: "Advanced project management tool with real-time collaboration, drag & drop functionality, team productivity analytics, and deadline tracking. Built for modern teams.",
      tech: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
      github: "#",
      live: "#",
      category: "Frontend",
      status: "In Progress"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Comprehensive weather application with interactive maps, detailed forecasts, climate data visualization, and location-based weather alerts for multiple cities.",
      tech: ["JavaScript", "Weather API", "Chart.js", "D3.js", "CSS3"],
      github: "#",
      live: "#",
      category: "Frontend",
      status: "Completed"
    },
    {
      title: "Social Media Analytics",
      description: "Professional dashboard for social media management with advanced analytics, post scheduling, engagement tracking, and performance insights across multiple platforms.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      github: "#",
      live: "#",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Real Estate Platform",
      description: "Modern property listing platform with advanced search filters, virtual tours, integrated payment system, and real-time chat between buyers and sellers.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Cloudinary"],
      github: "#",
      live: "#",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chat application with AI integration, real-time messaging, smart conversation features, and natural language processing capabilities.",
      tech: ["React", "OpenAI API", "Socket.io", "MongoDB", "Express"],
      github: "#",
      live: "#",
      category: "AI/ML",
      status: "In Progress"
    }
  ]

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Showcasing innovative solutions and cutting-edge technologies. 
            Each project represents a unique challenge solved with creativity and precision.
          </p>
          <div className="title-line"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Header */}
              <div className="project-header">
                <div className="project-badges">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <span className="category-badge">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="featured-badge">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a href={project.github} className="link-github">
                    <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a href={project.live} className="link-live">
                    <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h3 className="cta-title">Interested in Working Together?</h3>
          <p className="cta-text">
            I'm always excited to take on new challenges and create amazing digital experiences.
          </p>
          <Link to="/contact" className="cta-button">
            Let's Connect
            <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}