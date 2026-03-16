import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import './Preloader.css'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Shorter duration for page transitions

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <div className="preloader-content">
            <motion.div 
              className="loader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="logo-ring"></div>
              <span className="logo-text">S<span>B</span></span>
            </motion.div>
            
            <motion.div 
              className="loader-bar-container"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            >
              <div className="loader-bar"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="loader-status"
            >
              Crafting Excellence<span>...</span>
            </motion.p>
          </div>
          
          <div className="preloader-bg">
            <div className="bg-circle-1"></div>
            <div className="bg-circle-2"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
