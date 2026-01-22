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
            <h2 className="intro-title">Hello! I'm Sachin Kumar</h2>
            <p className="intro-text">
              A passionate and dedicated MERN Stack Developer with 1.5+ years of hands-on experience in crafting 
              exceptional digital solutions. I transform ideas into reality through clean, efficient code and 
              innovative problem-solving approaches.
            </p>
            <p className="intro-text">
              My expertise lies in building scalable web applications using cutting-edge technologies like React.js, 
              Node.js, MongoDB, and Express.js. I'm committed to delivering high-quality, user-centric applications 
              that not only meet business requirements but exceed user expectations.
            </p>
            <p className="intro-text">
              I thrive on challenges and continuously evolve with the latest industry trends, ensuring that every 
              project I work on incorporates modern best practices and optimal performance standards.
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
                <div className="skill-dot blue"></div>
                <span>Frontend Development - Creating responsive, interactive user interfaces with React.js, Next.js, and modern CSS frameworks</span>
              </div>
              <div className="skill-item">
                <div className="skill-dot green"></div>
                <span>Backend Development - Building robust server-side applications with Node.js, Express.js, and RESTful APIs</span>
              </div>
              <div className="skill-item">
                <div className="skill-dot purple"></div>
                <span>Database Management - Designing efficient data structures with MongoDB, PostgreSQL, and database optimization</span>
              </div>
              <div className="skill-item">
                <div className="skill-dot orange"></div>
                <span>UI/UX Design - Crafting beautiful, user-friendly interfaces with Tailwind CSS, Material-UI, and design systems</span>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="personal-card">
            <h3 className="personal-title">My Development Journey</h3>
            <p className="personal-text">
              My journey into web development began with curiosity and evolved into a passion for creating 
              meaningful digital experiences. As a self-taught developer, I've embraced continuous learning 
              and hands-on practice to master the MERN stack ecosystem.
            </p>
            <p className="personal-text">
              I believe in writing code that tells a story - clean, maintainable, and scalable solutions 
              that stand the test of time. Every project is an opportunity to learn something new and 
              push the boundaries of what's possible.
            </p>
            <div className="journey-points">
              <div className="journey-item">
                <span className="journey-year">2022</span>
                <span className="journey-desc">Started Web Development - Learned HTML, CSS, JavaScript fundamentals</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2023</span>
                <span className="journey-desc">Mastered MERN Stack - Built full-stack applications with React, Node.js, MongoDB</span>
              </div>
              <div className="journey-item">
                <span className="journey-year">2024</span>
                <span className="journey-desc">Professional Projects - Delivered client solutions and complex web applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}