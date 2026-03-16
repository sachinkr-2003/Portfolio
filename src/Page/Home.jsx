import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import profileImg from '../assets/image.png'
import './Home.css'

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const roles = [ 
    'MERN Stack Developer',
    'Full Stack Developer', 
    'React Developer',
    'UI/UX Enthusiast'
  ]

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(roleInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero-section">
      {/* Interactive cursor */}
      <div 
        className="cursor-glow" 
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100
        }}
      />
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-container">
            <div className="profile-image">
              <div className="profile-placeholder">
                <img src={profileImg} alt="Sachin Bhaskar" className="profile-img" />
              </div>
              <div className="profile-ring"></div>
            </div>
          </div>
          
          <div className="hero-intro">
            <span className="greeting">Hello, I'm</span>
          </div>
          
          <h1 className="hero-name">Sachin Bhaskar</h1>
          
          <div className="hero-role-container">
            <span className="role-prefix">I'm a </span>
            <span className="hero-role">{roles[currentRole]}</span>
          </div>
          
          <p className="hero-description">
            Passionate MERN Stack Developer with 1.5+ years of experience crafting 
            exceptional digital solutions. I transform ideas into reality through 
            clean, efficient code and innovative problem-solving.
          </p>
          
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              <span>View My Work</span>
            </Link>
            <Link to="/contact" className="btn-secondary">
              <span>Let's Connect</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}