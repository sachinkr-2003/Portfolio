import { Link } from 'react-router-dom'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: "Digicoders ERP System",
      description: "An enterprise resource planning system for Digicoders Technologies with modules for HR, projects, clients, and business operations.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://erp.thedigicoders.com",
      featured: true,
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "PropertyCheck - Real Estate",
      description: "Modern property listing platform with advanced search filters, property details, and a responsive UI for buyers and sellers.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://property-check-seven.vercel.app/",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce app with product catalog, shopping cart, user authentication, and order management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "#",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Automobiles Billing System",
      description: "A billing and invoice management system for automobile businesses with customer records, service tracking, and payment management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://automobiles-billing.vercel.app/",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Gym Management System",
      description: "A gym management platform with member registration, attendance tracking, subscription plans, and trainer management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://gym-frontend.vercel.app/",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive HMS with patient records, doctor scheduling, appointment booking, and billing management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://hms-gamma-five.vercel.app/",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Srinath Stone Company Software",
      description: "A business management software for a stone company with inventory tracking, order management, and sales reporting.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://srinath-stone-company-software.vercel.app/",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Physiotherapist Management System",
      description: "A clinic management system for physiotherapists with patient appointments, treatment plans, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/sachinkr-2003",
      live: "https://physotherepist-frontend.vercel.app/",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Tranceform Website",
      description: "A modern business website for Tranceform with responsive design, service showcase, and contact management.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express"],
      github: "https://github.com/sachinkr-2003",
      live: "https://tranceform-website.vercel.app/",
      category: "Frontend",
      status: "Completed"
    },
    {
      title: "Online Room Booking System",
      description: "A full-stack room booking platform with real-time availability, secure reservation management, and a clean user interface. Built for seamless booking experiences.",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/sachinkr-2003",
      live: "https://online-room-booking-2u2z.vercel.app/",
      category: "Full Stack",
      status: "Completed"
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
                      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{marginRight: '4px'}}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      Featured
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