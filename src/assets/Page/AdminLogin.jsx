import { useState } from 'react'
import './AdminLogin.css'

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  // Admin credentials
  const ADMIN_EMAIL = 'admin@sachin.com'
  const ADMIN_PASSWORD = 'admin123'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASSWORD) {
      alert('Login successful! Welcome Admin')
      // Redirect to admin dashboard
      console.log('Admin logged in successfully')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-header">
          <h2>Admin Login</h2>
          <p>Enter your credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@sachin.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}