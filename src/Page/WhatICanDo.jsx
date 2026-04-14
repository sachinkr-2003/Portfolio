import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './WhatICanDo.css'

export default function WhatICanDo() {
  const capabilities = [
    {
      title: "Full Stack Web Apps",
      description: "End-to-end MERN applications — from database design to responsive UI, production-ready and scalable.",
      icon: "🖥️",
      color: "#3b82f6"
    },
    {
      title: "REST API Development",
      description: "Clean, well-structured REST APIs with Express.js and Node.js, including proper error handling and validation.",
      icon: "🔌",
      color: "#8b5cf6"
    },
    {
      title: "JWT Authentication",
      description: "Secure user authentication and role-based access control using JWT tokens and bcrypt password hashing.",
      icon: "🔐",
      color: "#f59e0b"
    },
    {
      title: "Admin Dashboards",
      description: "Feature-rich admin panels with data tables, charts, user management, and real-time updates.",
      icon: "📊",
      color: "#10b981"
    },
    {
      title: "Responsive UI",
      description: "Mobile-first, pixel-perfect interfaces using React and Tailwind CSS that work across all devices.",
      icon: "📱",
      color: "#ef4444"
    },
    {
      title: "Performance Optimization",
      description: "Code splitting, lazy loading, and query optimization to ensure fast load times and smooth UX.",
      icon: "⚡",
      color: "#06b6d4"
    }
  ]

  return (
    <section className="whaticando-section">
      <div className="whaticando-container">
        <motion.div
          className="whaticando-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="whaticando-title">What I Can Do</h1>
          <p className="whaticando-subtitle">
            Here's what I bring to the table as a MERN Full Stack Developer
          </p>
          <div className="title-line"></div>
        </motion.div>

        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="capability-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="cap-icon" style={{ background: `${cap.color}20`, color: cap.color }}>
                {cap.icon}
              </div>
              <h3 className="cap-title" style={{ color: cap.color }}>{cap.title}</h3>
              <p className="cap-description">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="whaticando-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/contact" className="cta-btn">Let's Work Together →</Link>
        </motion.div>
      </div>
    </section>
  )
}
