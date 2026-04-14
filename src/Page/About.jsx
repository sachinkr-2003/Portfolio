import './About.css'

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <div className="title-line"></div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Introduction */}
          <div className="intro-card">
            <h2 className="intro-title">Hello! I'm Sachin Bhaskar</h2>
            <p className="intro-text">
              MERN Full Stack Developer with 1.5+ years of experience building scalable web applications 
              and REST APIs. Currently working at Digicoders Technologies Pvt. Ltd., where I develop 
              full-stack solutions, integrate third-party APIs, and implement secure JWT-based authentication.
            </p>
            <p className="intro-text">
              Proficient in React, Node.js, Express, MongoDB, and Tailwind CSS — focused on writing clean, 
              maintainable code that solves real-world problems and delivers great user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1.5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-card">
            <h3 className="skills-title">What I Do</h3>
            <div className="skills-list">
              <div className="skill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon blue">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Frontend Development — Responsive UIs with React.js and Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon green">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                <span>Backend Development — REST APIs with Node.js, Express.js and JWT auth</span>
              </div>
              <div className="skill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon purple">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <span>Database — MongoDB schema design and data management</span>
              </div>
              <div className="skill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon orange">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
                <span>Full Stack Apps — End-to-end MERN applications with real-world deployment</span>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="personal-card">
            <h3 className="personal-title">My Journey</h3>
            <div className="journey-points">
              <div className="journey-item">
                <span className="journey-year">2022</span>
                <span className="journey-desc">Started Web Development — HTML, CSS, JavaScript fundamentals</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2023</span>
                <span className="journey-desc">Mastered MERN Stack — Built full-stack apps with React, Node.js, MongoDB</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2024</span>
                <span className="journey-desc">Joined Digicoders Technologies — Developing real-world full-stack solutions professionally</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}