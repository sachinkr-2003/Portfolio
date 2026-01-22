import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Home.css'

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [ 
    'MERN Stack Developer',
    'Full Stack Developer', 
    'React Developer'
  ]

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(roleInterval)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="greeting">Hello, I'm</span>
          </div>
          
          <h1 className="hero-name">Sachin Bhaskar</h1>
          
          <div className="hero-role-container">
            <span className="role-prefix">I'm a </span>
            <span className="hero-role">{roles[currentRole]}</span>
          </div>
          
          <p className="hero-description">
            I create modern web applications with clean code and great user experiences.
          </p>
          
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}